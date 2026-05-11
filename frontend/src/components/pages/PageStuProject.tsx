import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import StudentProjectsHero from "@/components/features/StudentProjectFeatures/StudentProjectsHero";
import GitHubStatsBar from "@/components/features/StudentProjectFeatures/GitHubStatsBar";
import ProjectFilter from "@/components/features/StudentProjectFeatures/ProjectFilter";
import ProjectsListSection, {
  PROJECTS_PER_PAGE,
} from "@/components/features/StudentProjectFeatures/ProjectsListSection";
import ProjectsCTASection from "@/components/features/StudentProjectFeatures/ProjectsCTASection";
import { fetchAllOrgRepos, fetchOrgStats } from "@/lib/github";
import { fetchAllProjectExtras } from "@/lib/supabase/project-queries";
import type { Project } from "@/types/studentproject";

type Props = {
  page: number;
  query: string;
};

export default async function PageStuProject({ page, query }: Props) {
  // Fetch in parallel — GitHub data is cached for 1h by Next.js fetch
  const [repos, extras] = await Promise.all([
    fetchAllOrgRepos(),
    fetchAllProjectExtras(),
  ]);

  // Compute stats from repo list (+ commit count from search API inside fetchOrgStats)
  const stats = await fetchOrgStats(repos);

  // Merge GitHub repos with Supabase supplementary data
  const allProjects: Project[] = repos.map((repo) => ({
    ...repo,
    extra: extras.get(repo.name) ?? null,
  }));

  // Server-side keyword filtering (name + description + tools_used from extras)
  const q = query.toLowerCase();
  const filtered = q
    ? allProjects.filter((p) => {
        const haystack = [
          p.name,
          p.description ?? "",
          p.extra?.display_name ?? "",
          p.extra?.tools_used ?? "",
        ]
          .join(" ")
          .toLowerCase();
        return haystack.includes(q);
      })
    : allProjects;

  // Paginate
  const total = filtered.length;
  const start = (page - 1) * PROJECTS_PER_PAGE;
  const projects = filtered.slice(start, start + PROJECTS_PER_PAGE);

  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Neue Montreal', sans-serif",
        background: "#02030a",
      }}
    >
      <Header />
      <StudentProjectsHero />

      {/* Stats + Filter sit in the gradient section, above the cards */}
      <div
        style={{
          background: "linear-gradient(180deg, #050507 0%, #050507 100%)",
        }}
      >
        <GitHubStatsBar stats={stats} />
        <ProjectFilter initialQuery={query} />
      </div>

      <ProjectsListSection
        projects={projects}
        total={total}
        page={page}
        query={query}
      />
      <ProjectsCTASection />
      <Footer />
    </div>
  );
}
