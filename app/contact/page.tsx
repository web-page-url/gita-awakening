"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#050B18] text-ivory text-center">
            <Navbar />
            <main className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-12"
                >
                    <div className="space-y-4">
                        <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">Reach Out</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                            Connect with <span className="gold-text italic">Us</span>
                        </h1>
                        <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                    </div>

                    <div className="max-w-xl mx-auto space-y-8">
                        <p className="text-ivory/70 text-lg leading-relaxed font-light">
                            Whether you have a suggestion, a question about the Gita, or simply want to share your journey of awakening, we are here to listen.
                        </p>

                        <div className="p-10 rounded-[3rem] bg-white/[0.03] border border-white/10 space-y-6 shadow-2xl">
                            <div className="space-y-1">
                                <span className="text-gold text-xs font-black uppercase tracking-widest block">Direct Message</span>
                                <a href="mailto:anubhavchaudhary458@gmail.com" className="text-3xl md:text-4xl font-serif font-bold text-ivory hover:text-gold transition-colors block">
                                    anubhavchaudhary458@
                                </a>
                            </div>

                            <div className="pt-8 border-t border-white/5 space-y-1">
                                <span className="text-gold text-xs font-black uppercase tracking-widest block">Connect with our Creator</span>
                                <a
                                    href="https://www.linkedin.com/in/anubhav-chaudhary-4bba7918b/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-2xl md:text-3xl font-serif font-bold text-ivory hover:text-gold transition-colors block"
                                >
                                    Anubhav Chaudhary
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
