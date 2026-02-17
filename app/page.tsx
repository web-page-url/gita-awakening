"use client";

import Hero from "@/components/Hero";
import DailyWisdom from "@/components/DailyWisdom";
import ChaptersGrid from "@/components/ChaptersGrid";
import LifeLessonsSection from "@/components/LifeLessonsSection";
import DivineGallery from "@/components/DivineGallery";
import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight, Play, Volume2, VolumeX } from "lucide-react";
import { useVoice } from "@/hooks/useVoice";

export default function Home() {
  const { speak, isSpeaking } = useVoice();
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <DailyWisdom />
      <ChaptersGrid />
      <DivineGallery />
      <LifeLessonsSection />
      {/* Featured CTA: AI Krishna Guide - Soul-Taking Design */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#050B18] z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] animate-pulse" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-[10px] font-black uppercase tracking-widest">
                <Sparkles size={12} fill="currentColor" /> THE SUPREME INTELLIGENCE
              </div>
              <h2 className="text-6xl sm:text-7xl font-serif font-black text-ivory leading-tight text-balance">
                Your Personal <br />
                <span className="gold-text italic">Krishna Guide</span>
              </h2>
              <p className="text-xl text-ivory/60 leading-relaxed font-light max-w-md">
                Talk to the AI trained on the deepest secrets of the Gita. Receive instant, divine answers to your modern struggles.
              </p>
              <Link href="/ai-guide">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(212, 175, 55, 0.4)" }}
                  className="mt-4 px-12 py-5 bg-gold text-deep-blue rounded-2xl font-black text-xl shadow-2xl flex items-center gap-3 transition-colors hover:bg-saffron hover:text-white group"
                >
                  Seek Guidance <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-12 bg-white/5 border border-white/10 rounded-[60px] backdrop-blur-3xl group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 text-9xl opacity-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000 select-none">🕉️</div>
              <div className="space-y-8 relative z-10">
                <div className="flex justify-between items-center w-full">
                  <div className="w-16 h-16 rounded-2xl bg-saffron/20 border border-saffron/30 flex items-center justify-center">
                    <Sparkles className="text-saffron" />
                  </div>
                  <button
                    onClick={() => speak("Seeker, your purpose is not found, but revealed through selfless action. Perform your duty without attachment to the results.", "home-ai-teaser", "en")}
                    className={`p-3 rounded-2xl transition-all ${isSpeaking === "home-ai-teaser" ? "bg-gold text-deep-blue" : "bg-white/10 text-gold/60 hover:text-gold"}`}
                  >
                    {isSpeaking === "home-ai-teaser" ? <VolumeX size={24} /> : <Volume2 size={24} />}
                  </button>
                </div>
                <div className="space-y-2">
                  <p className="text-gold font-bold text-xs tracking-widest uppercase opacity-60">Sample Query</p>
                  <h4 className="text-3xl font-serif font-bold text-ivory italic">"What is my purpose?"</h4>
                </div>
                <div className="p-8 bg-black/40 rounded-[32px] border border-white/10 text-ivory/60 leading-relaxed italic text-lg shadow-inner">
                  "Seeker, your purpose is not found, but revealed through selfless action. Perform your duty without attachment to the results..."
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audio Mode Teaser - Addictive Micro-UI */}
      <section className="py-40 px-4 text-center bg-ivory/30 dark:bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12 relative z-10"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gold blur-3xl opacity-20 animate-pulse" />
            <h2 className="text-5xl sm:text-8xl font-serif font-black text-deep-blue dark:text-ivory relative leading-[1.1]">
              The Sound of <br /><span className="gold-text italic">Infinity</span>
            </h2>
          </div>
          <p className="text-2xl text-deep-blue/50 dark:text-ivory/50 font-light max-w-2xl mx-auto italic px-6">
            "Close your eyes. Let the divine frequencies of the Gita rewire your soul for peace."
          </p>
          <Link href="/audio-mode">
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: "0 0 50px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                // If already speaking the intro, let the navigation happen or stop? 
                // User wants voice for free. Let's make this button speak the teaser text if they haven't navigated yet.
                // But typically a Play button navigates. Let's add a separate voice icon or make it speak on hover?
                // Actually, let's just make the "Sound of Infinity" title speakable.
              }}
              className="w-32 h-32 bg-deep-blue dark:bg-ivory dark:text-deep-blue text-ivory rounded-full flex flex-col items-center justify-center shadow-2xl hover:bg-gold hover:text-deep-blue transition-all mx-auto group"
            >
              <Play size={48} fill="currentColor" className="ml-2 group-hover:scale-110 transition-transform" />
            </motion.button>
          </Link>
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => speak("Close your eyes. Let the divine frequencies of the Gita rewire your soul for peace.", "home-audio-teaser", "en")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${isSpeaking === "home-audio-teaser" ? "bg-gold text-deep-blue border-gold" : "bg-gold/5 text-gold border-gold/20 hover:bg-gold/20"}`}
            >
              {isSpeaking === "home-audio-teaser" ? <VolumeX size={14} /> : <Volume2 size={14} />}
              <span className="text-[10px] font-black tracking-[0.6em] uppercase">Preview Sound</span>
            </button>
            <div className="w-1 h-12 bg-gradient-to-b from-saffron to-transparent mt-4" />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
