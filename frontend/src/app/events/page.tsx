import PageEvent from "@/components/pages/PageEvent";

export const revalidate = 60;

type Props = {
  searchParams: Promise<{ page?: string }>;
};

export default async function Events({ searchParams }: Props) {
  const params = await searchParams;
  const page = Math.max(1, parseInt(params.page ?? "1", 10) || 1);
  return <PageEvent page={page} />;
}
