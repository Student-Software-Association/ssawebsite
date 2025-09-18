"use client"
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
const NavBar = () => {

    const [showNav, setShowNav] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {//Scrolling down
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
    }, [lastScrollY]);

    return (
        <div
            className={`fixed top-0 left-0 z-50
            w-full flex flex-row justify-between bg-black mx-auto 
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
                className="justify-end m-6 text-white text-sm max-xl:hidden"
            >

                <Link
                    href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join the SSA Discord"
                    className='underline mr-4 hover:font-bold hover:text underline-offset-[22%]'
                >
                    Join the Discord
                </Link>
                <span>
                    <button className='rounded-4xl border-2 p-3 px-6 border-white
                     hover:bg-white hover:cursor-pointer hover:border-gray-500 hover:text-black hover:shadow-md transition-colors duration-300'>
                        Contact Us!
                    </button>
                </span>

            </div>
            
        </div>
    );
}
export default NavBar;