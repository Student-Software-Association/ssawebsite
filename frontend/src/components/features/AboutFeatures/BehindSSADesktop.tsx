"use client";

import React from "react";
import Image from "next/image";

type Person = {
  name: string;
  role: string;
  image: string;
  backTitle: string;
  bio: string;
};

const PEOPLE: Person[] = [
  {
    name: "Axel",
    role: "President of SSA",
    image: "/images/placeholder-team.webp",
    backTitle: "AXEL",
    bio: "Leading the vision of the Student Software Association.",
  },
  {
    name: "Elliot Shcmel",
    role: "VP Engineering",
    image: "/images/placeholder-team.webp",
    backTitle: "ELLIOT",
    bio: "Ensuring engineering excellence and project standards.",
  },
  {
    name: "Farnaz Abdolmaleki",
    role: "Community Lead",
    image: "/images/placeholder-team.webp",
    backTitle: "FARNAZ",
    bio: "Connecting students and building the community.",
  },
  {
    name: "Reyhanna",
    role: "Events Coordinator",
    image: "/images/placeholder-team.webp",
    backTitle: "Reyhanna",
    bio: "Creating memorable events and collaborations.",
  },
  {
    name: "Hafiz Aakif Umar",
    role: "React Developer & UI/UX Designer",
    image: "/images/placeholder-team.webp",
    backTitle: "Aakif",
    bio: "Creating memorable events and collaborations.",
  },
];

function PersonCard({ name, role, image, backTitle, bio }: Person) {
  return (
    <div
      className="w-[280px] md:w-[350px] h-[520px] flex-shrink-0 group"
      style={{ perspective: "1000px" }}
    >
      <div className="relative w-full h-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT bg-[#0b0c16]  */}
        <div className="absolute inset-0 rounded-[28px] overflow-hidden border border-white/10 [backface-visibility:hidden]">
          
          <div className="relative h-[78%]">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover"
              sizes="300px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/10" />

            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="text-white font-extrabold tracking-tight leading-none text-[64px]"
                style={{ textShadow: "0 10px 30px rgba(0,0,0,.65)" }}
              >
                {/* {backTitle} */}
              </div>
            </div>
          </div>

          <div className="h-[22%] bg-black flex flex-col justify-center px-6">
            <p className="text-white text-[26px] font-extrabold">{name}</p>
            <p className="text-white/70 text-sm mt-1">{role}</p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 rounded-[28px] border border-white/10 bg-[#0f0f29] flex flex-col items-center justify-center p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
          
          <h3 className="text-white text-2xl font-bold mb-4">{backTitle}</h3>

          <p className="text-white/70 text-sm leading-relaxed">
            {bio}
          </p>
        </div>
      </div>
    </div>
  );
}

function AutoPeopleMarquee({ people }: { people: Person[] }) {
  const loop = [...people, ...people];

  return (
    <div className="relative overflow-hidden -mx-4 px-4">
      
      {/* edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#02030a] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#02030a] to-transparent z-10" />

      <div
        className="flex gap-8 w-max animate-ssaMarquee hover:[animation-play-state:paused]"
        style={{ animationDuration: "26s" }}
      >
        {loop.map((p, idx) => (
          <PersonCard key={`${p.name}-${idx}`} {...p} />
        ))}
      </div>
    </div>
  );
}

export default function BehindSSADesktop() {
  return (
    <section className="relative mt-70 md:py-28" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-20">
        
        <div className="flex items-end justify-between gap-8 mb-12 md:mb-26">
          <h2 className="text-white font-bold text-[clamp(36px,4.5vw,56px)] leading-tight max-w-[520px]">
            The People <span style={{ fontWeight: 400 }}>Behind the</span> Projects
          </h2>

          <p className="text-white text-right text-[clamp(16px,1.5vw,20px)] max-w-[400px] leading-relaxed">
            Meet the brilliant minds and passionate individuals driving our innovative projects forward.
          </p>
        </div>

        <AutoPeopleMarquee people={PEOPLE} />

      </div>
    </section>
  );
}