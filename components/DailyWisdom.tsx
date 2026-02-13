"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, BookOpen, Quote, Share2, Heart, Flame, Star } from "lucide-react";

const mockVerse = {
    verse: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    transliteration: "karmaṇy-evādhikāras te mā phaleṣu kadācana |\nmā karma-phala-hetur bhūr mā te saṅgo ’stv akarmaṇi ||",
    hindi: "आपका अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। आप कर्मों के फल हेतु मत बनिए और कर्म न करने में आपकी शक्ति न हो।",
    english: "You have a right to perform your prescribed duties, but you are not entitled to the fruits of your actions. Never consider yourself to be the cause of the results of your activities, and never be attached to not doing your duty.",
    chapter: 2,
    shloka: 47,
    applyText: "Focus on your current task with 100% effort, and let go of the anxiety about the outcome. True peace comes from the process, not the prize.",
};

export default function DailyWisdom() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [streak, setStreak] = useState(7);

    return (
        <section className="py-24 px-4 bg-ivory dark:bg-deep-blue/20 overflow-hidden">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 relative">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 text-saffron mb-4 font-bold border border-saffron/20"
                    >
                        <Sparkles size={18} className="animate-pulse" />
                        <span>Wisdom of the Day</span>
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-5xl font-serif font-bold text-deep-blue dark:text-ivory tracking-tight">
                            Divine Insight
                        </h2>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-2 text-saffron font-bold text-sm bg-white dark:bg-deep-blue p-2 px-4 rounded-xl shadow-sm"
                        >
                            <Flame size={16} fill="currentColor" />
                            <span>{streak} DAY STREAK</span>
                        </motion.div>
                    </div>
                </div>

                <motion.div
                    layout
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="relative rounded-[40px] bg-white dark:bg-deep-blue/40 border-2 border-gold/10 sacred-glow group"
                >
                    {/* Card Content */}
                    <div className="p-8 sm:p-16">
                        <div className="flex justify-between items-start mb-12">
                            <div className="flex flex-col">
                                <span className="text-saffron font-bold text-xs tracking-[0.2em] uppercase mb-1">Chapter {mockVerse.chapter}</span>
                                <span className="text-deep-blue dark:text-ivory font-serif text-3xl font-bold italic">Verse {mockVerse.shloka}</span>
                            </div>
                            <div className="flex gap-3">
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-ivory/50 dark:bg-deep-blue/50 rounded-2xl text-deep-blue/40 dark:text-ivory/40 hover:text-red-500 transition-colors">
                                    <Heart size={22} fill={isExpanded ? "currentColor" : "none"} />
                                </motion.button>
                                <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-ivory/50 dark:bg-deep-blue/50 rounded-2xl text-deep-blue/40 dark:text-ivory/40">
                                    <Share2 size={22} />
                                </motion.button>
                            </div>
                        </div>

                        <div className="space-y-10 text-center">
                            {/* Sanskrit - Enhanced Typography */}
                            <motion.div
                                layout
                                className="text-3xl sm:text-5xl font-bold font-serif text-deep-blue dark:text-ivory leading-[1.3] whitespace-pre-line tracking-tight px-4"
                            >
                                {mockVerse.verse}
                            </motion.div>

                            {/* Transliteration */}
                            <motion.p layout className="text-deep-blue/40 dark:text-ivory/40 italic font-sans text-lg sm:text-xl max-w-3xl mx-auto border-y border-gold/5 py-4">
                                {mockVerse.transliteration}
                            </motion.p>

                            {/* Meanings */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left pt-6">
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
                                    <h4 className="flex items-center gap-2 text-saffron font-bold text-xs uppercase tracking-widest mb-4">
                                        <BookOpen size={14} /> Meaning (Hindi)
                                    </h4>
                                    <p className="text-xl text-deep-blue/80 dark:text-ivory/80 font-light leading-relaxed">
                                        {mockVerse.hindi}
                                    </p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
                                    <h4 className="flex items-center gap-2 text-saffron font-bold text-xs uppercase tracking-widest mb-4">
                                        <Quote size={14} /> Meaning (English)
                                    </h4>
                                    <p className="text-xl text-deep-blue/80 dark:text-ivory/80 font-light leading-relaxed">
                                        {mockVerse.english}
                                    </p>
                                </motion.div>
                            </div>

                            {/* Celebrate Section (Dopamine Trigger) */}
                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        exit={{ scale: 0.8, opacity: 0 }}
                                        className="relative"
                                    >
                                        {/* Floating Lotus Particles */}
                                        <div className="absolute inset-0 pointer-events-none">
                                            {[...Array(6)].map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{
                                                        y: [-50, -150],
                                                        x: [0, (i % 2 === 0 ? 50 : -50)],
                                                        scale: [0, 1.5, 0],
                                                        opacity: [0, 1, 0]
                                                    }}
                                                    transition={{ duration: 2, ease: "easeOut" }}
                                                    className="absolute left-1/2 top-0 text-3xl"
                                                >
                                                    🪷
                                                </motion.div>
                                            ))}
                                        </div>

                                        <div className="mt-12 p-10 rounded-[40px] bg-gradient-to-br from-gold/10 to-saffron/5 border-2 border-gold/20 text-left relative overflow-hidden group/box">
                                            {/* Background Animated Om */}
                                            <div className="absolute top-0 right-0 text-[10rem] opacity-[0.03] transition-transform group-hover/box:scale-150 group-hover/box:rotate-12 duration-1000">🕉️</div>

                                            <h4 className="flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-[0.3em] mb-4">
                                                <Star size={16} fill="currentColor" /> Practical Wisdom
                                            </h4>
                                            <p className="text-2xl text-deep-blue dark:text-ivory leading-relaxed font-medium italic">
                                                "{mockVerse.applyText}"
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212, 175, 55, 0.4)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="px-12 py-5 bg-gradient-to-r from-deep-blue to-[#1a2f5a] dark:from-ivory dark:to-white dark:text-deep-blue text-ivory rounded-full font-bold text-xl shadow-2xl transition-all relative overflow-hidden group/btn"
                                >
                                    <span className="relative z-10">
                                        {isExpanded ? "Blessings Received" : "Reflect & Awaken"}
                                    </span>
                                    <div className="absolute inset-0 bg-gold translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 pointer-events-none" />
                                </motion.button>
                            </div>
                        </div>
                    </div>

                    {/* Magnetic Aura Background */}
                    <div className="absolute -top-20 -right-20 w-80 h-80 bg-gold/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-saffron/10 rounded-full blur-[100px] pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
