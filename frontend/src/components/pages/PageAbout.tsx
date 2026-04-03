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

const ABOUT_HERO_BG = "/images/SSABAboutPage.webp";

export default function PageAbout() {
  return (
    <div
      className="min-h-screen"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
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

        {/* Darken for readability */}
        

        {/* Your requested foreground gradient: #04050D -> #0B0C2A */}
       

        {/* Hero content */}
        <div className="relative z-10 px-3 md:px-12 lg:px-16 pt-52 pb-20 sm:max-w-[450px] md:max-w-[700px] lg:max-w-[760px] tracking-[-0.02em] mx-auto">
          <h1 className="text-white font-bold mx-auto text-center leading-tight text-[35px] sm:text-[40px] md:text-[52px] lg:text-[60px]"
          style={{ fontFamily: "Neue Montreal" }}
          >
            About the Student Software Association
          </h1>
          <p className="relative text-center text-gray-300 px-2 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 text-[14px] sm:text-[16px] md:text-[17px] lg:text-[18px] "
          style={{ fontFamily: "Neue Montreal Mono", fontWeight: 300, letterSpacing: "-0.03em" }}
          >
            What started as student curiosity is now a culture of building,
            learning, and leading.
          </p>
        </div>
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
      

        <section className="py-24 md:py-28 lg:py-32 px-4 md:px-8 lg:px-0 text-center">
            
            {/* Heading */}
            <h2
              className="text-white leading-tight mb-6"
              style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
            >
              <span className="block text-[28px] md:text-[40px] lg:text-[56px]">
                And you can become
              </span>
              <span className="block text-[28px] md:text-[40px] lg:text-[56px]">
                part of the family
              </span>
            </h2>

            {/* Subtext */}
            <p
              className="text-white/70 mx-auto mb-6 md:mb-8"
              style={{ fontFamily: "Neue Montreal", fontWeight: 400 }}
            >
              <span className="block text-[15px] md:text-[18px] lg:text-[20px] max-w-[320px] md:max-w-[480px] lg:max-w-[520px] mx-auto">
                Join our Discord Today, We will prosper
              </span>
              <span className="block text-[15px] md:text-[18px] lg:text-[20px] max-w-[320px] md:max-w-[480px] lg:max-w-[520px] mx-auto">
                you in ways you can’t imagine.
              </span>
            </p>

            {/* Link CTA */}
            <a
              href="#"
              className="text-[#4DA3FF] underline underline-offset-4 hover:underline-offset-8 hover:opacity-80 transition"
              style={{
                fontFamily: "Neue Montreal",
              }}
            >
              <span className="text-[16px] md:text-[18px] lg:text-[20px]">
                Join the Discord
              </span>
            </a>
          </section>

        </section>

      <Footer />
    </div>
  );
}