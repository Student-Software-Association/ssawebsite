import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageBlogPost from "@/components/pages/PageBlogPost";
import { getAdjacentSlugs, getBlogBySlug } from "@/lib/supabase/blog-queries";

export const revalidate = 60;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) {
    return { title: "Blog post | SSA" };
  }
  return {
    title: `${post.hero_title} | SSA Blogs`,
    description: post.article_title ?? post.hero_title,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post) notFound();

  const { prev, next } = await getAdjacentSlugs(post.published_at);

  return <PageBlogPost post={post} prevSlug={prev} nextSlug={next} />;
}
