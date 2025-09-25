import Image from "next/image";
import { H1, P } from "../Typographies";

export default function Hero() {
  return (
    <div className="relative w-full h-[70vh] min-h-[31.25rem] max-h-[50rem] overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/SSA_hero.png"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Main Title */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <H1 className="text-white text-center leading-tight">
            Student Software{" "}
            <span className="block">Association</span>
          </H1>
        </div>

        {/* Subtitle with Custom Border */}
        <div className="relative">
          <div className="relative inline-block border border-white/30 py-2 px-4 lg:px-6 text-white bg-gray-200/20 rounded-none backdrop-blur-xs">
            
            {/* Extended Border Lines */}
            <span 
              aria-hidden="true"
              className="pointer-events-none absolute inset-0
                before:content-[''] before:absolute before:top-[-0.0625rem] before:left-[-1rem] before:right-[-1rem] before:h-[0.0625rem] before:bg-white/20
                after:content-[''] after:absolute after:bottom-[-0.0625rem] after:left-[-1rem] after:right-[-1rem] after:h-[0.0625rem] after:bg-white/20"
            />
            <span 
              aria-hidden="true"
              className="pointer-events-none absolute inset-0
                before:content-[''] before:absolute before:left-[-0.0625rem] before:top-[-1rem] before:bottom-[-1rem] before:w-[0.0625rem] before:bg-white/20
                after:content-[''] after:absolute after:right-[-0.0625rem] after:top-[-1rem] after:bottom-[-1rem] after:w-[0.0625rem] after:bg-white/20"
            />
            
            {/* Subtitle Text */}
            <P className="relative z-10 text-center text-white text-sm md:text-base lg:text-lg text-shadow-md leading-relaxed max-w-2xl">
              A student-led tech club for builders,{" "}
              <span className="block">coders, and creatives.</span>
            </P>
          </div>
        </div>

      </div>
    </div>
  );
}