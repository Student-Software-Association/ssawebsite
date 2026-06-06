import PageAbout from "@/components/pages/PageAbout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "What started as student curiosity is now a culture of building, learning, and leading. Learn about the Student Software Association's story, team, and mission.",
  alternates: { canonical: "https://studentsoftware.org/about" },
  openGraph: {
    title: "About — Student Software Association",
    description:
      "What started as student curiosity is now a culture of building, learning, and leading.",
    url: "https://studentsoftware.org/about",
  },
};

export default function About() {
  return <PageAbout />;
}
