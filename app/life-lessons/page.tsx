"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Target, Zap, Waves, Compass, Heart, ArrowLeft, Send, Sparkles } from "lucide-react";

const lessons = [
    {
        id: "overthinking",
        title: "Overthinking",
        icon: <Zap size={40} />,
        description: "When the mind becomes a storm, find the eye of silence.",
        verse: "तस्य संजनयन् हर्षं कुरुवृद्ध: पितामह: | सिंहनादं विनद्योच्चै: शङ्खं दध्मौ प्रतापवान् ||",
        solution: "Practice detachment from the outcome. Focus only on the 'Now' and let the divine handle the 'Next'.",
        color: "from-blue-600 to-indigo-600"
    },
    {
        id: "fear",
        title: "Fear & Anxiety",
        icon: <Shield size={40} />,
        description: "Conquer the illusion of mortality and failure.",
        verse: "नैनं छिन्दन्ति शस्त्राणि नैनं दहति पावक: | न चैनं क्लेदयन्त्यापो न शोषयति मारुत: ||",
        solution: "The soul is eternal. Nothing can harm your true essence. Stand tall as the warrior of your own destiny.",
        color: "from-red-600 to-orange-600"
    },
    {
        id: "discipline",
        title: "Discipline",
        icon: <Target size={40} />,
        description: "Master the chariot of your senses.",
        verse: "अभ्यासयोगयुक्तेन चेतसा नान्यगामिना | परमं पुरुषं दिव्यं याति पार्थानुचिन्तयन् ||",
        solution: "Small habits lead to spiritual mastery. Reclaim your focus through consistent, mindful practice.",
        color: "from-emerald-600 to-teal-600"
    },
    {
        id: "peace",
        title: "Inner Peace",
        icon: <Waves size={40} />,
        description: "Equanimity in pleasure and pain.",
        verse: "विहाय कामान्य: सर्वान्पुमांश्चरति नि:स्पृह: | निर्ममो निरहङ्कार: स शान्तिमधिगच्छति ||",
        solution: "Surrender the ego. Peace is not in the absence of conflict, but in the presence of the Divine within.",
        color: "from-cyan-600 to-blue-600"
    },
];

export default function LifeLessons() {
    const [selected, setSelected] = useState<typeof lessons[0] | null>(null);

    return (
        <div className="min-h-screen bg-ivory dark:bg-black font-sans pb-24">
            {/* Header */}
            <section className="pt-32 pb-16 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-gold rounded-full blur-[150px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-4xl mx-auto"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-xs mb-4 block">
                        The Warrior's Toolkit
                    </span>
                    <h1 className="text-6xl sm:text-7xl font-serif font-black mb-6 text-deep-blue dark:text-ivory">
                        Ancient <span className="gold-text italic">Life Lessons</span>
                    </h1>
                    <p className="text-xl text-deep-blue/60 dark:text-ivory/60 leading-relaxed font-light max-w-2xl mx-auto">
                        Choose the challenge you are facing today, and receive the eternal guidance of Krishna.
                    </p>
                </motion.div>
            </section>

            <section className="px-6 max-w-7xl mx-auto">
                <AnimatePresence mode="wait">
                    {!selected ? (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {lessons.map((lesson) => (
                                <motion.div
                                    key={lesson.id}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setSelected(lesson)}
                                    className="group relative cursor-pointer"
                                >
                                    <div className="p-10 rounded-[40px] bg-white dark:bg-deep-blue/40 border-2 border-gold/5 shadow-2xl transition-all group-hover:border-gold/30">
                                        <div className="w-20 h-20 rounded-3xl bg-gold/10 flex items-center justify-center mb-8 shadow-inner group-hover:bg-gold/20 transition-colors">
                                            <span className="text-gold">{lesson.icon}</span>
                                        </div>
                                        <h3 className="text-3xl font-serif font-bold text-deep-blue dark:text-ivory mb-4 tracking-tight">
                                            {lesson.title}
                                        </h3>
                                        <p className="text-lg text-deep-blue/50 dark:text-ivory/50 leading-relaxed font-light">
                                            {lesson.description}
                                        </p>

                                        <div className="mt-8 flex items-center gap-3 text-saffron font-bold text-sm uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">
                                            Seek Guidance <ArrowLeft className="rotate-180" size={16} />
                                        </div>
                                    </div>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${lesson.color} rounded-[40px] opacity-0 group-hover:opacity-5 blur-2xl transition-opacity`} />
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            className="max-w-4xl mx-auto"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="flex items-center gap-2 text-deep-blue/50 dark:text-ivory/50 hover:text-saffron transition-colors mb-12 font-bold uppercase tracking-widest text-xs"
                            >
                                <ArrowLeft size={16} /> Back to Toolkit
                            </button>

                            <div className="rounded-[50px] overflow-hidden bg-white dark:bg-deep-blue border-2 border-gold/20 shadow-[0_32px_64px_-12px_rgba(212,175,55,0.2)]">
                                <div className={`h-4 bg-gradient-to-r ${selected.color}`} />
                                <div className="p-10 sm:p-20">
                                    <div className="flex flex-col items-center text-center gap-10">
                                        <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center shadow-inner">
                                            <span className="text-gold">{selected.icon}</span>
                                        </div>

                                        <h2 className="text-5xl sm:text-6xl font-serif font-black text-deep-blue dark:text-ivory italic">
                                            {selected.title}
                                        </h2>

                                        <div className="space-y-6">
                                            <p className="text-saffron font-bold uppercase tracking-[0.4em] text-xs">Divine Verse</p>
                                            <blockquote className="text-3xl sm:text-4xl font-serif font-bold text-deep-blue dark:text-ivory leading-relaxed px-6 italic">
                                                "{selected.verse}"
                                            </blockquote>
                                        </div>

                                        <div className="p-10 rounded-[40px] bg-gradient-to-tr from-ivory to-white dark:from-black dark:to-deep-blue/40 border border-gold/10 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 text-9xl opacity-[0.02] rotate-12">🕉️</div>
                                            <h4 className="flex items-center justify-center gap-2 text-gold font-black uppercase tracking-[0.3em] text-xs mb-6">
                                                <Sparkles size={16} fill="currentColor" /> The Transformation
                                            </h4>
                                            <p className="text-2xl text-deep-blue/90 dark:text-ivory/90 leading-relaxed font-light italic">
                                                {selected.solution}
                                            </p>
                                        </div>

                                        <button className="px-12 py-5 bg-saffron text-white rounded-full font-bold text-xl shadow-2xl shadow-saffron/20 hover:scale-105 transition-all flex items-center gap-3 group">
                                            Share this Blessing <Send size={20} className="group-hover:rotate-45 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* Dopamine CTA Footer */}
            <div className="mt-24 text-center px-6">
                <h3 className="text-2xl font-serif font-bold text-deep-blue/40 dark:text-ivory/40">
                    Didn't find what you need?
                </h3>
                <button className="mt-6 text-saffron font-black uppercase tracking-[0.4em] text-sm hover:underline hover:underline-offset-8 transition-all">
                    Ask AI Krishna Guide directly
                </button>
            </div>
        </div>
    );
}
