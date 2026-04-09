"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
        title: "Fragmented Silos -> Unified Core",
        description: "Legacy systems create data islands. We re-engineer your digital foundation into a cohesive ecosystem that speaks one language.",
        outcomes: [
            "Eliminate data redundancy",
            "Single source of truth",
            "Cloud-native scalability"
        ],
        visual: "/images/illustration-erp.svg",
        icon: Layers,
        color: "blue"
    },
    {
        id: "intelligence",
        label: "Operational Intelligence",
        title: "Real-Time Visibility into Units",
        description: "Dashboards provide live telemetry of global operations, from inventory turnover to real-time P&L.",
        outcomes: [
            "Predictive analytics",
            "Automated KPI tracking",
            "Instant drill-down"
        ],
        visual: "/images/visual-erp-dashboard.svg",
        icon: BarChart3,
        color: "teal"
    },
    {
        id: "automation",
        label: "Process Transformation",
        title: "Logic vs Manual Bottlenecks",
        description: "Scale operations without scaling headcount. We automate complex workflows from procurement to fulfillment.",
        outcomes: [
            "Days to minutes processing",
            "99.9% error reduction",
            "Standardized compliance"
        ],
        visual: "/images/visual-workflow-automation.svg",
        icon: Settings2,
        color: "indigo"
    },
    {
        id: "reach",
        label: "Global Transformation",
        title: "Built for the Global Enterprise",
        description: "Solutions handle multi-currency, multi-language, and multi-jurisdictional compliance by design.",
        outcomes: [
            "Centralized control",
            "Automatic tax compliance",
            "Zero-latency global sync"
        ],
        visual: "/images/industry-nexus.svg",
        icon: Globe,
        color: "slate"
    }
];

export default function WhyUs() {
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % stories.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section id="why-us" className="py-20 bg-neutral-bg relative overflow-hidden min-h-[700px] flex items-center">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-40">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl text-primary-blue animate-pulse" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12 lg:items-stretch lg:min-h-[550px]">
                    {/* Left Panel: Narrative Context */}
                    <div className="w-full lg:w-1/2 flex flex-col pt-4">
                        <div className="mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-blue/10 text-primary-blue text-[10px] font-black uppercase tracking-[0.2em] mb-6 font-display">
                                <ShieldCheck className="w-3 h-3" />
                                Enterprise Integrity
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-primary-midnight leading-[1.1] tracking-tight">
                                Complexity into <span className="text-primary-blue underline decoration-teal-200 underline-offset-4">Competitive Edge.</span>
                            </h2>
                        </div>

                        {/* Story Progress Selectors */}
                        <div className="flex flex-col gap-4 mb-auto">
                            {stories.map((story, index) => (
                                <button
                                    key={story.id}
                                    onClick={() => setActiveIndex(index)}
                                    className={`group flex items-center gap-4 text-left transition-all duration-300 ${activeIndex === index ? "translate-x-4 opacity-100" : "opacity-40 hover:opacity-100"
                                        }`}
                                >
                                    <div className={`h-8 w-1.5 rounded-full transition-all duration-300 ${activeIndex === index ? "bg-primary-blue h-12" : "bg-gray-200"
                                        }`} />
                                    <div>
                                        <div className={`text-[10px] font-black uppercase tracking-widest ${activeIndex === index ? "text-primary-blue" : "text-gray-400"}`}>
                                            0{index + 1}
                                        </div>
                                        <div className={`text-sm font-bold tracking-tight ${activeIndex === index ? "text-primary-midnight" : "text-gray-500"}`}>
                                            {story.label}
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-12 lg:mt-auto flex flex-wrap gap-8 items-center bg-white/50 backdrop-blur-md p-6 rounded-2xl border border-white">
                            <div className="flex-1 min-w-[120px]">
                                <div className="text-2xl font-black text-primary-midnight">60%</div>
                                <div className="text-[9px] font-bold text-gray-500 uppercase">Efficiency Gain</div>
                            </div>
                            <div className="w-px h-8 bg-gray-200" />
                            <div className="flex-1 min-w-[120px]">
                                <div className="text-2xl font-black text-primary-midnight">ROI</div>
                                <div className="text-[9px] font-bold text-gray-500 uppercase">In 12 Months</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Active Story Visualization */}
                    <div className="w-full lg:w-1/2 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                                transition={{ duration: 0.4 }}
                                className="h-full bg-white rounded-3xl shadow-premium border border-gray-100 overflow-hidden flex flex-col lg:flex-row"
                            >
                                {/* Active Visual */}
                                <div className="w-full lg:w-1/2 bg-neutral-bg p-8 flex items-center justify-center relative group">
                                    <div className="relative w-full aspect-square max-w-[300px]">
                                        <Image
                                            src={stories[activeIndex].visual}
                                            alt={stories[activeIndex].title}
                                            fill
                                            className="object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-700"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Live Integration</span>
                                    </div>
                                </div>

                                {/* Active Description */}
                                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col border-t lg:border-t-0 lg:border-l border-gray-50">
                                    {(() => {
                                        const ActiveIcon = stories[activeIndex].icon;
                                        return <ActiveIcon className="w-8 h-8 text-primary-blue mb-6" />;
                                    })()}
                                    <h3 className="text-2xl font-black text-primary-midnight mb-4 leading-tight">
                                        {stories[activeIndex].title}
                                    </h3>
                                    <p className="text-sm text-neutral-text-light leading-relaxed mb-6 font-medium">
                                        {stories[activeIndex].description}
                                    </p>

                                    <div className="space-y-3 mb-8">
                                        {stories[activeIndex].outcomes.map((outcome, i) => (
                                            <div key={i} className="flex items-center gap-2">
                                                <CheckCircle2 className="w-4 h-4 text-teal-500" />
                                                <span className="text-[11px] font-bold text-gray-700 uppercase tracking-tight">{outcome}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="mt-auto group flex items-center gap-2 text-primary-blue text-xs font-black uppercase tracking-widest">
                                        <span>Read Use Case</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
