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
            
            <div
                id="Logo"
                className="justify-start my-4 mx-6"
            >
                <Image
                    src="/logo.svg"
                    alt="SSA Logo"
                    width={58}
                    height={58}
                    className=""
                />
            </div>
            <div 
                id="NavLinks"
                className="
                absolute left-0 right-0 
                flex flex-row justify-center 
                gap-x-6 my-8 mx-auto w-fit 
                items-center text-white text-[20px]"
            >
                <Link href="/student-projects">Student Projects</Link>
                <Link href="/resources">Resources</Link>
                <Link href="/events">Events</Link>
                <Link href="/blogs">Blogs</Link>
                <Link href="/about">About</Link>
            </div>
            <div 
                id="RightButtons"
                className="justify-end m-6 text-white text-sm"
            >

                <Link
                    href={`https://discord.gg/${process.env.NEXT_PUBLIC_DISCORD_INVITE_CODE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join the SSA Discord"
                    className='underline mr-4'
                >
                    Join the Discord
                </Link>
                <span>
                    <button className='rounded-2xl border-2 p-2 border-white shadow-xl'>
                        Contact Us
                    </button>
                </span>
            </div>
            
        </div>
    );
}
export default NavBar;