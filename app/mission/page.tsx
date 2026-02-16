"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function MissionPage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">The Path</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        Our <span className="gold-text italic">Mission</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-ivory/80 leading-relaxed font-light">
                        <ul className="space-y-8 list-none p-0">
                            <li className="flex gap-4 items-start">
                                <span className="text-gold text-2xl font-serif">01.</span>
                                <div>
                                    <h4 className="text-xl font-bold text-ivory mb-2 uppercase tracking-widest">Democratize Wisdom</h4>
                                    <p>Making the profound teachings of the Bhagavad Gita accessible, understandable, and relatable to everyone, regardless of their background.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-gold text-2xl font-serif">02.</span>
                                <div>
                                    <h4 className="text-xl font-bold text-ivory mb-2 uppercase tracking-widest">Digital Integration</h4>
                                    <p>Utilizing state-of-the-art technology, like AI and immersive audio, to weave spiritual practice into the fabric of modern daily routines.</p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <span className="text-gold text-2xl font-serif">03.</span>
                                <div>
                                    <h4 className="text-xl font-bold text-ivory mb-2 uppercase tracking-widest">Foster Resilience</h4>
                                    <p>Empowering individuals to build internal strength, mental peace, and a sense of purpose through the 'Yoga of Action'.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
