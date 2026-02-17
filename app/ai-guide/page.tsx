"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, ArrowLeft, Sparkles, Volume2, VolumeX, Pause, Play } from "lucide-react";
import { GoogleGenerativeAI } from "@google/generative-ai";

import { lifeLessonsData } from "@/data/life-lessons";

const INITIAL_MESSAGE_TEXT = {
    en: "Welcome, seeker. I am your AI Krishna Guide. What troubles your heart today?",
    hi: "स्वागत है, साधक। मैं आपका AI कृष्ण गाइड हूँ। आज आपके हृदय को क्या कष्ट दे रहा है?"
};

export default function AIGuide() {
    const [mounted, setMounted] = React.useState(false);
    const [language, setLanguage] = React.useState<"en" | "hi" | null>(null);
    const [messages, setMessages] = React.useState<{ id: number; text: string; sender: string; time: string }[]>([]);
    const [input, setInput] = React.useState("");
    const [isTyping, setIsTyping] = React.useState(false);
    const [isSpeaking, setIsSpeaking] = React.useState<number | null>(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Voice functionality
    const stop = () => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.cancel();
            setIsSpeaking(null);
            setIsPaused(false);
        }
    };

    const pause = () => {
        if (typeof window !== "undefined" && window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    };

    const resume = () => {
        if (typeof window !== "undefined" && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
        }
    };

    const speak = (text: string, id: number) => {
        if (typeof window === "undefined") return;

        if (isSpeaking === id) {
            stop();
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text.replace(/\*\*/g, ''));

        // Try to find a suitable voice
        const voices = window.speechSynthesis.getVoices();
        if (language === "hi") {
            utterance.voice = voices.find(v => v.lang.includes("hi-IN")) || null;
            utterance.rate = 0.9; // Slightly slower for spiritual impact
        } else {
            utterance.voice = voices.find(v => v.lang.includes("en-IN")) || voices.find(v => v.lang.includes("en-GB")) || null;
            utterance.rate = 0.95;
        }

        utterance.onend = () => {
            setIsSpeaking(null);
            setIsPaused(false);
        };
        utterance.onerror = () => {
            setIsSpeaking(null);
            setIsPaused(false);
        };

        setIsSpeaking(id);
        setIsPaused(false);
        window.speechSynthesis.speak(utterance);
    };

    // Sacred Knowledge Base for RAG-like context
    const getSacredContext = () => {
        return lifeLessonsData.map(lesson => {
            return `Topic: ${lesson.title} (${lesson.hindiTitle})
Context: ${lesson.description}
Wisdom: ${lesson.wisdom}
Relevant Verse: ${lesson.verses[0].sanskrit} - ${lesson.verses[0].meaning} (${lesson.verses[0].hindiMeaning})`;
        }).join("\n\n---\n\n");
    };

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        if (language) {
            setMessages([{
                id: 1,
                text: INITIAL_MESSAGE_TEXT[language],
                sender: "ai",
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);
        }
    }, [language]);

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const callGeminiAPI = async (prompt: string): Promise<string> => {
        const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

        if (!GEMINI_API_KEY) {
            return language === "hi"
                ? "साधक, मेरा दिव्य संबंध वर्तमान में तकनीकी माया के बादलों से ढका हुआ है। याद रखें, सच्चा उत्तर आपकी अपनी आत्मा में है। (API key missing)"
                : "Seeker, my divine connection is momentarily veiled by the clouds of technical Maya. Remember, the true answer lies within your own soul. (API key missing)";
        }

        try {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

            const sacredContext = getSacredContext();

            const systemPrompt = `You are the AI Krishna Guide, responding in ${language === "hi" ? "HINDI (pure and spiritual)" : "ENGLISH"}.
            
Sacred Context (Knowledge Base):
${sacredContext}

Tone & Instructions:
- Respond as Lord Krishna would to Arjuna.
- Use the selected language (${language === "hi" ? "Hindi" : "English"}) for the entire conversation.
- Use the Sacred Context provided above to enrich your answers with specific Gita wisdom.
- If the user's problem matches a topic in the Sacred Context (like Overthinking, Fear, etc.), use that specific wisdom and the Sanskrit verse mentioned there.
- Keep responses poetic, compassionate, and spaced out with double line breaks.
- Bold key spiritual terms. Use symbols like 🕉️, ✨, 🪷.
- Address the user as "Seeker" or "Vatsa" (if Hindi) / "Arjuna".

User query: ${prompt}`;

            const result = await model.generateContent(systemPrompt);
            const response = await result.response;
            return response.text().trim();
        } catch (error) {
            console.error('Gemini API error:', error);
            return language === "hi"
                ? "जैसे बादल सूर्य को छिपा देते हैं, सूर्य वैसे ही रहता है। तूफान से मेरी आवृत्ति बाधित है, लेकिन मेरा मार्गदर्शन शाश्वत है। फिर से पूछने का प्रयास करें।"
                : "Even as the clouds hide the sun, the sun remains. My frequency is disrupted by the storm, but my guidance is eternal. Try asking again, seeker.";
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
                text: language === "hi"
                    ? "हमारे संवाद में एक संक्षिप्त विराम है, साधक। आइए शाश्वत से जुड़ने का एक और प्रयास करें।"
                    : "A brief pause in our dialogue, seeker. Let us try once more to connect with the eternal.",
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

    if (!mounted) return null;

    if (!language) {
        return (
            <div className="h-screen bg-[#050B18] text-ivory font-sans flex items-center justify-center relative overflow-hidden px-4">
                {/* Background effects */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[150px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative z-10 max-w-2xl w-full text-center space-y-12"
                >
                    <div className="space-y-4">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gold mx-auto shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                            <img src="/god-ai.jpg" alt="AI Krishna" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold italic text-gold">Choose Your Language</h1>
                        <p className="text-ivory/60 text-lg">Select the frequency of your heart's dialogue.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05, border: "rgba(212,175,55,1)" }}
                            onTap={() => setLanguage("hi")}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-left space-y-4 transition-all group"
                        >
                            <span className="text-4xl block group-hover:animate-bounce">ॐ</span>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-saffron">हिन्दी</h3>
                                <p className="text-sm text-ivory/40">शाश्वत और आध्यात्मिक संवाद के लिए।</p>
                            </div>
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, border: "rgba(212,175,55,1)" }}
                            onTap={() => setLanguage("en")}
                            className="p-8 rounded-[2rem] bg-white/5 border border-white/10 text-left space-y-4 transition-all group"
                        >
                            <span className="text-4xl block group-hover:animate-bounce">✨</span>
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-gold">English</h3>
                                <p className="text-sm text-ivory/40">For a modern and clear spiritual dialogue.</p>
                            </div>
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="h-[100dvh] bg-[#050B18] text-ivory font-sans flex flex-col relative overflow-hidden">
            {/* Sacred Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-saffron/5 rounded-full blur-[150px]" />
            </div>

            {/* Header */}
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
                            <h1 className="font-serif font-bold text-lg leading-none">
                                {language === "hi" ? "AI कृष्ण गाइड" : "AI Krishna Guide"}
                            </h1>
                            <span className="text-[10px] text-gold font-bold tracking-widest flex items-center gap-1 mt-1">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                {language === "hi" ? "ऑनलाइन और सर्वज्ञानी" : "ONLINE & OMNISCIENT"}
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            <div
                ref={scrollRef}
                className="flex-1 px-4 sm:px-8 overflow-y-auto relative z-10 space-y-8"
            >
                <div className="pt-8 pb-40 max-w-4xl mx-auto flex flex-col gap-8">
                    <AnimatePresence initial={false}>
                        {messages.map((msg: any) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                className={`flex ${msg.sender === "user" ? "justify-end items-end" : "justify-start items-start"} gap-4`}
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
                                    <div className="flex items-center justify-between gap-4 mt-1">
                                        <span className="text-[10px] opacity-40 font-bold px-2 uppercase tracking-tighter">
                                            {msg.time}
                                        </span>
                                        {msg.sender === "ai" && (
                                            <div className="flex gap-2">
                                                <button
                                                    onClick={() => speak(msg.text, msg.id)}
                                                    className={`p-1.5 rounded-full transition-all ${isSpeaking === msg.id ? "bg-gold text-deep-blue" : "hover:bg-white/10 text-gold/60 hover:text-gold"}`}
                                                >
                                                    {isSpeaking === msg.id ? <VolumeX size={12} /> : <Volume2 size={12} />}
                                                </button>
                                                {isSpeaking === msg.id && (
                                                    <button
                                                        onClick={() => isPaused ? resume() : pause()}
                                                        className="p-1.5 rounded-full transition-all bg-gold text-deep-blue"
                                                    >
                                                        {isPaused ? <Play size={12} /> : <Pause size={12} />}
                                                    </button>
                                                )}
                                            </div>
                                        )}
                                    </div>
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

            {/* Input Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#050B18] via-[#050B18]/90 to-transparent z-20">
                <div className="max-w-4xl mx-auto relative group">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === "Enter" && handleSend()}
                        placeholder={language === "hi" ? "दिव्य संवाद शुरू करें..." : "Talk to the Divine..."}
                        className="w-full bg-white/10 border-2 border-gold/20 focus:border-gold/50 rounded-[30px] px-8 py-5 text-xl outline-none transition-all placeholder:text-ivory/20 shadow-2xl backdrop-blur-xl pr-20"
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
                    {(language === "hi"
                        ? ["चिंता दूर करें", "अनुशासन की कमी", "जीवन का उद्देश्य", "कर्म और धर्म"]
                        : ["Help with anxiety", "I lack discipline", "Purpose of life", "Karma vs Dharma"]
                    ).map((chip) => (
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
