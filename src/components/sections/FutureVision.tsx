"use client";

import SectionWrapper from "../SectionWrapper";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function FutureVision() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);

    return (
        <section ref={containerRef} className="relative py-40 bg-brand-black overflow-hidden flex items-center justify-center">

            {/* Background Pulse */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-brand-blue/10 rounded-full blur-[120px] animate-pulse" />

            <SectionWrapper className="relative z-10 text-center">
                <motion.div style={{ scale, opacity }}>
                    <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 leading-[0.9] tracking-tighter mb-10">
                        THE FUTURE <br />
                        IS INTELLIGENT.
                    </h2>

                    <h2 className="text-4xl md:text-7xl lg:text-9xl font-black text-brand-blue leading-[0.9] tracking-tighter mix-blend-screen drop-shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                        THE FUTURE <br />
                        IS AXOVIRA.
                    </h2>
                </motion.div>
            </SectionWrapper>
        </section>
    );
}
