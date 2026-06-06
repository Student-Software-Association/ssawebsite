"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type FooterColumn = {
  title: string;
  links: { label: string; href?: string }[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Navigation",
    links: [
      { label: "Home", href: "/" },
      { label: "Student Projects", href: "/studentproject" },
      { label: "Resources", href: "/resources" },
      { label: "Events", href: "/events" },
      { label: "Blogs", href: "/blogs" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "For Students",
    links: [
      { label: "Careers", href: "/careers" },
      { label: "Student Topics", href: "/topics" },
      { label: "Discord Server", href: "https://discord.gg/studentsoftwareassociation" },
      { label: "GitHub Org", href: "https://github.com/Student-Software-Association" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "GitHub Projects", href: "https://github.com/Student-Software-Association" },
      { label: "Project Guidelines", href: "#" },
      { label: "Code of Conduct", href: "#" },
    ],
  },
  {
    title: "Data Control",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Data", href: "/cookies" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Security", href: "/security" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "hello@studentsoftware.org", href: "mailto:hello@studentsoftware.org" },
      { label: "axel@studentsoftware.org", href: "mailto:axel@studentsoftware.org" },
    ],
  },
];

const SOCIAL_LINKS = [
  { src: "/Icons/footericons/Instagram.svg", alt: "Instagram", href: "https://instagram.com/studentsoftwareassociation" },
  { src: "/Icons/footericons/Twitter(X).svg", alt: "Twitter / X", href: "https://x.com/ssatech" },
  { src: "/Icons/footericons/Discord.svg", alt: "Discord", href: "https://discord.gg/studentsoftwareassociation" },
  { src: "/Icons/footericons/LinkedIn.svg", alt: "LinkedIn", href: "https://linkedin.com/company/student-software-association" },
  { src: "/Icons/footericons/Github.svg", alt: "GitHub", href: "https://github.com/Student-Software-Association" },
];

const LINK_CLASS = "block text-white/60 text-[13px] mb-2.5 hover:text-white/95 transition-colors duration-150";
const LINK_STYLE = { fontWeight: 400 };

/** Renders <Link> for internal paths, <a> for external/mailto/anchor */
function FooterLink({ href, label }: { href: string; label: string }) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={LINK_CLASS} style={LINK_STYLE}>
        {label}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={LINK_CLASS}
      style={LINK_STYLE}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {label}
    </a>
  );
}

function SocialIcons({ gap = "gap-4" }: { gap?: string }) {
  return (
    <div className={`flex items-center flex-wrap ${gap}`}>
      {SOCIAL_LINKS.map(({ src, alt, href }) => (
        <a
          key={alt}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={alt}
          className="opacity-55 hover:opacity-100 hover:scale-110 transition-all duration-200"
        >
          <Image src={src} width={24} height={24} alt={alt} />
        </a>
      ))}
    </div>
  );
}

const MARQUEE_TEXT = "STUDENT SOFTWARE ASSOCIATION · BUILD. SHIP. LEARN. · ";

