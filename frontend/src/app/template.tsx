"use client";

/**
 * template.tsx re-mounts on every route change (unlike layout.tsx which persists).
 * We use this to run a subtle page stinger: a dark overlay with the SSA logo
 * that covers the incoming page and fades out.
 *
 * On the very first load, the Preloader already covers things — so we skip
 * the stinger using a module-level flag that resets on refresh.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

// Resets to false on every full-page refresh (module re-initialises).
// Becomes true after the first navigation so subsequent SPA transitions show the stinger.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isFirstLoad = !hasNavigated;
    hasNavigated = true;

    const overlay = overlayRef.current;
    const logo = logoRef.current;
    if (!overlay || !logo) return;

    // On first load: keep overlay invisible — the Preloader already handles it
    if (isFirstLoad) {
      gsap.set(overlay, { opacity: 0 });
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      gsap.set(overlay, { opacity: 0 });
      return;
    }

    // SPA navigation stinger
    const tl = gsap.timeline();
    tl.fromTo(
      logo,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.22, ease: "power2.out" }
    ).to(
      overlay,
      { opacity: 0, duration: 0.38, ease: "power2.inOut" },
      "+=0.08"
    );

    return () => { tl.kill(); };
  }, []);

  return (
    <>
      {/* Stinger overlay — starts visible on SPA nav, hidden on first load */}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9998,
          background: "#02030a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
        }}
      >
        <div ref={logoRef}>
          <Image
            src="/images/SSALogoWhite.webp"
            width={52}
            height={52}
            alt=""
            priority
          />
        </div>
      </div>

      {children}
    </>
  );
}
