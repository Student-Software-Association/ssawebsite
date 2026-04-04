"use client";
/* Responsive Header: desktop nav + mobile/tablet hamburger with overlay */

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

  // Add blur bg only after user scrolls a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // GSAP: initial reveal + hide on scroll down / show on scroll up
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    // Initial reveal
    gsap.fromTo(
      el,
      { y: -18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    );

    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const goingDown = y > lastY.current;

      // only hide if we scrolled enough and menu isn't open
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
          "flex items-center justify-between",
          "px-8 py-6", // slightly tighter so it feels more “nav”
          "transition-colors duration-300",
          scrolled
            ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent",
        ].join(" ")}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/SSALogoWhite.webp"
            alt="SSA Logo"
            width={35}
            height={35}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-white text-[16px] font-normal hover:text-white/70 transition-colors duration-200"
              style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}

            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#"
            className="relative inline-flex items-center justify-center px-5 py-2 text-white text-sm font-medium rounded-full border border-white/80 hover:bg-white/10 transition-colors duration-200 "
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Contact Us!
          </a>
          
        </div>

        {/* Mobile hamburger */}
        <button
  type="button"
  className="lg:hidden relative w-9 h-9 inline-flex items-center justify-center"
  aria-label={menuOpen ? "Close menu" : "Open menu"}
  aria-expanded={menuOpen}
  onClick={() => setMenuOpen((open) => !open)}
>
  {/* top line */}
  <span
    className={`absolute h-[2px] bg-white transition-all duration-300 ${
      menuOpen
        ? "w-8 rotate-45 left-1/2 -translate-x-1/2"
        : "w-10 left-1/2 -translate-x-1/2 -translate-y-1.5"
    }`}
  />

  {/* bottom line */}
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