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
    text: "SSA was the first place where my ideas were taken seriously. I shipped my first production app here — it went from a Hackathon idea to something 300 people actually use.",
  },
  {
    name: "Tyler Nguyen",
    role: "Alumni · Software Engineer at Shopify",
    text: "I joined SSA not knowing React. Eighteen months later I had a job offer from a company I used to dream about.",
  },
  {
    name: "Priya Sharma",
    role: "Member & UI/UX Designer",
    text: "SSA gave me real projects, real feedback, and real stakes. That's something you can't get in a classroom.",
  },
  {
    name: "Marcus Liu",
    role: "Community Lead & Developer",
    text: "Nobody gatekeeps here. Whether you're a beginner or you've been coding for years, you're treated like a peer.",
  },
  {
    name: "Aisha Hassan",
    role: "Member & Backend Engineer",
    text: "I came to SSA feeling behind everyone else. I left my first Bootstart realising I had been underestimating myself the whole time.",
  },
];

type CardProps = {
  name: string;
  role: string;
  text: string;
};

function VoiceCard({ name, role, text }: CardProps) {
  return (
    <div
      className="rounded-2xl border border-white/10 p-5 text-white"
      style={{ fontFamily: "Neue Montreal, sans-serif" }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
          <span className="text-white/60 text-xs font-semibold">{name.slice(0, 1)}</span>
        </div>
        <div>
          <p className="font-medium text-sm" style={{ fontWeight: 600 }}>{name}</p>
          <p className="text-xs text-white/60" style={{ fontWeight: 400 }}>{role}</p>
        </div>
      </div>
      <p className="text-sm text-white/80 leading-relaxed" style={{ fontWeight: 400 }}>
        &ldquo;{text}&rdquo;
      </p>
    </div>
  );
}

export default function VoiceGridMobile() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.timeline({
        scrollTrigger: { trigger: "[data-voices-header]", start: "top 88%", once: true },
      })
        .fromTo("[data-voices-h2]", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" })
        .fromTo("[data-voices-p]", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: "power2.out" }, "-=0.35");

      gsap.fromTo(
        "[data-voice-card]",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: { trigger: "[data-voices-list]", start: "top 88%", once: true },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <div ref={sectionRef}>
      <section className="relative mt-20" style={{ fontFamily: "Neue Montreal, sans-serif" }}>
        <div className="max-w-[900px] mx-auto px-5 mb-10">
          <div data-voices-header className="flex flex-col gap-4">
            <h2
              data-voices-h2
              className="text-white font-normal leading-tight max-w-[260px] text-[28px]"
              style={{ fontWeight: 400 }}
            >
              Voices from the <br />
              <span style={{ fontWeight: 700 }}>Inside of SSA</span>
            </h2>
            <p
              data-voices-p
              className="text-white/70 text-left text-[15px] max-w-[340px] leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              Not scripted. Not polished. Real thoughts from students who showed
              up, built something, and found their people.
            </p>
          </div>
        </div>
      </section>

      <div data-voices-list className="flex flex-col gap-4 px-4 pb-16">
        {VOICES.map((v, i) => (
          <div key={i} data-voice-card>
            <VoiceCard {...v} />
          </div>
        ))}
      </div>
    </div>
  );
}
