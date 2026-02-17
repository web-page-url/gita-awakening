"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Sparkles } from "lucide-react";

const chapters = [
    {
        id: 1,
        name: "Arjuna Visada Yoga",
        title: "Battlefield of Doubt",
        theme: "When the mind is a warzone, find the warrior within.",
        content: "Confronting the paralyzing fear and confusion of life's greatest battles.",
        gradient: "from-gray-900 via-deep-blue to-black"
    },
    {
        id: 2,
        name: "Sankhya Yoga",
        title: "The Eternal Soul",
        theme: "You are the observer, not the storm.",
        content: "The foundational wisdom of the indestructible soul and the art of equanimity.",
        gradient: "from-saffron via-gold to-bhagwa"
    },
    {
        id: 3,
        name: "Karma Yoga",
        title: "The Art of Action",
        theme: "Work like a king, detached from the gold.",
        content: "The secret to stress-free productivity: performing duty without selfish attachment.",
        gradient: "from-deep-blue to-gold"
    },
    {
        id: 4,
        name: "Jnana Karma Sanyasa Yoga",
        title: "The Fire of Wisdom",
        theme: "Burn your karma in the fire of truth.",
        content: "How wisdom purifies action and clears the path to ultimate clarity.",
        gradient: "from-red-600 to-saffron"
    },
    {
        id: 5,
        name: "Karma Sanyasa Yoga",
        title: "Renunciation",
        theme: "Find peace in the midst of chaos.",
        content: "Discovering true renunciation while living a fully active, modern life.",
        gradient: "from-orange-500 to-bhagwa"
    },
    {
        id: 6,
        name: "Dhyana Yoga",
        title: "The Power of Silence",
        theme: "Still the mind, see the universe.",
        content: "Mastering the mechanics of meditation to find the silence within.",
        gradient: "from-deep-blue via-violet-950 to-black"
    },
    {
        id: 7,
        name: "Jnana Vijnana Yoga",
        title: "Divine Secret",
        theme: "Seeing the strings behind the cosmic play.",
        content: "Understand the blueprint of reality and the unseen hand of the Divine.",
        gradient: "from-gold via-ivory to-gold"
    },
    {
        id: 8,
        name: "Aksara Brahma Yoga",
        title: "Path to Infinity",
        theme: "Preparing the soul for its final flight.",
        content: "The mystery of life, death, and the journey to the eternal state.",
        gradient: "from-purple-900 to-black"
    },
    {
        id: 9,
        name: "Raja Vidya Yoga",
        title: "The King of Secrets",
        theme: "The most powerful knowledge ever hidden.",
        content: "The sovereign science of direct perception and effortless devotion.",
        gradient: "from-gold via-bhagwa to-saffron"
    },
    {
        id: 10,
        name: "Vibhuti Yoga",
        title: "Infinite Splendor",
        theme: "Seeing God in every atom of existence.",
        content: "Witnessing the divine magnitude in every miracle of the natural world.",
        gradient: "from-blue-400 via-white to-gold"
    },
    {
        id: 11,
        name: "Visvarupa Yoga",
        title: "The Cosmic Vision",
        theme: "The sight that changes everything.",
        content: "Arjuna witnesses the terrifying and beautiful totality of the universe.",
        gradient: "from-black via-purple-700 to-gold"
    },
    {
        id: 12,
        name: "Bhakti Yoga",
        title: "The Flow of Devotion",
        theme: "Love as the ultimate weapon.",
        content: "The most direct path: surrendering the ego in the ocean of divine love.",
        gradient: "from-lotus to-ivory"
    },
    {
        id: 13,
        name: "Ksetra Vibhaga Yoga",
        title: "The Field & Knower",
        theme: "You are not the body; you are the driver.",
        content: "Understanding the difference between the material field and the soul.",
        gradient: "from-green-900 to-deep-blue"
    },
    {
        id: 14,
        name: "Gunatraya Yoga",
        title: "Breaking Chains",
        theme: "Rising above the modes of nature.",
        content: "How the three forces of nature (Gunas) control your life and how to be free.",
        gradient: "from-red-900 via-gray-900 to-white"
    },
    {
        id: 15,
        name: "Purusottama Yoga",
        title: "The Supreme Person",
        theme: "The roots of the cosmic tree.",
        content: "Cutting down the tree of illusion to find the supreme source of all.",
        gradient: "from-brown-700 to-gold"
    },
    {
        id: 16,
        name: "Daivasura Yoga",
        title: "Divine vs. Ego",
        theme: "The war within your own character.",
        content: "Choosing between the traits that liberate and the traits that bind.",
        gradient: "from-black to-red-600"
    },
    {
        id: 17,
        name: "Sraddhatraya Yoga",
        title: "Threefold Faith",
        theme: "Your faith defines your destiny.",
        content: "Aligning your food, thoughts, and faith to reach the highest vibration.",
        gradient: "from-blue-200 to-ivory"
    },
    {
        id: 18,
        name: "Moksha Yoga",
        title: "Final Liberation",
        theme: "The ultimate surrender into freedom.",
        content: "The grand conclusion of the Gita: total liberation and absolute peace.",
        gradient: "from-white via-gold to-white"
    },
];

