import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types/blog";

const IMG_PLACEHOLDER = "/Icons/other-images/Portrait_placeholder.svg.png";

type Props = { post: BlogPost };

export default function BlogPostCard({ post }: Props) {
  const bg =
    post.card_image_url?.trim() ||
    post.hero_image_url?.trim() ||
    IMG_PLACEHOLDER;

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group relative block overflow-hidden rounded-3xl aspect-[4/5] min-h-[280px] w-full border border-white/10 bg-[#12101c] shadow-lg shadow-black/40 transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20"
    >
      <Image
        src={bg}
        alt=""
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/25"
        aria-hidden
      />
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <p
          className="text-white text-[15px] sm:text-base md:text-lg font-medium leading-snug line-clamp-4 text-right"
          style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
        >
          {post.hero_title}
        </p>
        <div className="flex items-end gap-3">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/25 bg-white/10">
            {post.author_avatar_url ? (
              <Image
                src={post.author_avatar_url}
                alt=""
                fill
                className="object-cover"
                sizes="44px"
              />
            ) : (
              <span
                className="flex h-full w-full items-center justify-center text-xs text-white/80"
                style={{ fontFamily: "Neue Montreal Mono" }}
              >
                {(post.author_name || "?").slice(0, 1).toUpperCase()}
              </span>
            )}
          </div>
          <div className="min-w-0">
            <p
              className="text-white text-sm font-medium truncate"
              style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
            >
              By {post.author_name}
            </p>
            <p
              className="text-white/70 text-xs truncate"
              style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
            >
              {post.author_role}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
