"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function AboutGitaPage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">The Eternal Song</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        The <span className="gold-text italic">Bhagavad Gita</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                    <div className="prose prose-invert prose-lg max-w-none space-y-6 text-ivory/80 leading-relaxed font-light">
                        <p>
                            The Bhagavad Gita, often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata. It is a dialogue between Prince Arjuna and Lord Krishna, who serves as his charioteer.
                        </p>
                        <p>
                            Spanning 18 chapters, it addresses the moral and philosophical dilemmas faced by Arjuna on the battlefield of Kurukshetra. It covers topics ranging from the nature of the soul and the universe to the paths of knowledge, devotion, and selfless action.
                        </p>
                        <p>
                            Beyond its religious significance, the Gita is universally hailed as one of the most important philosophical works in human history, offering deep psychological insights into the human condition.
                        </p>
                        <blockquote className="border-l-4 border-gold pl-6 italic font-serif text-2xl text-ivory/90">
                            "When doubts haunt me, when disappointments stare me in the face, and I see not one ray of hope on the horizon, I turn to Bhagavad Gita and find a verse to comfort me." — Mahatma Gandhi
                        </blockquote>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