import { useVoice } from "@/hooks/useVoice";
import { Volume2, VolumeX } from "lucide-react";

export default function ChaptersGrid() {
    const { speak, isSpeaking } = useVoice();

    return (
        <section className="py-24 px-4 bg-[#020617] relative overflow-hidden">
            {/* Decorative Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-5xl md:text-7xl font-serif font-bold text-ivory mb-6 leading-tight"
                        >
                            The 18 Steps to <br />
                            <span className="bhagwa-text">Greatness</span>
                        </motion.h2>
                        <p className="text-ivory/60 text-lg md:text-xl leading-relaxed font-light italic border-l-2 border-saffron/30 pl-6">
                            "Each chapter is a doorway to a new dimension of your own soul. Explore the ancient blueprint for the modern warrior."
                        </p>
                    </div>
                    <Link
                        href="/chapters"
                        className="group flex items-center gap-3 px-8 py-4 bg-white/5 border border-gold/10 rounded-2xl text-gold font-bold hover:bg-gold/10 transition-all uppercase tracking-widest text-xs"
                    >
                        Enter the Library <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chapters.map((chapter, idx) => (
                        <div key={chapter.id} className="group relative">
                            <Link href={`/chapters/${chapter.id}`} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative p-10 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-gold/30 transition-all duration-500 overflow-hidden cursor-pointer backdrop-blur-sm h-full"
                                >
                                    {/* Card Aura */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${chapter.gradient} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500`} />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="flex justify-between items-start mb-10">
                                            <div className="relative">
                                                <span className="text-6xl font-serif font-black text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                                                    {chapter.id < 10 ? `0${chapter.id}` : chapter.id}
                                                </span>
                                                <div className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-1 bg-saffron rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                            </div>
                                            <div className="p-3 bg-gold/5 rounded-xl text-gold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                                                <Sparkles size={20} />
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <h4 className="text-saffron font-bold text-xs uppercase tracking-[0.2em] mb-2 scale-95 origin-left group-hover:scale-100 transition-transform">
                                                {chapter.name}
                                            </h4>
                                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-ivory group-hover:text-gold transition-colors duration-500">
                                                {chapter.title}
                                            </h3>
                                        </div>

                                        <p className="text-gold/80 italic font-medium mb-4 line-clamp-2">
                                            "{chapter.theme}"
                                        </p>

                                        <p className="text-ivory/40 text-sm leading-relaxed mb-8 font-light">
                                            {chapter.content}
                                        </p>

                                        <div className="mt-auto flex items-center gap-2 text-gold text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500">
                                            Explore Wisdom <ChevronRight size={12} />
                                        </div>
                                    </div>

                                    {/* Decorative Om Symbol */}
                                    <div className="absolute -bottom-4 -right-4 text-8xl opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-700 -rotate-12 group-hover:rotate-0 blur-[2px] group-hover:blur-0">
                                        🕉️
                                    </div>
                                </motion.div>
                            </Link>

                            {/* Chapter Voice Toggle */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    speak(`${chapter.title}. ${chapter.content}`, `chap-card-${chapter.id}`, "en");
                                }}
                                className={`absolute top-10 right-10 p-2.5 rounded-xl transition-all z-20 ${isSpeaking === `chap-card-${chapter.id}` ? "bg-gold text-deep-blue" : "bg-white/5 text-gold/40 border border-white/10 hover:border-gold/30 opacity-0 group-hover:opacity-100"}`}
                            >
                                {isSpeaking === `chap-card-${chapter.id}` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

