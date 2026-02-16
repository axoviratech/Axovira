"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-brand-navy">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-20 px-20">
                    <div className="flex flex-col justify-center min-w-[500px]">
                        <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white">Our Process</h2>
                        <p className="text-xl text-gray-400">A timeline of innovation.</p>
                    </div>
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="group relative h-[500px] w-[400px] flex flex-col justify-between p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors duration-500"
                        >
                            <span className="text-9xl font-bold text-white/5 group-hover:text-brand-blue/20 transition-colors duration-500 absolute top-4 right-4">{step.id}</span>
                            <div className="mt-auto relative z-10">
                                <h3 className="text-4xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors">{step.title}</h3>
                                <p className="text-lg text-gray-400 group-hover:text-gray-200 transition-colors">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
