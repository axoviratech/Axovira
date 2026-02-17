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

import { ThemeToggle } from "./ui/ThemeToggle";
import Logo from "./ui/Logo";

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
                scrolled || isOpen ? "bg-background/80 backdrop-blur-md border-b border-border-color" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group z-50 relative">
                    <Logo className="w-11 h-11" />
                    <span className="text-xl font-bold font-heading tracking-wider group-hover:text-brand-blue transition-colors">
                        AXOVIRA
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-foreground opacity-70 hover:opacity-100 hover:text-brand-cyan transition-all tracking-wide relative group"
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-full" />
                        </Link>
                    ))}

                    <div className="h-4 w-[1px] bg-border-color/50 mx-2" />
                    <ThemeToggle />
                </nav>

                <div className="hidden md:flex items-center gap-4">
                    <button className="px-6 py-2 border border-brand-blue rounded-full text-sm font-medium text-brand-blue hover:bg-brand-blue/5 transition-all duration-300 hover:shadow-premium">
                        Get Started
                    </button>
                </div>

                {/* Mobile Menu Actions */}
                <div className="flex items-center gap-4 md:hidden z-50 relative">
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle Mobile Menu"
                    >
                        <div className="w-6 flex flex-col items-end gap-1.5">
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                                className="w-full h-0.5 bg-foreground origin-center transition-transform"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                className="w-3/4 h-0.5 bg-foreground transition-opacity"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: -8, width: "100%" } : { rotate: 0, y: 0, width: "50%" }}
                                className="h-0.5 bg-foreground origin-center transition-transform"
                            />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className={cn(
                    "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden",
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
                                className="text-3xl font-bold text-foreground hover:text-brand-blue transition-colors tracking-tight"
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
                    className="px-8 py-3 bg-brand-blue text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300"
                >
                    Get Started
                </motion.button>
            </motion.div>
        </motion.header>
    );
}
