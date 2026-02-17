"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";


const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
};

const sentenceVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05,
        },
    },
};

export default function Hero() {
    const text = "Engineering the Future Beyond Gravity.";

    return (
        <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Hero3D is now integrated into the global Background component to optimize WebGL contexts */}

            <SectionWrapper className="z-10 flex flex-col items-center text-center relative max-w-5xl mx-auto px-4 mt-20">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center w-full"
                >
                    <motion.h1
                        className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 px-2"
                        variants={sentenceVariants}
                    >
                        {text.split("").map((char, index) => (
                            <motion.span key={index} variants={letterVariants}>
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    <motion.p
                        className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        Pioneering the next generation of digital experiences with anti-gravity design and immersive technology.
                    </motion.p>

                    <motion.div
                        className="flex flex-col md:flex-row gap-6 justify-center items-center w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                    >
                        <button className="w-64 py-3 bg-brand-blue text-white font-bold rounded-full hover:shadow-glow transition-all duration-300 transform hover:scale-105 active:scale-95">
                            Explore the Future
                        </button>
                        <button className="w-64 py-3 border border-border-color rounded-full text-foreground hover:bg-foreground/[0.03] hover:shadow-premium transition-all duration-300 backdrop-blur-sm active:scale-95">
                            Get a Quote
                        </button>
                    </motion.div>
                </motion.div>
            </SectionWrapper>

            {/* Scroll Indicator at the bottom */}
            <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="w-[1px] h-24 bg-gradient-to-b from-brand-blue to-transparent animate-pulse" />
                <span className="text-[10px] text-foreground/40 tracking-[0.2em] uppercase mt-2 mb-4">Scroll</span>
            </motion.div>
        </section>
    );
}
