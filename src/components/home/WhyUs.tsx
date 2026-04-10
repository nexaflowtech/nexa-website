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

// --- Data ---
const stories = [
    {
        id: "architecture",
        label: "Strategic Architecture",
        title: "Fragmented Silos -> Unified Core",
        description: "Legacy systems create data islands. We re-engineer your digital foundation into a cohesive ecosystem.",
        outcomes: [
            "Eliminate data redundancy",
            "Single source of truth",
            "Cloud-native scalability"
        ],
        visual: "/images/illustration-why-us-1.svg",
        icon: Layers,
        color: "blue"
    },
    {
        id: "intelligence",
        label: "Operational Intelligence",
        title: "Real-Time Visibility into Units",
        description: "Dashboards provide live telemetry of global operations.",
        outcomes: [
            "Predictive analytics",
            "Automated KPI tracking",
            "Instant drill-down"
        ],
        visual: "/images/illustration-why-us-2.svg",
        icon: BarChart3,
        color: "teal"
    },
    {
        id: "automation",
        label: "Process Transformation",
        title: "Logic vs Manual Bottlenecks",
        description: "Automate workflows from procurement to fulfillment.",
        outcomes: [
            "Days to minutes processing",
            "99.9% error reduction",
            "Standardized compliance"
        ],
        visual: "/images/illustration-why-us-3.svg",
        icon: Settings2,
        color: "indigo"
    },
    {
        id: "reach",
        label: "Global Transformation",
        title: "Built for the Global Enterprise",
        description: "Multi-currency and compliance-ready systems.",
        outcomes: [
            "Centralized control",
            "Automatic tax compliance",
            "Zero-latency sync"
        ],
        visual: "/images/illustration-why-us-4.svg",
        icon: Globe,
        color: "slate"
    }
];

// --- Sub-components ---
const DesktopImages = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <div className="relative w-full h-full overflow-hidden rounded-3xl bg-white shadow-2xl border">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 flex items-center justify-center p-4"
                >
                    <Image
                        src={stories[activeIndex].visual}
                        alt={stories[activeIndex].title}
                        fill
                        className="object-contain"
                    />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

const DesktopContent = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
            >
                <h3 className="text-3xl font-bold">
                    {stories[activeIndex].title}
                </h3>

                <p className="text-gray-600">
                    {stories[activeIndex].description}
                </p>

                <div className="space-y-2">
                    {stories[activeIndex].outcomes.map((o, i) => (
                        <div key={i} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-500" />
                            <span>{o}</span>
                        </div>
                    ))}
                </div>

                <button className="flex items-center gap-2 text-blue-600 font-bold">
                    Learn More <ArrowRight className="w-4 h-4" />
                </button>
            </motion.div>
        </AnimatePresence>
    );
};

export default function WhyUs() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(
            Math.floor(latest * stories.length),
            stories.length - 1
        );
        setActiveIndex(index);
    });

    return (
        <section className="bg-neutral-bg">
            <div ref={containerRef} className="hidden lg:block h-[500vh] relative">
                <div className="sticky top-0 h-screen flex items-center">
                    <div className="grid grid-cols-2 gap-12 w-full px-6">
                        <DesktopImages activeIndex={activeIndex} />
                        <DesktopContent activeIndex={activeIndex} />
                    </div>
                </div>
            </div>

            {/* Mobile */}
            <div className="lg:hidden p-6 space-y-10">
                {stories.map((story) => (
                    <div key={story.id}>
                        <Image src={story.visual} alt={story.title} width={400} height={400} />
                        <h3 className="text-xl font-bold mt-4">{story.title}</h3>
                        <p>{story.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}