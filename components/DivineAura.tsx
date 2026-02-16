"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DivineAura() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30">
            {mounted && [...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 100 + "vw",
                        y: Math.random() * 100 + "vh",
                        scale: Math.random() * 0.5 + 0.5,
                    }}
                    animate={{
                        x: [null, Math.random() * 100 + "vw"],
                        y: [null, Math.random() * 100 + "vh"],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: Math.random() * 25 + 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] ${i % 2 === 0 ? "bg-gold/5" : "bg-saffron/5"} rounded-full blur-[60px] sm:blur-[100px] will-change-transform`}
                />
            ))}
        </div>
    );
}
