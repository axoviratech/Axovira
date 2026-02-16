"use client";

import SectionWrapper from "../SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How is Axovira different from a digital agency?",
        answer: "We are not an agency. We are an engineering lab. While agencies focus on marketing fluff, we focus on technical supremacy, anti-gravity design, and psychological trust architecture."
    },
    {
        question: "What technologies do you use?",
        answer: "We exclusively use the bleeding edge: Next.js 14, React Server Components, TypeScript, Tailwind CSS, Three.js for WebGL, and Framer Motion for orchestral animations."
    },
    {
        question: "Do you build for mobile?",
        answer: "Every pixel we engineer is liquid. Our interfaces don't just 'respond' to mobile; they are native-grade experiences optimized for touch and velocity."
    },
    {
        question: "Can you rescue a failed project?",
        answer: "We specialize in high-stakes recovery. If your current solution is lagging, breaking, or failing to convert, we deconstruct it and rebuild it with our core principles."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <SectionWrapper id="faq" className="bg-brand-black z-10 py-32">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-5">
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                        Common <br /> <span className="text-brand-blue">Questions.</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        You have questions. We have engineered answers.
                    </p>
                </div>

                <div className="md:col-span-7 space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border border-white/10 rounded-2xl bg-white/5 overflow-hidden backdrop-blur-sm">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left group"
                            >
                                <span className={`text-lg md:text-xl font-medium transition-colors ${openIndex === index ? 'text-brand-cyan' : 'text-white group-hover:text-gray-300'}`}>
                                    {faq.question}
                                </span>
                                <span className={`p-2 rounded-full border transition-all duration-300 ${openIndex === index ? 'bg-brand-cyan text-black border-brand-cyan' : 'border-white/20 text-white'}`}>
                                    {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
}
