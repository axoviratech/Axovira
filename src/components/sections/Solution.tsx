"use client";

import SectionWrapper from "../SectionWrapper";
import { Globe, Smartphone, Cloud, Code, Layout, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import OrbitingCircles from "../ui/OrbitingCircles";

export default function Solution() {
    return (
        <SectionWrapper id="solution" className="relative min-h-screen bg-brand-black overflow-hidden flex flex-col items-center justify-center">
            <div className="text-center mb-10 z-20 relative">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-4"
                >
                    The <span className="text-brand-blue">Axovira</span> Universe
                </motion.h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    We don&apos;t just build features. We engineer complete digital ecosystems that revolve around your success.
                </p>
            </div>

            {/* Orbiting Universe Container */}
            <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">

                {/* Center Core */}
                <div className="z-10 bg-brand-black p-8 rounded-full border border-brand-blue/30 shadow-[0_0_50px_rgba(0,240,255,0.3)]">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                        CORE
                    </span>
                </div>

                {/* Inner Orbit */}
                <OrbitingCircles className="size-[200px] border-none bg-transparent" duration={30} delay={0} radius={120}>
                    <ServiceNode icon={Globe} title="Web" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[200px] border-none bg-transparent" duration={30} delay={15} radius={120}>
                    <ServiceNode icon={Smartphone} title="Mobile" />
                </OrbitingCircles>

                {/* Middle Orbit */}
                <OrbitingCircles className="size-[400px] border-none bg-transparent" reverse duration={40} delay={0} radius={220}>
                    <ServiceNode icon={Cloud} title="ERP" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[400px] border-none bg-transparent" reverse duration={40} delay={20} radius={220}>
                    <ServiceNode icon={Code} title="Shop" />
                </OrbitingCircles>

                {/* Outer Orbit */}
                <OrbitingCircles className="size-[600px] border-none bg-transparent" duration={50} delay={0} radius={320}>
                    <ServiceNode icon={Layout} title="UI/UX" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[600px] border-none bg-transparent" duration={50} delay={25} radius={320}>
                    <ServiceNode icon={Cpu} title="Support" />
                </OrbitingCircles>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black pointer-events-none" />
        </SectionWrapper>
    );
}

function ServiceNode({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="group flex items-center justify-center p-4 bg-black/80 backdrop-blur-md border border-white/10 rounded-full hover:border-brand-cyan transition-all duration-300 cursor-pointer hover:scale-110 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
            <Icon className="text-white group-hover:text-brand-cyan transition-colors" size={24} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-brand-cyan whitespace-nowrap">
                {title}
            </span>
        </div>
    );
}
