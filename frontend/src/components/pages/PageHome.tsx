
import Image from "next/image";
import Header from "@/components/ui/Header";
import CTASection from "@/components/ui/CTASection";
import HomeHeroContent from "@/components/ui/HomeHeroContent";

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

const HOME_HERODESKTOP_BG = "/images/home-banners/SSABHomepage.webp";
const HOME_HEROTABLET_BG = "/images/home-banners/SSAThingTablet.webp";
const HOME_HEROMOBILE_BG = "/images/home-banners/SSAThingMobile.webp";

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
        <HomeHeroContent />
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
      <CTASection
        heading="Not sure where to start?"
        subheading="Join our Discord. We'll connect you with the right people and get you building in no time."
      />

      {/* ─── FOOTER ─── */}
      <Footer />
    </div>
  );
}
