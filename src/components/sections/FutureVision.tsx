"use client";

import SectionWrapper from "../SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRef } from "react";

import { useEffect, useState } from "react";
import Logo from "../ui/Logo";
import { useTheme } from "next-themes";

export default function FutureVision() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    const isDark = theme === "dark";

    // Prevent hydration mismatch by using a stable state during initial render
    const blendMode = mounted ? (isDark ? "mix-blend-screen" : "mix-blend-multiply") : "mix-blend-screen";

    return (
        <section ref={containerRef} className="relative py-40 bg-section-bg overflow-hidden flex items-center justify-center">

            {/* Background Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />

            <SectionWrapper className="relative z-10 text-center">
                <motion.div style={{ scale, opacity }}>
                    <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-[var(--text-muted)] leading-none md:leading-[0.9] tracking-tighter mb-10">
                        THE FUTURE <br />
                        IS INTELLIGENT.
                    </h2>

                    <div className="flex flex-col items-center gap-4 mb-20 text-center">
                        <Logo className="w-24 h-24 md:w-32 md:h-32" />
                        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white">
                            AXOVIRA
                        </h2>
                    </div>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
