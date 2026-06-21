import LegalPage from "@/components/ui/LegalPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — Student Software Association",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="We keep cookie usage to a minimum. Here's what we use and why."
      lastUpdated="June 2025"
      sections={[
        {
          heading: "1. What Are Cookies?",
          body: "Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently and to provide information to site owners.",
        },
        {
          heading: "2. How We Use Cookies",
          body: "We use a small number of essential cookies required for the website to function. We do not use advertising cookies, behavioural tracking cookies, or third-party marketing cookies.",
        },
        {
          heading: "3. Cookies We Use",
          body: [
            "Session cookies — temporary cookies that expire when you close your browser. Used to maintain your session state while navigating the site.",
            "Preference cookies — store your consent preferences and UI settings (e.g., whether you've dismissed a notice).",
            "Analytics cookies (anonymous) — if enabled, these collect aggregate, anonymised data about how visitors use the site (page views, referral sources). No personally identifiable information is collected.",
          ],
        },
        {
          heading: "4. Third-Party Cookies",
          body: "Some third-party services embedded on our site (such as Discord widgets or GitHub content) may set their own cookies subject to their own policies. We do not control these cookies. Please refer to the relevant third-party privacy policies for more information.",
        },
        {
          heading: "5. Managing Cookies",
          body: "You can control and delete cookies through your browser settings. Most browsers allow you to refuse new cookies, delete existing cookies, and set preferences on a site-by-site basis. Please note that disabling certain cookies may affect the functionality of this website.",
        },
        {
          heading: "6. Changes to This Policy",
          body: "We may update this Cookie Policy from time to time. The 'Last updated' date at the top of this page reflects when it was last revised.",
        },
      ]}
    />
  );
}
