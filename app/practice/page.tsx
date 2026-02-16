"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function PracticePage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">Sadhana</span>
                    <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        How to <span className="gold-text italic">Practice</span>
                    </h1>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-gold uppercase tracking-widest">Morning Reflection</h3>
                            <p className="text-ivory/70 font-light">Start your day with the 'Wisdom of the Day'. Spend 5 minutes reflecting on how the day's verse applies to your upcoming tasks.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-gold uppercase tracking-widest">Karma Yoga at Work</h3>
                            <p className="text-ivory/70 font-light">Practice 'Nishkama Karma'—performing your work with 100% excellence while consciously letting go of the anxiety about outcomes.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-gold uppercase tracking-widest">Evening Audio Chants</h3>
                            <p className="text-ivory/70 font-light">Use our Audio Mode to listen to Sanskrit chants before bed to calm the mind and realign with your spiritual core.</p>
                        </div>
                        <div className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 space-y-4">
                            <h3 className="text-xl font-bold text-gold uppercase tracking-widest">AI Guided Dialogues</h3>
                            <p className="text-ivory/70 font-light">Whenever you face a dilemma, talk to our AI Krishna Guide to receive perspective based purely on the Gita's teachings.</p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
