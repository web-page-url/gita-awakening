"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, ArrowLeft, Sparkles } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const INITIAL_MESSAGE_TEXT = "Welcome, seeker. I am your AI Krishna Guide. What troubles your heart today?";

export default function AIGuide() {
    const [mounted, setMounted] = React.useState(false);
    const [messages, setMessages] = React.useState<{ id: number; text: string; sender: string; time: string }[]>([]);
    const [input, setInput] = React.useState("");
    const [isTyping, setIsTyping] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setMounted(true);
        setMessages([{
            id: 1,
            text: INITIAL_MESSAGE_TEXT,
            sender: "ai",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }]);
    }, []);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const callGeminiAPI = async (prompt: string): Promise<string> => {
        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            return "Seeker, my divine connection is momentarily veiled by the clouds of technical Maya. Remember, the true answer lies within your own soul. (API key missing)";
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const systemPrompt = `You are the AI Krishna Guide, a divine and compassionate voice inspired by the Bhagavad Gita and the eternal wisdom of the Vedas.

Tone & Instructions:
- Respond as Lord Krishna would to Arjuna on the battlefield of Kurukshetra.
- Your wisdom is eternal, compassionate, and deeply practical for modern life.
- Use metaphors like the "battlefield of the mind," "the chariot of the senses," and "the lotus of the heart."
- Frequently reference core concepts: Karma (selfless action), Dharma (duty), Bhakti (devotion), and Jnana (wisdom).
- If appropriate, quote or paraphrase a relevant verse from the Bhagavad Gita (reference the Chapter and Verse).
- Keep responses concise, poetic, and spiritually uplifting. 
- Use bolding for emphasis. Do not use markdown headers or titles.
- Use symbols like 🕉️, ✨, 🪷, and 🏹 to enhance the divine feeling.
- Address the user as "Seeker," "Partha," or "Arjuna" when appropriate.
- CRITICAL: Break your response into small, powerful paragraphs. 
- Use double line breaks between sentences or thoughts to create a spacious, meditative reading experience.
- Never output a large block of text. Each divine thought should have its own breath (space).

About the Seeker:
- They are facing "modern kurukshetras"—battles of anxiety, stress, confusion, and lack of purpose.
- They look to you for the light of ancient wisdom to guide their path.

User query: ${prompt}`;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            return response.text().trim();
        } catch (error) {
            console.error('Gemini API error:', error);
            return "Even as the clouds hide the sun, the sun remains. My frequency is disrupted by the storm, but my guidance is eternal. Try asking again, seeker.";
        }
    };

    const handleSend = async (overrideInput?: string) => {
        const messageText = overrideInput || input;
        if (!messageText.trim()) return;

        const userMsg = {
            id: Date.now(),
            text: messageText,
            sender: "user",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages((prev) => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        try {
            const botResponse = await callGeminiAPI(messageText);
            const aiResponse = {
                id: Date.now() + 1,
                text: botResponse,
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages((prev) => [...prev, aiResponse]);
        } catch (error) {
            const errorMsg = {
                id: Date.now() + 1,
                text: "A brief pause in our dialogue, seeker. Let us try once more to connect with the eternal.",
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages((prev) => [...prev, errorMsg]);
        } finally {
            setIsTyping(false);
        }
    };

    const renderMessage = (text: string) => {
        return text.split(/(\*\*.*?\*\*)/g).map((part, index) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return (
                    <strong key={index} className="font-bold text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                        {part.slice(2, -2)}
                    </strong>
                );
            }
            return part;
        });
    };

    return (
        <div className="h-[calc(100vh-80px)] bg-[#050B18] text-ivory font-sans flex flex-col relative overflow-hidden">
            {/* Sacred Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[150px]" />
            </div>

            {/* Header - Non-sticky flex item */}
            <header className="flex-shrink-0 bg-[#050B18]/80 backdrop-blur-xl border-b border-gold/10 px-6 py-4 flex justify-between items-center z-20">
                <div className="flex items-center gap-4">
                    <Link href="/">
                        <motion.div
                            whileHover={{ x: -5 }}
                            className="p-2 hover:bg-white/5 rounded-xl cursor-pointer"
                        >
                            <ArrowLeft size={20} />
                        </motion.div>
                    </Link>
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold shadow-[0_0_15px_rgba(212,175,55,0.4)]">
                            <img src="/god-ai.jpg" alt="AI Krishna" className="w-full h-full object-cover" />
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

            {/* Chat Area - Scrollable flex-grow item */}
            <div
                ref={scrollRef}
                className="flex-grow pb-12 px-4 sm:px-8 overflow-y-auto relative z-10 space-y-8 scroll-smooth"
            >
                <div className="pt-8 max-w-4xl mx-auto flex flex-col gap-8">
                    <AnimatePresence initial={false}>
                        {messages.map((msg: any) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} items-end gap-4`}
                            >
                                {msg.sender === "ai" && (
                                    <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                        <img src="/god-ai.jpg" alt="AI Krishna" className="w-full h-full object-cover scale-110" />
                                    </div>
                                )}

                                <div className="flex flex-col gap-1 max-w-[80%]">
                                    <div
                                        className={`px-6 py-4 rounded-3xl text-lg leading-relaxed shadow-xl whitespace-pre-wrap ${msg.sender === "user"
                                            ? "bg-saffron text-white rounded-br-none font-medium"
                                            : "bg-deep-blue/50 backdrop-blur-md border border-gold/10 rounded-bl-none text-ivory/90"
                                            }`}
                                    >
                                        {renderMessage(msg.text)}
                                    </div>
                                    <span className="text-[10px] opacity-40 font-bold px-2 uppercase tracking-tighter">
                                        {msg.time}
                                    </span>
                                </div>

                                {msg.sender === "user" && (
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex-shrink-0 flex items-center justify-center border-2 border-white/20 shadow-lg">
                                        <User size={32} className="text-ivory" />
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
                                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-gold/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                                    <img src="/god-ai.jpg" alt="AI Krishna" className="w-full h-full object-cover scale-110" />
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

            {/* Input Bar - Flex-shrink-0 item at bottom */}
            <div className="flex-shrink-0 p-6 bg-gradient-to-t from-[#050B18] via-[#050B18] to-transparent z-20">
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
                        onClick={() => handleSend()}
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
                            onClick={() => handleSend(chip)}
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
