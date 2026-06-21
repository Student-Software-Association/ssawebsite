"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function AboutHeroContent() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.timeline({ delay: 0.3 })
        .fromTo("[data-about-h1]", { y: 52, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
        .fromTo("[data-about-p]", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.5");
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative z-10 px-3 md:px-12 lg:px-16 pt-52 pb-20 sm:max-w-[450px] md:max-w-[700px] lg:max-w-[760px] tracking-[-0.02em] mx-auto"
    >
      <h1
        data-about-h1
        className="text-white font-bold mx-auto text-center leading-tight text-[35px] sm:text-[40px] md:text-[52px] lg:text-[60px]"
        style={{ fontFamily: "Neue Montreal" }}
      >
        About the Student Software Association
      </h1>
      <p
        data-about-p
        className="relative text-center text-gray-300 px-2 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]"
        style={{ fontFamily: "Neue Montreal Mono", fontWeight: 300, letterSpacing: "-0.03em" }}
      >
        What started as student curiosity is now a culture of building,
        learning, and leading.
      </p>
    </div>
  );
}
