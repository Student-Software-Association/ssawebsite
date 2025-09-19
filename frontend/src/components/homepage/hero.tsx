"use client";
import LetterGlitch from "./LetterGlitch";
export default function Hero() {
    return (
        <div 
        className="relative w-full max-sm:h-[calc(70vh)] h-[calc(85vh)] overflow-hidden"
        >
            <LetterGlitch 
            glitchSpeed={1}
            centerVignette={true}
            outerVignette={true}
            smooth={true}
            characters={'01'}
            />
            <div //HeroHeader
                className="absolute inset-0 flex items-center justify-center z-10"
            >
                <h1 className="xl:text-8xl lg:text-8xl md:text-6xl max-md:text-5xl max-sm:text-5xl text-white font-bold text-center">
                    Student Software <span className="block">Association</span>
                </h1>
            </div>
            <div //HeroSubheader 
                className="absolute left-0 right-0 4xl:top-[70%] max-xl:top-[70%] xl:top-[75%] md:top-[75%] max-md:top-[65%] max-sm:top-[70%] flex justify-center z-10 px-4">
                <div className="relative inline-block border-0.8 border-gray-300 px-6 py-3 text-white text-xl rounded-none bg-black/30 backdrop-blur-[2px]">
                <span // Top & Bottom extensions aligned to border center
                    aria-hidden="true"
                    className="
                    pointer-events-none absolute inset-0
                    before:content-[''] before:absolute before:top-[-0.5px] before:left-[-24px] before:right-[-24px] before:h-[2px] before:bg-gray-300
                    after:content-['']  after:absolute  after:bottom-[-0.5px] after:left-[-24px] after:right-[-24px] after:h-[2px]  after:bg-gray-300
                    "
                  />
                  <span // Left & Right extensions aligned to border center
                    aria-hidden="true"
                    className="
                    pointer-events-none absolute inset-0
                    before:content-[''] before:absolute before:left-[-0.5px] before:top-[-24px] before:bottom-[-24px] before:w-[2px] before:bg-gray-300
                    after:content-['']  after:absolute  after:right-[-0.5px]  after:top-[-24px]  after:bottom-[-24px]  after:w-[2px]  after:bg-gray-300
                    "
                  />
                <p //Subheader Text
                    className="relative z-10 text-center 4xl:text-4xl 3xl:text-2xl lg:text-2xl">
                  A student-led tech club for builders,<span className="block">coders, and creatives.</span>
                </p>
              </div>
            </div>

        </div>
    );
}