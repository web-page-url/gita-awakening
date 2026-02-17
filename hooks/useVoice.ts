"use client";

import { useState, useCallback, useEffect } from "react";

export const useVoice = () => {
    const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
    const [isPaused, setIsPaused] = useState(false);

    const stop = useCallback(() => {
        if (typeof window !== "undefined") {
            window.speechSynthesis.cancel();
            setIsSpeaking(null);
            setIsPaused(false);
        }
    }, []);

    const pause = useCallback(() => {
        if (typeof window !== "undefined" && window.speechSynthesis.speaking) {
            window.speechSynthesis.pause();
            setIsPaused(true);
        }
    }, []);

    const resume = useCallback(() => {
        if (typeof window !== "undefined" && window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
            setIsPaused(false);
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
            utterance.lang = "hi-IN";
            // Look for hi-IN first, then any hi, then check if voice name contains "hindi"
            utterance.voice =
                voices.find(v => v.lang.replace('_', '-').toLowerCase() === "hi-in") ||
                voices.find(v => v.lang.toLowerCase().startsWith("hi")) ||
                voices.find(v => v.name.toLowerCase().includes("hindi")) ||
                null;
            utterance.rate = 0.85;
        } else {
            utterance.lang = "en-IN";
            utterance.voice =
                voices.find(v => v.lang.includes("en-IN")) ||
                voices.find(v => v.lang.includes("en-GB")) ||
                voices.find(v => v.lang.includes("en-US")) ||
                null;
            utterance.rate = 0.9;
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
    }, [isSpeaking, stop]);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (typeof window !== "undefined") {
                window.speechSynthesis.cancel();
            }
        };
    }, []);

    return { speak, stop, pause, resume, isSpeaking, isPaused };
};