const NAV = footerColumns[0];
const FOR_STUDENTS = footerColumns[1];
const RESOURCES = footerColumns[2];
const DATA_CONTROL = footerColumns[3];
const HELP = footerColumns[4];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.fromTo(
        "[data-footer-logo]",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top bottom",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        "[data-footer-col]",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.07,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-footer-cols]",
            start: "top bottom",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );

      gsap.fromTo(
        "[data-footer-bar]",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "[data-footer-bar]",
            start: "top bottom",
            once: true,
            invalidateOnRefresh: true,
          },
        }
      );
    },
    { scope: footerRef }
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #02030a 0%, #050818 100%)",
        fontFamily: "Neue Montreal, sans-serif",
      }}
    >
      {/* ── Marquee strip ── */}
      <div className="border-t border-white/[0.07] py-3 overflow-hidden">
        <div
          className="flex whitespace-nowrap animate-ssaMarquee"
          style={{ animationDuration: "24s" }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="text-white/18 text-[11px] tracking-[0.18em] uppercase mr-10"
              style={{ fontWeight: 500 }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* ========== DESKTOP (lg+) ========== */}
      <div className="hidden lg:block px-10 pt-16 pb-8">
        <div className="flex items-start justify-between gap-16 mb-14">
          <div data-footer-logo className="flex-shrink-0 pt-1">
            <Image
              src="/images/SSALogoWhite.webp"
              alt="Student Software Association"
              width={72}
              height={72}
              className="w-[72px] h-[72px] object-contain opacity-85"
            />
          </div>

          <div data-footer-cols className="grid grid-cols-5 gap-10 flex-1 max-w-[860px] ml-auto">
            {footerColumns.map((column) => (
              <div key={column.title} data-footer-col>
                <h4
                  className="text-white/45 text-[11px] tracking-[0.15em] uppercase mb-4"
                  style={{ fontWeight: 500 }}
                >
                  {column.title}
                </h4>
                {column.links.map((link, i) => (
                  <FooterLink key={`${link.label}-${i}`} href={link.href ?? "#"} label={link.label} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div data-footer-bar className="border-t border-white/[0.07] pt-6 flex items-center justify-between">
          <span className="text-white/28 text-[12px]" style={{ fontWeight: 400 }}>
            © 2025 Student Software Association
          </span>
          <SocialIcons />
          <span className="text-white/28 text-[12px] text-right" style={{ fontWeight: 400 }}>
            Designed with ♥ by SSA · Vancouver
          </span>
        </div>
      </div>

      {/* ========== TABLET (md–lg) ========== */}
      <div className="hidden md:block lg:hidden px-10 pt-14 pb-10">
        <div className="flex items-start justify-between gap-10 mb-12">
          <div data-footer-logo className="flex-shrink-0">
            <Image
              src="/images/SSALogoWhite.webp"
              alt="SSA"
              width={56}
              height={56}
              className="opacity-80"
            />
          </div>
          <div data-footer-cols className="grid grid-cols-3 gap-8 flex-1">
            {[NAV, FOR_STUDENTS, RESOURCES].map((col) => (
              <div key={col.title} data-footer-col>
                <h4 className="text-white/45 text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontWeight: 500 }}>
                  {col.title}
                </h4>
                {col.links.map((l, i) => (
                  <FooterLink key={`${l.label}-${i}`} href={l.href ?? "#"} label={l.label} />
                ))}
              </div>
            ))}
            {[DATA_CONTROL, HELP].map((col) => (
              <div key={col.title} data-footer-col>
                <h4 className="text-white/45 text-[11px] tracking-[0.14em] uppercase mb-3" style={{ fontWeight: 500 }}>
                  {col.title}
                </h4>
                {col.links.map((l, i) => (
                  <FooterLink key={`${l.label}-${i}`} href={l.href ?? "#"} label={l.label} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <div data-footer-bar className="border-t border-white/[0.07] pt-5 flex items-center justify-between">
          <span className="text-white/28 text-[12px]">@StudentSoftwareAssociation</span>
          <SocialIcons gap="gap-3" />
          <span className="text-white/28 text-[12px]">Designed with ♥ by SSA</span>
        </div>
      </div>

      {/* ========== MOBILE (<md) ========== */}
      <div className="block md:hidden px-6 pt-12 pb-10">
        <div data-footer-logo className="mb-10 pb-8 border-b border-white/[0.07]">
          <Image
            src="/images/SSALogoWhite.webp"
            alt="SSA"
            width={48}
            height={48}
            className="opacity-80 mb-4"
          />
          <p className="text-white/40 text-[13px] leading-relaxed" style={{ fontWeight: 400 }}>
            A student-led tech club for builders, coders, and creatives.
          </p>
        </div>

        <div data-footer-cols className="grid grid-cols-2 gap-x-8 gap-y-8 mb-10">
          {[NAV, FOR_STUDENTS, RESOURCES, DATA_CONTROL].map((col) => (
            <div key={col.title} data-footer-col>
              <h4 className="text-white/45 text-[11px] tracking-[0.12em] uppercase mb-3" style={{ fontWeight: 500 }}>
                {col.title}
              </h4>
              {col.links.map((l, i) => (
                <FooterLink key={`${l.label}-${i}`} href={l.href ?? "#"} label={l.label} />
              ))}
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h4 className="text-white/45 text-[11px] tracking-[0.12em] uppercase mb-3" style={{ fontWeight: 500 }}>
            {HELP.title}
          </h4>
          {HELP.links.map((l) => (
            <FooterLink key={l.label} href={l.href ?? "#"} label={l.label} />
          ))}
        </div>

        <div data-footer-bar className="border-t border-white/[0.07] pt-6 flex items-center justify-between mb-4">
          <SocialIcons gap="gap-2.5" />
        </div>
        <div className="text-white/28 text-[12px]">© 2025 Student Software Association · Vancouver</div>
      </div>
    </footer>
  );
}
