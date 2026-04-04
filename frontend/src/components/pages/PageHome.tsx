
import Image from "next/image";
import Header from "@/components/ui/Header";

// import Footer from "@/components/Footer";
import DesktopBentoGrid from "@/components/features/HomeFeatures/DesktopBentoGrid";
import TabletBentoGrid from "@/components/features/HomeFeatures/TabletBentoGrid";
import MobileBentoGrid from "../features/HomeFeatures/MobileBentoGrid";
// import DiscoverSection from "@/components/DiscoverSection";
import DesktopSnapScroll from "@/components/features/HomeFeatures/DesktopSnapScroll";
import MobileSnapScroll from "../features/HomeFeatures/MobileSnapScroll";
import TabletSnapScroll from "../features/HomeFeatures/TabletSnapScroll";
import Footer from "../ui/Footer";
import SmallMobileBentoGrid from "../features/HomeFeatures/SmallMobileBentoGrid";

const HOME_HERODESKTOP_BG = "/images/homepage/SSABHomepage.webp";
const HOME_HEROTABLET_BG = "/images/homepage/SSAThingTablet.webp";
const HOME_HEROMOBILE_BG = "/images/homepage/SSAThingMobile.webp";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(180deg, #02030a 0%, #0b0c2a 100%)",
      }}
    >
      {/* ─── HEADER ─── */}
      <Header />

      {/* ─── HERO SECTION ─── */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center"
        style={{ minHeight: "800px", overflow: "hidden" }}
      >
        {/* Desktop Hero */}
        <Image
          src={HOME_HERODESKTOP_BG}
          width={1920}
          height={1080}
          alt=""
          priority
          className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />

        {/* Tablet Hero */}
        <Image
          src={HOME_HEROTABLET_BG}
          width={1200}
          height={1000}
          alt=""
          className="hidden md:block lg:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Mobile Hero */}
        <Image
          src={HOME_HEROMOBILE_BG}
          width={800}
          height={1000}
          alt=""
          className="block md:hidden absolute inset-0 w-full h-full object-cover"
        />
        {/* Gradient overlay — fade to dark at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,3,10,0.15) 0%, rgba(2,3,10,0.4) 50%, #02030a 100%)",
          }}
        />

        {/* Hero content */}
        <div
            className="relative z-10 flex flex-col items-center pt-0 pb-16 sm:pt-24 sm:pb-20 md:pt-[100px] md:pb-[80px]"
          >
            <h1
              className="
                text-white text-center leading-tight
                text-[35px] sm:text-[56px] md:text-[72px] lg:text-[86px]
                max-w-[320px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[860px]
                tracking-[-0.02em]
              "
              style={{
                fontFamily: "Neue Montreal",
                fontWeight: 600,
              }}
            >
              Student Software<br />Association
            </h1>

            {/* Subheading pill */}
            <div
              className="
                mt-6 sm:mt-7 md:mt-8 relative
                w-full max-w-[300px] sm:max-w-[380px] md:max-w-[440px] lg:max-w-[480px]
              "
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(2px)",
                  boxShadow: "inset 0px -4px 4px 3px rgba(0,0,0,0.25)",
                }}
              />

              {/* Corner lines */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <div
                className="absolute right-0 top-0 bottom-0 w-px"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <div
                className="absolute left-0 right-0 bottom-0 h-px"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />
              <div
                className="absolute left-0 right-0 top-0 h-px"
                style={{ background: "rgba(255,255,255,0.2)" }}
              />

              <p
                className="
                  relative text-center text-gray-300
                  px-2 py-3
                  sm:px-6 sm:py-3.5
                  md:px-8 md:py-4
                  text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px]
                "
                style={{
                  fontFamily: "Neue Montreal Mono",
                  fontWeight: 400,
                  textShadow: "-2px 1px 5px rgba(0,0,0,1)",
                }}
              >
                A student-led tech club for builders, coders, and creatives.
              </p>
            </div>
          </div>
      </section>

      {/* ─── SECTION 1: Code Together + Bento ─── */}
      <section
        className="relative w-full"
        style={{
          borderRadius: "0 0 40px 40px",
        }}
      >
        <div className="max-w-[1784px] mx-auto pb-20">
          

          {/* Desktop / Tablet / Mobile Bento Grids */}
          {/* Desktop layout: large screens and above */}
          <div className="hidden lg:block px-16">
            <DesktopBentoGrid />
          </div>

          {/* Tablet */}
          <div className="hidden md:block lg:hidden px-14">
            <TabletBentoGrid />
          </div>

          {/* Mobile: 370px up to md */}
          <div className="hidden min-[370px]:block md:hidden w-full mx-auto px-8">
            <MobileBentoGrid />
          </div>

          {/* Small mobile: below 370px only */}
          <div className="block min-[370px]:hidden px-4">
            <SmallMobileBentoGrid />
          </div>
        </div>
      </section>

      {/* ─── DISCOVER SECTION (snap scroll) ─── */}
      {/* Desktop layout: large screens and above */}
        <div className="hidden lg:block ">
          <DesktopSnapScroll />
        </div>

          {/* Tablet layout: medium to just below large */}
          <div className="hidden md:block mt-25 lg:hidden">
            <TabletSnapScroll />
          </div>

          {/* Mobile layout: below medium */}
          <div className="block mt-25 md:hidden">
            <MobileSnapScroll/>
          </div>

      {/* ─── CTA SECTION ─── */}
      <section className="w-full text-center py-24 md:py-28 lg:py-32 px-4">
  
        <div className="max-w-[640px] md:max-w-[800px] lg:max-w-[1000px] mx-auto">

          {/* Heading */}
          <h2
            className="text-white leading-tight mb-4 md:mb-2"
            style={{
              fontFamily: "Neue Montreal",
              fontWeight: 400,
            }}
          >
            <span className="block text-[24px] md:text-[36px] lg:text-[48px]">
              Not sure where to start?
            </span>
          </h2>

          {/* Subtext */}
          <p
            className="text-white/70 mx-auto mb-3 md:mb-3"
            style={{
              fontFamily: "Neue Montreal",
              fontWeight: 400,
            }}
          >
            <span className="block text-[15px] md:text-[18px] lg:text-[20px] max-w-[320px] md:max-w-[520px] mx-auto">
              Join our Discord. We can get you started from there.
            </span>
          </p>

          {/* Link CTA (not button) */}
          <a
            href="#"
            className="text-[#4DA3FF] underline underline-offset-4 hover:underline-offset-8 hover:opacity-80 transition"
            style={{ fontFamily: "Neue Montreal" }}
          >
            <span className="text-[16px] md:text-[18px] lg:text-[20px]">
              Join the Discord
            </span>
          </a>

        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
