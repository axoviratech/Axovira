"use client";

import { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import { Globe, Smartphone, Cloud, Code, Layout, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import OrbitingCircles from "../ui/OrbitingCircles";

export default function Solution() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const radii = isMobile ? [80, 140, 200] : [120, 220, 320];

    return (
        <SectionWrapper id="solution" className="relative min-h-[800px] bg-section-bg overflow-hidden flex flex-col items-center justify-center">
            <div className="text-center mb-10 z-20 relative pt-20">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
                >
                    The <span className="text-brand-blue">Axovira</span> Universe
                </motion.h2>
                <p className="text-foreground/70 max-w-lg mx-auto">
                    We don&apos;t just build features. We engineer complete digital ecosystems that revolve around your success.
                </p>
            </div>

            {/* Orbiting Universe Container */}
            <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">

                {/* Center Core */}
                <div className="z-10 bg-section-bg p-8 rounded-full border border-brand-blue/30 shadow-[0_0_50px_rgba(0,145,255,0.2)]">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-blue">
                        CORE
                    </span>
                </div>

                {/* Inner Orbit */}
                <OrbitingCircles className="size-[150px] md:size-[200px] border-none bg-transparent" duration={30} delay={0} radius={radii[0]}>
                    <ServiceNode icon={Globe} title="Web" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[150px] md:size-[200px] border-none bg-transparent" duration={30} delay={15} radius={radii[0]}>
                    <ServiceNode icon={Smartphone} title="Mobile" />
                </OrbitingCircles>

                {/* Middle Orbit */}
                <OrbitingCircles className="size-[300px] md:size-[400px] border-none bg-transparent" reverse duration={40} delay={0} radius={radii[1]}>
                    <ServiceNode icon={Cloud} title="ERP" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[300px] md:size-[400px] border-none bg-transparent" reverse duration={40} delay={20} radius={radii[1]}>
                    <ServiceNode icon={Code} title="Shop" />
                </OrbitingCircles>

                {/* Outer Orbit */}
                <OrbitingCircles className="size-[450px] md:size-[600px] border-none bg-transparent" duration={50} delay={0} radius={radii[2]}>
                    <ServiceNode icon={Layout} title="UI/UX" />
                </OrbitingCircles>
                <OrbitingCircles className="size-[450px] md:size-[600px] border-none bg-transparent" duration={50} delay={25} radius={radii[2]}>
                    <ServiceNode icon={Cpu} title="Support" />
                </OrbitingCircles>
            </div>

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-section-bg via-transparent to-section-bg pointer-events-none" />
        </SectionWrapper>
    );
}

function ServiceNode({ icon: Icon, title }: { icon: any, title: string }) {
    return (
        <div className="group flex items-center justify-center p-4 bg-card-bg backdrop-blur-md border border-border-color rounded-full hover:border-brand-blue transition-all duration-300 cursor-pointer hover:scale-110 shadow-sm hover:shadow-premium">
            <Icon className="text-foreground group-hover:text-brand-blue transition-colors" size={24} />
            <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-brand-blue whitespace-nowrap">
                {title}
            </span>
        </div>
    );
}
