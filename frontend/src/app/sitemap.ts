import type { MetadataRoute } from "next";
import { createSupabaseServerClient } from "@/lib/supabase/server";

const BASE = "https://studentsoftware.org";

function page(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    page("/", 1.0, "weekly"),
    page("/about", 0.9, "monthly"),
    page("/blogs", 0.85, "weekly"),
    page("/events", 0.85, "weekly"),
    page("/studentproject", 0.8, "weekly"),
    page("/privacy", 0.3, "yearly"),
    page("/terms", 0.3, "yearly"),
    page("/cookies", 0.3, "yearly"),
    page("/security", 0.3, "yearly"),
  ];

  // Add dynamic blog post URLs
  let blogPages: MetadataRoute.Sitemap = [];
  try {
    const supabase = createSupabaseServerClient();
    if (supabase) {
      const { data } = await supabase
        .from("blogs")
        .select("slug, published_at")
        .order("published_at", { ascending: false });

      blogPages = (data ?? []).map((post) => ({
        url: `${BASE}/blogs/${post.slug}`,
        lastModified: new Date(post.published_at),
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }));
    }
  } catch {
    // silently skip if Supabase is unavailable during build
  }

  return [...staticPages, ...blogPages];
}
