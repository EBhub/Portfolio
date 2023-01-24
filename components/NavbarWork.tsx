import Link from "next/link";
import React from "react";

function NavbarWork() {
    return (
        <div>
            <div>
                <ul>
                    <li>
                        <Link href="/work">
                            <button
                                className="text-5xl bg-gradient-to-r from-blue-500 to-blue-500
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]"
                            >
                                /work
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavbarWork;
