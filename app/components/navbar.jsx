"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between bg-white" role="navigation" aria-label="Main navigation">
                <div className="flex items-center gap-3">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/images/favicon-logo.png" alt="Learning Impact Zambia" width={40} height={10} className="logo-img" />
                    </Link>
                </div>

                <button
                    className="xl:hidden p-2 rounded-md border border-transparent hover:border-gray-200"
                    aria-controls="primary-navigation"
                    aria-expanded={open}
                    onClick={() => setOpen((s) => !s)}
                    aria-label="Toggle navigation"
                >
                    <svg className="h-6 w-6 text-gray-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 6h18M3 12h18M3 18h18" />
                    </svg>
                </button>

                <div id="primary-navigation" className={`window-view w-full xl:flex xl:items-center xl:w-auto`}>
                    <ul className="flex gap-6 text-sm items-center"> 
                        <li>
                            <Link href="/" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Home</Link>
                        </li>
                        <li><Link href="#our-mission" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Our Mission</Link></li>
                        <li><Link href="#our-vision" className="block py-2 xl:py-0 text-gray-700 hover:text-gray-900">Our Vision</Link></li>
                        <li>
                            <Link href="/contact-us" className="inline-block btn border border-gray-400 mt-2 xl:mt-0 hover:text-white transition-all hover:bg-gray-900">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={`${open ? "block" : "hidden"}`}>
                <div id="primary-navigation" className={` mobile-view`}>
                    <ul className="gap-6 text-sm"> 
                        <li>
                            <Link href="/" className="block py-2 xl:py-0 ">Home</Link>
                        </li>
                        <li><Link href="#our-mission" className="block py-2 xl:py-0">Our Mission</Link></li>
                        <li><Link href="#our-vision" className="block py-2 xl:py-0 ">Our Vision</Link></li>
                        <li>
                            <Link href="/contact-us" className="inline-block btn border border-gray-400 mt-2 xl:mt-0 hover:text-white transition-all hover:bg-gray-900">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    );
}