"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 50]);

    return (
        <section ref={targetRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-neutral-bg">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-blue-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob" />
                <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-teal-100/40 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000" />
                <div className="absolute top-[20%] left-[20%] w-[50vw] h-[50vw] bg-purple-100/30 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    style={{ opacity, scale, y }}
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
                >
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white border border-gray-100 shadow-tactile">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary-teal opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary-teal"></span>
                                </span>
                                <span className="text-[10px] font-black text-primary-midnight tracking-[0.2em] uppercase opacity-70 font-display">
                                    Next-Gen Digital Systems
                                </span>
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-display font-black leading-[0.95] text-primary-midnight mb-8 tracking-tighter">
                                Engineering <br />
                                <span className="text-primary-blue relative inline-block">
                                    Excellence.
                                    <svg className="absolute w-full h-4 -bottom-2 left-0 text-blue-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="12" fill="none" />
                                    </svg>
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl text-neutral-text-light mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                                NexaFlowTech designs and engineers high-performance digital ecosystems that transform complex enterprise operations into competitive advantages.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                                <Link href="/contact" className="w-full sm:w-auto">
                                    <Button size="lg" className="h-14 px-10 rounded-2xl shadow-blue-500/10 hover:shadow-blue-500/20">
                                        Initiate Project
                                        <ArrowRight size={20} className="ml-2" />
                                    </Button>
                                </Link>
                                <Link href="/services" className="w-full sm:w-auto">
                                    <Button variant="outline" size="lg" className="h-14 px-10 rounded-2xl border-gray-100 bg-white/50 backdrop-blur-md hover:bg-white hover:border-gray-200">
                                        <Play size={18} className="mr-2 fill-current" />
                                        Case Studies
                                    </Button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* Visual Content */}
                    <div className="flex-1 w-full max-w-[600px] lg:max-w-none relative">
                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: -2 }}
                            animate={{ opacity: 1, x: 0, rotate: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="relative z-10"
                        >
                            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(8,_112,_184,_0.15)] bg-white border border-white/50 backdrop-blur-xl">
                                <Image
                                    src="/images/illustration-hero.svg"
                                    alt="NexaFlowTech Enterprise Dashboard"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto object-cover"
                                    priority
                                />

                                {/* Glassmorphism Overlay Card 1 */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 flex items-center gap-4 max-w-[220px]"
                                >
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold">
                                        98
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 font-semibold uppercase">Efficiency Score</p>
                                        <p className="text-sm font-bold text-primary-midnight">Top 1% Performance</p>
                                    </div>
                                </motion.div>

                                {/* Glassmorphism Overlay Card 2 */}
                                <motion.div
                                    initial={{ y: -20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 1 }}
                                    className="absolute top-8 right-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg border border-white/50"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-xs font-bold text-primary-midnight">System Operational</span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400"
            >
                <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-300 to-transparent" />
            </motion.div>
        </section>
    );
}
