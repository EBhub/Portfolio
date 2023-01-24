import Navbar from "@/components/Navbar";
import NavbarAbout from "@/components/NavbarAbout";
import NavbarMail from "@/components/NavbarMail";
import Projects from "@/components/Projects";
import Head from "next/head";
import React from "react";

function Work() {
    return (
        <>
            <Head>
                <title>Hello There/work</title>
                <meta name="description" content="Portfolio" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex place-items-center justify-center min-h-screen w-full bg-fixed bg-center bg-cover custom-img2 ">
                <div className="text-white z-20 p-5">
                    <h1 className="text-7xl">
                        A showcase of my past work<div className="inline animate-blink">_</div>
                    </h1>
                    <Navbar />
                    <NavbarMail />
                    <NavbarAbout />
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default Work;
