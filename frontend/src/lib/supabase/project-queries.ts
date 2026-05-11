import type { ProjectExtra } from "@/types/studentproject";
import { createSupabaseServerClient } from "./server";

/**
 * Fetches all rows from student_projects and returns them as a Map
 * keyed by github_repo_name for O(1) lookups when joining with GitHub data.
 */
export async function fetchAllProjectExtras(): Promise<Map<string, ProjectExtra>> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return new Map();

  const { data, error } = await supabase
    .from("student_projects")
    .select("*");

  if (error) {
    console.error("fetchAllProjectExtras", error.message);
    return new Map();
  }

  const map = new Map<string, ProjectExtra>();
  for (const row of data ?? []) {
    map.set(row.github_repo_name, row as ProjectExtra);
  }
  return map;
}
