import PageEvent from "@/components/pages/PageEvent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Where builders meet. Browse upcoming SSA events — hackathons, workshops, community nights, and industry showcases in Vancouver.",
  alternates: { canonical: "https://studentsoftware.org/events" },
  openGraph: {
    title: "Events — Student Software Association",
    description:
      "Where builders meet. Hackathons, workshops, community nights, and industry showcases.",
    url: "https://studentsoftware.org/events",
  },
};

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Events({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  return <PageEvent page={page} />;
}
