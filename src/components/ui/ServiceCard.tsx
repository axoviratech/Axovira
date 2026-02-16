"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXPct = (e.clientX - rect.left) / width - 0.5;
        const mouseYPct = (e.clientY - rect.top) / height - 0.5;
        x.set(mouseXPct);
        y.set(mouseYPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                willChange: "transform", // Hint browser for optimization
            }}
            className="relative w-full h-64 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md p-6 flex flex-col justify-center items-center text-center group hover:bg-white/10 transition-colors duration-300"
        >
            <div
                style={{ transform: "translateZ(50px)" }}
                className="mb-4 p-4 rounded-full bg-brand-blue/10 text-brand-blue group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.2)]"
            >
                <Icon size={32} />
            </div>
            <h3
                style={{ transform: "translateZ(30px)" }}
                className="text-xl font-bold mb-2 text-white group-hover:text-brand-cyan transition-colors"
            >
                {title}
            </h3>
            <p
                style={{ transform: "translateZ(20px)" }}
                className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors"
            >
                {description}
            </p>

            {/* Glint effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </motion.div>
    );
}
