"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, User, ArrowLeft, Bot, MessageCircle } from "lucide-react";

const INITIAL_MESSAGE = {
    id: 1,
    text: "Welcome, seeker. I am your AI Krishna Guide. What troubles your heart today?",
    sender: "ai",
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
};

export default function AIGuide() {
    const [messages, setMessages] = useState([INITIAL_MESSAGE]);
    const [input, setInput] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMsg = {
            id: Date.now(),
            text: input,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Mock AI Response
        setTimeout(() => {
            const aiResponse = {
                id: Date.now() + 1,
                text: "In the battlefield of life, your only duty is to act without attachment. Remember Chapter 2, Verse 47. Focus on your effort, not the result.",
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages((prev) => [...prev, aiResponse]);
            setIsTyping(false);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-[#050B18] text-ivory font-sans flex flex-col relative overflow-hidden">
            {/* Sacred Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[150px]" />
            </div>

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#050B18]/80 backdrop-blur-xl border-b border-gold/10 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ x: -5 }}
                        className="p-2 hover:bg-white/5 rounded-xl cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                    </motion.div>
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold to-saffron flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <Bot size={22} className="text-deep-blue" />
                        </div>
                        <div>
                            <h1 className="font-serif font-bold text-lg leading-none">AI Krishna Guide</h1>
                            <span className="text-[10px] text-gold font-bold tracking-widest flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" /> ONLINE & OMNISCIENT
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 bg-white/5 rounded-xl text-ivory/60 hover:text-ivory transition-colors">
                        <Sparkles size={20} />
                    </button>
                </div>
            </header>

            {/* Chat Area */}
            <div
                ref={scrollRef}
                className="flex-grow pt-24 pb-32 px-4 sm:px-8 overflow-y-auto relative z-10 space-y-8 scroll-smooth"
            >
                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    <AnimatePresence initial={false}>
                        {messages.map((msg) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-3`}
                            >
                                {msg.sender === "ai" && (
                                    <div className="w-8 h-8 rounded-full bg-gold/20 flex-shrink-0 flex items-center justify-center border border-gold/20">
                                        <Bot size={16} className="text-gold" />
                                    </div>
                                )}

                                <div className="flex flex-col gap-1 max-w-[80%]">
                                    <div
                                        className={`px-6 py-4 rounded-3xl text-lg leading-relaxed shadow-xl ${msg.sender === "user"
                                                ? "bg-saffron text-white rounded-br-none font-medium"
                                                : "bg-deep-blue/50 backdrop-blur-md border border-gold/10 rounded-bl-none text-ivory/90"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] opacity-40 font-bold px-2 uppercase tracking-tighter">
                                        {msg.time}
                                    </span>
                                </div>

                                {msg.sender === "user" && (
                                    <div className="w-8 h-8 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center border border-white/10">
                                        <User size={16} className="text-ivory" />
                                    </div>
                                )}
                            </motion.div>
                        ))}

                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex justify-start items-center gap-3"
                            >
                                <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
                                    <Bot size={16} className="text-gold" />
                                </div>
                                <div className="px-6 py-4 bg-deep-blue/30 rounded-3xl rounded-bl-none flex gap-1.5">
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                                    <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce" />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Input Bar */}
            <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-gradient-to-t from-[#050B18] via-[#050B18] to-transparent">
                <div className="max-w-4xl mx-auto relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder="Talk to the Divine..."
                        className="w-full bg-white/5 border-2 border-gold/20 focus:border-gold/50 rounded-[30px] px-8 py-5 text-xl outline-none transition-all placeholder:text-ivory/20 shadow-2xl backdrop-blur-2xl pr-20"
                    />
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleSend}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gold hover:bg-saffron text-deep-blue rounded-full flex items-center justify-center transition-colors shadow-lg"
                    >
                        <Send size={20} fill="currentColor" />
                    </motion.button>
                </div>

                {/* Suggestion Chips */}
                <div className="max-w-4xl mx-auto mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-3 pb-2 opacity-50 hover:opacity-100 transition-opacity">
                    {["Help with anxiety", "I lack discipline", "Purpose of life", "Karma vs Dharma"].map((chip) => (
                        <button
                            key={chip}
                            onClick={() => setInput(chip)}
                            className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-bold hover:bg-gold/10 transition-colors uppercase tracking-widest"
                        >
                            {chip}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
