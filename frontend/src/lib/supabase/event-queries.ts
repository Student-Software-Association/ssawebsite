import type { Event } from "@/types/event";
import { createSupabaseServerClient } from "./server";

export const EVENTS_PER_PAGE = 4;

export async function listPublishedEvents(page = 1): Promise<{
  events: Event[];
  total: number;
}> {
  const supabase = createSupabaseServerClient();
  if (!supabase) return { events: [], total: 0 };

  const from = (page - 1) * EVENTS_PER_PAGE;
  const to = from + EVENTS_PER_PAGE - 1;

  const { data, error, count } = await supabase
    .from("events")
    .select("*", { count: "exact" })
    .eq("is_published", true)
    .order("event_date", { ascending: true })
    .range(from, to);

  if (error) {
    console.error("listPublishedEvents", error.message);
    return { events: [], total: 0 };
  }

  return { events: (data ?? []) as Event[], total: count ?? 0 };
}
