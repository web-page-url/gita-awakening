"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const chapters = [
    { id: 1, name: "Arjuna Visada Yoga", theme: "The Yoga of Arjuna's dejection" },
    { id: 2, name: "Sankhya Yoga", theme: "The Yoga of Knowledge" },
    { id: 3, name: "Karma Yoga", theme: "The Yoga of Action" },
    { id: 4, name: "Jnana Karma Sanyasa Yoga", theme: "The Yoga of Knowledge and the Disciplines of Action" },
    { id: 5, name: "Karma Sanyasa Yoga", theme: "The Yoga of Renunciation" },
    { id: 6, name: "Dhyana Yoga", theme: "The Yoga of Meditation" },
    { id: 7, name: "Jnana Vijnana Yoga", theme: "The Yoga of Knowledge and Wisdom" },
    { id: 8, name: "Aksara Brahma Yoga", theme: "The Yoga of the Imperishable Brahman" },
    { id: 9, name: "Raja Vidya Raja Guhya Yoga", theme: "The Yoga of the Sovereign Science and the Sovereign Secret" },
    { id: 10, name: "Vibhuti Yoga", theme: "The Yoga of Divine Manifestations" },
    { id: 11, name: "Visvarupa Darsana Yoga", theme: "The Yoga of the Vision of the Cosmic Form" },
    { id: 12, name: "Bhakti Yoga", theme: "The Yoga of Devotion" },
    { id: 13, name: "Ksetra Ksetrajna Vibhaga Yoga", theme: "The Yoga of the Discrimination between the Field and the Knower of the Field" },
    { id: 14, name: "Gunatraya Vibhaga Yoga", theme: "The Yoga of the Discrimination of the Three Gunas" },
    { id: 15, name: "Purusottama Yoga", theme: "The Yoga of the Supreme Person" },
    { id: 16, name: "Daivasura Sampad Vibhaga Yoga", theme: "The Yoga of the Discrimination between the Divine and the Demoniacal Assets" },
    { id: 17, name: "Sraddhatraya Vibhaga Yoga", theme: "The Yoga of the Discrimination of the Threefold Faith" },
    { id: 18, name: "Moksha Sanyasa Yoga", theme: "The Yoga of Liberation by Renunciation" },
];

export default function ChaptersGrid() {
    return (
        <section className="py-24 px-4 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-4xl font-serif font-bold text-deep-blue dark:text-ivory mb-4">
                            Explore the <span className="gold-text">18 Chapters</span>
                        </h2>
                        <p className="text-deep-blue/60 dark:text-ivory/60 leading-relaxed font-light">
                            Each chapter of the Bhagavad Gita unviels a profound dimension of life, offering guidance on duty, knowledge, and spiritual realization.
                        </p>
                    </div>
                    <Link
                        href="/chapters"
                        className="group flex items-center gap-2 text-saffron font-semibold hover:gap-3 transition-all"
                    >
                        View All Chapters <ChevronRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {chapters.map((chapter) => (
                        <motion.div
                            key={chapter.id}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-3xl bg-ivory/50 dark:bg-deep-blue/20 border border-gold/10 hover:border-gold/30 transition-all overflow-hidden cursor-pointer"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="w-12 h-12 flex items-center justify-center rounded-full bg-saffron/10 text-saffron font-serif font-bold text-xl">
                                        {chapter.id}
                                    </span>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ChevronRight size={20} className="text-gold" />
                                    </div>
                                </div>

                                <h3 className="text-xl font-serif font-bold text-deep-blue dark:text-ivory mb-2 group-hover:text-gold transition-colors">
                                    {chapter.name}
                                </h3>
                                <p className="text-sm text-deep-blue/60 dark:text-ivory/60 leading-relaxed line-clamp-2 italic">
                                    {chapter.theme}
                                </p>

                                {/* Decoration: Minimal Sacred Outline (Simplified Om or Lotus) */}
                                <div className="absolute -bottom-6 -right-6 text-7xl opacity-[0.03] group-hover:opacity-[0.08] transition-opacity rotate-12 group-hover:rotate-0">
                                    🕉️
                                </div>
                            </div>

                            {/* Gold border hover animation */}
                            <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/20 rounded-3xl transition-all" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
