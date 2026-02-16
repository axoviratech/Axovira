"use client";

import SectionWrapper from "../SectionWrapper";
import GlitchText from "../ui/GlitchText";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Problem() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const problems = [
        "Technology is complex.",
        "Businesses struggle.",
        "Solutions feel disconnected."
    ];

    return (
        <SectionWrapper id="problem" className="bg-brand-black z-10">
            <div ref={ref} className="flex flex-col items-center justify-center min-h-[60vh] gap-10">
                {problems.map((text, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.5, duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-gray-300 hover:text-white transition-colors cursor-default">
                            <GlitchText text={text} />
                        </h2>
                    </motion.div>
                ))}
            </div>

            {/* Glitch Overlay Effect - Optimized: Removed mix-blend-mode for performance */}
            <div className="absolute inset-0 bg-white/5 opacity-[0.02] pointer-events-none" />
        </SectionWrapper>
    );
}
