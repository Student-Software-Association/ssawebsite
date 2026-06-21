"use client";

import Image from "next/image";

const IMG_PLACEHOLDER = "/Icons/other-images/Portrait_placeholder.svg.png";

type Phase = {
  id: string;
  year: string;
  title: string;
  caption: string;
};

const PHASES: Phase[] = [
  { id: "spark", year: "2016", title: "The Spark", caption: "A small group of students came together to explore programming and share ideas." },
  { id: "public", year: "2018", title: "Going Public", caption: "SSA opened its doors to the wider campus, hosting its first public events." },
  { id: "guild", year: "2023", title: "Growing the Guild", caption: "More builders joined the community, launching projects and workshops." },
  { id: "next", year: "2026", title: "Next Chapter", caption: "The next era focuses on building real software and mentoring new developers." },
];

function MobileTimelineItem({
  year,
  title,
  caption,
  isLast,
}: Phase & { isLast?: boolean, caption?: string }) {
  return (
    <div className="relative pl-[58px]">
      {/* Left rail */}
      <div className="absolute left-0 top-0 bottom-0 w-[44px] flex flex-col items-center">
        {/* Year circle */}
        <div className="w-[44px] h-[44px] rounded-full border border-white/25 bg-black/30 flex items-center justify-center shrink-0">
          <span
            className="text-white/85 text-[11px] leading-none"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {year}
          </span>
        </div>

        {/* Dotted line */}
        {!isLast && (
          <div
            className="mt-3 w-px flex-1 opacity-80"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1.6px)",
              backgroundSize: "2px 9px",
              backgroundRepeat: "repeat-y",
              backgroundPosition: "center top",
            }}
          />
        )}
      </div>

      {/* Right content */}
      <div className="pb-10 md:pb-16">
        <div className="pt-1">
          <h3
            className="text-white text-[18px] font-normal leading-none"
            style={{ fontFamily: "'Neue Montreal Mono', monospace" }}
          >
            {title}
          </h3>
        </div>

        <div className="mt-8">
          <div className="w-full h-[300px] rounded-[28px] border border-white/25 bg-black/20 relative overflow-hidden">
            <Image
              src={IMG_PLACEHOLDER}
              alt={title}
              fill
              className="object-cover opacity-60"
              sizes="100vw"
            />
          </div>
          {caption && (
            <div className="mt-4 text-white/75 text-[13px] leading-relaxed">
              <p style={{ fontFamily: "Neue Montreal", fontWeight: 400}}>
                {caption}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function VerticalScrollMobile() {
  return (
    <>
    <article className="flex flex-col justify-between gap-5 px-5 text-white mb-20">
            <div className="text-[28px]">
                <h1 className="text-left"
                    style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
                >Built on <span style={{fontWeight: 500}}>Late Nights </span> <br/> 
                &<span style={{fontWeight: 700}}> Big Ideas</span></h1>
            </div>
            <div className="text-left text-[16px]">
                <p style={{ fontFamily: "Neue Montreal", fontWeight: 400}}>From curious students to a thriving software society —{" "}
                    {"here's how SSA came to life, and where we're headed next."}</p>
            </div>
        </article>

    <section
      className="relative py-12 px-2"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-[820px] mx-auto">
        {PHASES.map((phase, idx) => (
          <MobileTimelineItem
            key={phase.id}
            {...phase}
            isLast={idx === PHASES.length - 1}
          />
        ))}
      </div>
    </section>
    </>
  );
}