"use client";

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

function TabletTimelineItem({ year, title, caption }: Phase) {
  return (
    

    <div className="relative pl-[72px]">
      {/* Left rail */}
      <div className="absolute left-0 top-0 bottom-0 w-[56px] flex flex-col items-center">
        {/* Year circle */}
        <div className="w-[56px] h-[56px] rounded-full border border-white/25 bg-black/30 flex items-center justify-center shrink-0">
          <span
            className="text-white/85 text-[14px] leading-none"
            style={{ fontFamily: "'Space Mono', monospace" }}
          >
            {year}
          </span>
        </div>

        {/* Dotted line */}
        <div
          className="mt-4 w-px flex-1 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.55) 1px, transparent 1.6px)",
            backgroundSize: "2px 10px",
            backgroundRepeat: "repeat-y",
            backgroundPosition: "center top",
          }}
        />
      </div>

      {/* Right content */}
      <div className="pb-10 md:pb-20">
        <div className="pt-2">
          <h3
            className="text-white text-[22px] font-normal leading-none"
            style={{ fontFamily: "'Neue Montreal Mono', monospace" }}
          >
            {title}
          </h3>
        </div>

        <div className="mt-10">
          <div className="w-full h-[300px] md:h-[420px] rounded-[34px] border border-white/25 bg-black/20" />
          {caption && (
            <div className="mt-4 text-white/75 text-[18px] leading-relaxed">
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


export default function VerticalScrollTablet() {
  return (

      <>
        <article className="flex flex-col justify-between gap-5 px-20 text-white mb-20">
            <div className="text-[clamp(36px,4.5vw,56px)]">
                <h1 className="text-left"
                    style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
                >Built on <span style={{fontWeight: 500}}>Late Nights </span> <br/> 
                &<span style={{fontWeight: 700}}> Big Ideas</span></h1>
            </div>
            <div className="w-100 text-left text-[clamp(16px,1.5vw,20px)]">
                <p style={{ fontFamily: "Neue Montreal", fontWeight: 400}}>From curious students to a thriving software society —{" "}
                    {"here's how SSA came to life, and where we're headed next."}</p>
            </div>
        </article>

    <section
      className="relative py-14 px-6"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="max-w-[760px] mx-auto">
        {PHASES.map((phase, idx) => (
          <div key={phase.id} className={idx === PHASES.length - 1 ? "" : ""}>
            <TabletTimelineItem {...phase} />
          </div>
        ))}
      </div>
    </section>
    </>
  );    
}