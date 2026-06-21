import Header from "@/components/ui/Header";
import HorizontalScrollDesktop from "@/components/features/AboutFeatures/HorizontalScrollDesktop";
import BehindSSADesktop from "@/components/features/AboutFeatures/BehindSSADesktop";
import VoiceGridDesktop from "@/components/features/AboutFeatures/VoiceGridDesktop";
import Footer from "../ui/Footer";
import Image from "next/image";
import VerticalScrollTablet from "../features/AboutFeatures/VerticalScrollTablet";
import VerticalScrollMobile from "../features/AboutFeatures/VerticalScrollMobile";
import BehindSSAMobileTablet from "../features/AboutFeatures/BehindSSATablet";
import VoiceGridTablet from "../features/AboutFeatures/VoiceGridTablet";
import VoiceGridMobile from "../features/AboutFeatures/VoiceGridMobile";
import CTASection from "@/components/ui/CTASection";
import AboutHeroContent from "@/components/ui/AboutHeroContent";

const ABOUT_HERO_BG = "/images/about-banners/about-desktop.webp";

export default function PageAbout() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "Neue Montreal, sans-serif",
        background: "#02030a",
      }}
    >
      <Header />

      {/* HERO */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "620px" }} // <-- important
      >
        {/* Background image */}
        <Image
          src={ABOUT_HERO_BG}
          alt=""
          fill
          priority
          className="absolute inset-0 object-cover object-center"
        />

        {/* Gradient overlay for readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(2,3,10,0.50) 0%, rgba(5,5,15,0.80) 55%, #02030a 100%)",
          }}
        />

        {/* Hero content */}
        <AboutHeroContent />
      </section>

        <section style={{background: "linear-gradient(180deg, #050507 0%, #0B0C2A 100%)"}}
        className="pt-30"
        >

        
        {/* 1. Built on Late Nights — horizontal scroll */}
        <div className="hidden lg:block">
            <HorizontalScrollDesktop /> {/* Horizontal Scroll Desktop */}
        </div>
        <div className="hidden md:block lg:hidden">
            <VerticalScrollTablet /> {/* Vertical Scroll Tablet - Desktop Disabled */}
        </div>
        <div className="block md:hidden">
            <VerticalScrollMobile /> {/* Vertical Scroll Mobile - Tablet & Desktop Disabled */}
        </div>



        {/* 2. People Behind the Projects — carousel + flip cards */}
        <div className="hidden lg:block">
            <BehindSSADesktop /> 
        </div>
        {/* tablet + mobile */}
        <div className="block lg:hidden">
            <BehindSSAMobileTablet />
        </div>

        {/* 3. Voices from the Inside — bento grid */}
        <div className="hidden lg:block">
          <VoiceGridDesktop />
        </div>

        <div className="hidden md:block lg:hidden">
          <VoiceGridTablet />
        </div>

        <div className="block md:hidden">
          <VoiceGridMobile />
        </div>
      

        <CTASection
            heading="And you can become part of the family."
            subheading="Join our Discord today. We’ll connect you with people who build, learn, and grow together."
          />

        </section>

      <Footer />
    </div>
  );
}