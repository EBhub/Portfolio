import React from "react";
import Navbar from "@/components/Navbar";
import NavbarAbout from "@/components/NavbarAbout";
import NavbarMail from "@/components/NavbarMail";
import NavbarWork from "@/components/NavbarWork";

function Hero() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-fixed bg-center bg-cover custom-img">
            <div className="p-5 text-white z-20">
                <h1 className="text-7xl">
                    Hello there... I am Elmedin<div className="inline animate-blink">_</div>
                </h1>
                <Navbar />
                <NavbarMail />
                <NavbarWork />
                <NavbarAbout />
            </div>
        </div>
    );
}

export default Hero;
