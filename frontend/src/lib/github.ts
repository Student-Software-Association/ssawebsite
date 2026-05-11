import type { GitHubRepo, GitHubOrgStats } from "@/types/studentproject";

const ORG = process.env.GITHUB_ORG ?? "";
const TOKEN = process.env.GITHUB_TOKEN;

const REVALIDATE = 3600; // re-fetch from GitHub every hour

function ghHeaders(): HeadersInit {
  return {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    ...(TOKEN ? { Authorization: `Bearer ${TOKEN}` } : {}),
  };
}

export function prettifyRepoName(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Fetches all public repos for the configured GitHub org.
 * Results are cached by Next.js for REVALIDATE seconds.
 * Excludes forked repos so the list stays focused on original work.
 */
export async function fetchAllOrgRepos(): Promise<GitHubRepo[]> {
  if (!ORG) return [];

  const repos: GitHubRepo[] = [];
  let page = 1;

  while (true) {
    let res: Response;
    try {
      res = await fetch(
        `https://api.github.com/orgs/${ORG}/repos?per_page=100&page=${page}&type=public&sort=pushed`,
        { headers: ghHeaders(), next: { revalidate: REVALIDATE } }
      );
    } catch {
      break;
    }

    if (!res.ok) break;

    const data: GitHubRepo[] = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;

    // exclude forks — keep only original org work
    repos.push(...data.filter((r) => !r.fork));
    if (data.length < 100) break;
    page++;
  }

  return repos;
}

/**
 * Computes aggregate stats from the repo list.
 * Total commits are fetched separately from the GitHub Search API.
 */
export async function fetchOrgStats(repos: GitHubRepo[]): Promise<GitHubOrgStats> {
  const total_repos = repos.length;
  const total_stars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const total_forks = repos.reduce((s, r) => s + r.forks_count, 0);

  let total_commits = 0;
  if (ORG) {
    try {
      const res = await fetch(
        `https://api.github.com/search/commits?q=org:${ORG}&per_page=1`,
        { headers: ghHeaders(), next: { revalidate: REVALIDATE } }
      );
      if (res.ok) {
        const data = await res.json();
        total_commits = typeof data.total_count === "number" ? data.total_count : 0;
      }
    } catch {
      total_commits = 0;
    }
  }

  return { total_repos, total_stars, total_forks, total_commits };
}

export const GITHUB_ORG_URL = ORG ? `https://github.com/${ORG}` : "#";
