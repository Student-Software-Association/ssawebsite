import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Student Software Association",
  description: "Connecting students to build, collaborate, and launch real-world software solutions and applications.",
  keywords: ["student software", "coding community", "tech projects", "software development", "student collaboration", "programming", "software engineering"],
  authors: [{ name: "SSA Team" }],
  metadataBase: new URL('https://studentsoftware.org'), // Canonical base URL
  alternates: {
    canonical: 'https://studentsoftware.org',
  },
  openGraph: {
    title: "Student Software Association",
    description: "Join a community of student developers building real-world software solutions together.",
    type: "website",
    siteName: "Student Software Association",
    url: 'https://studentsoftware.org',
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
