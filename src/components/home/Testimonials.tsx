"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        quote: "NexaFlowtech successfully implemented Frappe ERPNext for us, automating 100% of our manufacturing, inventory, and accounting processes. This significantly reduced manual work and improved overall efficiency. Highly recommended!",
        author: "Anmol Pandey",
        role: "Founder's Office, Evoa Consumer Private Limited",
        image: "/images/anmol.jpeg" // Placeholder path
    },
    {
        quote: "We needed a partner who understood both startup agility and enterprise security. NexaFlow delivered a scalable Fintech platform that helped us secure Series B funding.",
        author: "Michael Chen",
        role: "Founder, FinStart Inc",
        image: "/images/testimonials/avatar-2.jpg"
    },
    {
        quote: "Their team doesn't just write code; they engineer business solutions. The custom manufacturing module they built is now the backbone of our factory operations.",
        author: "David Ross",
        role: "Operations Director, ManuFacture Co",
        image: "/images/testimonials/avatar-3.jpg"
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-4 block">Success Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary-midnight">
                        Impact Driven Results
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-neutral-bg p-8 rounded-2xl relative border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            <Quote size={40} className="text-primary-blue/20 mb-6" />
                            <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                                "{item.quote}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden relative">
                                    {/* Placeholder Avatar if image missing */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-white font-bold text-lg">
                                        {item.author.charAt(0)}
                                    </div>
                                    {/* <Image src={item.image} alt={item.author} fill className="object-cover" /> */}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary-midnight">{item.author}</h4>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">{item.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
