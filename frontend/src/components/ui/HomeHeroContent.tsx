"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function HomeHeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.timeline({ delay: 0.3 })
        .fromTo("[data-home-h1]", { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 1.0, ease: "power3.out" })
        .fromTo("[data-home-pill]", { y: 30, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out" }, "-=0.55");
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 flex flex-col items-center pt-0 pb-16 sm:pt-24 sm:pb-20 md:pt-[100px] md:pb-[80px]"
    >
      <h1
        data-home-h1
        className="text-white text-center leading-tight text-[35px] sm:text-[56px] md:text-[72px] lg:text-[86px] max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[860px] tracking-[-0.02em]"
        style={{ fontFamily: "Neue Montreal", fontWeight: 600 }}
      >
        Student Software<br />Association
      </h1>

      {/* Subheading pill */}
      <div
        data-home-pill
        className="mt-6 sm:mt-7 md:mt-8 relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px]"
      >
        <div
          className="absolute inset-0"
          style={{
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(2px)",
            boxShadow: "inset 0px -4px 4px 3px rgba(0,0,0,0.25)",
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="absolute left-0 right-0 bottom-0 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <div className="absolute left-0 right-0 top-0 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        <p
          className="relative text-center text-gray-300 px-2 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]"
          style={{ fontFamily: "Neue Montreal Mono", fontWeight: 400, textShadow: "-2px 1px 5px rgba(0,0,0,1)" }}
        >
          A student-led tech club for builders, coders, and creatives.
        </p>
      </div>
    </div>
  );
}
