import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import Link from "next/link";

type Section = {
  heading: string;
  body: string | string[];
};

type Props = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
};

export default function LegalPage({ title, subtitle, lastUpdated, sections }: Props) {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#02030a", fontFamily: "Neue Montreal, sans-serif" }}
    >
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-16 max-w-3xl mx-auto">
        <p
          className="text-white/40 text-[12px] tracking-[0.18em] uppercase mb-4"
          style={{ fontWeight: 500 }}
        >
          Legal · SSA
        </p>
        <h1
          className="text-white text-[36px] sm:text-[44px] md:text-[52px] leading-tight mb-4"
          style={{ fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          {title}
        </h1>
        <p
          className="text-white/55 text-[16px] leading-relaxed mb-3"
          style={{ fontWeight: 400 }}
        >
          {subtitle}
        </p>
        <p className="text-white/30 text-[13px]" style={{ fontWeight: 400 }}>
          Last updated: {lastUpdated}
        </p>
      </section>

      <div className="border-t border-white/8 max-w-3xl mx-auto" />

      {/* Content */}
      <article className="px-6 md:px-12 lg:px-16 max-w-3xl mx-auto py-14 space-y-12">
        {sections.map((s, i) => (
          <section key={i}>
            <h2
              className="text-white text-[20px] md:text-[22px] mb-4"
              style={{ fontWeight: 600 }}
            >
              {s.heading}
            </h2>
            {Array.isArray(s.body) ? (
              <ul className="space-y-2">
                {s.body.map((item, j) => (
                  <li key={j} className="flex gap-3 text-white/65 text-[15px] leading-relaxed" style={{ fontWeight: 400 }}>
                    <span className="text-white/25 mt-0.5">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white/65 text-[15px] leading-relaxed" style={{ fontWeight: 400 }}>
                {s.body}
              </p>
            )}
          </section>
        ))}

        <section className="pt-6 border-t border-white/8">
          <p className="text-white/40 text-[14px] leading-relaxed" style={{ fontWeight: 400 }}>
            Questions about this policy? Email us at{" "}
            <a href="mailto:hello@studentsoftware.org" className="text-[#4DA3FF] hover:opacity-80 transition-opacity">
              hello@studentsoftware.org
            </a>
            {" "}or visit our{" "}
            <Link href="/about" className="text-[#4DA3FF] hover:opacity-80 transition-opacity">
              About page
            </Link>.
          </p>
        </section>
      </article>

      <Footer />
    </div>
  );
}
