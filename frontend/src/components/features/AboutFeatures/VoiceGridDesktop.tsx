"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VOICES = [
  {
    name: "Maya Patel",
    role: "Member & Full-Stack Developer",
    quote:
      "SSA was the first place where my ideas were taken seriously. I shipped my first production app here — it went from a Hackathon idea to something 300 people actually use.",
  },
  {
    name: "Tyler Nguyen",
    role: "Alumni · Software Engineer at Shopify",
    quote:
      "I joined SSA not knowing React. Eighteen months later I had a job offer from a company I used to dream about. The people here don't just talk about building — they actually build.",
  },
  {
    name: "Priya Sharma",
    role: "Member & UI/UX Designer",
    quote:
      "Design isn't just about pixels — it's about solving real problems for real people. SSA gave me real projects, real feedback, and real stakes. That's something you can't get in a classroom.",
  },
  {
    name: "Marcus Liu",
    role: "Community Lead & Developer",
    quote:
      "The culture here is different. Nobody gatekeeps. Whether you're a beginner or you've been coding for years, you're treated like a peer. That's rare.",
  },
  {
    name: "Aisha Hassan",
    role: "Member & Backend Engineer",
    quote:
      "I came to SSA feeling behind everyone else. I left my first Bootstart realising I had been underestimating myself the whole time.",
  },
  {
    name: "Jordan Kowalski",
    role: "Member & Mobile Developer",
    quote:
      "Before SSA I was building stuff alone in my dorm. Now I have a team, a network, and a portfolio I'm actually proud of.",
  },
];

function VoiceCard({
  name,
  role,
  quote,
  className = "",
}: {
  name: string;
  role: string;
  quote: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 p-6 flex flex-col ${className}`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center">
          <span
            className="text-white/60 text-xs font-semibold"
            style={{ fontFamily: "Neue Montreal" }}
          >
            {name.slice(0, 1)}
          </span>
        </div>
        <div>
          <p
            className="text-white font-semibold text-sm"
            style={{ fontFamily: "Neue Montreal", fontWeight: 600 }}
          >
            {name}
          </p>
          <p
            className="text-white/50 text-xs"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            {role}
          </p>
        </div>
      </div>
      <p
        className="text-white/70 text-sm leading-relaxed flex-1"
        style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
      >
        &ldquo;{quote}&rdquo;
      </p>
    </div>
  );
}

export default function VoiceGridDesktop() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.timeline({
        scrollTrigger: { trigger: "[data-voices-header]", start: "top 88%", once: true },
      })
        .fromTo("[data-voices-h2]", { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })
        .fromTo("[data-voices-p]", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" }, "-=0.45");

      gsap.fromTo(
        "[data-voice-card]",
        { y: 48, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.65,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-voices-grid]", start: "top 88%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative mt-40 md:py-28"
      style={{ fontFamily: "Neue Montreal, sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        <div data-voices-header className="flex flex-wrap items-start justify-between gap-8 mb-12 md:mb-16">
          <h2
            data-voices-h2
            className="text-white leading-tight max-w-[480px] text-[clamp(36px,4.5vw,56px)]"
            style={{ fontWeight: 700 }}
          >
            Voices from the Inside of SSA
          </h2>
          <p
            data-voices-p
            className="text-white/70 max-w-[480px] leading-relaxed text-[clamp(16px,1.5vw,20px)]"
            style={{ fontWeight: 400 }}
          >
            Not scripted. Not polished. Just real thoughts from students who
            showed up, built something, and found their people.
          </p>
        </div>

        <div data-voices-grid className="grid grid-cols-4 gap-6 auto-rows-[200px]">
          <div data-voice-card className="col-span-2 row-span-1">
            <VoiceCard {...VOICES[0]} className="h-full" />
          </div>
          <div data-voice-card className="col-span-2 row-span-2">
            <VoiceCard {...VOICES[1]} className="h-full" />
          </div>
          <div data-voice-card className="col-span-2 row-span-2">
            <VoiceCard {...VOICES[2]} className="h-full" />
          </div>
          <div data-voice-card className="col-span-2 row-span-1">
            <VoiceCard {...VOICES[3]} className="h-full" />
          </div>
          <div data-voice-card className="col-span-2 row-span-1">
            <VoiceCard {...VOICES[4]} className="h-full" />
          </div>
          <div data-voice-card className="col-span-2 row-span-1">
            <VoiceCard {...VOICES[5]} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
