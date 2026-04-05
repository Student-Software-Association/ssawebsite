import type { BlogPost } from "@/types/blog";
import { createSupabaseServerClient } from "./server";

export async function listPublishedBlogs(): Promise<BlogPost[]> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("listPublishedBlogs", error.message);
    return [];
  }

  return (data ?? []) as BlogPost[];
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("getBlogBySlug", error.message);
    return null;
  }

  return data as BlogPost | null;
}

export async function getAdjacentSlugs(
  publishedAt: string
): Promise<{ prev: string | null; next: string | null }> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return { prev: null, next: null };

  const { data: older } = await supabase
    .from("blogs")
    .select("slug")
    .lt("published_at", publishedAt)
    .order("published_at", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: newer } = await supabase
    .from("blogs")
    .select("slug")
    .gt("published_at", publishedAt)
    .order("published_at", { ascending: true })
    .limit(1)
    .maybeSingle();

  return {
    prev: older?.slug ?? null,
    next: newer?.slug ?? null,
  };
}
