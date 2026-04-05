import Image from "next/image";
import Link from "next/link";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import type { BlogPost } from "@/types/blog";
import { formatPublishedDate } from "@/lib/formatPublishedDate";

type Props = {
  post: BlogPost;
  prevSlug: string | null;
  nextSlug: string | null;
};

function NavPill({
  href,
  label,
  dir,
  disabled,
}: {
  href: string;
  label: string;
  dir: "prev" | "next";
  disabled?: boolean;
}) {
  const inner = (
    <span
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-sm text-white/95 transition-colors ${
        disabled
          ? "opacity-35 pointer-events-none cursor-not-allowed"
          : "hover:bg-white/10"
      }`}
      style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
    >
      {dir === "prev" ? (
        <>
          <span aria-hidden>←</span> {label}
        </>
      ) : (
        <>
          {label} <span aria-hidden>→</span>
        </>
      )}
    </span>
  );

  if (disabled) return inner;
  return <Link href={href}>{inner}</Link>;
}

export default function PageBlogPost({ post, prevSlug, nextSlug }: Props) {
  const hero = post.hero_image_url?.trim() || null;
  const dateLine = formatPublishedDate(post.published_at);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        background: "linear-gradient(180deg, #02030a 0%, #0b0c2a 100%)",
      }}
    >
      <Header />

      <main className="px-4 sm:px-6 md:px-10 lg:px-16 pt-32 pb-16 md:pt-40 md:pb-24 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-stretch gap-8 md:gap-10 lg:gap-14 mb-10 md:mb-14">
          <div className="w-full md:w-[42%] md:max-w-[420px] shrink-0">
            <div className="relative aspect-square w-full max-w-[420px] mx-auto md:mx-0 overflow-hidden rounded-2xl border border-white/10 bg-[#12101c]">
              {hero ? (
                <Image
                  src={hero}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                />
              ) : (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#2a1f3d] to-[#0a0a12]"
                  aria-hidden
                />
              )}
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-center min-w-0">
            {dateLine ? (
              <p
                className="text-white/55 text-sm mb-3"
                style={{ fontFamily: "Neue Montreal Mono", fontWeight: 400 }}
              >
                Posted: {dateLine}
              </p>
            ) : null}
            <h1
              className="text-white text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] font-bold leading-tight tracking-[-0.02em] mb-6"
              style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
            >
              {post.hero_title}
            </h1>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
                {post.author_avatar_url ? (
                  <Image
                    src={post.author_avatar_url}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-sm text-white/80">
                    {(post.author_name || "?").slice(0, 1).toUpperCase()}
                  </span>
                )}
              </div>
              <div>
                <p
                  className="text-white font-medium"
                  style={{ fontFamily: "Neue Montreal", fontWeight: 600 }}
                >
                  By {post.author_name}
                </p>
                <p
                  className="text-white/65 text-sm"
                  style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
                >
                  {post.author_role}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center mb-10 md:mb-12">
          <NavPill
            href={prevSlug ? `/blogs/${prevSlug}` : "#"}
            label="Previous Post"
            dir="prev"
            disabled={!prevSlug}
          />
          <NavPill
            href={nextSlug ? `/blogs/${nextSlug}` : "#"}
            label="Next Post"
            dir="next"
            disabled={!nextSlug}
          />
        </div>

        <article
          className="rounded-3xl border border-white/15 bg-black/20 px-5 py-8 sm:px-8 sm:py-10 md:px-12 md:py-12"
          style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
        >
          {post.article_title ? (
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8">
              {post.article_title}
            </h2>
          ) : null}
          <div
            className="text-white/90 text-[15px] sm:text-base leading-[1.75] [&_p]:mb-5 [&_p:last-child]:mb-0 [&_a]:text-blue-300 [&_a]:underline [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
}
