"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Phase = {
  id: string;
  title: string;
  year: string;
  image?: string;
  caption?: string;
};

const IMG_PLACEHOLDER = "/Icons/other-images/Portrait_placeholder.svg.png";

const PHASES: Phase[] = [
  {
    id: "spark",
    title: "The Spark",
    year: "2016",
    image: IMG_PLACEHOLDER,
    caption:
      "A small group of students came together to explore programming and share ideas.",
  },
  {
    id: "public",
    title: "Going Public",
    year: "2018",
    image: IMG_PLACEHOLDER,
    caption:
      "SSA opened its doors to the wider campus, hosting its first public events.",
  },
  {
    id: "guild",
    title: "Growing the Guild",
    year: "2023",
    image: IMG_PLACEHOLDER,
    caption:
      "More builders joined the community, launching projects and workshops.",
  },
  {
    id: "next",
    title: "Next Chapter",
    year: "2026",
    image: IMG_PLACEHOLDER,
    caption:
      "The next era focuses on building real software and mentoring new developers.",
  },
];

export default function HorizontalTimelineDesktop() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const overflow = () => Math.max(0, track.scrollWidth - window.innerWidth);
      const NAV_OFFSET = 120; // px (set to your navbar height)

      gsap.to(track, {
        x: () => -overflow(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: () => `top top+=${NAV_OFFSET}`,
          end: () => `+=${overflow()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (

  <>
      <article className="flex flex-row justify-between items-end px-20 text-white mb-40">
            <div className="text-[clamp(36px,4.5vw,56px)]">
                <h1 className="text-left"
                    style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
                >Built on <span style={{fontWeight: 500}}>Late Nights </span> <br/> 
                &<span style={{fontWeight: 700}}> Big Ideas</span></h1>
            </div>
            <div className="w-100 text-right text-[clamp(16px,1.5vw,20px)]">
                <p style={{ fontFamily: "Neue Montreal", fontWeight: 400}}>From curious students to a thriving software society —{" "}
                    {"here's how SSA came to life, and where we're headed next."}</p>
            </div>
        </article>

    <section
      ref={sectionRef}
      className="relative"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      {/* This wrapper clips horizontal overflow without chopping top/bottom UI */}
      <div className="h-120 flex items-center overflow-x-clip overflow-y-visible">
        <div
          ref={trackRef}
          className="relative flex items-start gap-24 will-change-transform
                     px-16 md:px-24 lg:px-28"
        >
          {/* Left end-cap so first phase isn't flush to the viewport */}
          <div className="w-[80px] md:w-[120px] flex-shrink-0" />

          {/* Dotted string spanning the whole track */}
          <div className="pointer-events-none absolute left-0 right-0 top-[54px] h-px">
            <div
              className="h-px opacity-60"
              style={{
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.35) 1px, transparent 1.6px)",
                backgroundSize: "10px 2px",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "left center",
              }}
            />
          </div>

          {PHASES.map((phase) => (
            <div key={phase.id} className="relative flex-shrink-0 w-[560px]">
              {/* Top row */}
              <div className="relative h-[120px] overflow-visible">
                <div className="text-white text-2xl md:text-3xl font-bold tracking-tight text-center">
                  {phase.title}
                </div>

                {/* Year badge */}
                <div className="absolute right-6 top-[22px]">
                  <div className="w-14 h-14 rounded-full border border-white/30 bg-black/60 flex items-center justify-center">
                    <span className="text-white/80 text-sm font-semibold">
                      {phase.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Portrait card */}
              <div className="mx-auto w-[450px] h-[550px] rounded-[44px] border border-white/25 relative overflow-hidden">

                {phase.image && (
                  <Image
                    src={phase.image}
                    alt={phase.title}
                    fill
                    className="object-cover"
                    sizes="450px"
                  />
                )}

                {/* subtle gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* caption */}
                {phase.caption && (
                  <div className="absolute bottom-8 left-8 right-8">
                    <p className="text-white/85 text-sm leading-relaxed">
                      {phase.caption}
                    </p>
                  </div>
                )}

                {/* inner border */}
                <div className="absolute inset-0 rounded-[44px] border border-white/10" />

              </div>
            </div>
          ))}

          {/* Right end-cap so last phase isn't flush/cut */}
          <div className="w-[140px] md:w-[200px] flex-shrink-0" />
        </div>
      </div>
    </section>
    </>
  );
}