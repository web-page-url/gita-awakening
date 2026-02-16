"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function VisionPage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">The Future</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        Our <span className="gold-text italic">Vision</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-ivory/80 leading-relaxed font-light">
                        <p className="text-2xl font-serif italic text-gold/80">
                            "To create a world where every individual has the clarity and courage of Arjuna, guided by the timeless wisdom of the Divine."
                        </p>
                        <p>
                            We envision a future where spiritual intelligence is as valued as emotional and intellectual intelligence. A world where people don't run away from their Kurukshetras, but face them with absolute poise and detachment from results.
                        </p>
                        <p>
                            Gita Awakening aims to become the global standard for accessible, digital spiritual guidance—making the Gita's wisdom as ubiquitous as a smartphone.
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
