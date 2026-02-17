"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, User, Moon, Sun, Sparkles } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const navItems = [
    { name: "Daily Wisdom", href: "/daily-wisdom" },
    { name: "Chapters", href: "/chapters" },
    { name: "Life Lessons", href: "/life-lessons" },
    { name: "AI Guide", href: "/ai-guide" },
    { name: "Audio", href: "/audio-mode" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [devotion, setDevotion] = useState(108);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-[background-color,padding,border-color] duration-300",
                scrolled
                    ? "bg-ivory/70 dark:bg-deep-blue/70 backdrop-blur-xl py-3 border-b border-gold/20"
                    : "bg-transparent py-5 border-b border-transparent"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center">
                    {/* Left: Brand */}
                    <Link href="/" className="flex items-center gap-3 group relative">
                        <motion.div
                            whileHover={{ rotate: 360, scale: 1.2 }}
                            transition={{ duration: 1, ease: "anticipate" }}
                            className="text-3xl filter drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]"
                        >
                            🕉️
                        </motion.div>
                        <div className="flex flex-col">
                            <span className="font-serif text-lg sm:text-2xl font-black tracking-tighter text-deep-blue dark:text-ivory leading-none">
                                GITA <span className="gold-text">AWAKENING</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-saffron opacity-80 leading-none mt-1">
                                The Divine Experience
                            </span>
                        </div>
                    </Link>

                    {/* Center: Interactive Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-2 bg-black/5 dark:bg-white/5 p-1 rounded-2xl backdrop-blur-md border border-white/10">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "px-6 py-2 rounded-xl text-sm font-bold transition-all duration-300 relative group",
                                    pathname === item.href
                                        ? "text-ivory bg-saffron shadow-lg shadow-saffron/20"
                                        : "text-deep-blue/60 dark:text-ivory/60 hover:text-deep-blue dark:hover:text-ivory"
                                )}
                            >
                                {item.name}
                                {pathname !== item.href && (
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold rounded-full transition-all group-hover:w-1/2" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Right: Gamified Utilities */}
                    <div className="flex items-center gap-2 lg:gap-6">
                        {/* Devotion Counter - Dopamine Trigger */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gold/20 to-saffron/10 rounded-2xl border border-gold/20 cursor-pointer group"
                        >
                            <Sparkles size={16} className="text-gold group-hover:rotate-45 transition-transform" />
                            <div className="flex flex-col items-center">
                                <span className="text-[10px] font-bold opacity-50 leading-none">DEVOTION</span>
                                <span className="text-sm font-black text-deep-blue dark:text-ivory leading-none mt-1">
                                    {devotion}
                                </span>
                            </div>
                        </motion.div>

                        <button className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl hover:bg-gold/10 transition-colors hidden sm:block">
                            <User size={20} className="text-deep-blue dark:text-ivory" />
                        </button>

                        <button className="p-3 bg-black/5 dark:bg-white/5 rounded-2xl hover:bg-gold/10 transition-colors">
                            <Sun size={20} className="hidden dark:block text-ivory" />
                            <Moon size={20} className="block dark:hidden text-deep-blue" />
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-3 bg-saffron text-white rounded-2xl shadow-lg shadow-saffron/20"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Soul-Taking Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 30, stiffness: 300 }}
                        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-[40px] z-[100] lg:hidden flex flex-col"
                    >
                        {/* Sacred Close Button - Prominent and Closeable */}
                        <div className="absolute top-6 right-6 z-[120]">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-4 bg-saffron text-white rounded-full shadow-2xl shadow-saffron/40 active:scale-95 transition-all"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold rounded-full blur-[150px]" />
                            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-saffron rounded-full blur-[150px]" />
                        </div>

                        <div className="flex-1 w-full flex flex-col items-center justify-center gap-4 relative z-10 px-6">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-full text-center"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-3xl font-serif font-black block transition-all tracking-tight py-2",
                                            pathname === item.href ? "text-saffron scale-110" : "text-ivory/80 hover:text-ivory"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="flex gap-6 mt-12">
                                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center shadow-inner">
                                    <Search size={28} className="text-gold" />
                                </div>
                                <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                                    <User size={28} className="text-gold" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
