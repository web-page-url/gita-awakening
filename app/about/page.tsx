"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">The Awakening</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        About <span className="gold-text italic">Gita Awakening</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-ivory/80 leading-relaxed font-light">
                        <p>
                            Gita Awakening is born from a desire to bridge the gap between ancient spiritual wisdom and the complexities of modern life. We believe that the teachings of the Bhagavad Gita are not just historical texts, but living, breathing guides for the modern soul.
                        </p>
                        <p>
                            In a world designed to distract and overwhelm, Gita Awakening provides a sanctuary of clarity. Our platform translates the profound dialogues between Krishna and Arjuna into actionable insights for the daily battles we all face—be it in our careers, relationships, or inner selves.
                        </p>
                        <p>
                            Every verse, every audio chant, and every AI-guided interaction is crafted to trigger a moment of reflection and a step toward personal mastery.
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
