"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
    CheckCircle2,
    ArrowRight,
    Layers,
    BarChart3,
    Settings2,
    Globe,
    Zap,
    ShieldCheck
} from "lucide-react";

const stories = [
    {
        id: "architecture",
        label: "Strategic Architecture",
        title: "From Fragmented Silos to a Unified Core",
        description: "Legacy systems often create data islands that hinder growth. We re-engineer your digital foundation into a cohesive ecosystem that speaks one language.",
        outcomes: [
            "Eliminate data redundancy across departments",
            "Single source of truth for executive decision-making",
            "Cloud-native scalability that grows with your load"
        ],
        visual: "/images/illustration-erp.svg",
        icon: Layers,
        color: "blue"
    },
    {
        id: "intelligence",
        label: "Operational Intelligence",
        title: "Real-Time Visibility into Every Business Unit",
        description: "Stop waiting for month-end reports. Our dashboards provide live telemetry of your global operations, from inventory turnover to real-time P&L.",
        outcomes: [
            "Predictive analytics for demand forecasting",
            "Automated KPI tracking with zero manual entry",
            "Instant drill-down from global view to line item"
        ],
        visual: "/images/visual-erp-dashboard.svg",
        icon: BarChart3,
        color: "teal"
    },
    {
        id: "automation",
        label: "Process Transformation",
        title: "Eliminate Manual Bottlenecks with Logic",
        description: "Scale your operations without scaling your headcount. We automate complex workflows—from procurement to fulfillment—using intelligent business logic.",
        outcomes: [
            "Reduce processing time from days to minutes",
            "99.9% reduction in manual data entry errors",
            "Standardized compliance across all workflows"
        ],
        visual: "/images/visual-workflow-automation.svg",
        icon: Settings2,
        color: "indigo"
    },
    {
        id: "reach",
        label: "Global Transformation",
        title: "Built for the Global Enterprise",
        description: "Expand into new markets with confidence. Our solutions handle multi-currency, multi-language, and multi-jurisdictional compliance by design.",
        outcomes: [
            "Centralized control of decentralized units",
            "Automatic tax and regulatory compliance updates",
            "Zero-latency performance across global zones"
        ],
        visual: "/images/industry-nexus.svg",
        icon: Globe,
        color: "slate"
    }
];

