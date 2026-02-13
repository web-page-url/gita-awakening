"use client";

import React from "react";
import { motion } from "framer-motion";
import { lifeLessonsData } from "@/data/life-lessons";
import { ArrowLeft, Sparkles, ChevronRight, Zap, Shield, Target, Waves, Compass, Heart } from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
    Zap: <Zap size={32} />,
    Shield: <Shield size={32} />,
    Target: <Target size={32} />,
    Waves: <Waves size={32} />,
    Compass: <Compass size={32} />,
    Heart: <Heart size={32} />,
};

export default function LifeLessons() {
    return (
        <div className="min-h-screen bg-[#020617] text-ivory font-sans pb-32">
            {/* Theatrical Hero */}
            <section className="pt-40 pb-24 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-gold/10 via-saffron/5 to-transparent blur-[120px]" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative z-10 max-w-5xl mx-auto"
                >
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="h-px w-12 bg-gold/30" />
                        <span className="text-gold font-black tracking-[0.5em] uppercase text-[10px]">
                            Ancient Algorithms for Life
                        </span>
                        <div className="h-px w-12 bg-gold/30" />
                    </div>

                    <h1 className="text-6xl md:text-8xl font-serif font-black mb-8 leading-tight">
                        Wisdom for <br />
                        <span className="bhagwa-text italic">Modern Life</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-ivory/60 leading-relaxed font-light max-w-3xl mx-auto border-l-2 border-saffron/20 pl-8 text-left italic">
                        "Krishna didn't just speak to Arjuna on a battlefield; he spoke to you, across time, about the battles you face in your boardroom, your bedroom, and your own mind."
                    </p>
                </motion.div>
            </section>

            {/* Premium Grid */}
            <section className="px-6 max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lifeLessonsData.map((lesson, idx) => (
                        <Link href={`/life-lessons/${lesson.slug}`} key={lesson.slug}>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                whileHover={{ y: -12 }}
                                className="group relative p-10 rounded-[3rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-sm h-full"
                            >
                                {/* Card Aura */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${lesson.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-10">
                                        <div className="p-5 bg-gold/5 rounded-2xl text-gold group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-500 shadow-inner">
                                            {iconMap[lesson.icon] || <Sparkles size={32} />}
                                        </div>
                                        <div className="pt-2">
                                            <div className="w-2 h-2 rounded-full bg-saffron animate-pulse" />
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <h4 className="text-saffron font-bold text-xs uppercase tracking-[0.3em] mb-3 opacity-60">
                                            {lesson.hindiTitle}
                                        </h4>
                                        <h3 className="text-3xl font-serif font-bold text-ivory group-hover:text-gold transition-colors duration-500">
                                            {lesson.title}
                                        </h3>
                                    </div>

                                    <p className="text-ivory/50 text-lg leading-relaxed mb-10 font-light line-clamp-3">
                                        {lesson.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                                            Seek Guidance <ChevronRight size={14} />
                                        </span>
                                        <div className="text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                                            <Sparkles size={24} />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating Decor */}
                                <div className="absolute -bottom-6 -right-6 text-9xl opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 -rotate-12 group-hover:rotate-0 blur-[1px]">
                                    🕉️
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Call to Reflection */}
            <section className="mt-40 px-6 max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-16 rounded-[4rem] bg-gradient-to-b from-gold/5 to-transparent border border-gold/10"
                >
                    <h2 className="text-3xl font-serif font-bold text-ivory mb-6 italic">Still feeling lost?</h2>
                    <p className="text-ivory/60 mb-10 text-lg">Sometimes the specific answer you need is hidden in a personal conversation.</p>
                    <Link
                        href="/ai-guide"
                        className="px-12 py-5 bg-gold text-deep-blue rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-saffron hover:scale-105 transition-all shadow-xl shadow-gold/20 inline-flex items-center gap-3"
                    >
                        Talk to Krishna Directly
                    </Link>
                </motion.div>
            </section>
        </div>
    );
}
