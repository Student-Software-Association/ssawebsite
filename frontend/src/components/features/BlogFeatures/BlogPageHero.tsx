"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

const HERO_BG = "/images/blogs-banners/blogs-desktop.png";

export default function BlogPageHero() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.timeline({ delay: 0.25 })
        .fromTo("[data-hero-h1]", { y: 52, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out" })
        .fromTo("[data-hero-p]", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, "-=0.5");
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="relative w-full overflow-hidden min-h-[420px] md:min-h-[480px]">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-90"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,3,10,0.55) 0%, rgba(5,5,15,0.85) 55%, #050507 100%)",
        }}
      />
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 pt-44 pb-16 md:pt-48 md:pb-20 max-w-4xl mx-auto text-center">
        <h1
          data-hero-h1
          className="text-white font-bold leading-tight tracking-[-0.02em] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 md:mb-5"
          style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
        >
          Personal Voices directly from SSA
        </h1>
        <p
          data-hero-p
          className="text-gray-300/95 max-w-2xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
          style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
        >
          A collection of student journeys, advice, and stories from within and
          outside of student learning and society.
        </p>
      </div>
    </section>
  );
}
