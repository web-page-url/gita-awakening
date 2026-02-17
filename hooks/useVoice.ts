"use client";

import { useState, useCallback, useEffect } from "react";

export const useVoice = () => {
    const [isSpeaking, setIsSpeaking] = useState<string | null>(null);

    const stop = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.cancel();
            setIsSpeaking(null);
        }
    }, []);

    const speak = useCallback((text: string, id: string, lang: "hi" | "en" = "en") => {
        if (typeof window === "undefined") return;

        if (isSpeaking === id) {
            stop();
            return;
        }

        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text.replace(/\*\*/g, ''));

        const voices = window.speechSynthesis.getVoices();
        if (lang === "hi") {
            utterance.voice = voices.find(v => v.lang.includes("hi-IN")) || null;
            utterance.rate = 0.85;
        } else {
            utterance.voice = voices.find(v => v.lang.includes("en-IN")) || voices.find(v => v.lang.includes("en-GB")) || voices.find(v => v.lang.includes("en-US")) || null;
            utterance.rate = 0.9;
        }

        utterance.onend = () => setIsSpeaking(null);
        utterance.onerror = () => setIsSpeaking(null);

        setIsSpeaking(id);
        window.speechSynthesis.speak(utterance);
    }, [isSpeaking, stop]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (typeof window !== "undefined") {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return { speak, stop, isSpeaking };
};
