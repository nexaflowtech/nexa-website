"use client";

import { motion } from "framer-motion";
import { Check, Search, PenTool, Code2, Rocket, Headset } from "lucide-react";

const steps = [
    {
        title: "Discovery & Strategy",
        desc: "We deep-dive into your business logic, KPIs, and user needs to architect a roadmap that guarantees ROI.",
        icon: Search
    },
    {
        title: "UX/UI Design",
        desc: " crafting intuitive, high-fidelity prototypes that align with your brand identity and user expectations.",
        icon: PenTool
    },
    {
        title: "Agile Development",
        desc: "Sprinting with modular architecture (Next.js/Frappe) to deliver testable features every two weeks.",
        icon: Code2
    },
    {
        title: "Quality Assurance",
        desc: "Rigorous automated testing and manual stress-tests to ensure zero-downtime deployments.",
        icon: Check
    },
    {
        title: "Launch & Scale",
        desc: "Seamless production deployment followed by performance monitoring and scalability tuning.",
        icon: Rocket
    },
    {
        title: "Continuous Support",
        desc: "24/7 maintenance and feature enhancements to keep your digital ecosystem ahead of the curve.",
        icon: Headset
    }
];

export default function Process() {
    return (
        <section className="py-32 bg-neutral-bg relative overflow-hidden">
            {/* Background Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-200 to-transparent transform -translate-x-1/2 hidden md:block" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-4 block">How We Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-midnight leading-tight">
                        From Concept to Code <br /> in <span className="text-primary-blue">6 Strategic Steps</span>
                    </h2>
                </div>

                <div className="space-y-12 md:space-y-24 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                        >
                            {/* Text Side */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-2xl font-bold text-primary-midnight mb-4 flex items-center justify-center md:justify-start gap-4">
                                    <span className="text-gray-200 text-4xl font-black opacity-50">0{index + 1}</span>
                                    {step.title}
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-md mx-auto md:mx-0">
                                    {step.desc}
                                </p>
                            </div>

                            {/* Icon Center Node */}
                            <div className="relative flex-shrink-0 z-10">
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-neutral-bg shadow-xl flex items-center justify-center text-primary-blue relative group">
                                    <step.icon size={28} className="transform group-hover:scale-110 transition-transform duration-300" />
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-20 group-hover:animate-ping" />
                                </div>
                            </div>

                            {/* Empty Side for Balance */}
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
