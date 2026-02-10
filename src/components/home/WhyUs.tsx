"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
// Assuming utils exist, or I can implement clsx inline if needed. I'll use inline template literals for safety.

// --- Data ---
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
        visual: "/images/illustration-why-us-1.svg",
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
        visual: "/images/illustration-why-us-2.svg",
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
        visual: "/images/illustration-why-us-3.svg",
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
        visual: "/images/illustration-why-us-4.svg",
        icon: Globe,
        color: "slate"
    }
];

// --- Sub-components ---

// Desktop Left: Images (Switching fully)
const DesktopImages = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100">
            <div className="absolute inset-0 bg-neutral-bg/50 z-10 pointer-events-none" />

            <div className="relative w-full h-full flex items-center justify-center p-4">
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0, x: 100, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -100, scale: 0.9 }}
                        transition={{ duration: 0.6, ease: "circOut" }}
                        className="absolute inset-0 w-full h-full flex items-center justify-center p-4"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={stories[activeIndex].visual}
                                alt={stories[activeIndex].title}
                                fill
                                className="object-contain drop-shadow-2xl"
                                priority
                            />
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-2 -right-2 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg border border-gray-100 z-20"
                            >
                                {(() => {
                                    const Icon = stories[activeIndex].icon;
                                    const color = stories[activeIndex].color;
                                    return <Icon className={`w-6 h-6 text-${color === 'slate' ? 'gray' : color}-500`} />;
                                })()}
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Static Overlays */}
            <div className="absolute top-6 left-6 z-20 bg-white/80 backdrop-blur px-3 py-1 rounded-full border border-gray-200 text-xs font-bold text-gray-500 uppercase tracking-wider">
                Live Preview
            </div>
        </div>
    );
};

