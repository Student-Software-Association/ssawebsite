import PageStuProject from "@/components/pages/PageStuProject";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student Projects",
  description:
    "Explore the full spectrum of student-led software — from hackathon MVPs to production-grade platforms. Every project here reflects what's possible when curiosity meets code.",
  alternates: { canonical: "https://studentsoftware.org/studentproject" },
  openGraph: {
    title: "Student Projects — Student Software Association",
    description:
      "From hackathon MVPs to production-grade platforms. Every project here reflects what's possible when curiosity meets code.",
    url: "https://studentsoftware.org/studentproject",
  },
};

export const revalidate = 3600;

type Props = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

export default async function StudentProject({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const query = (params.q ?? "").trim();
  return <PageStuProject page={page} query={query} />;
}
