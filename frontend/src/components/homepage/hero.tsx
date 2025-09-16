"use client";
import LetterGlitch from "./LetterGlitch";
export default function Hero() {
    return (
        <div 
        className="relative w-full h-[calc(100vh)] overflow-hidden"
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
                <h1 className="text-8xl text-white font-bold text-center">
                    Student Software <span className="block">Association</span>
                </h1>
            </div>
            <div //HeroSubheader 
                className="absolute left-0 right-0 top-[65%] flex justify-center z-10 px-4">
                <div className="relative inline-block border-1 border-gray-300 px-6 py-3 text-white text-xl rounded-none bg-black/30 backdrop-blur-[2px]">
                <span // Top & Bottom extensions aligned to border center
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    before:content-[''] before:absolute before:top-[-0.5px] before:left-[-16px] before:right-[-16px] before:h-px before:bg-gray-300
                    after:content-['']  after:absolute  after:bottom-[-0.5px] after:left-[-16px] after:right-[-16px] after:h-px  after:bg-gray-300
                  "
                />
                <span // Left & Right extensions aligned to border center
                  aria-hidden="true"
                  className="
                    pointer-events-none absolute inset-0
                    before:content-[''] before:absolute before:left-[-0.5px] before:top-[-16px] before:bottom-[-16px] before:w-px before:bg-gray-300
                    after:content-['']  after:absolute  after:right-[-0.5px]  after:top-[-16px]  after:bottom-[-16px]  after:w-px  after:bg-gray-300
                  "
                />
                <p //Subheader Text
                    className="relative z-10 text-center">
                  A student-led tech club for builders,<span className="block">coders, and creatives.</span>
                </p>
              </div>
            </div>

        </div>
    );
}