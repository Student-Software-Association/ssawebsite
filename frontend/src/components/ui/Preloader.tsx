"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

const LOGO_SIZE = 120;

export default function Preloader() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Always show on fresh page load — no sessionStorage gate.
    // (SPA navigations don't remount this component, so no double-show.)

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setHidden(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => setHidden(true),
    });

    tl.to({}, { duration: 0.45 }) // hold the full logo
      .to(leftRef.current, { x: "-55vw", duration: 0.65, ease: "power2.inOut" })
      .to(rightRef.current, { x: "55vw", duration: 0.65, ease: "power2.inOut" }, "<")
      .to(textRef.current, { x: "-55vw", duration: 0.65, ease: "power2.inOut" }, "<")
      .to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power1.out" }, "-=0.15");

    return () => { tl.kill(); };
  }, []);

  if (hidden) return null;

  const half = LOGO_SIZE / 2;

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#02030a",
        pointerEvents: "none",
        gap: 20,
      }}
    >
      {/* Both halves sit on top of each other via clip-path */}
      <div style={{ position: "relative", width: LOGO_SIZE, height: LOGO_SIZE }}>
        <div
          ref={leftRef}
          style={{ position: "absolute", inset: 0, clipPath: "inset(0 50% 0 0)" }}
        >
          <Image src="/images/SSALogoWhite.webp" alt="" width={LOGO_SIZE} height={LOGO_SIZE} priority />
        </div>
        <div
          ref={rightRef}
          style={{ position: "absolute", inset: 0, clipPath: "inset(0 0 0 50%)" }}
        >
          <Image src="/images/SSALogoWhite.webp" alt="" width={LOGO_SIZE} height={LOGO_SIZE} priority />
        </div>
      </div>

      <p
        ref={textRef}
        style={{
          fontFamily: "Neue Montreal, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          letterSpacing: "0.2em",
          color: "rgba(255,255,255,0.45)",
          textTransform: "uppercase",
          margin: 0,
        }}
      >
        Student Software Association
      </p>
    </div>
  );
}
