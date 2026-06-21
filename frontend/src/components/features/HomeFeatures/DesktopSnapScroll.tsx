"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  "Browse what our members are building: real-world apps, bots, and creative experiments from students just like you.",
  "Join coding workshops, community nights, and speaker sessions. Build skills and connect with other devs.",
  "Whether you're a beginner or a builder, there's a place for you. Find a project, or launch your first meetup.",
];

export default function DesktopSnapScroll() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const numberRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cardContainer = cardRef.current;
    const number = numberRef.current;
    if (!section || !cardContainer || !number) return;

    const ctx = gsap.context(() => {
      const cards = Array.from(
        cardContainer.querySelectorAll<HTMLElement>("[data-card]")
      );
      const count = CARDS.length;

      gsap.set(cards, { autoAlpha: 0, y: 20 });
      gsap.set(cards[0], { autoAlpha: 1, y: 0 });
      number.textContent = "1";

      let lastIdx = 0;

      const updateNumber = (idx: number) => {
        gsap.killTweensOf(number);
        gsap.to(number, {
          autoAlpha: 0,
          y: -10,
          duration: 0.12,
          ease: "power2.in",
          onComplete: () => {
            number.textContent = String(idx + 1);
            gsap.fromTo(
              number,
              { autoAlpha: 0, y: 12 },
              { autoAlpha: 1, y: 0, duration: 0.18, ease: "power2.out" }
            );
          },
        });
      };

      const showCard = (idx: number) => {
        cards.forEach((el, i) => {
          if (i === idx) {
            gsap.to(el, { autoAlpha: 1, y: 0, duration: 0.32, ease: "power2.out" });
          } else {
            gsap.to(el, {
              autoAlpha: 0,
              y: i < idx ? -18 : 18,
              duration: 0.22,
              ease: "power2.in",
            });
          }
        });
      };

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * (count - 1)}`,
        scrub: 0.8,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        snap: {
          snapTo: (v) => Math.round(v * (count - 1)) / (count - 1),
          duration: 0.4,
          delay: 0.05,
          ease: "power2.out",
        },
        onUpdate: (self) => {
          const idx = Math.round(self.progress * (count - 1));
          if (idx === lastIdx) return;
          lastIdx = idx;
          showCard(idx);
          updateNumber(idx);
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative mt-32"
      style={{ fontFamily: "Neue Montreal, sans-serif" }}
    >
      <div className="h-screen w-full px-8 lg:px-20 flex items-center">
        <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between gap-16">

          {/* LEFT — heading at top, giant counter at bottom */}
          <div
            className="flex flex-col justify-between flex-1 max-w-[500px]"
            style={{ minHeight: "60vh" }}
          >
            <div>
              <h2
                className="text-white leading-tight text-[clamp(38px,4vw,60px)]"
                style={{ fontWeight: 700 }}
              >
                Discover The<br />Software Society
              </h2>
              <p
                className="text-white/50 mt-5 text-[15px] leading-relaxed max-w-[360px]"
                style={{ fontWeight: 400 }}
              >
                Built by students. For students. Powered by curiosity.
              </p>
            </div>

            {/* Animated counter — bottom of left column */}
            <div
              ref={numberRef}
              className="select-none pointer-events-none text-white/10"
              style={{
                fontSize: "clamp(180px, 22vw, 320px)",
                fontWeight: 800,
                letterSpacing: "-0.05em",
                lineHeight: 0.85,
              }}
            >
              1
            </div>
          </div>

          {/* RIGHT — stacked overlapping cards */}
          <div
            className="relative shrink-0"
            style={{
              width: "clamp(360px, 36vw, 520px)",
              height: "clamp(360px, 36vw, 520px)",
            }}
          >
            <div ref={cardRef} className="absolute inset-0">
              {CARDS.map((text, i) => (
                <div
                  key={i}
                  data-card
                  className="absolute inset-0 rounded-2xl p-8 lg:p-10 flex flex-col justify-end border border-white/10"
                  style={{ background: "#0b0c2a" }}
                >
                  <span
                    className="text-white/20 text-[11px] tracking-[0.18em] uppercase mb-4"
                    style={{ fontWeight: 500 }}
                  >
                    Step {i + 1} / {CARDS.length}
                  </span>
                  <p
                    className="text-[#D6FF3F] text-[14px] lg:text-[15px] leading-relaxed"
                    style={{ fontWeight: 400 }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
