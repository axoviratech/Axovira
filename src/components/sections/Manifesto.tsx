"use client";

import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Hammer, MessageSquare, Code2, Cpu, HeartHandshake } from "lucide-react";

const commitments = [
    {
        title: "Builder Mindset",
        description: "We are makers, not managers. We care about the code as much as the result.",
        icon: Hammer
    },
    {
        title: "Transparent Communication",
        description: "No agency fluff. Direct access to the engineers building your product.",
        icon: MessageSquare
    },
    {
        title: "Clean, Scalable Code",
        description: "We write software that lasts. Modular, typed, and documented.",
        icon: Code2
    },
    {
        title: "Performance-First",
        description: "Speed is a feature. We optimize for milliseconds, not just aesthetics.",
        icon: Cpu
    },
    {
        title: "Long-Term Partnership",
        description: "We don't just ship and leave. We evolve with your business.",
        icon: HeartHandshake
    }
];

export default function Manifesto() {
    return (
        <SectionWrapper id="manifesto" className="bg-[#030305] border-y border-white/5 py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-cyan/5 rounded-full blur-[150px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">

                {/* Left Side: Statement */}
                <div className="space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-brand-cyan font-mono tracking-widest uppercase text-sm mb-4">
                            Built by Builders.
                        </h4>
                        <h2 className="text-5xl md:text-7xl font-bold font-heading text-white leading-[1.1] mb-6">
                            We don&apos;t inflate numbers. <br />
                            <span className="text-gray-500">We build real systems.</span>
                        </h2>
                        <p className="text-xl text-gray-400 font-light max-w-lg leading-relaxed">
                            We&apos;re not a large agency. We&apos;re a focused team of developers who treat every project like our own.
                        </p>
                    </motion.div>
                </div>

                {/* Right Side: Commitments */}
                <div className="flex flex-col gap-4">
                    {commitments.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="group p-6 rounded-xl bg-white/5 border border-white/5 hover:border-brand-cyan/30 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 cursor-default"
                        >
                            <div className="flex items-center gap-6">
                                <div className="p-3 bg-white/5 rounded-lg text-gray-400 group-hover:text-brand-cyan group-hover:bg-brand-cyan/10 transition-colors">
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg mb-1 group-hover:text-brand-cyan transition-colors">{item.title}</h4>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Line */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-32 text-center"
            >
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 via-white to-gray-500 opacity-80">
                    Still small. Extremely serious.
                </p>
            </motion.div>

        </SectionWrapper>
    );
}
