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
      "Browse what our members are building, real-world apps, bots, and\ncreative experiments from students just like you.",
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

function TabletCard({ id, caption }: Card) {
  return (
    <div className="relative w-full aspect-[5/5] overflow-hidden bg-[#0b0c2a]">
      {/* Image area reserved (drop an <Image fill .../> here later) */}
      <div className="absolute inset-0">
        {/* placeholder gradient to show depth */}
        <div className="absolute" />
      </div>

      {/* Big faint number (tablet screenshot shows bottom-right-ish) */}
      <div className="pointer-events-none absolute right-6 bottom-4 select-none">
        <div className="text-white/10 font-extrabold leading-none tracking-tight text-[92px]">
          {id}
        </div>
      </div>

      {/* Yellow caption */}
      <div className="absolute left-6 right-16 bottom-6">
        <p className="text-[#D6FF3F] text-[14px] leading-relaxed whitespace-pre-line">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function TabletSnapScroll() {
  return (
    <section
      className="w-full mt-[10rem]"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        
      }}
    >

      <div className="px-16 text-white flex flex-col gap-5">
        <div>
          <p style={{ fontFamily: "Neue Montreal", fontWeight: 400, fontSize: 50, lineHeight: 1}}>Discover The <br/>
          <span style={{ fontWeight: 700}}>Software Society</span></p>
        </div>
        <div>
          <p style={{ fontFamily: "Neue Montreal", fontWeight: 100, fontSize: 20}}>Built by students. For students. Powered by curiosity.</p>
        </div>
      </div>

      <div className="px-16 py-20">
        <div className="max-w-[900px] mx-auto flex flex-col gap-20">
          {CARDS.map((c) => (
            <TabletCard key={c.id} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}