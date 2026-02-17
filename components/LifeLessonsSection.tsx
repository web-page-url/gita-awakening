"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, Target, Zap, Waves, Compass, Heart } from "lucide-react";
import Link from "next/link";

const lessons = [
    {
        slug: "overthinking",
        title: "Overthinking",
        icon: <Zap className="text-blue-500" />,
        description: "Learn to silence the mind's endless chatter through detachment.",
        color: "bg-blue-50/50 dark:bg-blue-900/10"
    },
    {
        slug: "fear-anxiety",
        title: "Fear & Anxiety",
        icon: <Shield className="text-red-500" />,
        description: "Discover the eternal nature of the soul to conquer the fear of death and failure.",
        color: "bg-red-50/50 dark:bg-red-900/10"
    },
    {
        slug: "discipline",
        title: "Discipline",
        icon: <Target className="text-green-500" />,
        description: "Master your senses and steer your chariot towards your dharma.",
        color: "bg-green-50/50 dark:bg-green-900/10"
    },
    {
        slug: "inner-peace",
        title: "Inner Peace",
        icon: <Waves className="text-teal-500" />,
        description: "Find stillness amidst the storms of life through equanimity.",
        color: "bg-teal-50/50 dark:bg-teal-900/10"
    },
    {
        slug: "purpose",
        title: "Purpose",
        icon: <Compass className="text-purple-500" />,
        description: "Identify your duty and perform it without attachment to results.",
        color: "bg-purple-50/50 dark:bg-purple-900/10"
    },
    {
        slug: "love-devotion",
        title: "Love & Devotion",
        icon: <Heart className="text-pink-500" />,
        description: "Surrender your ego and experience the infinite love of the divine.",
        color: "bg-pink-50/50 dark:bg-pink-900/10"
    },
];

import { useVoice } from "@/hooks/useVoice";
import { Volume2, VolumeX } from "lucide-react";

export default function LifeLessonsSection() {
    const { speak, isSpeaking } = useVoice();

    return (
        <section className="py-24 px-4 bg-ivory/50 dark:bg-deep-blue/10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif font-bold text-deep-blue dark:text-ivory mb-4">
                        Wisdom for <span className="gold-text">Modern Life</span>
                    </h2>
                    <p className="text-deep-blue/60 dark:text-ivory/60 max-w-2xl mx-auto font-light">
                        Ancient solutions for the challenges we face today. Click on a theme to find Gita's guidance.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {lessons.map((lesson, index) => (
                        <div key={lesson.slug} className="group relative">
                            <Link href={`/life-lessons/${lesson.slug}`} className="block h-full">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className={`p-8 rounded-3xl border border-gold/5 sacred-glow cursor-pointer transition-all h-full ${lesson.color}`}
                                >
                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-deep-blue flex items-center justify-center mb-6 shadow-sm">
                                        {lesson.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif font-bold text-deep-blue dark:text-ivory mb-3">
                                        {lesson.title}
                                    </h3>
                                    <p className="text-deep-blue/70 dark:text-ivory/70 leading-relaxed font-light">
                                        {lesson.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-saffron text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                                        Explore Verses →
                                    </div>
                                </motion.div>
                            </Link>

                            {/* Absolute positioned voice button to avoid link conflict */}
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    speak(lesson.description, `card-${lesson.slug}`, "en");
                                }}
                                className={`absolute top-6 right-6 p-2 rounded-xl transition-all z-10 ${isSpeaking === `card-${lesson.slug}` ? "bg-gold text-deep-blue" : "bg-white/50 dark:bg-white/5 text-gold/60 hover:text-gold opacity-0 group-hover:opacity-100"}`}
                            >
                                {isSpeaking === `card-${lesson.slug}` ? <VolumeX size={16} /> : <Volume2 size={16} />}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 border-2 border-saffron text-saffron rounded-full font-bold hover:bg-saffron hover:text-white transition-all text-lg shadow-lg shadow-saffron/10"
                    >
                        Explore All Life Lessons
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
