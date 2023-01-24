import React from "react";
import Image from "next/image";
import Link from "next/link";

function Projects() {
    return (
        <div className="w-full pt-20">
            <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full">
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                    <Link href="https://github.com/HFT-protocol/protocol/blob/5a4d34f20aaf8bddd9d0389838a57167753b2ad5/HFTtoken.sol">
                        <div className="p-6 bg-blue-500/60 hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src="/fileFull.png" width={64} height={64} alt="/" />
                                </div>
                                <div className="col-span-3">
                                    <h1 className="text-xl">BEP20 Smart contract</h1>
                                    <p className="">
                                        <br />
                                        Participated in the development of a BEP20 smart contract
                                        that uses a reflection-based tokenomics model.
                                    </p>
                                    <h6 className="text-sm text-right">
                                        <br />
                                        Solidity Web3.js Slither
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link href="https://dune.com/Cryptano">
                        <div className="p-6 bg-blue-500/60 hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src="/fileFull.png" width={64} height={64} alt="/" />
                                </div>
                                <div className="col-span-3">
                                    <h1 className="text-xl">Dune Analytics</h1>
                                    <p className="">
                                        <br />
                                        Performed data analysis and created open-source data
                                        dashboards for the blockchain space.
                                    </p>
                                    <h6 className="text-sm text-right">
                                        <br />
                                        SQL Python
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="p-6 bg-blue-500/60 hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-4 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/file.png" width={64} height={64} alt="/" />
                            </div>
                            <div className="col-span-3">
                                <h1 className="text-xl">QR check-in app</h1>
                                <p className="">
                                    <br />
                                    Developed a QR check-in app that also allows purchasing tickets
                                    and managing visitor analytics.
                                </p>
                                <h6 className="text-sm text-right">
                                    <br />
                                    Javascript Node.js MongoDB Express
                                </h6>
                            </div>
                        </div>
                    </div>
                    <Link href="https://github.com/EBhub/Maze-Solving">
                        <div className="p-6 bg-blue-500/60 hover:scale-105 ease-in duration-300">
                            <div className="grid grid-cols-4 gap-4 justify-center items-center">
                                <div className="m-auto">
                                    <Image src="/fileFull.png" width={64} height={64} alt="/" />
                                </div>
                                <div className="col-span-3">
                                    <h1 className="text-xl">Machine learning Maze-solvers</h1>
                                    <p className="">
                                        <br />
                                        Created maze-solvers using Reinforcement Learning, Genetic
                                        Algorithms and Neural Networks.
                                    </p>
                                    <h6 className="text-sm text-right">
                                        <br />
                                        Java
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Projects;
