"use client";

import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/Skeleton";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time for initial assets (e.g. 3D models)
        // Since it's a static site, we just give it a moment to stabilize the layout
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={isLoading ? { opacity: 1 } : { opacity: 0, pointerEvents: "none" }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-6"
        >
            <div className="flex flex-col items-center justify-center gap-8 w-full max-w-lg">
                <div className="flex flex-col gap-4 w-full items-center">
                    {/* Hero Text Skeleton */}
                    <Skeleton className="h-12 w-3/4 md:w-full rounded-lg" />
                    <Skeleton className="h-12 w-1/2 md:w-3/4 rounded-lg" />

                    {/* Subtitle Skeleton */}
                    <div className="mt-4 flex flex-col gap-2 w-full items-center">
                        <Skeleton className="h-4 w-full rounded" />
                        <Skeleton className="h-4 w-5/6 rounded" />
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="mt-8 flex gap-4">
                        <Skeleton className="h-12 w-32 rounded-full" />
                        <Skeleton className="h-12 w-32 rounded-full" />
                    </div>
                </div>

                {/* Loading Spinner / Brand Element */}
                <div className="absolute bottom-10 animate-pulse text-brand-blue font-mono text-sm tracking-widest">
                    INITIALIZING SYSTEM...
                </div>
            </div>
        </motion.div>
    );
}
