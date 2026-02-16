"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionWrapperProps {
    children: ReactNode;
    className?: string;
    id?: string;
}

export default function SectionWrapper({ children, className, id }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("relative w-full min-h-screen flex flex-col justify-center py-20 px-6", className)}>
            <div className="max-w-7xl mx-auto w-full relative z-10">
                {children}
            </div>
        </section>
    );
}
