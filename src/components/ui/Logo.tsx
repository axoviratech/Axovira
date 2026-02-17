"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
    return (
        <motion.div
            className={`relative ${className} flex items-center justify-center`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
            <Image
                src="/logo.png"
                alt="Axovira Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain"
                priority
            />
        </motion.div>
    );
}
