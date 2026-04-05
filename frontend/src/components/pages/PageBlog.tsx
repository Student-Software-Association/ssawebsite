import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import BlogPageHero from "@/components/features/BlogFeatures/BlogPageHero";
import BlogsGridSection from "@/components/features/BlogFeatures/BlogsGridSection";
import { listPublishedBlogs } from "@/lib/supabase/blog-queries";

export const revalidate = 60;

export default async function PageBlog() {
  const posts = await listPublishedBlogs();

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        background: "#02030a",
      }}
    >
      <Header />
      <BlogPageHero />
      <BlogsGridSection posts={posts} />
      <Footer />
    </div>
  );
}
