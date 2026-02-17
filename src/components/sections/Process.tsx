"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
    { id: "01", title: "Discover", description: "We dive deep into your vision and goals." },
    { id: "02", title: "Design", description: "Crafting visual systems that defy expectations." },
    { id: "03", title: "Develop", description: "Engineering robust, scalable, and fast solutions." },
    { id: "04", title: "Deploy", description: "Launching your product to the world with zero downtime." },
    { id: "05", title: "Scale", description: "Growth strategies to take you to the next level." },
];

export default function Process() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    // Simple check to disable horizontal scroll transform on mobile
    // usage: style={{ x: isMobile ? 0 : x }}
    // However, for SSR safety, we should default to desktop or handle hydration.
    // A clean CSS-only way is hard for framer-motion values.
    // Let's use two different layouts or just accept the transform is active but visually handle it.
    // Actually, on mobile, if we set `overflow-x-hidden` and `flex-col`, the `x` translate will shift the whole column sideways which is bad.

    // Quick fix: Use a media query hook or just return two different blocks? No.
    // Let's use a standard `useEffect` to detect mobile and disable the transform value.

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
        checkDesktop();
        window.addEventListener('resize', checkDesktop);
        return () => window.removeEventListener('resize', checkDesktop);
    }, []);

    return (
        <section ref={targetRef} className="relative h-auto md:h-[300vh] bg-brand-navy">
            <div className="relative md:sticky md:top-0 flex flex-col md:flex-row h-auto md:h-screen items-start md:items-center overflow-hidden">
                <motion.div
                    style={{ x: isDesktop ? x : 0 }}
                    className="flex flex-col md:flex-row gap-10 md:gap-20 px-6 py-20 md:px-20 md:py-0 w-full md:w-auto"
                >
                    <div className="flex flex-col justify-center min-w-full md:min-w-[500px]">
                        <h2 className="text-4xl md:text-8xl font-bold mb-6 text-white text-center md:text-left">Our Process</h2>
                        <p className="text-lg md:text-xl text-gray-400 text-center md:text-left">A timeline of innovation.</p>
                    </div>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative h-[450px] md:h-[500px] w-full md:w-[400px] flex-shrink-0 flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500"
                        >
                            <span className="text-6xl md:text-9xl font-bold text-white/5 group-hover:text-brand-blue/20 transition-colors duration-500 absolute top-4 right-4">{step.id}</span>
                            <div className="mt-auto relative z-10">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                                <p className="text-base md:text-lg text-gray-400 group-hover:text-gray-200 transition-colors">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
