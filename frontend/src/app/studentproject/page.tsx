import PageStuProject from "@/components/pages/PageStuProject";

export const revalidate = 3600; // re-render at most once per hour (GitHub data cadence)

type Props = {
  searchParams: Promise<{ page?: string; q?: string }>;
};

export default async function StudentProject({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  const query = (params.q ?? "").trim();
  return <PageStuProject page={page} query={query} />;
}
