"use client";

import React from "react";

type Card = {
  id: number;
  caption: string;
};

const CARDS: Card[] = [
  {
    id: 1,
    caption:
      "Browse what our members are\nbuilding, real-world apps, bots, and\ncreative experiments from students just like you.",
  },
  {
    id: 2,
    caption:
      "Join coding workshops, community nights,\nand meet people who build and ship.\nConnect without cringe.",
  },
  {
    id: 3,
    caption:
      "Whether you're a beginner or a builder,\nthere’s a place for you in our Discord.\nFind a project, or launch your first meetup.",
  },
];

function MobileCard({ id, caption }: Card) {
  return (
    <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#0b0c2a]">
      {/* Image area reserved */}
      <div className="absolute inset-0">
        {/* <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-black/20" /> */}
      </div>

      {/* Big faint number (mobile screenshot shows top-right) */}
      <div className="pointer-events-none absolute right-5 top-4 select-none">
        <div className="text-white/10 font-extrabold leading-none tracking-tight text-[64px]">
          {id}
        </div>
      </div>

      {/* Yellow caption */}
      <div className="absolute left-4 right-2 bottom-4">
        <p className="text-[#D6FF3F] text-[14px] leading-relaxed whitespace-pre-line">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function MobileSnapScroll() {
  return (
    <section
      className="w-full"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >

      <div className="px-8 text-white flex flex-col gap-5">
        <div>
          <p style={{ fontFamily: "Neue Montreal", fontWeight: 400, fontSize: 30, lineHeight: 1}}>Discover The <br/>
          <span style={{ fontWeight: 700}}>Software Society</span></p>
        </div>
        <div>
          <p style={{ fontFamily: "Neue Montreal", fontWeight: 100, fontSize: 17}}>Built by students. For students. Powered by curiosity.</p>
        </div>
      </div>

      <div className="px-4 py-10">
        <div className="max-w-auto h-auto mx-auto flex flex-col gap-7">
          {CARDS.map((c) => (
            <MobileCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}