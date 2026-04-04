"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Step = {
  title: string;
  subtitle: string;
  highlight: string;
};

const STEPS: Step[] = [
  {
    title: "Discover The\nSoftware Society",
    subtitle: "Built by students. For students. Powered by curiosity.",
    highlight:
      "Browse what our members are building: real-world apps, bots, and creative experiments from students just like you.",
  },
  {
    title: "Join the community",
    subtitle: "Workshops, nights, and collabs.",
    highlight:
      "Join coding workshops, community nights, and meet people who build and ship. Connect without cringe.",
  },
  {
    title: "Build something real",
    subtitle: "Pick a track. Ship work.",
    highlight:
      "Whether you're a beginner or a builder, there’s a place for you in our Discord. Find a project, or launch your first meetup.",
  },
];

export default function DiscoverCanvasSnap() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const leftRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const left = leftRef.current;
    const card = cardRef.current;
    const number = numberRef.current;
    if (!section || !left || !card || !number) return;

    const ctx = gsap.context(() => {
      const leftSlides = Array.from(
        left.querySelectorAll<HTMLElement>("[data-left-slide]")
      );
      const cards = Array.from(
        card.querySelectorAll<HTMLElement>("[data-card]")
      );

      const count = STEPS.length;
      const snapStep = count > 1 ? 1 / (count - 1) : 1;

      gsap.set(leftSlides, { autoAlpha: 0 });
      gsap.set(cards, { autoAlpha: 0 });
      gsap.set(leftSlides[0], { autoAlpha: 1 });
      gsap.set(cards[0], { autoAlpha: 1 });

      number.textContent = "1";
      gsap.set(number, { y: 0, autoAlpha: 1, filter: "blur(0px)" });

      let lastIdx = 0;

      const updateNumber = (idx: number) => {
        gsap.killTweensOf(number);

        gsap.to(number, {
          y: 6,
          autoAlpha: 0.55,
          filter: "blur(1px)",
          duration: 0.12,
          ease: "power2.out",
          onComplete: () => {
            number.textContent = String(idx + 1);
            gsap.to(number, {
              y: 0,
              autoAlpha: 1,
              filter: "blur(0px)",
              duration: 0.16,
              ease: "power2.out",
            });
          },
        });
      };

      const showStep = (idx: number) => {
        leftSlides.forEach((el, i) => {
          gsap.to(el, {
            autoAlpha: i === idx ? 1 : 0,
            duration: 0.25,
            ease: "power2.out",
          });
        });

        cards.forEach((el, i) => {
          gsap.to(el, {
            autoAlpha: i === idx ? 1 : 0,
            duration: 0.28,
            ease: "power2.out",
          });
        });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (count - 1)}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap:
          count > 1
            ? {
                snapTo: (v) => Math.round(v / snapStep) * snapStep,
                duration: 0.28,
                delay: 0.05,
                ease: "power2.out",
              }
            : false,
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (count - 1));
          if (idx === lastIdx) return;

          lastIdx = idx;
          showStep(idx);
          updateNumber(idx);
        },
      });

      ScrollTrigger.refresh();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden mt-50"
      style={{ fontFamily: "'Neue Montreal', sans-serif" }}
    >
      <div className="h-screen w-full px-8 md:px-12 lg:px-20 flex items-center">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between gap-16">
          {/* LEFT SIDE */}
          <div className="flex flex-col items-end min-w-0 flex-1">
            {/* text */}
            <div className="relative min-h-[140px] w-full max-w-[700px]" ref={leftRef}>
              {STEPS.map((s, i) => (
                <div
                  key={i}
                  data-left-slide
                  className="absolute inset-0"
                  aria-hidden={i !== 0}
                >
                  <h2 className="text-white font-bold leading-tight whitespace-pre-line text-[clamp(40px,4.2vw,64px)]">
                    {s.title}
                  </h2>
                  <p className="text-white/60 mt-4 text-sm md:text-base max-w-[420px]">
                    {s.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* number */}
            <div className="shrink-0 pointer-events-none select-none">
              <div
                ref={numberRef}
                className="text-white/10 font-extrabold leading-none tracking-tight"
                style={{
                  fontSize: "500px",
                  letterSpacing: "-0.04em",
                }}
              >
                1
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative shrink-0">
            <div className="relative w-[520px] h-[520px] md:w-[560px] md:h-[560px]">
              <div ref={cardRef} className="absolute inset-0">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    data-card
                    className="absolute inset-0 bg-[#0F0F2A] p-10"
                  >
                    <p className="text-[#D6FF3F] text-sm md:text-base leading-relaxed">
                      {s.highlight}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}