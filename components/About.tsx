import React from "react";

function AboutMe() {
    return (
        <div className="max-w-[1080px] pt-14 text-xl">
            <p>
                Hello there! I'm Elmedin, a software engineer and proponent for free open-source
                software (FOSS).
                <br /> <br />
                I'm currently looking for a new role where I can work on challenging problems with
                smart people. I'm passionate about technology, finance, and art. I also quite enjoy
                staring at my screen while coding in a constant state of flow.
                <br /> <br />
                Below are some of the technologies and tools I've worked with, and a few topics I would like
                to learn more about. If you'd like to chat, feel free to send me an e-mail.
                <br /> <br />
            </p>
            <p className="pt-10 text-lg">
                Technologies I am familiar with and enjoy using: <br />
                <ul className="list-disc list-inside">
                    <li>{"{Java,Type}"}Script </li>
                    <li>Solidity</li>
                    <li>Next.js</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>SQL</li>
                </ul>
                <br />
                Technologies and topics I would like to learn more about: <br />
                <ul className="list-disc list-inside">
                    <li>Rust</li>
                    <li>Go</li>
                    <li>GraphQL</li>
                    <li>C++</li>
                    <li>Machine learning</li>
                    <li>Smart contract security</li>
                </ul>
            </p>
        </div>
    );
}

export default AboutMe;
