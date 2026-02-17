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

import { useVoice } from "@/hooks/useVoice";
import { Volume2, VolumeX } from "lucide-react";

export default function DailyWisdom() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [streak, setStreak] = useState(7);
    const { speak, isSpeaking } = useVoice();

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
                    className="relative rounded-[50px] bg-white dark:bg-[#0A1125] border border-white/5 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.4)] group"
                >
                    <div className="flex flex-col lg:flex-row min-h-[600px]">
                        {/* Image Side - Cinematic Presence */}
                        <div className="w-full lg:w-1/2 relative overflow-hidden h-[300px] lg:h-auto">
                            <img
                                src="/gita-awakening-1.0.jpg"
                                alt="Divine Wisdom"
                                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
                            />
                            {/* Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1125] via-[#0A1125]/20 to-transparent lg:bg-gradient-to-r" />
                            <div className="absolute inset-0 bg-black/10" />

                            {/* Floating Quote Icon & Voice Button */}
                            <div className="absolute top-8 left-8 flex gap-4">
                                <div className="w-16 h-16 rounded-2xl bg-gold/20 backdrop-blur-xl border border-gold/30 flex items-center justify-center text-gold shadow-2xl">
                                    <Quote size={32} />
                                </div>
                                <button
                                    onClick={() => speak(mockVerse.verse, "daily-sans", "hi")}
                                    className={`w-16 h-16 rounded-2xl backdrop-blur-xl border flex items-center justify-center shadow-2xl transition-all ${isSpeaking === "daily-sans" ? "bg-gold text-deep-blue border-gold" : "bg-white/10 text-gold border-white/20 hover:bg-white/20"}`}
                                >
                                    {isSpeaking === "daily-sans" ? <VolumeX size={28} /> : <Volume2 size={28} />}
                                </button>
                            </div>
                        </div>

                        {/* Content Side - Sacred Text */}
                        <div className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-white/5 to-transparent">
                            <div className="flex justify-between items-start mb-8">
                                <div className="space-y-1">
                                    <span className="text-saffron font-black uppercase tracking-[0.3em] text-[10px] block">Ancient Scripture</span>
                                    <h3 className="text-deep-blue dark:text-ivory font-serif text-3xl font-bold italic">Chapter {mockVerse.chapter}, Verse {mockVerse.shloka}</h3>
                                </div>
                                <div className="flex gap-2">
                                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-3 bg-deep-blue/5 dark:bg-white/5 rounded-2xl text-deep-blue/40 dark:text-ivory/40 hover:text-red-500 transition-colors">
                                        <Heart size={20} />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <div className="relative">
                                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-gold to-transparent opacity-30" />
                                    <p className="text-3xl sm:text-4xl font-serif font-black text-deep-blue dark:text-ivory leading-[1.3] tracking-tight">
                                        {mockVerse.verse}
                                    </p>
                                </div>

                                <p className="text-deep-blue/50 dark:text-ivory/50 italic font-sans text-lg border-l border-gold/20 pl-4 py-2">
                                    {mockVerse.transliteration}
                                </p>

                                <div className="space-y-6 pt-4">
                                    <div className="group/item relative">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="flex items-center gap-2 text-saffron font-black text-[10px] uppercase tracking-widest opacity-60 group-hover/item:opacity-100 transition-opacity">
                                                <BookOpen size={14} /> Essence
                                            </h4>
                                            <button
                                                onClick={() => speak(mockVerse.english, "daily-eng", "en")}
                                                className={`p-1.5 rounded-lg transition-all ${isSpeaking === "daily-eng" ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold"}`}
                                            >
                                                {isSpeaking === "daily-eng" ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                            </button>
                                        </div>
                                        <p className="text-lg text-deep-blue/80 dark:text-ivory/80 font-light leading-relaxed italic">
                                            "{mockVerse.english}"
                                        </p>
                                    </div>
                                </div>

                                {/* Practical Wisdom Toggle Area */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="mt-8 p-8 rounded-[32px] bg-gold/5 border border-gold/20 relative">
                                                <div className="absolute top-4 right-6 text-5xl opacity-[0.05] pointer-events-none">🕉️</div>
                                                <div className="flex justify-between items-center mb-3">
                                                    <h4 className="text-gold font-black text-[10px] uppercase tracking-widest">Practical Application</h4>
                                                    <button
                                                        onClick={() => speak(mockVerse.applyText, "daily-apply", "en")}
                                                        className={`p-1.5 rounded-lg transition-all ${isSpeaking === "daily-apply" ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold"}`}
                                                    >
                                                        {isSpeaking === "daily-apply" ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                                    </button>
                                                </div>
                                                <p className="text-xl text-deep-blue dark:text-ivory leading-relaxed font-medium">
                                                    {mockVerse.applyText}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="pt-8">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setIsExpanded(!isExpanded)}
                                        className="w-full py-5 bg-deep-blue dark:bg-ivory dark:text-deep-blue text-white rounded-2xl font-black text-lg shadow-xl hover:shadow-gold/20 transition-all flex items-center justify-center gap-3 group"
                                    >
                                        {isExpanded ? "Blessings Received" : "Reflect & Awaken"}
                                        <motion.span animate={{ x: isExpanded ? 0 : [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                                            <Sparkles size={20} className="text-gold" />
                                        </motion.span>
                                    </motion.button>
                                </div>
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
