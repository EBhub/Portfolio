import React from "react";

function AboutMe() {
    return (
        <div className="max-w-[1080px] pt-14 text-xl">
            <p>
                Hello there! I'm Elmedin, a software engineer and proponent for free open-source
                software (FOSS).
                <br /> <br />
                I'm passionate about technology, finance, and security. I also quite enjoy
                staring at my screen.
            </p>
            <p className="pt-10 text-lg">
                Technologies I am familiar with and enjoy using: <br />
                <ul className="list-disc list-inside">
                    <li>Solidity</li>
                    <li>Python</li>
                    <li>{"{Java,Type}"}Script </li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
                <br />
                Technologies and topics I would like to learn more about: <br />
                <ul className="list-disc list-inside">
                    <li>Smart contract security</li>
                    <li>Machine learning</li>
                    <li>Rust</li>
                    <li>Go</li>
                    <li>C++</li>
                </ul>
            </p>
            <p>
                <br/>
                If you'd like to chat, feel free to send me an e-mail.</p>
        </div>
    );
}

export default AboutMe;
