"use client";

import React from "react";
import { motion } from "framer-motion";

const images = [
    "/gita-awakening-1.0.jpg",
    "/gita-awakening-2.0.jpg",
    "/gita-awakening-3.0.jpg",
    "/gita-awakening-4.0.jpg",
    "/gita-awakening-5.0.jpg",
    "/gita-awakening-6.0.jpg",
    "/gita-awakening-7.0.jpg",
    "/gita-awakening-8.0.jpg",
];

export default function DivineGallery() {
    return (
        <section className="py-32 bg-[#020617] overflow-hidden relative">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-saffron/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center space-y-4"
                >
                    <span className="text-saffron font-black tracking-[0.4em] uppercase text-[10px]">Visual Journey</span>
                    <h2 className="text-5xl md:text-7xl font-serif font-black text-ivory">
                        Sacred <span className="gold-text italic">Visions</span>
                    </h2>
                    <div className="w-24 h-1 bg-gold rounded-full opacity-30 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
                </motion.div>
            </div>

            {/* Scrolling Carousel */}
            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex gap-8 py-4 px-4"
                    animate={{
                        x: [0, -1920],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 40,
                            ease: "linear",
                        },
                    }}
                >
                    {/* Double the images for seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative w-80 md:w-[480px] aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 flex-shrink-0 group/card bg-[#0A1125] shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-1000 hover:scale-[1.03]"
                        >
                            {/* Inner Glow Aura */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000 z-10 pointer-events-none" />

                            <img
                                src={src}
                                alt={`Divine Vision ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover/card:scale-110"
                            />

                            {/* Ultra Premium Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/20 to-transparent opacity-80" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent_50%)]" />

                            {/* Corner Flourish */}
                            <div className="absolute top-8 right-8 w-12 h-12 border-t-2 border-r-2 border-gold/20 rounded-tr-xl group-hover/card:border-gold/60 transition-colors duration-700" />

                            {/* Content Area */}
                            <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                                <div className="p-6 rounded-[2rem] bg-white/[0.03] backdrop-blur-md border border-white/10 group-hover/card:border-gold/30 transition-all duration-700">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <span className="text-saffron font-black uppercase tracking-[0.3em] text-[9px] block">Manifestation {((index % 8) + 1).toString().padStart(2, '0')}</span>
                                            <h4 className="text-2xl font-serif font-black text-ivory group-hover/card:text-gold transition-colors duration-500">The Eternal Dialogue</h4>
                                        </div>
                                        <div className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-gold/60 group-hover/card:bg-gold group-hover/card:text-deep-blue transition-all duration-500">
                                            <span className="text-sm font-serif italic font-bold">ॐ</span>
                                        </div>
                                    </div>
                                    <div className="h-px w-full bg-gradient-to-r from-gold/40 to-transparent mt-4 scale-x-0 group-hover/card:scale-x-100 transition-transform duration-1000 origin-left" />
                                </div>
                            </div>

                            {/* Decorative Edge Glow */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000" />
                        </div>
                    ))}
                </motion.div>

                {/* Side Fade Gradients */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
