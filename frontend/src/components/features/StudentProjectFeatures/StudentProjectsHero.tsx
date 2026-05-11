import Image from "next/image";

const HERO_BG = "/images/homepage/SSABHomepage.webp";

export default function StudentProjectsHero() {
  return (
    <section className="relative w-full overflow-hidden min-h-[420px] md:min-h-[480px]">
      <Image
        src={HERO_BG}
        alt=""
        fill
        priority
        className="object-cover object-center opacity-80"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(2,3,10,0.45) 0%, rgba(5,5,15,0.80) 55%, #050507 100%)",
        }}
      />
      <div className="relative z-10 px-4 sm:px-8 md:px-12 lg:px-16 pt-44 pb-16 md:pt-52 md:pb-20 max-w-3xl mx-auto text-center">
        <h1
          className="text-white leading-tight tracking-[-0.02em] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] mb-4 md:mb-5"
          style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
        >
          Student Projects
          <br />
          from The SSA
        </h1>
        <p
          className="text-gray-300/85 max-w-xl mx-auto text-[15px] sm:text-[16px] md:text-[17px] leading-relaxed"
          style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
        >
          Where ideas become impact — projects sparked by students, powered by
          code, and shared with the world.
        </p>
      </div>
    </section>
  );
}
