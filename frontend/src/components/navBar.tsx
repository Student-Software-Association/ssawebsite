"use client"

import { useState, useEffect } from "react";
import Logo from "./nav/Logo";
import NavLinks from "./nav/NavLinks";
import RightButtons from "./nav/RightButtons";
import MobileMenu from "./nav/MobileMenu";

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
            className={`fixed top-0 left-0 z-50 px-4 py-1
            w-full flex flex-row justify-between bg-black/10 mx-auto items-center 
            ${showNav ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300`}
        >
            <Logo />
            <NavLinks />
            <RightButtons 
                mobileMenuOpen={mobileMenuOpen} 
                setMobileMenuOpen={setMobileMenuOpen} 
            />
            <MobileMenu 
                showOverlay={showOverlay} 
                setMobileMenuOpen={setMobileMenuOpen} 
            />
        </div>
    );
}
export default NavBar;