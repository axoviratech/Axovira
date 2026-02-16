"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import Hero3D from "../ui/Hero3D";

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
        <div className="relative h-[90vh] w-full overflow-hidden">
            <Hero3D />

            <SectionWrapper className="z-10 flex flex-col items-center justify-center text-center h-full">
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
                    initial="hidden"
                    animate="visible"
                    variants={sentenceVariants}
                >
                    {text.split("").map((char, index) => (
                        <motion.span key={index} variants={letterVariants}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                >
                    Pioneering the next generation of digital experiences with anti-gravity design and immersive technology.
                </motion.p>

                <motion.div
                    className="flex gap-6 justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.5 }}
                >
                    <button className="px-8 py-3 bg-brand-blue text-brand-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 transform hover:scale-105">
                        Explore the Future
                    </button>
                    <button className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                        Get a Quote
                    </button>
                </motion.div>
            </SectionWrapper>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3, duration: 1 }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-brand-blue to-transparent animate-pulse" />
                <span className="text-xs text-brand-blue/70 tracking-widest uppercase">Scroll</span>
            </motion.div>
        </div>
    );
}
