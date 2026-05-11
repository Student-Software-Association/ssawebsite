"use client";

import { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";

interface HeaderOverlayProps {
  onClose: () => void;
}

const navItems: { label: string; href: string }[] = [
  { label: "Student Projects", href: "/studentproject" },
  { label: "Resources", href: "#" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" }, 
];

export default function HeaderOverlay({ onClose }: HeaderOverlayProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Entrance animation
  useLayoutEffect(() => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;
    if (!backdrop || !panel) return;

    const ctx = gsap.context(() => {
      gsap.set(backdrop, { autoAlpha: 0 });
      gsap.set(panel, { y: -18, autoAlpha: 0, scale: 0.98 });

      gsap
        .timeline()
        .to(backdrop, { autoAlpha: 1, duration: 0.18, ease: "power1.out" })
        .to(
          panel,
          { y: 0, autoAlpha: 1, scale: 1, duration: 0.32, ease: "power3.out" },
          0
        );
    }, panel);

    return () => ctx.revert();
  }, []);

  // Exit animation (so it drops up smoothly)
  const handleClose = () => {
    const backdrop = backdropRef.current;
    const panel = panelRef.current;

    if (!backdrop || !panel) return onClose();

    gsap
      .timeline({
        onComplete: onClose,
      })
      .to(panel, {
        y: -14,
        autoAlpha: 0,
        scale: 0.985,
        duration: 0.22,
        ease: "power2.inOut",
      })
      .to(
        backdrop,
        { autoAlpha: 0, duration: 0.16, ease: "power1.out" },
        0.06
      );
  };

  return (
    <div
      ref={backdropRef}
      className="fixed inset-0 z-51 bg-black/40"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="absolute right-4 top-20">
        <div
          ref={panelRef}
          className="w-[320px] sm:w-[360px] rounded-br-[32px] rounded-bl-[32px] rounded-tl-[32px] bg-gradient-to-b from-[#f7f7f7] to-[#e3e3e3] text-black shadow-2xl overflow-hidden w-full"
          style={{
            maxHeight: "520px",
          }}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-3">
            <span className="text-sm tracking-wide text-black/60"
            style={{ fontFamily: "Neue Montreal Mono", fontWeight: 500 }}>
              Menu
            </span>
          </div>

          {/* Nav items */}
          <nav className="px-6 pb-5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="border-b border-black/15 last:border-b-0"
              >
                <Link
                  href={item.href}
                  onClick={handleClose}
                  className="flex items-center justify-between py-3 text-[24px] leading-none text-black hover:text-black/70 transition-colors"
                  style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
                >
                  <span>{item.label}</span>
                  <span className="text-[18px] translate-y-[1px]">↗</span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="flex items-center justify-between px-6 py-5 gap-4">
            <a
              href="#"
              className="text-sm underline underline-offset-2 text-black hover:text-black/70"
              style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
            >
              Join the Discord
            </a>

            <a
              href="#"
              className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border border-white bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors shadow-[0_6px_0_rgba(0,0,0,1)]"
              style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
            >
              Contact Us!
            </a>
          </div>

        
          <div className="h-3" />
        </div>
      </div>
    </div>
  );
}