"use client";

import SectionWrapper from "../SectionWrapper";
import MagneticButton from "../ui/MagneticButton";

export default function CTA() {
    return (
        <SectionWrapper id="cta" className="bg-brand-black min-h-screen flex items-center justify-center py-40">
            <div className="text-center max-w-5xl mx-auto">
                <h2 className="text-5xl md:text-8xl font-bold leading-tight mb-20 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-600">
                    Let's Build What Others <br />
                    Think Is <span className="text-brand-blue animate-pulse">Impossible.</span>
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    <MagneticButton className="group">
                        <div className="bg-brand-blue text-brand-black px-12 py-6 rounded-full text-xl font-bold transition-all duration-300 group-hover:shadow-[0_0_50px_rgba(0,240,255,0.6)] group-hover:scale-110">
                            Start Your Project
                        </div>
                    </MagneticButton>
                </div>
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/20 blur-[150px] pointer-events-none rounded-full" />
        </SectionWrapper>
    );
}
