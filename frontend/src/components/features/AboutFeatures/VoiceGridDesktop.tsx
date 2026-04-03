"use client";

/**
 * Voices from the Inside — Bento grid layout (desktop).
 * Layout from image:
 * Row 1: [card] [card]
 * Row 2: [    wide card    ]
 * Row 3: [card] [card]
 * Row 4: [card]
 */

const VOICES = [
  {
    name: "Student Name",
    role: "Member & Software Engineer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Student Name",
    role: "Member & Designer",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Student Name",
    role: "Alumni & Mentor",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
  },
  {
    name: "Student Name",
    role: "Member & Developer",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.",
  },
  {
    name: "Student Name",
    role: "Community Lead",
    quote:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    name: "Student Name",
    role: "Member",
    quote:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
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
        <div className="w-10 h-10 rounded-full bg-white/10 flex-shrink-0" />
        <div>
          <p className="text-white font-semibold text-sm">{name}</p>
          <p className="text-white/50 text-xs">{role}</p>
        </div>
      </div>
      <p className="text-white/70 text-sm leading-relaxed flex-1">{quote}</p>
    </div>
  );
}

export default function VoiceGridDesktop() {
  return (
    <section
      className="relative mt-40 md:py-28"
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Section header */}
        <div className="flex flex-wrap items-start justify-between gap-8 mb-12 md:mb-16">
          <h2 className="text-white font-bold text-[clamp(36px,4.5vw,56px)] leading-tight max-w-[480px]">
            Voices from the Inside of SSA
          </h2>
          <p className="text-white/70 text-[clamp(16px,1.5vw,20px)] max-w-[480px] leading-relaxed">
            Hear firsthand experiences and testimonials from our community
            members and alumni.
          </p>
        </div>

        {/* Bento grid: 4 columns, asymmetric rows */}
        <div className="grid grid-cols-4 gap-6 auto-rows-[200px]">
          {/* Row 1: two cards side by side (left half) */}
          <div className="col-span-2 row-span-1">
            <VoiceCard
              name={VOICES[0].name}
              role={VOICES[0].role}
              quote={VOICES[0].quote}
              className="h-full"
            />
          </div>
          <div className="col-span-2 row-span-2">
            <VoiceCard
              name={VOICES[1].name}
              role={VOICES[1].role}
              quote={VOICES[1].quote}
              className="h-full"
            />
          </div>

          {/* Row 2: one wide card */}
          <div className="col-span-2 row-span-2">
            <VoiceCard
              name={VOICES[2].name}
              role={VOICES[2].role}
              quote={VOICES[2].quote}
              className="h-full"
            />
          </div>

          {/* Row 3: two cards again */}
          <div className="col-span-2 row-span-1">
            <VoiceCard
              name={VOICES[3].name}
              role={VOICES[3].role}
              quote={VOICES[3].quote}
              className="h-full"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <VoiceCard
              name={VOICES[4].name}
              role={VOICES[4].role}
              quote={VOICES[4].quote}
              className="h-full"
            />
          </div>

          {/* Row 4: one card left-aligned */}
          <div className="col-span-2 row-span-1">
            <VoiceCard
              name={VOICES[5].name}
              role={VOICES[5].role}
              quote={VOICES[5].quote}
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
