"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HeaderOverlay from "./HeaderOverlay";
import { gsap } from "gsap";

const navItems: { label: string; href: string }[] = [
  { label: "Student Projects", href: "/studentproject" },
  { label: "Resources", href: "#" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const headerRef = useRef<HTMLElement | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: -18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;
      if (!menuOpen && y > 80 && goingDown) {
        gsap.to(el, { y: -110, duration: 0.35, ease: "power2.out" });
      } else {
        gsap.to(el, { y: 0, duration: 0.35, ease: "power2.out" });
      }
      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={[
          "fixed top-0 left-0 right-0 z-50",
          "flex items-center",
          "px-8 py-5",
          "transition-colors duration-300",
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo — left */}
        <Link href="/" className="flex items-center flex-shrink-0 z-10">
          <Image
            src="/images/SSALogoWhite.webp"
            alt="SSA"
            width={34}
            height={34}
            className="object-contain"
            priority
          />
        </Link>

        {/* ── Desktop nav — ABSOLUTELY centered so it's always mid-screen ── */}
        <nav
          className="hidden lg:flex items-center gap-9"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-[15px] hover:text-white/60 transition-colors duration-200"
              style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* ── Desktop CTA — pinned to far right via ml-auto ── */}
        <div className="hidden lg:flex items-center gap-5 ml-auto z-10">
          <a
            href="https://discord.gg/studentsoftwareassociation"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 text-[14px] hover:text-white transition-colors duration-200"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Join the Discord
          </a>
          <a
            href="mailto:hello@studentsoftware.org"
            className="inline-flex items-center justify-center px-5 py-2 text-white text-[14px] rounded-full border border-white/65 hover:bg-white/10 transition-colors duration-200"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Contact Us!
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden relative w-9 h-9 inline-flex items-center justify-center ml-auto"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span
            className={`absolute h-[2px] bg-white transition-all duration-300 ${
              menuOpen
                ? "w-8 rotate-45 left-1/2 -translate-x-1/2"
                : "w-10 left-1/2 -translate-x-1/2 -translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-[2px] bg-white transition-all duration-300 ${
              menuOpen
                ? "w-8 -rotate-45 left-1/2 -translate-x-1/2"
                : "w-6 right-0 translate-y-1.5"
            }`}
          />
        </button>
      </header>

      {menuOpen && <HeaderOverlay onClose={() => setMenuOpen(false)} />}
    </>
  );
}
