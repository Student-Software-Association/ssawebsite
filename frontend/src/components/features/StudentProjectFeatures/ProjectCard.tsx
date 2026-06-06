import Image from "next/image";
import type { Project } from "@/types/studentproject";
import { prettifyRepoName } from "@/lib/github";

type Props = { project: Project };

function displayName(p: Project) {
  return p.extra?.display_name ?? prettifyRepoName(p.name);
}

const IMG_PLACEHOLDER = "/Icons/other-images/Portrait_placeholder.svg.png";

/** Right / top panel — screenshot or placeholder */
function ScreenshotPanel({ project }: { project: Project }) {
  const url = project.extra?.screenshot_url || IMG_PLACEHOLDER;
  return (
    <div className="relative w-full h-full min-h-[180px]">
      <Image
        src={url}
        alt={`${displayName(project)} screenshot`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 1024px) 100vw, 40vw"
      />
      {/* subtle inner border overlay */}
      <div className="absolute inset-0 rounded-r-2xl border-l border-white/[0.06]" />
    </div>
  );
}

/** Left / bottom content panel */
function ContentPanel({ project }: { project: Project }) {
  const { extra } = project;
  const name = displayName(project);
  const hasProjectSummary = extra?.problem || extra?.solution || extra?.tools_used || extra?.built_at;

  return (
    <div
      className="flex flex-col p-5 md:p-7 lg:p-8"
      style={{ fontFamily: "Neue Montreal" }}
    >
      {/* Title + description */}
      <div className="mb-5 md:mb-6">
        <h2
          className="text-white leading-tight mb-1.5 text-[20px] sm:text-[24px] md:text-[26px] lg:text-[28px]"
          style={{ fontWeight: 700 }}
        >
          {name}
        </h2>
        {project.description && (
          <p
            className="text-white/60 text-[13px] md:text-[14px] leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            {project.description}
          </p>
        )}
      </div>

      {/* Project Summary */}
      {hasProjectSummary && (
        <div className="mb-5 md:mb-6">
          <h3
            className="text-white text-[14px] md:text-[15px] mb-2.5"
            style={{ fontWeight: 700 }}
          >
            Project Summary
          </h3>
          <div
            className="text-white/65 text-[13px] md:text-[14px] space-y-1 leading-relaxed"
            style={{ fontWeight: 400 }}
          >
            {extra?.problem && (
              <p>
                <span className="text-white/45">Problem: </span>
                {extra.problem}
              </p>
            )}
            {extra?.solution && (
              <p>
                <span className="text-white/45">Solution: </span>
                {extra.solution}
              </p>
            )}
            {extra?.tools_used && (
              <p>
                <span className="text-white/45">Tools Used: </span>
                {extra.tools_used}
              </p>
            )}
            {extra?.built_at && (
              <p>
                <span className="text-white/45">Built At: </span>
                {extra.built_at}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="mb-5 md:mb-6">
        <h3
          className="text-white text-[14px] md:text-[15px] mb-2"
          style={{ fontWeight: 700 }}
        >
          Links
        </h3>
        <div className="flex flex-col gap-1">
          {(extra?.demo_url || project.homepage) && (
            <a
              href={(extra?.demo_url ?? project.homepage) as string}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 text-[13px] md:text-[14px] hover:text-white transition-colors inline-flex items-center gap-1"
              style={{ fontWeight: 400 }}
            >
              View Live Demo <span className="text-[11px]">↗</span>
            </a>
          )}
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 text-[13px] md:text-[14px] hover:text-white transition-colors inline-flex items-center gap-1"
            style={{ fontWeight: 400 }}
          >
            Check GitHub Repository <span className="text-[11px]">↗</span>
          </a>
        </div>
      </div>

      {/* Built By */}
      {extra?.team_members && (
        <div>
          <h3
            className="text-white text-[14px] md:text-[15px] mb-1.5"
            style={{ fontWeight: 700 }}
          >
            Built By
          </h3>
          <p
            className="text-white/65 text-[13px] md:text-[14px]"
            style={{ fontWeight: 400 }}
          >
            {extra.team_members}
          </p>
        </div>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: Props) {
  return (
    <article
      className="rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "rgba(7, 9, 28, 0.80)" }}
    >
      {/* ── Mobile (<md): stacked, screenshot top ── */}
      <div className="block md:hidden">
        <div className="h-[160px] relative">
          <ScreenshotPanel project={project} />
        </div>
        <ContentPanel project={project} />
      </div>

      {/* ── Tablet (md–lg): 2-col grid card (compact) ── */}
      <div className="hidden md:block lg:hidden">
        <div className="h-[180px] relative">
          <ScreenshotPanel project={project} />
        </div>
        <ContentPanel project={project} />
      </div>

      {/* ── Desktop (lg+): horizontal — content left (60%), screenshot right (40%) ── */}
      <div className="hidden lg:flex" style={{ minHeight: "320px" }}>
        <div className="flex-1 min-w-0">
          <ContentPanel project={project} />
        </div>
        <div className="relative w-[40%] flex-shrink-0">
          <ScreenshotPanel project={project} />
        </div>
      </div>
    </article>
  );
}
