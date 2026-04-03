"use client";

type CardProps = {
  name: string;
  role: string;
  text: string;
  wide?: boolean;
};

function VoiceCard({ name, role, text, wide }: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-white/10 bg-white/5
        p-5 text-white
        ${wide ? "col-span-2" : ""}
      `}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-white/30" />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-xs text-white/60">{role}</p>
        </div>
      </div>

      {/* Text */}
      <p className="text-sm text-white/80 leading-relaxed">
        “{text}”
      </p>
    </div>
  );
}

export default function VoiceGridTablet() {
  const data = [
    {
      name: "Sharleen Jong",
      role: "2nd yr cs student \\ software engineer",
      text: "I didn’t think I’d be the kind of person to join a club like this — but now I’m shipping code with people I actually vibe with.",
    },
  ];

  return (
    <>
    <section className="relative mt-70" style={{ fontFamily: "'Neue Montreal', sans-serif" }}>
      
      <div className="max-w-[900px] mx-auto px-10 mb-20">
        
        <div className="flex flex-col justify-between gap-8">
          <h2 className="text-white font-normal text-[clamp(36px,4.5vw,56px)] leading-tight max-w-[720px]">
            Voices from the <br/><span style={{ fontWeight: 700 }}>Inside of SSA</span>
          </h2>

          <p className="text-white text-left text-[clamp(16px,1.5vw,20px)] max-w-[400px] leading-relaxed">
          Not scripted. Not polished. Just real thoughts from students who showed up, built something, and found their people
          </p>
        </div>

      </div>
    </section>
    
    <div className="grid grid-cols-2 gap-4 px-10">
      {/* Row 1 - wide */}
      <VoiceCard {...data[0]} wide />

      {/* Row 2 */}
      <VoiceCard {...data[0]} />
      <VoiceCard {...data[0]} />

      {/* Row 3 */}
      <VoiceCard {...data[0]} />
      <VoiceCard {...data[0]} />

      {/* Row 4 - wide */}
      <VoiceCard {...data[0]} wide />
    </div>
    </>
  );
}