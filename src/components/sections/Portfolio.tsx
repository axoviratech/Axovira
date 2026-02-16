"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";

const projects = [
    {
        title: "NeuroVer",
        category: "AI Platform",
        color: "#7000ff",
        image: "linear-gradient(to bottom right, #2a0845, #6441a5)" // Placeholder
    },
    {
        title: "Orbital",
        category: "Fintech App",
        color: "#00f0ff",
        image: "linear-gradient(to bottom right, #0F2027, #203A43, #2C5364)" // Placeholder
    },
    {
        title: "Sync",
        category: "SaaS Dashboard",
        color: "#ff0080",
        image: "linear-gradient(to bottom right, #111, #333)" // Placeholder
    }
];

function ProjectCard({ project, index, range }: { project: any, index: number, range: [number, number] }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

    // Calculate dynamic top offset for stacking effect
    const topOffset = index * 40;

    return (
        <div ref={ref} className="h-screen w-full flex items-center justify-center sticky" style={{ top: 0 }}>
            <motion.div
                style={{
                    scale,
                    backgroundColor: project.color,
                    top: topOffset
                }}
                className="relative w-[90vw] md:w-[80vw] h-[70vh] rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center transform origin-top border border-white/10"
            >
                <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ background: project.image }} />
                <div className="absolute inset-0 z-0 bg-black/40" /> {/* Overlay for text contrast */}

                <div className="relative z-10 text-center text-white">
                    <h3 className="text-2xl font-bold uppercase tracking-widest mb-2 text-white/80">{project.category}</h3>
                    <h2 className="text-6xl md:text-9xl font-black drop-shadow-2xl">{project.title}</h2>
                </div>
            </motion.div>
        </div>
    );
}

export default function Portfolio() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });

    return (
        <div ref={ref} id="work" className="relative bg-brand-black">
            <div className="py-20 text-center">
                <h2 className="text-5xl font-bold mb-4">Selected Works</h2>
                <p className="text-gray-400">Where gravity meets design.</p>
            </div>

            <div className="flex flex-col">
                {projects.map((project, i) => (
                    <ProjectCard key={i} project={project} index={i} range={[i * 0.25, 1]} />
                ))}
            </div>
        </div>
    );
}
