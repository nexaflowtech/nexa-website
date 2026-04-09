"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, Smartphone, ArrowRight, Database, Globe, Layers, Zap } from "lucide-react";
import Link from "next/link";

const services = [
    {
        id: "erp",
        title: "Enterprise ERP",
        label: "Module 01",
        description: "Custom ERPNext implementations that unify your entire business logic into one scalable system. Built for complex operational workflows and financial integrity.",
        icon: Database,
        link: "/services/erpnext",
        gradient: "from-blue-600 to-indigo-700",
        features: ["Financial Automation", "Supply Chain Control", "Real-time Analytics"]
    },
    {
        id: "saas",
        title: "SaaS Development",
        label: "Module 02",
        description: "Multi-tenant architectures built for global scale. We handle everything from multi-region deployment to subscription logic and security compliance.",
        icon: Server,
        link: "/services/saas",
        gradient: "from-purple-600 to-pink-700",
        features: ["Edge Computing", "Tenant Isolation", "Usage-based Billing"]
    },
    {
        id: "web",
        title: "Custom Web Apps",
        label: "Module 03",
        description: "High-performance digital platforms using Next.js and Framer Motion. We focus on speed, SEO, and conversion-optimized user experiences.",
        icon: Globe,
        link: "/services/web",
        gradient: "from-teal-500 to-emerald-700",
        features: ["SEO Optimization", "PWA Support", "Ultra-low Latency"]
    },
    {
        id: "mobile",
        title: "Mobile Solutions",
        label: "Module 04",
        description: "Native-feel cross-platform applications for iOS and Android. Robust offline capabilities and deep hardware integration as standard.",
        icon: Smartphone,
        link: "/services/mobile",
        gradient: "from-orange-500 to-red-700",
        features: ["Biometric Auth", "Push Notifications", "Offline Engine"]
    }
];

export default function Services() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="py-20 bg-white overflow-hidden" id="services">
            <div className="container mx-auto px-6">
                {/* Header Section - Compact */}
                <div className="mb-16">
                    <span className="text-[10px] font-black text-primary-blue tracking-[0.3em] uppercase mb-4 block font-display">
                        System Capabilities
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-black text-primary-midnight tracking-tight">
                        Engineering Digital <span className="text-primary-blue underline decoration-blue-100 underline-offset-8">Foundations.</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:items-center min-h-[500px]">
                    {/* Left Panel: Selectors */}
                    <div className="w-full lg:w-1/3 flex flex-col gap-3">
                        {services.map((service, index) => (
                            <button
                                key={service.id}
                                onClick={() => setActiveIndex(index)}
                                className={`group relative flex items-center gap-5 p-6 rounded-2xl transition-all duration-500 text-left border ${activeIndex === index
                                        ? "bg-primary-midnight text-white border-primary-midnight shadow-2xl scale-[1.02] z-10"
                                        : "bg-white text-gray-500 border-gray-100 hover:border-blue-100 hover:bg-blue-50/30"
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500 ${activeIndex === index ? "bg-primary-blue text-white" : "bg-gray-50 text-gray-400 group-hover:bg-blue-100 group-hover:text-primary-blue"
                                    }`}>
                                    <service.icon size={22} />
                                </div>
                                <div className="flex-grow">
                                    <div className={`text-[9px] font-black uppercase tracking-widest mb-1 ${activeIndex === index ? "text-blue-300" : "text-gray-400"}`}>
                                        {service.label}
                                    </div>
                                    <div className="text-lg font-bold tracking-tight">
                                        {service.title}
                                    </div>
                                </div>
                                <ArrowRight size={16} className={`transition-all duration-500 ${activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} />
                            </button>
                        ))}
                    </div>

                    {/* Right Panel: Content Display */}
                    <div className="w-full lg:w-2/3 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5, ease: "circOut" }}
                                className="relative bg-neutral-bg rounded-[2.5rem] p-8 md:p-14 border border-white shadow-premium overflow-hidden h-full flex flex-col"
                            >
                                {/* Decorative Gradient Blobs */}
                                <div className={`absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br ${services[activeIndex].gradient} opacity-10 blur-[100px] rounded-full`} />
                                <div className={`absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr ${services[activeIndex].gradient} opacity-5 blur-[100px] rounded-full`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center gap-4 mb-8 text-primary-blue">
                                        <Layers size={24} className="animate-pulse" />
                                        <div className="h-px flex-grow bg-blue-100" />
                                    </div>

                                    <h3 className="text-3xl md:text-5xl font-display font-black text-primary-midnight mb-6 leading-none tracking-tighter">
                                        {services[activeIndex].title}
                                    </h3>

                                    <p className="text-lg md:text-xl text-neutral-text-light leading-relaxed mb-10 max-w-xl font-medium">
                                        {services[activeIndex].description}
                                    </p>

                                    <div className="grid md:grid-cols-3 gap-4 mb-10">
                                        {services[activeIndex].features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-white">
                                                <Zap size={14} className="text-primary-blue" />
                                                <span className="text-xs font-bold text-primary-midnight uppercase tracking-wider">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pt-6 flex flex-col sm:flex-row gap-6 items-center">
                                        <Link
                                            href={services[activeIndex].link}
                                            className="w-full sm:w-auto px-10 py-5 bg-primary-blue text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-700 transition-all hover:scale-105 shadow-xl shadow-blue-500/20 text-center"
                                        >
                                            View Solution Details
                                        </Link>
                                        <Link
                                            href="/contact"
                                            className="text-sm font-bold text-primary-midnight hover:text-primary-blue transition-colors underline underline-offset-4"
                                        >
                                            Consult an Architect
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