export default function WhyUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStoryIndex, setActiveStoryIndex] = useState(0);

    return (
        <section id="why-us" className="py-24 bg-neutral-bg relative overflow-hidden" ref={containerRef}>
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                <div className="absolute top-[40%] left-[50%] w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl -translate-x-1/2" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            Enterprise Integrity
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-primary-midnight leading-tight mb-8">
                            Transforming Complexity <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-teal-500">
                                into Competitive Edge
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-medium">
                            We don't just implement software; we re-engineer business processes. Our cross-functional teams bring deep domain expertise to every transformation journey.
                        </p>
                    </motion.div>
                </div>

                {/* Split Layout Section */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
                    {/* Left Column: Visual Storytelling (Sticky) */}
                    <div className="hidden lg:block sticky top-24 h-[calc(100vh-12rem)] rounded-3xl overflow-hidden bg-white shadow-2xl border border-gray-100 group">
                        <div className="absolute inset-0 bg-neutral-bg opacity-50 group-hover:opacity-30 transition-opacity" />

                        {/* Animated Visuals */}
                        <div className="relative w-full h-full p-8 flex items-center justify-center">
                            {stories.map((story, index) => (
                                <motion.div
                                    key={story.id}
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                                    animate={{
                                        opacity: activeStoryIndex === index ? 1 : 0,
                                        scale: activeStoryIndex === index ? 1 : 0.9,
                                        rotateY: activeStoryIndex === index ? 0 : 10,
                                        zIndex: activeStoryIndex === index ? 10 : 0
                                    }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0 p-12 flex items-center justify-center"
                                >
                                    <div className="relative w-full h-full">
                                        <Image
                                            src={story.visual}
                                            alt={story.title}
                                            fill
                                            className="object-contain drop-shadow-2xl"
                                        />

                                        {/* Interactive Highlights (Floating Micro-elements) */}
                                        <motion.div
                                            animate={{
                                                y: [0, -15, 0],
                                                rotate: [0, 5, 0]
                                            }}
                                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute top-0 right-0 lg:-top-6 lg:-right-6 w-24 h-24 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 flex flex-col items-center justify-center p-3"
                                        >
                                            <story.icon className={`w-10 h-10 text-primary-${story.color === 'slate' ? 'midnight' : story.color === 'blue' ? 'blue' : story.id === 'intelligence' ? 'teal-500' : 'blue'}`} />
                                            <div className="mt-1 text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Live Sync</div>
                                        </motion.div>

                                        <motion.div
                                            animate={{
                                                x: [0, 10, 0],
                                                y: [0, 10, 0]
                                            }}
                                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                            className="absolute bottom-12 left-0 lg:-left-4 w-20 h-20 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-100 flex items-center justify-center"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse mb-1" />
                                                <div className="text-[10px] font-black text-primary-midnight uppercase tracking-tighter">Active</div>
                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Progress Bar */}
                        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gray-100">
                            <motion.div
                                className="h-full bg-primary-blue"
                                animate={{ width: `${((activeStoryIndex + 1) / stories.length) * 100}%` }}
                                transition={{ duration: 0.4 }}
                            />
                        </div>
                    </div>

                    {/* Right Column: Narrative Content */}
                    <div className="space-y-32 py-12">
                        {stories.map((story, index) => (
                            <motion.div
                                key={story.id}
                                onViewportEnter={() => setActiveStoryIndex(index)}
                                viewport={{ amount: 0.5 }}
                                className="relative"
                            >
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${story.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                                story.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                                                    story.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                                                        'bg-slate-50 text-slate-600'
                                            }`}>
                                            <story.icon className="w-6 h-6" />
                                        </div>
                                        <span className={`text-sm font-bold uppercase tracking-widest ${story.color === 'blue' ? 'text-blue-600' :
                                                story.color === 'teal' ? 'text-teal-600' :
                                                    story.color === 'indigo' ? 'text-indigo-600' :
                                                        'text-slate-600'
                                            }`}>
                                            {story.label}
                                        </span>
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-bold text-primary-midnight leading-tight">
                                        {story.title}
                                    </h3>

                                    {/* Mobile Visual (visible only on small screens) */}
                                    <div className="lg:hidden w-full h-64 relative bg-white rounded-2xl shadow-md border border-gray-100 p-4 my-8">
                                        <Image
                                            src={story.visual}
                                            alt={story.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {story.description}
                                    </p>

                                    <div className="space-y-4">
                                        {story.outcomes.map((outcome, i) => (
                                            <div key={i} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0">
                                                    <CheckCircle2 className="w-5 h-5 text-primary-blue" />
                                                </div>
                                                <p className="text-gray-700 font-medium">{outcome}</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-4">
                                        <button className="flex items-center gap-2 text-primary-blue font-bold group">
                                            <span>Learn about the Process</span>
                                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Social Proof / Transformation Metric */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-32 pt-20 border-t border-gray-100 text-center"
                >
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-primary-midnight">100%</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Uptime Record</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-primary-midnight">60%</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">Efficiency GAIN</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl font-bold text-primary-midnight">ROI</div>
                            <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">In under 12 months</div>
                        </div>
                    </div>

                    <button className="mt-16 px-10 py-5 bg-primary-midnight text-white rounded-full font-bold shadow-2xl hover:bg-black transition-all hover:scale-105 inline-flex items-center gap-3">
                        <span>Initiate Your Transformation</span>
                        <Zap className="w-5 h-5 text-teal-400" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
