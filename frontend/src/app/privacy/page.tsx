import LegalPage from "@/components/ui/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Student Software Association",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="We believe in transparency. Here's exactly what data we collect, why, and how we protect it."
      lastUpdated="June 2025"
      sections={[
        {
          heading: "1. Who We Are",
          body: "The Student Software Association (SSA) is a student-led technology club based in Vancouver, BC. We operate this website at studentsoftware.org to share information about our club, events, and student projects. References to 'SSA', 'we', 'us', or 'our' in this policy refer to the Student Software Association.",
        },
        {
          heading: "2. What Information We Collect",
          body: [
            "Contact information you voluntarily provide (name, email address) when you reach out to us.",
            "Discord username and profile information when you join our server.",
            "GitHub profile information when you contribute to or are listed in our student projects.",
            "Standard server logs including IP addresses, browser type, and pages visited — retained for up to 30 days.",
            "Anonymous analytics data (page views, traffic sources) via privacy-respecting tools.",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          body: [
            "To respond to enquiries and support requests sent via email.",
            "To notify you of upcoming events, workshops, and club news (only if you opt in).",
            "To maintain and improve the functionality of this website.",
            "To display publicly contributed work on our Student Projects page (with your consent).",
            "We never sell, rent, or trade your personal information to third parties.",
          ],
        },
        {
          heading: "4. Third-Party Services",
          body: "We use the following third-party services which have their own privacy policies: Supabase (database and file storage), Vercel (hosting and deployment), Discord (community platform), GitHub (code repositories and project hosting). We encourage you to review their respective policies.",
        },
        {
          heading: "5. Cookies",
          body: "We use minimal cookies necessary for site functionality and session management. We do not use advertising or tracking cookies. You can review our full Cookie Policy for details.",
        },
        {
          heading: "6. Data Retention",
          body: "We retain contact information only as long as necessary to fulfil the purpose for which it was collected or as required by applicable law. You may request deletion of your data at any time by emailing hello@studentsoftware.org.",
        },
        {
          heading: "7. Your Rights",
          body: [
            "Access: You may request a copy of the personal information we hold about you.",
            "Correction: You may ask us to correct inaccurate or incomplete information.",
            "Deletion: You may request that we delete your personal information.",
            "Objection: You may object to certain types of processing.",
            "To exercise any of these rights, email hello@studentsoftware.org.",
          ],
        },
        {
          heading: "8. Children's Privacy",
          body: "Our services are intended for students aged 14 and older. We do not knowingly collect personal information from children under 14. If you believe we have inadvertently collected such information, please contact us immediately.",
        },
        {
          heading: "9. Changes to This Policy",
          body: "We may update this Privacy Policy periodically. When we do, we will revise the 'Last updated' date above. Continued use of our website after changes constitutes acceptance of the updated policy.",
        },
      ]}
    />
  );
}
