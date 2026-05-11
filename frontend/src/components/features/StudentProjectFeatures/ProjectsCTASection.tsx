export default function ProjectsCTASection() {
  return (
    <section
      className="relative px-4 sm:px-8 md:px-12 lg:px-16 py-28 md:py-36 text-center"
      style={{
        background: "linear-gradient(180deg, #0B0C2A 0%, #02030a 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-white leading-tight mb-4 text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
        >
          Want to collaborate with
          <br />
          like minded individuals?
        </h2>
        <p
          className="text-white/60 text-[15px] md:text-[16px] leading-relaxed mb-8"
          style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
        >
          Join our Discord Today. We will match you with people that you&apos;d
          love to work with.
        </p>
        <a
          href="https://discord.gg/studentsoftwareassociation"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/80 text-[14px] underline underline-offset-4 hover:text-white transition-colors"
          style={{ fontFamily: "Neue Montreal", fontWeight: 500 }}
        >
          Join the Discord
        </a>
      </div>
    </section>
  );
}
