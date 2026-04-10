"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "ERPNext", gradient: "from-blue-600 to-blue-700" },
    { name: "Frappe", gradient: "from-blue-500 to-blue-600" },
    { name: "AWS", gradient: "from-orange-500 to-orange-600" },
    { name: "Docker", gradient: "from-blue-400 to-blue-500" },
    { name: "Python", gradient: "from-yellow-500 to-yellow-600" },
    { name: "React", gradient: "from-cyan-400 to-blue-500" },
    { name: "Next.js", gradient: "from-gray-800 to-gray-900" },
    { name: "PostgreSQL", gradient: "from-blue-700 to-blue-800" },
    { name: "TypeScript", gradient: "from-blue-600 to-blue-700" },
    { name: "Tailwind", gradient: "from-teal-400 to-cyan-500" }
];

export default function Trust() {
    // Duplicate partners for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 bg-gradient-to-b from-white to-neutral-bg border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3 block font-display">
                        Global Technical Hub
                    </span>
                    <h3 className="text-3xl md:text-5xl font-display font-black text-primary-midnight tracking-tight">
                        Powering <span className="text-primary-blue">Transformation.</span>
                    </h3>
                </div>

                {/* Infinite Marquee */}
                <div className="relative">
                    {/* Gradient Overlays */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-neutral-bg to-transparent z-10 pointer-events-none"></div>

                    {/* Scrolling Container */}
                    <motion.div
                        className="flex gap-6"
                        animate={{
                            x: [0, -1920] // Adjust based on total width
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30,
                                ease: "linear"
                            }
                        }}
                    >
                        {duplicatedPartners.map((partner, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05, y: -4 }}
                                className="flex-shrink-0 group"
                            >
                                <div className={`
                                    relative px-8 py-4 rounded-xl
                                    bg-white border-2 border-gray-100
                                    shadow-sm hover:shadow-lg
                                    transition-all duration-300
                                    min-w-[180px] flex items-center justify-center
                                `}>
                                    {/* Gradient Background on Hover */}
                                    <div className={`
                                        absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10
                                        bg-gradient-to-br ${partner.gradient}
                                        transition-opacity duration-300
                                    `}></div>

                                    {/* Partner Name */}
                                    <span className={`
                                        relative text-xl font-bold
                                        bg-gradient-to-br ${partner.gradient}
                                        bg-clip-text text-transparent
                                        group-hover:scale-105 transition-transform duration-300
                                    `}>
                                        {partner.name}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Subtext */}
                <p className="text-center text-sm text-gray-500 mt-8 max-w-2xl mx-auto">
                    We leverage industry-leading technologies to build scalable, secure, and future-ready solutions.
                </p>
            </div>
        </section>
    );
}
