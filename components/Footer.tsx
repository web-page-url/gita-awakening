"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = {
    about: [
        { name: "About", href: "/about" },
        { name: "Vision", href: "/vision" },
        { name: "Mission", href: "/mission" },
    ],
    explore: [
        { name: "Chapters", href: "/chapters" },
        { name: "Daily Wisdom", href: "/daily-wisdom" },
        { name: "Audio", href: "/audio-mode" },
    ],
    resources: [
        { name: "About Bhagavad Gita", href: "/about-gita" },
        { name: "How to Practice", href: "/practice" },
        { name: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    const pathname = usePathname();

    // Hide footer on AI Guide page for immersive chat experience
    if (pathname === "/ai-guide") return null;

    return (
        <footer className="bg-deep-blue text-ivory py-16 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-3xl">🕉️</span>
                            <span className="font-serif text-2xl font-bold tracking-tight">
                                Gita <span className="gold-text">Awakening</span>
                            </span>
                        </div>
                        <p className="text-ivory/60 max-w-xs leading-relaxed">
                            A daily companion for the modern warrior, bringing ancient wisdom to the digital age.
                        </p>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h3 className="font-serif text-xl font-semibold mb-6 text-gold">About</h3>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.about.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-ivory/70 hover:text-saffron transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-semibold mb-6 text-gold">Explore</h3>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-ivory/70 hover:text-saffron transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-semibold mb-6 text-gold">Resources</h3>
                        <ul className="flex flex-col gap-4">
                            {footerLinks.resources.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-ivory/70 hover:text-saffron transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gold/20 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-ivory/40 text-sm">
                            &copy; {new Date().getFullYear()} Gita Awakening. Made with devotion for the modern warrior.
                        </p>
                        <p className="text-ivory/60 text-sm">
                            Created by - <a href="https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-saffron transition-colors font-bold">Anubhav</a>
                        </p>
                    </div>
                    <div className="flex items-center gap-4 opacity-50 text-xl italic font-serif">
                        <span>Yatha icchasi tathā kuru</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