// Desktop Right: Content (Switching fully)
const DesktopContent = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <div className="relative h-full overflow-hidden flex flex-col justify-center">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="space-y-8 px-4"
                >
                    <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stories[activeIndex].color === 'blue' ? 'bg-blue-50 text-blue-600' :
                            stories[activeIndex].color === 'teal' ? 'bg-teal-50 text-teal-600' :
                                stories[activeIndex].color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                                    'bg-slate-50 text-slate-600'
                            }`}>
                            {(() => {
                                const Icon = stories[activeIndex].icon;
                                return <Icon className="w-6 h-6" />;
                            })()}
                        </div>
                        <span className={`text-sm font-bold uppercase tracking-widest ${stories[activeIndex].color === 'blue' ? 'text-blue-600' :
                            stories[activeIndex].color === 'teal' ? 'text-teal-600' :
                                stories[activeIndex].color === 'indigo' ? 'text-indigo-600' :
                                    'text-slate-600'
                            }`}>
                            {stories[activeIndex].label}
                        </span>
                    </div>

                    <h3 className="text-3xl lg:text-5xl font-bold text-primary-midnight leading-tight">
                        {stories[activeIndex].title}
                    </h3>

                    <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                        {stories[activeIndex].description}
                    </p>

                    <div className="space-y-4">
                        {stories[activeIndex].outcomes.map((outcome, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                className="flex items-start gap-4"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary-blue mt-1 flex-shrink-0" />
                                <p className="text-gray-700 font-medium">{outcome}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pt-4">
                        <button className="flex items-center gap-2 text-primary-blue font-bold group">
                            <span>Learn about the Process</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};


export default function WhyUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // We scroll a long container.
    // We map scroll progress to index.
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Map 0..1 to 0..stories.length - 1
        // We want discrete steps.
        // e.g. 0.0 - 0.25 -> 0
        // 0.25 - 0.50 -> 1
        const numStories = stories.length;
        const index = Math.min(
            Math.floor(latest * numStories),
            numStories - 1
        );
        setActiveIndex(index);
    });

    return (
        <section id="why-us" className="bg-neutral-bg relative">

            {/* --- DESKTOP VIEW (Step-based sticky) --- */}
            {/* 400vh height: 1 screen per story roughly */}
            <div ref={containerRef} className="hidden lg:block relative h-[500vh]">
                <div className="sticky top-0 h-screen overflow-hidden">

                    {/* Background Elements */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary-blue/5 rounded-full blur-3xl" />
                        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-6 h-full relative z-10">
                        {/* Header */}
                        <div className="absolute top-8 left-6 z-30 max-w-xl">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold uppercase tracking-wider mb-4">
                                <ShieldCheck className="w-4 h-4" />
                                Enterprise Integrity
                            </span>
                            <h2 className="text-3xl font-bold text-primary-midnight">
                                Transforming Complexity
                            </h2>
                        </div>

                        {/* Split Grid */}
                        <div className="grid grid-cols-2 gap-16 h-full items-center pt-24">
                            {/* Left: Images */}
                            <div className="h-[60vh] w-full">
                                <DesktopImages activeIndex={activeIndex} />
                            </div>

                            {/* Right: Content */}
                            <div className="h-[60vh] w-full">
                                <DesktopContent activeIndex={activeIndex} />
                            </div>
                        </div>

                        {/* Pagination / Progress Dots */}
                        <div className="absolute bottom-12 left-0 w-full px-6 flex justify-center">
                            <div className="flex gap-3">
                                {stories.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-2 rounded-full transition-all duration-300 ${idx === activeIndex
                                            ? "w-8 bg-primary-blue"
                                            : "w-2 bg-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Invisible trigger zones for snap scrolling (optional enhancement) */}
                {/* To actually SNAP, we would need snap-y on the parent. 
                    Since we can't easily control the parent's scroll behavior without global CSS, 
                    we provide these anchors. If the user puts `className="snap-y snap-mandatory"` on main, this works. */}
                <div className="absolute inset-0 flex flex-col pointer-events-none">
                    {stories.map((story) => (
                        <div key={story.id} className="h-[125vh] w-full" style={{ scrollSnapAlign: 'start' }} />
                        // Note: 125vh because total is 500vh / 4 = 125vh per section
                    ))}
                </div>
            </div>

            {/* --- MOBILE VIEW (Standard Stack) --- */}
            <div className="block lg:hidden py-24 px-6 container mx-auto">
                {/* Header */}
                <div className="mb-16">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-blue/10 text-primary-blue text-sm font-bold uppercase tracking-wider mb-6">
                        <ShieldCheck className="w-4 h-4" />
                        Enterprise Integrity
                    </span>
                    <h2 className="text-4xl font-bold text-primary-midnight leading-tight mb-6">
                        Transforming Complexity <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-teal-500">
                            into Competitive Edge
                        </span>
                    </h2>
                </div>

                <div className="space-y-24">
                    {stories.map((story) => (
                        <div key={story.id} className="space-y-8">
                            {/* Mobile Visual */}
                            <div className="w-full aspect-square relative bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                                <Image
                                    src={story.visual}
                                    alt={story.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Content */}
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${story.color === 'blue' ? 'bg-blue-50 text-blue-600' :
                                        story.color === 'teal' ? 'bg-teal-50 text-teal-600' :
                                            story.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' :
                                                'bg-slate-50 text-slate-600'
                                        }`}>
                                        <story.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
                                        {story.label}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-primary-midnight mb-4">
                                    {story.title}
                                </h3>

                                <p className="text-gray-600 mb-6">
                                    {story.description}
                                </p>

                                <ul className="space-y-3">
                                    {story.outcomes.map((outcome, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-primary-blue flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{outcome}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Call to Action (Shared) */}
            <div className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-16">
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

                    <button className="px-10 py-5 bg-primary-midnight text-white rounded-full font-bold shadow-2xl hover:bg-black transition-all hover:scale-105 inline-flex items-center gap-3">
                        <span>Initiate Your Transformation</span>
                        <Zap className="w-5 h-5 text-teal-400" />
                    </button>
                </div>
            </div>
        </section>
    );
}
