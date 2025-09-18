"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const NavBar = () => {

    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY && !showOverlay) {//Scrolling down
                setShowNav(false);
            } else {//Scrolling up
                setShowNav(true);
            }
            setLastScrollY(window.scrollY);
        };
        
        window.addEventListener("scroll", handleScroll);    

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, showOverlay]);

    // Handle overlay fade-in after rotation
    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (mobileMenuOpen) {
            // Match the rotation duration (300ms)
            timer = setTimeout(() => setShowOverlay(true), 300);
        } else {
            setShowOverlay(false);
        }
        return () => clearTimeout(timer);
    }, [mobileMenuOpen]);


    return (
        <div
            className={`fixed top-0 left-0 z-50
            w-full flex flex-row justify-between bg-black mx-auto items-center
            ${showNav ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}
        >
            
            <div //Logo
                className="justify-start my-4 mx-6"
            >
                <Link href="/" className="group inline-flex items-center gap-4">
                    <Image
                        src="/logo.svg"
                        alt="SSA Logo"
                        width={58}
                        height={58}
                        className="xl:cursor-pointer xl:transform-gpu xl:transition-transform xl:duration-250 xl:ease-in-out xl:group-hover:rotate-[360deg]"
                    />
                    <span className="relative inline-block select-none whitespace-nowrap">
                        <span className="text-white font-semibold opacity-0 items-center">
                            Student Software <span className="block">Association</span>
                        </span>
                        <span className="absolute left-0 top-0 h-full w-0 overflow-hidden items-center text-[16px] font-semibold text-white xl:transition-[width] xl:duration-700 xl:ease-out xl:group-hover:w-full">
                            Student Software <span className="block">Association</span>
                        </span>
                    </span>
                </Link>
            </div>
            <div //NavLinks
                className="max-xl:hidden
                absolute left-0 right-0 
                flex flex-row justify-center 
                gap-x-6 my-8 mx-auto w-fit 
                items-center text-white text-[20px]"
            >
                {/*Orignal link line looked like
                <Link className="hover:underline" href="/resources">Resources</Link>
                */}
                <Link href="/student-projects" className="group inline-block">
                    <span className="relative inline-block">
                        Student Projects
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                    </span>
                </Link>
                <Link href="/resources" className="group inline-block">
                    <span className="relative inline-block">
                        Resources
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
                    </span>
                </Link>
                <Link href="/events" className="group inline-block">
                    <span className="relative inline-block">
                        Events
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                </Link>
                <Link href="/blogs" className="group inline-block">
                    <span className="relative inline-block">
                        Blogs
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                </Link>
                <Link href="/about" className="group inline-block">
                    <span className="relative inline-block">
                        About
                        <span className="absolute left-0 -bottom-1 h-[2px] w-full bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                </Link>
            </div>
            <div //RightButtons
                className="justify-end m-6 text-white text-sm"
            >

                <Link
                    href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join the SSA Discord"
                    className='underline mr-4 hover:font-bold hover:text underline-offset-[22%] max-xl:hidden'
                >
                    Join the Discord
                </Link>
                <span>
                    <button className='max-xl:hidden rounded-4xl border-2 p-3 px-6 border-white
                     hover:bg-white hover:cursor-pointer hover:border-gray-500 hover:text-black hover:shadow-md transition-colors duration-300'>
                        Contact Us!
                    </button>
                </span>
                <span //MobileMenuButton
                className="xl:hidden max-xl:visible mr-32">
                    <button
                        className="relative block xl:hidden w-12 h-8 bg-transparent border-none p-0 focus:outline-none group"
                        aria-label="Open menu"
                        onClick={() => setMobileMenuOpen(prev => !prev)}
                    >
                        {/* Top line */}
                        <span
                          className={`absolute left-8 top-5 w-20 h-1.5 bg-white rounded
                            transition-transform duration-300 group-hover:h-2.5 hover:cursor-pointer
                            transform origin-right
                            ${mobileMenuOpen ? '-rotate-90' : 'rotate-0'}
                          `}
                        />
                        {/* Bottom line */}
                        <span
                          className={`absolute left-16 top-10 w-12 h-1.5 bg-white rounded
                            transition-transform duration-300 group-hover:h-2.5 hover:cursor-pointer
                            transform origin-right
                            ${mobileMenuOpen ? '-rotate-90' : 'rotate-0'}
                          `}
                        />
                    </button>
                </span>

            </div>
                {showOverlay && /*Mobile Navigation Overlay */(
                  <div
                    className="xl:hidden fixed top-0 right-0 z-40
                      bg-white backdrop-blur-md
                      border-l-2 border-b-2 rounded-4xl rounded-tr-none border-white
                      flex flex-col items-center pt-8 px-6
                      overflow-hidden
                      transition-opacity duration-300
                      opacity-100"
                  >
                    <button
                      className="absolute top-6 right-6 text-black text-3xl hover:cursor-pointer"
                      aria-label="Close menu"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      &times;
                    </button>
                    <nav className="flex flex-col gap-4 text-black text-2xl w-full py-0">
                    <Link href="/student-projects" onClick={() => setMobileMenuOpen(false)} className="hover:underline font-semibold3">Student Projects↗</Link>
                    <div className="w-full h-px bg-black/20 my-1" />
                    <Link href="/resources" onClick={() => setMobileMenuOpen(false)} className="hover:underline">Resources↗</Link>
                    <div className="w-full h-px bg-black/20 my-1" />
                    <Link href="/events" onClick={() => setMobileMenuOpen(false)} className="hover:underline">Events↗</Link>
                    <div className="w-full h-px bg-black/20 my-1" />
                    <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="hover:underline">Blogs↗</Link>
                    <div className="w-full h-px bg-black/20 my-1" />
                    <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:underline">About↗</Link>
                    <div className="w-full h-px bg-black/20 my-1" />
                      <div className="mb-2 w-full flex justify-between items-center pt-0">
                        <Link
                          href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMobileMenuOpen(false)}
                          className=" md:text-base max-md:text-sm px-6 py-1 bg-white border-black text-black underline hover:text-gray-600 transition-colors duration-300"
                        >
                          Join the Discord
                        </Link>
                        <Link href="mailto:admin@studentsoftware.org"
                        className="md:text-base max-md:text-sm rounded-2xl border-2 px-6 py-3 bg-black border-black text-white hover:text-black hover:bg-gray-200 transition-colors duration-300">
                          Contact Us!
                        </Link>
                      </div>
                    </nav>
                  </div>
                )}
        </div>
    );
}
export default NavBar;