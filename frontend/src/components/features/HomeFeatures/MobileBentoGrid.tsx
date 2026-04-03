"use client";

import React from "react";
import Image from "next/image";

/* gray mini icons */
export const CollaborateIcon = "/Icons/miniIcons/CollaborateIcon.svg";
export const FeedIcon = "/Icons/miniIcons/FeedbackIcon.svg";
export const MatchIcon = "/Icons/miniIcons/MatchIcon.svg";
export const MeetDevsIcon = "/Icons/miniIcons/MeetDevsIcon.svg";
export const StartIcon = "/Icons/miniIcons/StartIcon.svg";
export const TechIcon = "/Icons/miniIcons/TechIcon.svg";

interface MobileCardProps {
  title: React.ReactNode;
  description: string;
  icon: string;
  imageSrc?: string;
}

function MobileBentoCard({
  title,
  description,
  icon,
  imageSrc,
}: MobileCardProps) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/40 hover:border-white/20 transition-colors"
    >
      <div className="relative z-10 flex items-center justify-between gap-5 p-6 min-h-[160px]">
        {/* LEFT: content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start gap-3">
            <div className="shrink-0 mt-[2px]">
              <Image
                src={icon}
                alt=""
                width={20}
                height={20}
                className="opacity-80"
              />
            </div>

            <h3 className="text-white text-[18px] font-semibold leading-tight"
                      style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 500 }}
            >
              {title}
            </h3>
          </div>

          <p className="mt-4 text-white/55 text-[15px] leading-relaxed"
                            style={{ fontFamily: "'Neue Montreal Mono', sans-serif", fontWeight: 100 }}
          >
            {description}
          </p>
        </div>

        {/* RIGHT: image */}
        {imageSrc ? (
          <div className="shrink-0 w-[150px] flex items-center justify-center">
            <div className="relative w-[150px] h-[120px]">
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-contain"
                sizes="150px"
              />
            </div>
          </div>
        ) : (
          <div className="shrink-0 w-[150px] h-[120px]" />
        )}
      </div>

    </div>
  );
}

export default function MobileBentoGrid() {
  const cards: MobileCardProps[] = [
    {
      title: (
        <>
          Collaborate on{" "}
          <span className="underline underline-offset-4 decoration-white/20">
            Real Projects
          </span>
        </>
      ),
      description:
        "Level up your skills through hands-on, student-led software projects that mirror real-world work.",
      icon: CollaborateIcon,
      imageSrc: "/Icons/CollaborateRealProjects.svg",
    },
    {
      title: (
        <>
          Get Feedback That Helps You{" "}
          <span className="underline underline-offset-4 decoration-white/20">
            Grow
          </span>
        </>
      ),
      description:
        "Receive code reviews and mentorship from experienced peers. Build better with every commit.",
      icon: FeedIcon,
      imageSrc: "/Icons/GetFeedbackHelpsGrow.svg",
    },
    {
      title: (
        <>
          Match with The{" "}
          <span className="underline underline-offset-4 decoration-white/20">
            Right Team
          </span>
        </>
      ),
      description:
        "Work with peers who share your interests and complement your skill set — your squad, your way.",
      icon: MatchIcon,
      imageSrc: "/Icons/MatchRighTeam.svg",
    },
    {
      title: (
        <>
          <span className="underline underline-offset-4 decoration-white/20">
            Write & Share
          </span>{" "}
          Tech Blogs
        </>
      ),
      description:
        "Document your journey, share your insights, and build your developer voice through writing.",
      icon: TechIcon,
      imageSrc: "/Icons/WriteshareBlogs.svg",
    },
    {
      title: (
        <>
          Start in{" "}
          <span className="underline underline-offset-4 decoration-white/20">
            Under a Week
          </span>
        </>
      ),
      description:
        "Don't wait around. We'll match you with a project team in just days — no long application process.",
      icon: StartIcon,
      imageSrc: "/Icons/StartUnderWeek.svg",
    },
    {
      title: (
        <>
          Meet Developers{" "}
          <span className="underline underline-offset-4 decoration-white/20">
            Like You
          </span>
        </>
      ),
      description:
        "Whether you're a designer, dev, or explorer — you'll connect with others who get it.",
      icon: MeetDevsIcon,
      imageSrc: "/Icons/MeetDevsLikeYou.svg",
    },
  ];

  return (
    <section>
      {/* Section heading */}
      <div className="text-left px-4 mb-16">
            <h2
              className="text-white font-medium leading-tight"
              style={{
                fontFamily: "Neue Montreal",
                fontSize: "clamp(20px, 4.5vw, 50px)",
                letterSpacing: "-0.02em",
              }}
            >
              Code Together,<br /><span style={{ fontFamily: "'Neue Montreal'", fontWeight: 600,  fontSize: "clamp(44px, 4.5vw, 70px)",}}> Grow Together.</span>
            </h2>
            <p
              className="text-white text-[16px] font-normal mt-6 mr-auto"
              style={{
                fontFamily: "'Neue Montreal'",
                fontWeight: 200,
                maxWidth: "680px",
                lineHeight: "1.5",
              }}
            >
              A student-run community for designers, builders, and devs, focused on real projects, collaboration, and growth without the fluff.
            </p>
          </div>

    <div className="flex flex-col gap-5">
      {cards.map((card, i) => (
        <MobileBentoCard key={i} {...card} />
      ))}
    </div>
    </section>
  );
}