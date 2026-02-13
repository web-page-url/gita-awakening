"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, Volume2, List, Heart, Repeat, Shuffle } from "lucide-react";

export default function AudioMode() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(35);

    return (
        <div className="min-h-screen bg-deep-blue text-ivory font-sans flex flex-col items-center justify-center relative overflow-hidden px-6">
            {/* Immersive Meditative Background */}
            <div className="absolute inset-0 z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold rounded-full blur-[150px]"
                />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20" />
            </div>

            <div className="relative z-10 w-full max-w-lg flex flex-col items-center gap-12">
                {/* Rotating Sacred Symbol / Album Art */}
                <div className="relative">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        className="w-64 h-64 sm:w-80 sm:h-80 rounded-full border-4 border-gold/20 p-4 relative"
                    >
                        <div className="w-full h-full rounded-full border-2 border-gold/40 flex items-center justify-center bg-deep-blue-light shadow-[0_0_50px_rgba(212,175,55,0.2)] overflow-hidden relative">
                            <motion.div
                                animate={{ scale: isPlaying ? [1, 1.05, 1] : 1 }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-8xl sm:text-9xl filter drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
                            >
                                🕉️
                            </motion.div>

                            {/* Animated Visualizer Rings */}
                            <AnimatePresence>
                                {isPlaying && (
                                    <motion.div
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1.5, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                                        className="absolute inset-0 border-2 border-gold/30 rounded-full"
                                    />
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20"
                    >
                        <Heart size={20} className="text-ivory" />
                    </motion.button>
                </div>

                {/* Track Info */}
                <div className="text-center space-y-2">
                    <h1 className="text-4xl sm:text-5xl font-serif font-black gold-text">Verse of Silence</h1>
                    <p className="text-lg text-ivory/60 font-medium tracking-widest uppercase">Chapter 2 • Sankhya Yoga</p>
                </div>

                {/* Progress Bar */}
                <div className="w-full space-y-4">
                    <div className="relative h-1.5 w-full bg-white/10 rounded-full overflow-hidden group cursor-pointer">
                        <motion.div
                            className="absolute top-0 left-0 h-full bg-gradient-to-r from-gold to-saffron"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between text-[10px] font-bold opacity-40 uppercase tracking-widest">
                        <span>02:14</span>
                        <span>05:32</span>
                    </div>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-10">
                    <motion.button whileHover={{ scale: 1.2 }} className="text-ivory/40 hover:text-ivory">
                        <SkipBack size={32} fill="currentColor" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-24 h-24 bg-ivory text-deep-blue rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all"
                    >
                        {isPlaying ? <Pause size={40} fill="currentColor" /> : <Play size={40} className="ml-2" fill="currentColor" />}
                    </motion.button>

                    <motion.button whileHover={{ scale: 1.2 }} className="text-ivory/40 hover:text-ivory">
                        <SkipForward size={32} fill="currentColor" />
                    </motion.button>
                </div>

                {/* Secondary Controls */}
                <div className="flex items-center gap-8 text-ivory/30">
                    <Shuffle size={20} />
                    <Repeat size={20} />
                    <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                        <Volume2 size={18} />
                        <div className="w-20 h-1 bg-white/10 rounded-full overflow-hidden">
                            <div className="w-2/3 h-full bg-gold" />
                        </div>
                    </div>
                    <List size={20} />
                </div>
            </div>

            {/* Floating Bottom Quote */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 0.4, y: 0 }}
                className="absolute bottom-12 text-center max-w-md px-10 italic font-serif text-sm leading-relaxed"
            >
                "When the track of the soul plays, the noise of the world fades away."
            </motion.div>
        </div>
    );
}
