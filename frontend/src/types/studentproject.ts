export type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  pushed_at: string;
  fork: boolean;
};

export type ProjectExtra = {
  github_repo_name: string;
  display_name: string | null;
  problem: string | null;
  solution: string | null;
  tools_used: string | null;
  built_at: string | null;
  demo_url: string | null;
  team_members: string | null;
  screenshot_url: string | null;
};

export type Project = GitHubRepo & {
  extra: ProjectExtra | null;
};

export type GitHubOrgStats = {
  total_repos: number;
  total_stars: number;
  total_forks: number;
  total_commits: number;
};
