"use client";

import React from "react";
import ChaptersGrid from "@/components/ChaptersGrid";
import { motion } from "framer-motion";

export default function Chapters() {
    return (
        <div className="flex flex-col w-full min-h-screen bg-ivory/30 dark:bg-black font-sans">
            <section className="pt-32 pb-16 px-4 text-center bg-deep-blue text-ivory relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold rounded-full blur-[120px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <span className="text-saffron font-medium tracking-[0.3em] uppercase text-sm mb-4 block">
                        The Eternal Dialogue
                    </span>
                    <h1 className="text-5xl sm:text-6xl font-serif font-bold mb-6">
                        The 18 Chapters of <span className="gold-text">Bhagavad Gita</span>
                    </h1>
                    <p className="text-lg text-ivory/70 leading-relaxed font-light max-w-2xl mx-auto">
                        Journey through the profound wisdom of Krishna's teachings, from the battlefield of Kurukshetra to the heights of spiritual realization.
                    </p>
                </motion.div>
            </section>

            <ChaptersGrid />

            <section className="py-24 px-4 text-center">
                <div className="max-w-3xl mx-auto bg-white dark:bg-deep-blue/20 p-12 rounded-[40px] border border-gold/10 shadow-2xl">
                    <h2 className="text-3xl font-serif font-bold mb-6 text-deep-blue dark:text-ivory">Want a guided path?</h2>
                    <p className="text-deep-blue/60 dark:text-ivory/60 mb-8 leading-relaxed">
                        Not sure where to start? Try our "Life Lessons" section to find chapters and verses based on your current state of mind.
                    </p>
                    <button className="px-8 py-4 bg-saffron text-white rounded-full font-bold shadow-lg shadow-saffron/20 hover:scale-105 transition-all">
                        Find My Path
                    </button>
                </div>
            </section>
        </div>
    );
}
