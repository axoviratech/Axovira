"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative bg-[#020205] border-t border-white/5 pt-20 pb-10 overflow-hidden">

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue/50 to-transparent" />
            <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-blue/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

                    {/* Brand Column */}
                    <div className="md:col-span-5">
                        <Link href="/" className="text-3xl font-bold font-heading tracking-wider text-white mb-6 block">
                            AXOVIRA
                        </Link>
                        <p className="text-gray-400 max-w-sm mb-8">
                            Engineering digital ecosystems for the visionaries of tomorrow. Gravity-defying solutions for a boundless future.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-2 text-sm text-gray-500 hover:text-brand-cyan transition-colors"
                        >
                            <span className="p-2 rounded-full border border-white/10 group-hover:border-brand-cyan/50 transition-colors">
                                <ArrowUp size={16} />
                            </span>
                            Back to Top
                        </button>
                    </div>

                    {/* Links Columns */}
                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Work", "Services", "Process", "About"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:col-span-2">
                        <h4 className="text-white font-bold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {["Privacy Policy", "Terms of Service", "Cookies"].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Column */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-blue/50 hover:text-brand-blue transition-all duration-300"
                                >
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} Axovira Technologies. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-600">
                        Designed & Engineered in the Void.
                    </p>
                </div>
            </div>
        </footer>
    );
}
