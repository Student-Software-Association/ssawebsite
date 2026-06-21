import type { Metadata } from "next";
import "./globals.css";
import MotionProvider from "@/components/providers/MotionProvider";

const BASE_URL = "https://studentsoftware.org";
const SITE_NAME = "Student Software Association";
const DEFAULT_DESCRIPTION =
  "A student-led tech club for builders, coders, and creatives. Based in Vancouver, BC. We run hackathons, workshops, and open-source projects.";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: SITE_NAME,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,

  keywords: [
    "Student Software Association",
    "SSA Vancouver",
    "student tech club",
    "coding club Vancouver",
    "hackathon Vancouver",
    "software students",
    "Langara tech club",
    "open source students",
    "student developers",
    "coding community BC",
  ],

  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: BASE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Build. Ship. Learn.`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ssatech",
    creator: "@ssatech",
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    images: ["/twitter-image"],
  },
};

// Organization + WebSite JSON-LD — feeds Google's knowledge panel
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "EducationalOrganization"],
      "@id": `${BASE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "SSA",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/images/SSALogoWhite.webp`,
      },
      email: "hello@studentsoftware.org",
      description: DEFAULT_DESCRIPTION,
      foundingDate: "2023",
      areaServed: {
        "@type": "AdministrativeArea",
        name: "Vancouver, British Columbia, Canada",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vancouver",
        addressRegion: "BC",
        addressCountry: "CA",
      },
      sameAs: [
        "https://github.com/Student-Software-Association",
        "https://discord.gg/studentsoftwareassociation",
        "https://instagram.com/studentsoftwareassociation",
        "https://linkedin.com/company/student-software-association",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/studentproject?q={search_term_string}` },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-CA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
