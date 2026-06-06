import LegalPage from "@/components/ui/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security — Student Software Association",
};

export default function SecurityPage() {
  return (
    <LegalPage
      title="Security"
      subtitle="How we protect your data and what to do if you discover a vulnerability."
      lastUpdated="June 2025"
      sections={[
        {
          heading: "Our Security Practices",
          body: [
            "All data in transit is encrypted using TLS (HTTPS). We do not serve any content over unencrypted HTTP.",
            "User data is stored in Supabase, which enforces Row Level Security (RLS) policies ensuring users can only access data they are authorised to see.",
            "We do not store sensitive credentials, payment information, or passwords on our own servers.",
            "Access to our infrastructure and databases is restricted to authorised SSA executive members only.",
            "We use environment variables and secrets management to keep API keys and credentials out of source code.",
            "Our codebase is open-source and publicly auditable on GitHub, which allows the community to identify and report potential issues.",
          ],
        },
        {
          heading: "Responsible Disclosure",
          body: "If you discover a security vulnerability in any of our systems, we ask that you disclose it to us responsibly before making it public. Please email security details to hello@studentsoftware.org with the subject line 'Security Disclosure'. We will acknowledge your report within 48 hours and work to address the issue as quickly as possible.",
        },
        {
          heading: "What to Include in a Security Report",
          body: [
            "A clear description of the vulnerability and its potential impact.",
            "Steps to reproduce the issue.",
            "Any proof-of-concept code or screenshots (if applicable).",
            "Your contact details so we can follow up with you.",
          ],
        },
        {
          heading: "Scope",
          body: [
            "In scope: studentsoftware.org and all subdomains, our Supabase backend, our GitHub repositories under github.com/Student-Software-Association.",
            "Out of scope: Third-party services we use (Discord, Vercel, GitHub platform itself) — please report vulnerabilities in those directly to the respective vendors.",
            "Please do not perform denial-of-service attacks, spam, or social engineering against our members.",
          ],
        },
        {
          heading: "Acknowledgements",
          body: "We appreciate the security community's efforts to keep student projects and data safe. Researchers who responsibly disclose valid vulnerabilities may be acknowledged publicly (with your permission) on our GitHub or website.",
        },
        {
          heading: "No Bug Bounty Programme",
          body: "As a volunteer-run student club, we do not currently operate a formal bug bounty programme. However, we are deeply grateful for any responsible disclosures and will do our best to acknowledge contributions meaningfully.",
        },
      ]}
    />
  );
}
