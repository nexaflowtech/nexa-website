"use client";

import { motion } from "framer-motion";
import { Layout, Server, Smartphone, ArrowRight, Code, Database, Globe } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Enterprise ERP",
        description: "Custom ERPNext implementations that unify your entire business logic into one scalable system.",
        icon: Database,
        link: "/services/erpnext",
        colSpan: "md:col-span-2",
        gradient: "from-blue-500 to-indigo-600"
    },
    {
        title: "SaaS Development",
        description: "Multi-tenant architectures built for scale. From MVP to IPO-ready platforms.",
        icon: Server,
        link: "/services/saas",
        colSpan: "md:col-span-1",
        gradient: "from-purple-500 to-pink-600"
    },
    {
        title: "Custom Web Apps",
        description: "High-performance marketing sites and complex web applications using Next.js.",
        icon: Globe,
        link: "/services/web",
        colSpan: "md:col-span-1",
        gradient: "from-teal-400 to-emerald-600"
    },
    {
        title: "Mobile Solutions",
        description: "Native-feel cross-platform apps for iOS and Android using React Native / Flutter.",
        icon: Smartphone,
        link: "/services/mobile",
        colSpan: "md:col-span-2",
        gradient: "from-orange-400 to-red-600"
    }
];

export default function Services() {
    return (
        <section className="py-24 bg-white" id="services">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-4 block">Our Capabilities</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary-midnight leading-tight">
                            We Build Digital Ecosystems <br /> Not Just Websites.
                        </h2>
                    </div>
                    <Link href="/services" className="group flex items-center gap-2 text-lg font-semibold text-primary-midnight hover:text-primary-blue transition-colors">
                        View All Services
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`${service.colSpan} group relative overflow-hidden rounded-3xl bg-neutral-bg p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300`}
                        >
                            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-[0.05] group-hover:opacity-[0.1] rounded-full blur-3xl -mr-16 -mt-16 transition-opacity duration-500`} />

                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon size={26} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-midnight mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                        {service.description}
                                    </p>
                                </div>

                                <Link
                                    href={service.link}
                                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gray-200 bg-white text-gray-400 group-hover:bg-primary-midnight group-hover:border-primary-midnight group-hover:text-white transition-all duration-300"
                                >
                                    <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
