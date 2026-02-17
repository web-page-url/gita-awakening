"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { lifeLessonsData } from "@/data/life-lessons";
import { ArrowLeft, Share2, Bookmark, CheckCircle2, Quote, Lightbulb, MessageCircle, Volume2, VolumeX, Pause, Play } from "lucide-react";
import Link from "next/link";
import { useVoice } from "@/hooks/useVoice";

export default function LifeLessonDetail() {
    const params = useParams();
    const router = useRouter();
    const slug = params.slug as string;
    const lesson = lifeLessonsData.find((l) => l.slug === slug);
    const { speak, pause, resume, isSpeaking, isPaused } = useVoice();

    if (!lesson) return <div className="min-h-screen flex items-center justify-center text-ivory">Lesson not found...</div>;

    return (
        <div className="min-h-screen bg-[#050B18] text-ivory font-sans relative overflow-hidden pb-24">
            {/* Sacred Aura Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-gradient-to-b ${lesson.gradient.includes('blue') ? 'from-blue-500/10' : lesson.gradient.includes('red') ? 'from-red-500/10' : 'from-saffron/10'} via-transparent to-transparent blur-[120px]`} />
                <div className="absolute -bottom-48 left-0 w-full h-96 bg-white/5 blur-[100px]" />
            </div>

            {/* Navigation Header */}
            <header className="sticky top-20 left-0 right-0 z-40 px-6 py-4 flex justify-between items-center backdrop-blur-md bg-[#050B18]/40 border-b border-white/5">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => router.back()}
                        className="p-2 hover:bg-white/5 rounded-xl transition-colors text-ivory/60 hover:text-ivory"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <div>
                        <span className="text-[10px] text-gold font-black uppercase tracking-[0.3em]">Modern Wisdom</span>
                        <h1 className="text-sm font-serif font-bold text-ivory/90">{lesson.title}</h1>
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
            <section className="pt-20 pb-20 px-6 max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-12"
                >
                    <div className="flex flex-col items-center gap-2 mb-4">
                        <span className="bhagwa-text font-serif italic text-2xl md:text-3xl block">
                            {lesson.tagline}
                        </span>
                        <span className="text-gold/60 font-serif text-xl md:text-2xl block">
                            {lesson.hindiTagline}
                        </span>
                    </div>

                    <div className="space-y-4 mb-8">
                        <h2 className="text-5xl md:text-8xl font-serif font-bold text-ivory leading-tight">
                            {lesson.title}
                        </h2>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold bhagwa-text opacity-80">
                            {lesson.hindiTitle}
                        </h3>
                    </div>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative group"
                >
                    <p className="text-lg md:text-2xl text-ivory/70 leading-relaxed font-light italic max-w-3xl mx-auto mb-8">
                        "{lesson.description}"
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex gap-2 mx-auto">
                            <button
                                onClick={() => speak(lesson.description, `lesson-${lesson.slug}-desc`, "en")}
                                className={`px-6 py-2 rounded-full transition-all border flex items-center gap-2 ${isSpeaking === `lesson-${lesson.slug}-desc` ? "bg-gold text-deep-blue border-gold" : "bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"}`}
                            >
                                {isSpeaking === `lesson-${lesson.slug}-desc` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                <span className="text-[10px] font-black uppercase tracking-widest">Listen to Insight</span>
                            </button>
                            {isSpeaking === `lesson-${lesson.slug}-desc` && (
                                <button
                                    onClick={() => isPaused ? resume() : pause()}
                                    className="p-2.5 rounded-full transition-all border bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"
                                >
                                    {isPaused ? <Play size={16} /> : <Pause size={16} />}
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Relatable Scenario Card */}
            <section className="px-6 mb-24 max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="p-1 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5 backdrop-blur-sm overflow-hidden"
                >
                    <div className="p-8 md:p-14 bg-[#0A1125]/80 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 text-white/5">
                            <MessageCircle size={100} />
                        </div>
                        <div className="relative z-10 max-w-3xl">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-saffron font-black uppercase tracking-[0.4em] text-[10px] block">We've all been there</span>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => speak(lesson.relatableScenario, `lesson-${lesson.slug}-scenario`, "en")}
                                        className={`p-2 rounded-full transition-all ${isSpeaking === `lesson-${lesson.slug}-scenario` ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold hover:bg-gold/10"}`}
                                    >
                                        {isSpeaking === `lesson-${lesson.slug}-scenario` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                    </button>
                                    {isSpeaking === `lesson-${lesson.slug}-scenario` && (
                                        <button
                                            onClick={() => isPaused ? resume() : pause()}
                                            className="p-2 rounded-full transition-all text-gold/40 hover:text-gold hover:bg-gold/10"
                                        >
                                            {isPaused ? <Play size={16} /> : <Pause size={16} />}
                                        </button>
                                    )}
                                </div>
                            </div>
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-ivory mb-8">Does this sound familiar?</h3>
                            <p className="text-xl md:text-2xl text-ivory/70 leading-relaxed italic border-l-4 border-gold/30 pl-8">
                                "{lesson.relatableScenario}"
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Spirital Wisdom & Verses */}
            <section className="px-6 space-y-32 max-w-5xl mx-auto relative z-10">
                {lesson.verses.map((verse, idx) => (
                    <div key={idx} className="space-y-12">
                        <div className="text-center space-y-6">
                            <span className="text-xs font-black text-gold/60 uppercase tracking-[0.4em]">The Sacred Answer (Verse {verse.id})</span>
                            <h3 className="text-2xl md:text-4xl font-serif font-bold text-saffron leading-relaxed max-w-4xl mx-auto drop-shadow-lg">
                                {verse.sanskrit}
                            </h3>
                            <div className="flex gap-2 justify-center">
                                <button
                                    onClick={() => speak(verse.sanskrit, `verse-${idx}-sans`, "hi")}
                                    className={`p-2.5 rounded-full transition-all border inline-flex ${isSpeaking === `verse-${idx}-sans` ? "bg-gold text-deep-blue border-gold" : "bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"}`}
                                >
                                    {isSpeaking === `verse-${idx}-sans` ? <VolumeX size={14} /> : <Volume2 size={14} />}
                                </button>
                                {isSpeaking === `verse-${idx}-sans` && (
                                    <button
                                        onClick={() => isPaused ? resume() : pause()}
                                        className="p-2.5 rounded-full transition-all border bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"
                                    >
                                        {isPaused ? <Play size={14} /> : <Pause size={14} />}
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-gold/20 transition-all relative group/insight">
                                <div className="flex justify-between items-center mb-6 border-b border-gold/10 pb-2">
                                    <h4 className="text-gold text-[10px] font-black uppercase tracking-widest inline-block">The Insight</h4>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => speak(verse.meaning, `verse-${idx}-meaning-en`, "en")}
                                            className={`p-1.5 rounded-full transition-all ${isSpeaking === `verse-${idx}-meaning-en` ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold"}`}
                                        >
                                            {isSpeaking === `verse-${idx}-meaning-en` ? <VolumeX size={12} /> : <Volume2 size={12} />}
                                        </button>
                                        {isSpeaking === `verse-${idx}-meaning-en` && (
                                            <button
                                                onClick={() => isPaused ? resume() : pause()}
                                                className="p-1.5 rounded-full transition-all text-gold/40 hover:text-gold"
                                            >
                                                {isPaused ? <Play size={12} /> : <Pause size={12} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <p className="text-xl md:text-2xl text-ivory/80 leading-relaxed font-light font-serif">
                                        {verse.meaning}
                                    </p>
                                    <div className="pt-8 border-t border-white/5 relative">
                                        <div className="flex justify-between items-center mb-4">
                                            <span className="text-[9px] text-gold/40 uppercase font-bold tracking-widest">Hindi Interpretation</span>
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => speak(verse.hindiMeaning, `verse-${idx}-meaning-hi`, "hi")}
                                                    className={`p-1.5 rounded-full transition-all ${isSpeaking === `verse-${idx}-meaning-hi` ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold"}`}
                                                >
                                                    {isSpeaking === `verse-${idx}-meaning-hi` ? <VolumeX size={12} /> : <Volume2 size={12} />}
                                                </button>
                                                {isSpeaking === `verse-${idx}-meaning-hi` && (
                                                    <button
                                                        onClick={() => isPaused ? resume() : pause()}
                                                        className="p-1.5 rounded-full transition-all text-gold/40 hover:text-gold"
                                                    >
                                                        {isPaused ? <Play size={12} /> : <Pause size={12} />}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                        <p className="text-xl md:text-2xl text-ivory/90 leading-relaxed font-serif">
                                            {verse.hindiMeaning}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#0A1125] border border-gold/10 flex flex-col justify-center relative group/logic">
                                <div className="flex justify-between items-center mb-6">
                                    <Quote className="text-gold/20" size={40} />
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => speak(lesson.wisdom, `lesson-${lesson.slug}-wisdom`, "en")}
                                            className={`p-1.5 rounded-full transition-all ${isSpeaking === `lesson-${lesson.slug}-wisdom` ? "bg-gold text-deep-blue" : "text-gold/40 hover:text-gold"}`}
                                        >
                                            {isSpeaking === `lesson-${lesson.slug}-wisdom` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                                        </button>
                                        {isSpeaking === `lesson-${lesson.slug}-wisdom` && (
                                            <button
                                                onClick={() => isPaused ? resume() : pause()}
                                                className="p-1.5 rounded-full transition-all text-gold/40 hover:text-gold"
                                            >
                                                {isPaused ? <Play size={16} /> : <Pause size={16} />}
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <h4 className="text-gold text-[10px] font-black uppercase tracking-widest mb-4">Deep Logic</h4>
                                <p className="text-xl md:text-2xl text-ivory font-serif italic leading-relaxed">
                                    {lesson.wisdom}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Actionable Steps - The Gold Mine */}
            <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="p-10 md:p-20 rounded-[3.5rem] bg-gradient-to-b from-[#0A1125] to-black border border-gold/10 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 p-10 text-white/5">
                        <Lightbulb size={120} />
                    </div>

                    <div className="relative z-10">
                        <span className="text-saffron font-black uppercase tracking-[0.5em] text-[10px] mb-12 block text-center">Your Battle Plan</span>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-ivory mb-16 text-center">Transform Today</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {lesson.steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold/5 transition-all"
                                >
                                    <CheckCircle2 className="text-gold mt-1 shrink-0" size={24} />
                                    <div className="flex-1 space-y-4">
                                        <p className="text-lg md:text-xl text-ivory/80 font-light">{step}</p>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => speak(step, `step-${idx}`, "en")}
                                                className={`p-1.5 rounded-full transition-all border flex items-center justify-center w-8 h-8 ${isSpeaking === `step-${idx}` ? "bg-gold text-deep-blue border-gold" : "bg-white/5 text-gold/40 border-white/10 hover:border-gold/30"}`}
                                            >
                                                {isSpeaking === `step-${idx}` ? <VolumeX size={10} /> : <Volume2 size={10} />}
                                            </button>
                                            {isSpeaking === `step-${idx}` && (
                                                <button
                                                    onClick={() => isPaused ? resume() : pause()}
                                                    className="p-1.5 rounded-full transition-all border flex items-center justify-center w-8 h-8 text-gold/40 hover:border-gold/30"
                                                >
                                                    {isPaused ? <Play size={10} /> : <Pause size={10} />}
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-20 text-center">
                            <Link
                                href="/ai-guide"
                                className="inline-flex items-center gap-4 text-gold font-bold text-lg hover:gap-6 transition-all group"
                            >
                                Discuss this with AI Krishna <ArrowLeft className="rotate-180 group-hover:translate-x-2 transition-transform" size={20} />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Footer Bottom Nav */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 p-2 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl">
                <button
                    onClick={() => router.back()}
                    className="px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest text-ivory/60 hover:bg-white/5 hover:text-ivory transition-all"
                >
                    Back to Lessons
                </button>
            </div>
        </div>
    );
}
