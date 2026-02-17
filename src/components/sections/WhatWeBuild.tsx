"use client";

import SectionWrapper from "../SectionWrapper";
import { motion } from "framer-motion";
import { Globe, Smartphone, Database, ShoppingBag, LayoutGrid, Cpu } from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Modern, high-performance websites designed to convert and scale.",
        icon: Globe
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform apps for both Android and iOS.",
        icon: Smartphone
    },
    {
        title: "ERP Systems",
        description: "Custom enterprise systems to streamline operations and automate workflows.",
        icon: Database
    },
    {
        title: "E-Commerce Platforms",
        description: "Scalable online stores built for performance, security, and growth.",
        icon: ShoppingBag
    },
    {
        title: "SaaS & Web Applications",
        description: "Full-scale web applications built to handle real-world traffic and business logic.",
        icon: LayoutGrid
    },
    {
        title: "Custom Software Solutions",
        description: "Tailored systems designed specifically around your business needs.",
        icon: Cpu
    }
];

export default function WhatWeBuild() {
    return (
        <SectionWrapper id="what-we-build" className="bg-section-bg py-32 relative overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="text-center mb-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold font-heading text-foreground mb-6"
                >
                    What We <span className="text-brand-blue">Build.</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-foreground/70 max-w-2xl mx-auto font-light"
                >
                    From powerful websites to complex business systems — we engineer digital solutions that scale.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        className="group relative p-8 md:p-10 rounded-2xl bg-card-bg border border-border-color hover:border-brand-blue/30 hover:shadow-premium backdrop-blur-sm transition-all duration-300 flex flex-col items-start gap-6 cursor-default"
                    >
                        {/* Icon */}
                        <div className="p-4 rounded-xl bg-brand-blue/5 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                            <service.icon size={32} strokeWidth={1.5} />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand-blue transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors">
                                {service.description}
                            </p>
                        </div>

                        {/* Subtle Glow Border Effect */}
                        <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-brand-blue/20 pointer-events-none transition-colors duration-300" />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1 }}
                className="mt-24 text-center"
            >
                <p className="text-2xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground/50 via-foreground to-foreground/50 opacity-80">
                    If you can imagine it, we can engineer it.
                </p>
            </motion.div>

        </SectionWrapper>
    );
}
