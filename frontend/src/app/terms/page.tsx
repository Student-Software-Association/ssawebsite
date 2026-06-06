import LegalPage from "@/components/ui/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions — Student Software Association",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="By using this website and participating in SSA activities, you agree to these terms. Please read them carefully."
      lastUpdated="June 2025"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          body: "By accessing or using studentsoftware.org or participating in any SSA activities, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not use our services.",
        },
        {
          heading: "2. About the SSA",
          body: "The Student Software Association is a volunteer-run student club. We provide educational resources, community events, and collaborative project opportunities. Participation is voluntary and primarily open to students enrolled at post-secondary institutions in the Greater Vancouver area.",
        },
        {
          heading: "3. Acceptable Use",
          body: [
            "You must use this website for lawful purposes only.",
            "You may not attempt to gain unauthorised access to any part of our systems.",
            "You may not use our platforms to harass, bully, or harm other members.",
            "You may not post or distribute content that is defamatory, obscene, or infringes third-party rights.",
            "You may not use automated tools to scrape, crawl, or index our content without written permission.",
          ],
        },
        {
          heading: "4. Intellectual Property",
          body: "All original content on this website — including text, graphics, logos, and design — is the property of the Student Software Association or its contributors. Student project content remains the intellectual property of the respective creators. The SSA name, logo, and branding may not be used without written permission.",
        },
        {
          heading: "5. Student Projects",
          body: "Projects listed on our Student Projects page are submitted voluntarily by members. By submitting a project, you confirm you have the right to share it and grant SSA a non-exclusive licence to display it on our platforms. You retain full ownership of your work.",
        },
        {
          heading: "6. Events and Activities",
          body: "SSA events are subject to separate registration terms and codes of conduct. Attendance at events implies agreement to conduct yourself professionally and respectfully. SSA reserves the right to remove any participant who violates our community standards.",
        },
        {
          heading: "7. Disclaimer of Warranties",
          body: "This website and all SSA services are provided 'as is' without warranties of any kind, express or implied. We do not guarantee that the site will be error-free, uninterrupted, or free of viruses. Information on this site is provided for general informational purposes only and should not be relied upon as professional advice.",
        },
        {
          heading: "8. Limitation of Liability",
          body: "To the fullest extent permitted by law, SSA and its executive team shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or participation in club activities.",
        },
        {
          heading: "9. Links to Third-Party Sites",
          body: "Our website may contain links to external websites. We are not responsible for the content, privacy practices, or availability of those sites. Links do not constitute endorsement.",
        },
        {
          heading: "10. Governing Law",
          body: "These Terms are governed by and construed in accordance with the laws of British Columbia, Canada, without regard to conflict of law principles.",
        },
        {
          heading: "11. Changes to These Terms",
          body: "We reserve the right to update these Terms at any time. The date at the top of this page reflects the most recent revision. Continued use of our services after changes constitutes acceptance.",
        },
      ]}
    />
  );
}
