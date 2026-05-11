import Link from "next/link";
import type { BlogPost } from "@/types/blog";
import BlogPostCard from "./BlogPostCard";

type Props = { posts: BlogPost[] };

export default function BlogsGridSection({ posts }: Props) {
  return (
    <section
      id="blog-grid"
      className="relative px-4 sm:px-6 md:px-10 lg:px-16 pb-16 md:pb-24"
      style={{
        background: "linear-gradient(180deg, #050507 0%, #0B0C2A 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14">
          <h2
            className="text-white leading-tight mb-3 md:mb-4 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Uncompiled <span style={{ fontWeight: 700 }}>Thoughts</span>
          </h2>
          <p
            className="text-white/70 max-w-2xl text-[15px] md:text-[16px] leading-relaxed"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Detailed knowledge waiting to be read — learn more about what we do
            and more.
          </p>
        </div>

        {posts.length === 0 ? (
          <div
            className="rounded-3xl border border-white/15 bg-white/[0.03] px-6 py-14 text-center text-white/75"
            style={{ fontFamily: "Neue Montreal" }}
          >
            <p className="text-lg mb-2">No posts yet</p>
            <p className="text-sm text-white/55 max-w-md mx-auto">
              Connect Supabase (<code className="text-white/90">NEXT_PUBLIC_SUPABASE_URL</code>{" "}
              and <code className="text-white/90">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in{" "}
              <code className="text-white/90">.env.local</code>) and add rows to the{" "}
              <code className="text-white/90">blogs</code> table to populate this grid.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.id} post={post} />
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 md:mt-16">
          <Link
            href="#blog-grid"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-2.5 text-sm text-white/95 hover:bg-white/10 transition-colors"
            style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
          >
            View more
          </Link>
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-2.5 text-sm text-white/95 hover:bg-white/10 transition-colors"
            style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
          >
            All posts
          </Link>
        </div>
      </div>
    </section>
  );
}
