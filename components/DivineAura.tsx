"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function DivineAura() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-30">
            {[...Array(15)].map((_, i) => (
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
                        opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className={`absolute w-[300px] h-[300px] ${i % 2 === 0 ? "bg-gold/10" : "bg-saffron/10"} rounded-full blur-[100px]`}
                />
            ))}
        </div>
    );
}
