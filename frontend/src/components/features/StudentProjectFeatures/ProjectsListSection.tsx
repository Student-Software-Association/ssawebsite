import Link from "next/link";
import type { Project } from "@/types/studentproject";
import ProjectCard from "./ProjectCard";

export const PROJECTS_PER_PAGE = 9;

type Props = {
  projects: Project[];
  total: number;
  page: number;
  query: string;
};

function buildHref(page: number, query: string) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  params.set("page", String(page));
  return `/studentproject?${params.toString()}`;
}

export default function ProjectsListSection({ projects, total, page, query }: Props) {
  const totalPages = Math.max(1, Math.ceil(total / PROJECTS_PER_PAGE));
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  return (
    <section
      className="relative px-4 sm:px-6 md:px-10 lg:px-16 pt-10 pb-24 md:pb-32"
      style={{
        background: "linear-gradient(180deg, #050507 0%, #0B0C2A 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* ── "Built by Students" intro ── */}
        <div className="mb-10 md:mb-14">
          <h2
            className="text-white leading-tight mb-3 text-[28px] sm:text-[34px] md:text-[42px]"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Built by Students,
            <br />
            <span style={{ fontWeight: 700 }}>Backed by Purpose.</span>
          </h2>
          <p
            className="text-white/65 max-w-2xl text-[14px] md:text-[15px] leading-relaxed"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Explore the full spectrum of student-led software — from hackathon
            MVPs to production-grade platforms. Every project here reflects
            what&apos;s possible when curiosity meets code.
          </p>
        </div>

        {/* ── Cards ── */}
        {projects.length === 0 ? (
          <div
            className="rounded-3xl border border-white/15 bg-white/[0.03] px-6 py-14 text-center text-white/75"
            style={{ fontFamily: "Neue Montreal" }}
          >
            {query ? (
              <>
                <p className="text-lg mb-2">No projects match &ldquo;{query}&rdquo;</p>
                <p className="text-sm text-white/55">
                  Try a different keyword or{" "}
                  <Link href="/studentproject" className="underline hover:text-white/90">
                    clear the filter
                  </Link>
                  .
                </p>
              </>
            ) : (
              <>
                <p className="text-lg mb-2">No projects yet</p>
                <p className="text-sm text-white/55 max-w-md mx-auto">
                  Add <code className="text-white/90">GITHUB_ORG</code> to{" "}
                  <code className="text-white/90">.env.local</code> to pull
                  repos from your GitHub organisation automatically.
                </p>
              </>
            )}
          </div>
        ) : (
          <>
            {/* Desktop: single-column list */}
            <div className="hidden lg:flex flex-col gap-5 md:gap-6">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {/* Tablet: 2-col grid */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>

            {/* Mobile: 1-col list */}
            <div className="flex md:hidden flex-col gap-4">
              {projects.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </>
        )}

        {/* ── Pagination ── */}
        {totalPages > 1 && (
          <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-4">
            {hasPrev ? (
              <Link
                href={buildHref(page - 1, query)}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                ← Previous Set
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/25 cursor-not-allowed"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                ← Previous Set
              </span>
            )}

            {hasNext ? (
              <Link
                href={buildHref(page + 1, query)}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-6 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                Next Set →
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-2.5 text-sm text-white/25 cursor-not-allowed"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                Next Set →
              </span>
            )}

            <span
              className="text-white/35 text-sm ml-auto"
              style={{ fontFamily: "Neue Montreal" }}
            >
              {page}/{totalPages}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
