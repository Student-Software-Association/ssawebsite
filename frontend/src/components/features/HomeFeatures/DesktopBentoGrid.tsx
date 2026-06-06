"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const CollaborateIcon = "/Icons/miniIcons/CollaborateIcon.svg";
export const FeedIcon = "/Icons/miniIcons/FeedbackIcon.svg";
export const MatchIcon = "/Icons/miniIcons/MatchIcon.svg";
export const MeetDevsIcon = "/Icons/miniIcons/MeetDevsIcon.svg";
export const StartIcon = "/Icons/miniIcons/StartIcon.svg";
export const TechIcon = "/Icons/miniIcons/TechIcon.svg";

interface BentoCardProps {
  title: string;
  description: string;
  icon: string;
  imageSrc?: string;
  imagePosition?: "corner" | "under";
  imageWidth?: number;
  imageHeight?: number;
}

function BentoCard({
  title,
  description,
  icon,
  imageSrc,
  imagePosition = "corner",
  imageWidth,
  imageHeight,
}: BentoCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl p-8 border border-[#606167] flex flex-col justify-between h-full hover:border-white/20 transition-colors duration-300"
    >
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-2">
          <div className="shrink-0 text-white/80">
            <Image
              src={icon}
              alt=""
              width={24}
              height={24}
              className="w-6 h-6 object-contain opacity-80"
            />
          </div>
          <h3
            className="text-white text-[17px] leading-tight"
            style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 500 }}
          >
            {title}
          </h3>
        </div>
        <p
          className="text-[#828282] text-[13px] leading-relaxed w-auto"
          style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 100 }}
        >
          {description}
        </p>
      </div>

      {imageSrc && imagePosition === "corner" && (
        <div className="relative pointer-events-none select-none">
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth ?? 260}
            height={imageHeight ?? 260}
            className="w-[250px] mx-auto"
            priority
          />
        </div>
      )}

      {imageSrc && imagePosition === "under" && (
        <div className="relative -top-0 pointer-events-none select-none">
          <Image
            src={imageSrc}
            alt=""
            width={imageWidth ?? 320}
            height={imageHeight ?? 240}
            className="w-auto h-auto mx-auto object-contain"
            priority
          />
        </div>
      )}
    </div>
  );
}

export default function DesktopBentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      // Section heading + sub
      gsap.timeline({
        scrollTrigger: { trigger: "[data-bento-heading]", start: "top 88%", once: true },
      })
        .fromTo("[data-bento-heading]", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
        .fromTo("[data-bento-sub]", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" }, "-=0.45")
        .fromTo("[data-bento-highlight]", { scaleX: 0 }, { scaleX: 1, duration: 0.65, ease: "power2.out" }, "-=0.2");

      // Stagger cards
      gsap.fromTo(
        "[data-bento-card]",
        { y: 52, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.09,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-bento-grid]", start: "top 85%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  const cards = [
    { title: "Collaborate on Real Projects", description: "Level up your skills through hands-on, student-led software projects that mirror real-world work.", icon: CollaborateIcon, imageSrc: "/Icons/CollaborateRealProjects.svg", imagePosition: "corner" as const },
    { title: "Match with The Right Team", description: "Work with peers who share your interests and complement your skill set — your squad, your way.", icon: MatchIcon, imageSrc: "/Icons/MatchRighTeam.svg", imagePosition: "under" as const, imageWidth: 260, imageHeight: 260 },
    { title: "Start in Under a Week", description: "Don't wait around. We'll match you with a project team in just days — no long application process.", icon: StartIcon, imageSrc: "/Icons/StartUnderWeek.svg", imagePosition: "under" as const },
    { title: "Get Feedback That Helps You Grow", description: "Document your journey, share your insights, and build your developer voice through writing.", icon: FeedIcon, imageSrc: "/Icons/GetFeedbackHelpsGrow.svg", imagePosition: "under" as const, imageWidth: 260, imageHeight: 260 },
    { title: "Meet Developers Like You", description: "Receive code reviews and mentorship from experienced peers. Build better with every commit.", icon: MeetDevsIcon, imageSrc: "/Icons/MeetDevsLikeYou.svg", imagePosition: "under" as const, imageWidth: 260, imageHeight: 260 },
    { title: "Write & Share Tech Blogs", description: "Whether you're a designer, dev, or explorer — you'll connect with others who get it.", icon: TechIcon, imageSrc: "/Icons/WriteshareBlogs.svg", imagePosition: "under" as const, imageWidth: 260, imageHeight: 260 },
  ];

  return (
    <section ref={sectionRef}>
      {/* Section heading */}
      <div className="text-center px-16 mb-16">
        <h2
          data-bento-heading
          className="text-white font-medium leading-tight"
          style={{ fontFamily: "Neue Montreal", fontSize: "clamp(44px, 4.5vw, 50px)", letterSpacing: "-0.02em" }}
        >
          Code Together,<br />
          <span
            className="relative inline-block"
            style={{ fontFamily: "'Neue Montreal'", fontWeight: 600, fontSize: "clamp(44px, 4.5vw, 70px)" }}
          >
            Grow Together.
            <span
              data-bento-highlight
              className="absolute inset-x-0 bottom-1 h-[3px] rounded-full bg-white"
              style={{ transformOrigin: "left", transform: "scaleX(0)" }}
            />
          </span>
        </h2>
        <p
          data-bento-sub
          className="text-white text-[22px] font-normal mt-6 mx-auto"
          style={{ fontFamily: "'Neue Montreal'", fontWeight: 200, maxWidth: "680px", lineHeight: "1.5" }}
        >
          A student-run community for designers, builders, and devs, focused on real projects, collaboration, and growth without the fluff.
        </p>
      </div>

      <div data-bento-grid className="grid grid-cols-4 gap-6 auto-rows-[280px]">
        <div data-bento-card className="col-span-2 row-span-1">
          <BentoCard {...cards[0]} imageWidth={cards[0].imageWidth ?? 260} imageHeight={cards[0].imageHeight ?? 260} />
        </div>
        <div data-bento-card className="col-span-1 row-span-2">
          <BentoCard {...cards[1]} imageWidth={cards[1].imageWidth ?? 260} imageHeight={cards[1].imageHeight ?? 260} />
        </div>
        <div data-bento-card className="col-span-1 row-span-1">
          <BentoCard {...cards[2]} imageWidth={cards[2].imageWidth ?? 260} imageHeight={cards[2].imageHeight ?? 260} />
        </div>
        <div data-bento-card className="col-span-2 row-span-2">
          <BentoCard {...cards[3]} imageWidth={cards[3].imageWidth ?? 260} imageHeight={cards[3].imageHeight ?? 260} />
        </div>
        <div data-bento-card className="col-span-1 row-span-2">
          <BentoCard {...cards[4]} imageWidth={cards[4].imageWidth ?? 260} imageHeight={cards[4].imageHeight ?? 260} />
        </div>
        <div data-bento-card className="col-span-1 row-span-1">
          <BentoCard {...cards[5]} imageWidth={cards[5].imageWidth ?? 260} imageHeight={cards[5].imageHeight ?? 260} />
        </div>
      </div>
    </section>
  );
}
