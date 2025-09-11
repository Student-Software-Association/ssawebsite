import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Student Software Association",
  description: "Connecting students to build, collaborate, and launch real-world software solutions and applications.",
  keywords: ["student software", "coding community", "tech projects", "software development", "student collaboration", "programming", "software engineering"],
  authors: [{ name: "SSA Team" }],
  openGraph: {
    title: "Student Software Association",
    description: "Join a community of student developers building real-world software solutions together.",
    type: "website",
    siteName: "Student Software Association",
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Software Association",
    description: "Connecting students to build, collaborate, and launch real-world software solutions.",
    creator: "@StudentSoftwareAssoc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
