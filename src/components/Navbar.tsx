"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Services", href: "#services" },
    { name: "Process", href: "#process" },
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
            style={{ willChange: "transform, opacity" }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled || isOpen ? "bg-brand-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="text-2xl font-bold font-heading tracking-wider hover:text-brand-blue transition-colors z-50 relative">
                    AXOVIRA
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-gray-300 hover:text-brand-cyan transition-colors tracking-wide relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}
                </nav>

                <button className="hidden md:block px-6 py-2 border border-brand-blue/30 rounded-full text-sm font-medium text-brand-blue hover:bg-brand-blue/10 hover:border-brand-blue transition-all duration-300 shadow-[0_0_10px_rgba(0,240,255,0.1)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                    Get Started
                </button>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50 relative p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle Mobile Menu"
                >
                    <div className="w-6 flex flex-col items-end gap-1.5">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white origin-center transition-transform"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-3/4 h-0.5 bg-white transition-opacity"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
                            className="h-0.5 bg-white origin-center transition-transform"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed inset-0 bg-brand-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden",
                    !isOpen && "pointer-events-none"
                )}
            >
                <nav className="flex flex-col items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.1 + i * 0.1 }}
                        >
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-3xl font-bold text-white hover:text-brand-blue transition-colors tracking-tight"
                            >
                                {item.name}
                            </Link>
                        </motion.div>
                    ))}
                </nav>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.5 }}
                    className="px-8 py-3 bg-brand-blue text-brand-black font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300"
                >
                    Get Started
                </motion.button>
            </motion.div>
        </motion.header>
    );
}
