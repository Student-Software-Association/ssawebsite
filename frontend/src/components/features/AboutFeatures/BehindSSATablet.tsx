"use client";

import { useState } from "react";
import Image from "next/image";

type Person = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const PEOPLE: Person[] = [
  {
    name: "Lucas Brian",
    role: "President & Founding Member",
    bio: "Lucas started SSA with a simple goal: help students turn ideas into code. He’s passionate about building inclusive tech communities, and always down for late-night Figma deep dives and pizza-fueled planning sessions.",
    image: "/images/placeholder-team.webp",
  },
  {
    name: "Alex Chen",
    role: "VP of Engineering",
    bio: "Alex helps shape engineering standards across projects and supports members in turning rough ideas into polished builds.",
    image: "/images/placeholder-team.webp",
  },
  {
    name: "Jordan Lee",
    role: "Community Lead",
    bio: "Jordan focuses on helping students feel welcome, connected, and confident as they join the club and contribute to projects.",
    image: "/images/placeholder-team.webp",
  },
  {
    name: "Sam Taylor",
    role: "Events Coordinator",
    bio: "Sam organizes meetups, workshops, and community sessions that make SSA feel collaborative, active, and fun.",
    image: "/images/placeholder-team.webp",
  },
];

export default function BehindSSAMobileTablet() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activePerson = PEOPLE[activeIndex];

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PEOPLE.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === PEOPLE.length - 1 ? 0 : prev + 1));
  };

  return (
<>
    <section className="relative mt-70" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
      
      <div className="max-w-[900px] mx-auto px-5 md:px-12 lg:px-20">
        
        <div className="flex flex-col justify-between gap-5">
          <h2 className="text-white font-bold leading-tight max-w-[250px] text-[28px] md:text-[clamp(36px,4.5vw,56px)] " >
            The People <span style={{ fontWeight: 400 }}>Behind the</span> Projects
          </h2>

          <p className="text-white text-left text-[clamp(16px,1.5vw,20px)] max-w-[400px] leading-relaxed">
            Meet the brilliant minds and passionate individuals driving our innovative projects forward.
          </p>
        </div>

      </div>
    </section>

    <section
      className="relative py-16 md:py-20"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="mx-auto px-3 md:px-6">
        {/* Image card */}
        <div className="relative mx-auto w-full px-0 md:px-20">
          <div className="relative overflow-hidden border border-[#1b2a8a] bg-[#090b1a]">
            <div className="relative w-full aspect-[4/5] md:aspect-[3/4] h-130">
                <Image
                    src={activePerson.image}
                    alt={activePerson.name}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 90vw, 720px"
                    priority
                />
            </div>
          </div>

          {/* controls */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous person"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 text-white transition hover:bg-white/10"
            >
              <span className="text-lg">←</span>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next person"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/70 text-white transition hover:bg-white/10"
            >
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>

        {/* Text content */}
        <div className="mx-auto mt-8 px-2 text-left md:mt-10">
          <h3 className="text-white font-bold leading-none text-[24px] md:text-[clamp(34px,5vw,54px)]">
            {activePerson.name}
          </h3>

          <p
            className="mt-2 text-white font-semibold text-[16px] md:text-[clamp(15px,2vw,22px)] leading-relaxed"
            style={{ fontFamily: "'Neue Montreal Mono', monospace" }}
          >
            {activePerson.role}
          </p>

          <p
            className="mx-auto mt-6  text-white/75 text-[13px] leading-8 md:text-[18px] md:leading-9 leading-relaxed"
            style={{ fontFamily: "'Neue Montreal Mono', monospace" }}
          >
            {activePerson.bio}
          </p>
        </div>
      </div>  
    </section>
    </>
  );
}
