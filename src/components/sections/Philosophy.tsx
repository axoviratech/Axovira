"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";

export default function Philosophy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0]);
    const y = useTransform(scrollYProgress, [0.1, 0.3], [50, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[80vh] flex items-center justify-center bg-black z-10 overflow-hidden">
            <SectionWrapper>
                <motion.div
                    style={{ opacity, y }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-sm md:text-md font-mono text-brand-blue mb-8 tracking-[0.2em] uppercase">
                        Why We Exist
                    </h2>

                    <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-12">
                        Every Great Product Starts With a <span className="text-brand-blue">Bold Idea.</span>
                    </h3>

                    <div className="space-y-8 text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-3xl mx-auto">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8 }}
                        >
                            In a world filled with average solutions, we decided to engineer something different.
                            While others settle for templates, we forge digital ecosystems.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            We don&apos;t just write code; we architect the future of your business.
                            Every pixel, every interaction, and every line of logic is crafted with
                            obsessive precision.
                        </motion.p>
                    </div>
                </motion.div>

                {/* Subtle Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
            </SectionWrapper>
        </section>
    );
}
