"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";


export default function Philosophy() {
    return (
        <SectionWrapper id="philosophy" className="bg-transparent z-10 min-h-0 py-24 md:py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                className="max-w-4xl mx-auto text-center"
            >
                <motion.h2
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-sm md:text-md font-mono text-brand-blue mb-8 tracking-[0.2em] uppercase"
                >
                    Why We Exist
                </motion.h2>

                <motion.h3
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } }
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground mb-12"
                >
                    Every Great Product Starts With a <span className="text-brand-blue">Bold Idea.</span>
                </motion.h3>

                <div className="space-y-8 text-lg md:text-2xl text-foreground/70 font-light leading-relaxed max-w-3xl mx-auto">
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.4 } }
                        }}
                    >
                        In a world filled with average solutions, we decided to engineer something different.
                        While others settle for templates, we forge digital ecosystems.
                    </motion.p>

                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.6 } }
                        }}
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
    );
}
