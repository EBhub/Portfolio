import AboutMe from "@/components/About";
import Navbar from "@/components/Navbar";
import NavbarMail from "@/components/NavbarMail";
import NavbarWork from "@/components/NavbarWork";
import Head from "next/head";
import React from "react";

function About() {
    return (
        <>
            <Head>
                <title>Hello There/about</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex place-items-center justify-center min-h-screen w-full bg-fixed bg-center bg-cover custom-img2 ">
                <div className="text-white z-20 p-5">
                    <h1 className="text-7xl">
                        A little bit about myself<div className="inline animate-blink">_</div>
                    </h1>
                    <Navbar />
                    <NavbarMail />
                    <NavbarWork />
                    <AboutMe />
                </div>
            </div>
        </>
    );
}

export default About;
