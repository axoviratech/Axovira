"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 700 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName.toLowerCase() === "button" || target.tagName.toLowerCase() === "a" || target.closest("button") || target.closest("a")) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full border border-brand-blue/30 z-[9999] pointer-events-none hidden md:block"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                scale: hovering ? 2.5 : 1,
                backgroundColor: hovering ? "var(--brand-blue)" : "transparent",
                opacity: hovering ? 0.1 : 1,
            }}
        >
            {/* Inner Dot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-brand-blue rounded-full shadow-glow" />

            {/* Glow Trail */}
            <div className="absolute inset-0 rounded-full shadow-glow opacity-20" />
        </motion.div>
    );
}
