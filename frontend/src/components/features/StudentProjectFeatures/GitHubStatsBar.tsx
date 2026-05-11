import type { GitHubOrgStats } from "@/types/studentproject";
import { GITHUB_ORG_URL } from "@/lib/github";

type Props = { stats: GitHubOrgStats };

function fmt(n: number): string {
  return n > 0 ? n.toLocaleString("en-US") : "—";
}

const STATS = (s: GitHubOrgStats) => [
  { value: fmt(s.total_repos), label: "total projects" },
  { value: fmt(s.total_stars), label: "starred projects" },
  { value: fmt(s.total_commits), label: "total commits" },
  { value: fmt(s.total_forks), label: "total forks" },
];

export default function GitHubStatsBar({ stats }: Props) {
  const items = STATS(stats);

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-16 pt-14 pb-2">
      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <a
          href={GITHUB_ORG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-white/75 text-[13px] md:text-[14px] mb-5 hover:text-white/95 transition-colors"
          style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
        >
          Lifetime GitHub Stats
          <span className="text-[11px]">↗</span>
        </a>

        {/* Stat boxes */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {items.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 px-5 py-4 md:px-6 md:py-5"
              style={{ background: "rgba(255,255,255,0.03)" }}
            >
              <p
                className="text-white text-[28px] sm:text-[32px] md:text-[36px] leading-none mb-1"
                style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
              >
                {value}
              </p>
              <p
                className="text-white/50 text-[12px] md:text-[13px]"
                style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
