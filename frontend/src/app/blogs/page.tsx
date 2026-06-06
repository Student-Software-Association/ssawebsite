import PageBlog from "@/components/pages/PageBlog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Personal voices directly from SSA — a collection of student journeys, advice, and stories from within and outside of student learning.",
  alternates: { canonical: "https://studentsoftware.org/blogs" },
  openGraph: {
    title: "Blogs — Student Software Association",
    description:
      "A collection of student journeys, advice, and stories from within and outside of student learning.",
    url: "https://studentsoftware.org/blogs",
  },
};

export default PageBlog;
