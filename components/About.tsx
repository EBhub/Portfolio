import Link from "next/link";
import React from "react";

function AboutMe() {
    return (
        <div className="max-w-[1080px] pt-14 text-lg">
            <p>
                As a highly curious individual with a background in computer science and a passion
                for building and creating, I am well-equipped to tackle challenging projects and
                deliver exceptional results. My experience in the field of cryptocurrencies,
                including 5+ years of trading and a role as a research lead for a crypto investment
                fund, has honed my analytical skills and given me a deep understanding of the
                technology and its applications.
                <br />
                <br />I am a strong proponent of free and open-source software (FOSS) and am always
                eager to learn new skills and technologies. My successful completion of{" "}
                <Link href="https://ethernaut.openzeppelin.com/">
                    <span className="underline">Ethernaut</span>
                </Link>{" "}
                and{" "}
                <Link href="https://www.damnvulnerabledefi.xyz/">
                    <span className="underline">Damn Vulnerable DeFi</span>
                </Link>{" "}
                CTFs demonstrates my ability to independently learn new technologies, solve complex
                puzzles and think critically.
                <br />
                <br />
                With a desire to use my engineering and development skills to participate in
                building innovative products, I am seeking opportunities to work with smart and
                motivated individuals on challenging projects. I am confident in my ability to
                deliver exceptional results and am excited to see what new challenges and
                opportunities the future holds.
                <br />
            </p>
            <p className="pt-10 text-base">
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
