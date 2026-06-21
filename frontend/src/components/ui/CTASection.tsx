"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  heading: string;
  subheading: string;
  linkText?: string;
  linkHref?: string;
};

export default function CTASection({
  heading,
  subheading,
  linkText = "Join the Discord",
  linkHref = "https://discord.gg/studentsoftwareassociation",
}: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true, invalidateOnRefresh: true },
      });
      tl.fromTo("[data-cta-heading]", { y: 32, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" })
        .fromTo("[data-cta-sub]", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.4")
        .fromTo("[data-cta-link]", { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" }, "-=0.35");
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="w-full text-center py-24 md:py-28 lg:py-36 px-4"
      style={{
        background: "linear-gradient(180deg, #0B0C2A 0%, #02030a 100%)",
        fontFamily: "Neue Montreal, sans-serif",
      }}
    >
      <div className="max-w-[640px] md:max-w-[760px] mx-auto">
        <h2
          data-cta-heading
          className="text-white leading-tight mb-4 md:mb-5"
          style={{ fontWeight: 700 }}
        >
          <span className="block text-[28px] sm:text-[34px] md:text-[42px] lg:text-[52px] tracking-[-0.02em]">
            {heading}
          </span>
        </h2>

        <p
          data-cta-sub
          className="text-white/60 mx-auto mb-7 md:mb-8 text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed max-w-[480px]"
          style={{ fontWeight: 400 }}
        >
          {subheading}
        </p>

        <a
          data-cta-link
          href={linkHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[#4DA3FF] text-[15px] md:text-[17px] underline underline-offset-4 hover:underline-offset-8 hover:opacity-80 transition-all duration-200"
          style={{ fontWeight: 500 }}
        >
          {linkText}
        </a>
      </div>
    </section>
  );
}
