"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden px-4 pt-20">
            {/* Immersive Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute inset-0 w-full h-[120%]"
                >
                    <img
                        src="/gita-awakening-1.0.jpg"
                        alt="Divine Background"
                        className="w-full h-full object-cover opacity-40 mix-blend-luminosity lg:mix-blend-normal"
                    />
                    {/* Deep Cinematic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B18] via-transparent to-[#050B18]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-transparent to-[#050B18]" />
                    <div className="absolute inset-0 bg-[#050B18]/40" />
                </motion.div>

                <motion.div
                    style={{ y: y1, opacity: 0.3 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1200px] max-h-[1200px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-saffron/20 via-gold/10 to-transparent rounded-full blur-[120px] animate-pulse" />
                </motion.div>

                {/* Divine Sparkles */}
                {mounted && [...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * 100 + "%",
                            y: Math.random() * 100 + "%",
                            scale: Math.random() * 0.5 + 0.5,
                            opacity: 0
                        }}
                        animate={{
                            y: [null, "-20%", "10%"],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: Math.random() * 5
                        }}
                        className="absolute w-1 h-1 bg-gold rounded-full shadow-[0_0_8px_white]"
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 text-center flex flex-col items-center gap-6 max-w-5xl"
            >
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron font-medium tracking-wide text-sm mb-2"
                >
                    <Sparkles size={16} className="animate-pulse" />
                    <span>The Divine Wisdom Experience</span>
                </motion.div>

                <h1 className="text-6xl sm:text-8xl lg:text-9xl font-serif font-bold tracking-tight text-deep-blue dark:text-ivory leading-[1] text-balance">
                    Awaken the <br />
                    <span className="bhagwa-text italic">Warrior Within</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="text-xl sm:text-2xl text-deep-blue/70 dark:text-ivory/80 max-w-2xl leading-relaxed font-light text-balance px-4"
                >
                    Ancient Wisdom. Modern Life. Daily Transformation. <br className="hidden sm:block" />
                    Unlock the secrets of the Bhagavad Gita through a breathtaking journey of the soul.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-6 mt-8 w-full sm:w-auto px-6"
                >
                    <Link href="/daily-wisdom">
                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 153, 51, 0.4)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 bg-saffron text-white rounded-2xl font-bold shadow-2xl shadow-saffron/20 hover:bg-saffron/90 transition-all text-xl flex items-center justify-center gap-3 group"
                        >
                            Start Today's Journey
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>
                    </Link>

                    <Link href="/chapters">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto px-10 py-5 border-2 border-gold/30 text-deep-blue dark:text-ivory rounded-2xl font-bold backdrop-blur-sm transition-all text-xl flex items-center justify-center"
                        >
                            📖 Explore Chapters
                        </motion.button>
                    </Link>
                </motion.div>
            </motion.div>

            {/* Satisfying Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest font-bold">Scroll to Awaken</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
            </motion.div>
        </section>
    );
}
