export default function EventsCTASection() {
  return (
    <section
      className="relative px-4 sm:px-8 md:px-12 lg:px-16 py-24 md:py-32 text-center"
      style={{
        background: "linear-gradient(180deg, #0B0C2A 0%, #02030a 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="text-white leading-tight mb-4 text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px]"
          style={{ fontFamily: "Neue Montreal", fontWeight: 700 }}
        >
          Want to stay ahead
          <br />
          of the alerts?
        </h2>
        <p
          className="text-white/60 text-[15px] md:text-[16px] leading-relaxed mb-8"
          style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
        >
          Join our Discord Server, stay up to date, or follow our social media
          to get notified the moment new events drop.
        </p>
        <a
          href="https://discord.gg/studentsoftwareassociation"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 rounded-full text-[14px] font-semibold uppercase tracking-widest text-[#0a0c1a] transition-opacity hover:opacity-80 active:opacity-70"
          style={{ background: "#d4a843", fontFamily: "Neue Montreal" }}
        >
          Join Discord
        </a>
      </div>
    </section>
  );
}
