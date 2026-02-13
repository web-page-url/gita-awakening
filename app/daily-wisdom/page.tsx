"use client";

import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { dailyWisdomData } from "@/data/daily-wisdom";
import { Sparkles, Quote, Bookmark, Share2, Flame, ArrowLeft, Search, Filter, Check } from "lucide-react";
import Link from "next/link";

const categories = [
    { id: "All", name: "All", hindi: "सभी" },
    { id: "Success", name: "Success", hindi: "सफलता" },
    { id: "Peace", name: "Peace", hindi: "शांति" },
    { id: "Mind Control", name: "Mind Control", hindi: "मन पर काबू" },
    { id: "Courage", name: "Courage", hindi: "साहस" },
    { id: "Purpose", name: "Purpose", hindi: "उद्देश्य" },
    { id: "Action", name: "Action", hindi: "कर्म" },
    { id: "Devotion", name: "Devotion", hindi: "भक्ति" },
    { id: "Self-Knowledge", name: "Wisdom", hindi: "आत्म-ज्ञान" },
    { id: "Discipline", name: "Discipline", hindi: "अनुशासन" },
    { id: "Hope", name: "Hope", hindi: "आशा" },
];

const ITEMS_PER_PAGE = 6;

export default function DailyWisdomPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        console.log("DailyWisdomPage v3.0 Loaded with Pagination & 100 Verses Support");
    }, []);

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [activeCategory, searchQuery]);

    const filteredWisdom = useMemo(() => {
        return dailyWisdomData.filter(item => {
            const matchesCategory = activeCategory === "All" || item.tags.includes(activeCategory);
            const matchesSearch = item.sanskrit.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.hindi.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.english.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const totalPages = Math.ceil(filteredWisdom.length / ITEMS_PER_PAGE);

    const paginatedWisdom = useMemo(() => {
        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        return filteredWisdom.slice(startIndex, startIndex + ITEMS_PER_PAGE);
    }, [filteredWisdom, currentPage]);

    const handleTagClick = (tag: string) => {
        setActiveCategory(tag);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 400, behavior: 'smooth' });
    };

    if (!isLoaded) return <div className="min-h-screen bg-[#020617]" />;

    return (
        <div className="min-h-screen bg-[#020617] text-ivory font-sans pb-32 overflow-x-hidden">
            {/* Sacred Background Aura */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 left-1/4 w-[1000px] h-[1000px] bg-gold/5 rounded-full blur-[180px]" />
                <div className="absolute bottom-0 right-1/4 w-[1000px] h-[1000px] bg-saffron/5 rounded-full blur-[180px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03] mix-blend-overlay" />
            </div>

            {/* Navigation / Breadcrumb */}
            <div className="max-w-7xl mx-auto px-6 pt-32 relative z-20">
                <Link href="/" className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-all font-black uppercase tracking-[0.3em] text-[10px] group">
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Sanctuary
                </Link>
            </div>

            {/* Header Area */}
            <header className="pt-12 pb-16 px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-gold/10 text-gold mb-10 font-black uppercase tracking-[0.4em] text-[10px] border border-gold/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.1)]">
                        <Flame size={14} className="animate-pulse fill-current" />
                        Exploring {dailyWisdomData.length} Divine Verses
                    </div>

                    <h1 className="text-7xl md:text-[10rem] font-serif font-black mb-12 leading-none tracking-tighter">
                        Sacred <span className="bhagwa-text italic block md:inline">Library</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-ivory/40 max-w-2xl mx-auto mb-16 italic font-light leading-relaxed">
                        "Category-wise wisdom to heal your mind and spirit. Select a path below to begin."
                    </p>

                    {/* Floating Search Bar */}
                    <div className="relative max-w-3xl mx-auto group z-20">
                        <div className="absolute inset-0 bg-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-full" />
                        <div className="relative flex items-center bg-white/[0.05] border border-white/10 rounded-[2.5rem] px-10 py-6 backdrop-blur-2xl group-focus-within:border-gold/50 group-focus-within:bg-white/[0.08] transition-all duration-500 shadow-2xl">
                            <Search className="text-gold/40 group-focus-within:text-gold transition-colors" size={28} />
                            <input
                                type="text"
                                placeholder="Search by verse, keyword, or tag..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="bg-transparent border-none outline-none w-full ml-6 text-2xl font-light placeholder:text-ivory/20 text-ivory"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="p-2 hover:bg-white/10 rounded-full text-ivory/40 transition-colors"
                                >
                                    Clear
                                </button>
                            )}
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* Category Filter UI - Ultra Premium */}
            <section className="sticky top-20 z-50 mb-24 py-8 backdrop-blur-xl border-y border-white/5 bg-[#020617]/80">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-4 mb-6 overflow-x-auto no-scrollbar pb-2">
                        <Filter size={14} className="text-gold/60 shrink-0" />
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold/60 whitespace-nowrap">Filter by Life Situation:</span>
                    </div>

                    <div className="flex items-center justify-start md:justify-center gap-3 overflow-x-auto no-scrollbar pb-4 min-w-max">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-500 flex flex-col items-center gap-1 group relative overflow-hidden border ${activeCategory === cat.id
                                    ? "bg-gold text-deep-blue border-gold shadow-[0_10px_30px_rgba(212,175,55,0.3)] scale-105"
                                    : "bg-white/5 text-ivory/50 hover:bg-white/10 hover:text-ivory border-white/5 hover:border-white/20"
                                    }`}
                            >
                                <span className={`text-[9px] uppercase tracking-widest font-black leading-none ${activeCategory === cat.id ? "opacity-90" : "opacity-40 group-hover:opacity-100"}`}>{cat.name}</span>
                                <span className="font-serif text-lg leading-none">{cat.hindi}</span>
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="activeFilterUnderline"
                                        className="absolute inset-x-0 bottom-0 h-1 bg-saffron"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Results Legend */}
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-center relative z-10">
                <div className="flex items-center gap-3">
                    <div className="h-px w-8 bg-gold/30" />
                    <span className="text-gold/60 font-black uppercase tracking-[0.2em] text-[10px]">
                        Showing {filteredWisdom.length} {activeCategory !== "All" ? activeCategory : "Divine"} Seeds | Page {currentPage} of {totalPages || 1}
                    </span>
                </div>
            </div>

            {/* Wisdom Grid with Enhanced Accessibility and Interactions */}
            <section className="px-6 max-w-7xl mx-auto relative z-10">
                <motion.div
                    layout
                    className="grid grid-cols-1 lg:grid-cols-2 gap-16"
                >
                    <AnimatePresence mode="popLayout">
                        {paginatedWisdom.map((wisdom, idx) => (
                            <motion.div
                                key={wisdom.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -15 }}
                                className="group relative"
                            >
                                {/* Card Glow Aura */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${wisdom.gradient} opacity-0 group-hover:opacity-[0.12] transition-opacity duration-1000 blur-[80px] -z-10`} />

                                <div className="h-full rounded-[4rem] bg-white/[0.03] border border-white/5 group-hover:border-gold/40 transition-all duration-700 overflow-hidden backdrop-blur-md flex flex-col p-12 md:p-16 relative">

                                    {/* Card Header Section */}
                                    <div className="flex justify-between items-start mb-14">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex flex-wrap gap-2">
                                                {wisdom.tags.map(tag => (
                                                    <button
                                                        key={tag}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            handleTagClick(tag);
                                                        }}
                                                        className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.1em] border transition-all ${activeCategory === tag ? "bg-gold text-deep-blue border-gold" : "bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"}`}
                                                    >
                                                        #{tag}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <span className="text-saffron font-serif italic text-2xl opacity-40">{wisdom.id < 10 ? `0${wisdom.id}` : wisdom.id}</span>
                                                <span className="text-gold/50 font-black uppercase tracking-[0.5em] text-[11px]">Chapter {wisdom.chapter}.{wisdom.verse}</span>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <button className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl text-ivory/30 hover:text-gold hover:bg-gold/10 transition-all shadow-inner">
                                                <Bookmark size={20} />
                                            </button>
                                            <button className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl text-ivory/30 hover:text-gold hover:bg-gold/10 transition-all shadow-inner">
                                                <Share2 size={20} />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Central Sanskrit Text */}
                                    <div className="mb-14 text-center">
                                        <motion.h3
                                            className="text-2xl md:text-4xl font-serif font-black text-ivory leading-[1.4] mb-10 group-hover:text-gold transition-colors duration-700 drop-shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                                        >
                                            {wisdom.sanskrit}
                                        </motion.h3>
                                        <div className="flex justify-center gap-2">
                                            <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-gold/30" />
                                            <div className="w-2 h-2 rounded-full bg-gold/40 animate-pulse" />
                                            <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-gold/30" />
                                        </div>
                                    </div>

                                    {/* Deep Analysis Content */}
                                    <div className="space-y-12 mb-16 px-4">
                                        {/* Hindi Meaning */}
                                        <div className="relative pl-10 border-l-2 border-gold/10 group-hover:border-gold/30 transition-colors">
                                            <div className="absolute top-0 left-[-2px] h-full w-[2px] bg-gradient-to-b from-gold via-saffron to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <h4 className="text-gold font-black uppercase tracking-[0.3em] text-[10px] mb-4">The Essence (हिंदी भाव)</h4>
                                            <p className="text-xl md:text-2xl text-ivory/90 font-serif leading-relaxed italic">
                                                "{wisdom.hindi}"
                                            </p>
                                        </div>

                                        {/* Application Box */}
                                        <div className="p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.06] to-transparent border border-white/5 relative overflow-hidden group/box hover:border-gold/20 transition-all duration-500">
                                            <div className="absolute -top-4 -right-4 p-8 text-white/[0.03] group-hover/box:text-gold/[0.05] transition-colors">
                                                <Quote size={120} />
                                            </div>

                                            <div className="relative z-10">
                                                <div className="flex items-center gap-3 mb-6">
                                                    <div className="p-2 bg-gold/10 rounded-lg">
                                                        <Sparkles size={16} className="text-gold animate-pulse" />
                                                    </div>
                                                    <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Practical Alchemy</span>
                                                </div>

                                                <div className="mb-8">
                                                    <span className="text-saffron/80 text-xs font-bold uppercase tracking-[0.2em] block mb-3 border-b border-saffron/20 pb-2 w-fit">
                                                        {wisdom.modernContext}
                                                    </span>
                                                    <p className="text-ivory font-sans text-lg leading-relaxed font-light">
                                                        {wisdom.application}
                                                    </p>
                                                </div>

                                                <p className="text-gold/70 font-serif text-base border-t border-white/5 pt-6 mt-6 leading-relaxed">
                                                    {wisdom.hindiApplication}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bottom Footer Decor */}
                                    <div className="absolute -bottom-16 -left-16 text-[15rem] opacity-[0.02] group-hover:opacity-[0.08] transition-all duration-1000 -rotate-12 group-hover:rotate-0 select-none pointer-events-none blur-[2px]">
                                        🕉️
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="mt-auto flex justify-center">
                                        <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-gold/10 to-transparent rounded-full group-hover:via-gold/40 transition-all duration-700" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                    <div className="mt-24 flex items-center justify-center gap-4 relative z-10">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => handlePageChange(currentPage - 1)}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] hover:bg-gold/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-xl"
                        >
                            Previous
                        </button>

                        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar max-w-sm md:max-w-none">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    onClick={() => handlePageChange(page)}
                                    className={`w-12 h-12 rounded-xl border font-bold transition-all shrink-0 ${currentPage === page
                                        ? "bg-gold text-deep-blue border-gold shadow-[0_0_15px_rgba(212,175,55,0.3)]"
                                        : "bg-white/5 border-white/10 text-ivory/60 hover:bg-white/10"
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}
                        </div>

                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => handlePageChange(currentPage + 1)}
                            className="px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-gold font-black uppercase tracking-widest text-[10px] hover:bg-gold/10 disabled:opacity-30 disabled:hover:bg-white/5 transition-all shadow-xl"
                        >
                            Next
                        </button>
                    </div>
                )}

                {/* Empty State enhancement */}
                {filteredWisdom.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="py-60 text-center relative"
                    >
                        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
                            <Search size={400} />
                        </div>
                        <Sparkles size={64} className="mx-auto text-gold/30 mb-10 animate-pulse" />
                        <h3 className="text-4xl font-serif text-ivory/60 font-black mb-6">Seeds Not Found</h3>
                        <p className="text-ivory/30 text-xl max-w-md mx-auto leading-relaxed">
                            No divine seeds found matching your criteria. Try adjusting your path.
                        </p>
                        <button
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            className="mt-12 px-10 py-4 bg-gold/10 text-gold border border-gold/20 rounded-2xl hover:bg-gold hover:text-deep-blue transition-all font-black uppercase tracking-widest text-xs"
                        >
                            Reset Sanctuary
                        </button>
                    </motion.div>
                )}
            </section>
        </div>
    );
}
