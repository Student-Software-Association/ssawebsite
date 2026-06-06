"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Event } from "@/types/event";
import EventCard from "./EventCard";
import { EVENTS_PER_PAGE } from "@/lib/supabase/event-queries";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type Props = {
  events: Event[];
  total: number;
  page: number;
};

export default function EventsListSection({ events, total, page }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const totalPages = Math.max(1, Math.ceil(total / EVENTS_PER_PAGE));
  const hasPrev = page > 1;
  const hasNext = page < totalPages;

  useGSAP(
    () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.timeline({
        scrollTrigger: { trigger: "[data-events-heading]", start: "top 88%", once: true },
      })
        .fromTo("[data-events-heading]", { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" })
        .fromTo("[data-events-highlight]", { scaleX: 0 }, { scaleX: 1, duration: 0.6, ease: "power2.out" }, "-=0.15")
        .fromTo("[data-events-sub]", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.45");

      if (events.length > 0) {
        gsap.fromTo(
          "[data-event-card]",
          { y: 44, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: "[data-events-list]", start: "top 88%", once: true },
          }
        );
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative px-4 sm:px-6 md:px-10 lg:px-16 pt-16 pb-20 md:pt-20 md:pb-28"
      style={{ background: "linear-gradient(180deg, #050507 0%, #0B0C2A 100%)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 md:mb-14">
          <h2
            data-events-heading
            className="text-white leading-tight mb-3 md:mb-4 text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px]"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            Where{" "}
            <span className="relative inline-block" style={{ fontWeight: 700 }}>
              Builders Meet
              <span
                data-events-highlight
                className="absolute inset-x-0 bottom-0.5 h-[3px] rounded-full bg-white"
                style={{ transformOrigin: "left", transform: "scaleX(0)" }}
              />
            </span>
          </h2>
          <p
            data-events-sub
            className="text-white/70 max-w-2xl text-[15px] md:text-[16px] leading-relaxed"
            style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
          >
            From workshop nights to industry-backed showcases, find an upcoming
            event that challenges, connects, and inspires you to build.
          </p>
        </div>

        {events.length === 0 ? (
          <div
            className="rounded-3xl border border-white/15 bg-white/[0.03] px-6 py-14 text-center text-white/75"
            style={{ fontFamily: "Neue Montreal" }}
          >
            <p className="text-lg mb-2">No upcoming events</p>
            <p className="text-sm text-white/55 max-w-md mx-auto">
              Check back soon — we&apos;re planning something great. Add rows to
              the <code className="text-white/90">events</code> table in
              Supabase to populate this page.
            </p>
          </div>
        ) : (
          <div data-events-list className="flex flex-col gap-6 md:gap-8">
            {events.map((event) => (
              <div key={event.id} data-event-card>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-10 md:mt-14 flex items-center justify-center gap-4">
            {hasPrev ? (
              <Link
                href={`/events?page=${page - 1}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                ← Prev Page
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-2.5 text-sm text-white/30 cursor-not-allowed"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                ← Prev Page
              </span>
            )}
            <span
              className="text-white/40 text-sm"
              style={{ fontFamily: "Neue Montreal" }}
            >
              {page} / {totalPages}
            </span>
            {hasNext ? (
              <Link
                href={`/events?page=${page + 1}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-2.5 text-sm text-white/90 hover:bg-white/10 transition-colors"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                Next Page →
              </Link>
            ) : (
              <span
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-2.5 text-sm text-white/30 cursor-not-allowed"
                style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
              >
                Next Page →
              </span>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
