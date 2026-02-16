"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutClient({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isAiGuide = pathname === "/ai-guide";

    return (
        <>
            {!isAiGuide && <Navbar />}
            <main className={`flex-grow ${isAiGuide ? "" : "pt-[80px]"}`}>
                {children}
            </main>
            {!isAiGuide && <Footer />}
        </>
    );
}
