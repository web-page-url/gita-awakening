"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { chaptersDetails } from "@/data/chapters";
import { ArrowLeft, Share2, Bookmark, Play, Headphones, Quote } from "lucide-react";
import Link from "next/link";

export default function ChapterDetail() {
    const params = useParams();
    const router = useRouter();
    const id = parseInt(params.id as string);
    const chapter = chaptersDetails.find((c) => c.id === id);

    if (!chapter) return <div className="min-h-screen flex items-center justify-center text-ivory">Chapter not found...</div>;

    return (
        <div className="min-h-screen bg-[#050B18] text-ivory font-sans relative overflow-hidden pb-24">
            {/* Sacred Aura Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b from-saffron/10 via-gold/5 to-transparent blur-[120px]" />
                <div className="absolute -bottom-48 left-0 w-full h-96 bg-gold/5 blur-[100px]" />
            </div>

            {/* Navigation Header */}
            <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#050B18]/40 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white/5 rounded-xl transition-colors text-ivory/60 hover:text-ivory"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <span className="text-[10px] text-gold font-black uppercase tracking-[0.3em]">Chapter {chapter.id}</span>
                        <h1 className="text-sm font-serif font-bold text-ivory/90">{chapter.name}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-2 hover:bg-white/5 rounded-xl text-ivory/60 hover:text-gold transition-all">
                        <Bookmark size={20} />
                    </button>
                    <button className="p-2 hover:bg-white/5 rounded-xl text-ivory/60 hover:text-gold transition-all">
                        <Share2 size={20} />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <span className="bhagwa-text font-serif italic text-2xl md:text-3xl block">
                            {chapter.tagline}
                        </span>
                        {(chapter as any).hindiTagline && (
                            <span className="text-gold/60 font-serif text-xl md:text-2xl block">
                                {(chapter as any).hindiTagline}
                            </span>
                        )}
                    </div>

                    <div className="space-y-4 mb-8">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-ivory leading-tight">
                            {chapter.title}
                        </h2>
                        {(chapter as any).hindiTitle && (
                            <h3 className="text-3xl md:text-5xl font-serif font-bold bhagwa-text opacity-80">
                                {(chapter as any).hindiTitle}
                            </h3>
                        )}
                    </div>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg md:text-2xl text-ivory/70 leading-relaxed font-light italic max-w-3xl mx-auto"
                >
                    "{chapter.description}"
                </motion.p>
            </section>

            {/* Audio Quick Access */}
            <section className="px-6 mb-20 max-w-5xl mx-auto z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-1 rounded-3xl bg-gradient-to-r from-gold/20 via-saffron/20 to-gold/20"
                >
                    <div className="bg-[#0A1125] p-6 md:p-10 rounded-[1.4rem] flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-6">
                            <div className="w-16 h-16 rounded-2xl bg-saffron/10 flex items-center justify-center text-saffron shadow-inner">
                                <Headphones size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-ivory mb-1">Divine Audio Mode</h3>
                                <p className="text-ivory/50 text-sm">Listen to the sacred chants of this chapter</p>
                            </div>
                        </div>
                        <button className="w-full md:w-auto px-10 py-4 bg-gold text-deep-blue rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-saffron hover:scale-105 transition-all shadow-xl shadow-gold/20 flex items-center justify-center gap-3">
                            <Play fill="currentColor" size={16} /> Start Chanting
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* Core Wisdom (Gems) */}
            <section className="px-6 space-y-24 max-w-5xl mx-auto relative z-10">
                {chapter.keyGems.map((gem, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -top-12 -left-8 text-[12rem] text-gold/5 font-serif select-none pointer-events-none">
                            <Quote />
                        </div>

                        <div className="relative space-y-12">
                            <div className="text-center space-y-6">
                                <span className="text-xs font-black text-gold/60 uppercase tracking-[0.4em]">Essential Verse {gem.verse}</span>
                                <h3 className="text-2xl md:text-4xl font-serif font-bold text-saffron leading-relaxed max-w-4xl mx-auto">
                                    {gem.sanskrit}
                                </h3>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                                <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest mb-6 border-b border-gold/10 pb-2 inline-block">The Meaning</h4>
                                    <div className="space-y-8">
                                        <p className="text-xl md:text-2xl text-ivory/80 leading-relaxed font-light">
                                            {gem.meaning}
                                        </p>
                                        {(gem as any).hindiMeaning && (
                                            <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed font-serif pt-8 border-t border-white/5">
                                                {(gem as any).hindiMeaning}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-gold/10 to-transparent border border-gold/10">
                                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest mb-6 border-b border-gold/10 pb-2 inline-block">The Soul Lesson</h4>
                                    <p className="text-xl md:text-2xl text-ivory font-serif italic leading-relaxed">
                                        "{gem.lesson}"
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Modern Application */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="p-12 md:p-20 rounded-[3rem] bg-gradient-to-b from-[#0A1125] to-black border border-white/5 text-center"
                >
                    <span className="text-saffron font-black uppercase tracking-[0.5em] text-[10px] mb-8 block">Modern Kurukshetra</span>
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory mb-10">Your Daily Warrior Application</h2>
                    <p className="text-xl md:text-3xl text-ivory/60 leading-relaxed font-light italic mb-12">
                        {chapter.modernApplication}
                    </p>
                    <Link
                        href="/ai-guide"
                        className="inline-flex items-center gap-3 text-gold font-bold hover:gap-4 transition-all"
                    >
                        Talk to Krishna about this <ArrowLeft className="rotate-180" size={18} />
                    </Link>
                </motion.div>
            </section>

            {/* Bottom Nav */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
                <Link
                    href={`/chapters/${id > 1 ? id - 1 : 1}`}
                    className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${id === 1 ? 'opacity-20 pointer-events-none' : 'hover:bg-white/5 text-ivory/60'}`}
                >
                    Previous
                </Link>
                <div className="w-px h-4 bg-white/10" />
                <Link
                    href={`/chapters/${id < 18 ? id + 1 : 18}`}
                    className={`px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${id === 18 ? 'opacity-20 pointer-events-none' : 'hover:bg-white/5 text-gold'}`}
                >
                    Next Chapter
                </Link>
            </div>
        </div>
    );
}

import { LucideIcon } from "lucide-react";
