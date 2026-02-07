"use client";

import { motion } from "framer-motion";
import { Factory, ShoppingBag, Stethoscope, GraduationCap, Truck, Rocket, Landmark, Coins, Check, ArrowRight } from "lucide-react";
import Image from "next/image";

const industries = [
    {
        name: "Manufacturing",
        icon: Factory,
        image: "/images/industry-manufac.svg",
        tagline: "Production Excellence",
        benefits: [
            "Real-time production tracking",
            "Inventory & supply chain automation",
            "Quality control workflows"
        ],
        description: "End-to-end ERP systems that connect your factory floor to your financial reports.",
        color: "from-orange-500 to-orange-600",
        iconColor: "text-orange-500",
        iconBg: "bg-orange-50"
    },
    {
        name: "Retail & E-commerce",
        icon: ShoppingBag,
        image: "/images/industry-retail.svg",
        tagline: "Omnichannel Commerce",
        benefits: [
            "Unified inventory across channels",
            "POS integration & analytics",
            "Customer behavior insights"
        ],
        description: "Seamless online-offline integration with real-time stock sync and customer insights.",
        color: "from-blue-500 to-blue-600",
        iconColor: "text-blue-500",
        iconBg: "bg-blue-50"
    },
    {
        name: "Healthcare",
        icon: Stethoscope,
        image: "/images/industry-healthc.svg",
        tagline: "Patient-First Systems",
        benefits: [
            "Electronic health records",
            "Appointment scheduling",
            "Billing automation"
        ],
        description: "HIPAA-compliant platforms that streamline patient care and administrative workflows.",
        color: "from-teal-500 to-teal-600",
        iconColor: "text-teal-500",
        iconBg: "bg-teal-50"
    },
    {
        name: "Education",
        icon: GraduationCap,
        image: "/images/industry-educati.svg",
        tagline: "Learning Management",
        benefits: [
            "Course administration",
            "Student portals & gradebooks",
            "Fee management"
        ],
        description: "All-in-one academic ERP from admissions to alumni management.",
        color: "from-yellow-500 to-yellow-600",
        iconColor: "text-yellow-600",
        iconBg: "bg-yellow-50"
    },
    {
        name: "Logistics",
        icon: Truck,
        image: "/images/industry-logisti.svg",
        tagline: "Supply Chain Mastery",
        benefits: [
            "Route optimization",
            "Fleet management",
            "Warehouse automation"
        ],
        description: "Track every shipment, vehicle, and warehouse operation in one unified dashboard.",
        color: "from-indigo-500 to-indigo-600",
        iconColor: "text-indigo-500",
        iconBg: "bg-indigo-50"
    },
    {
        name: "Startups",
        icon: Rocket,
        image: "/images/industry-startup.svg",
        tagline: "Scale Fast. Build Smart.",
        benefits: [
            "MVP development",
            "Cloud infrastructure",
            "Agile workflows"
        ],
        description: "Rapid prototyping and scalable architecture designed for hypergrowth.",
        color: "from-purple-500 to-purple-600",
        iconColor: "text-purple-500",
        iconBg: "bg-purple-50"
    },
    {
        name: "Banking & Fintech",
        icon: Coins,
        image: "/images/industry-banking.svg",
        tagline: "Secure Financial Systems",
        benefits: [
            "Transaction processing",
            "Compliance automation",
            "Fraud detection"
        ],
        description: "Bank-grade security with lightning-fast transaction engines and regulatory compliance.",
        color: "from-green-500 to-green-600",
        iconColor: "text-green-500",
        iconBg: "bg-green-50"
    },
    {
        name: "Government",
        icon: Landmark,
        image: "/images/industry-governm.svg",
        tagline: "Public Sector Solutions",
        benefits: [
            "Citizen portals",
            "Procurement systems",
            "Transparency dashboards"
        ],
        description: "Digital governance platforms that improve efficiency and public service delivery.",
        color: "from-gray-500 to-gray-600",
        iconColor: "text-gray-600",
        iconBg: "bg-gray-50"
    }
];

export default function Industries() {
    return (
        <section className="py-32 bg-neutral-bg overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#0F172A 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-sm font-bold text-primary-blue tracking-widest uppercase mb-4 block">Sectors We Serve</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-midnight leading-tight mb-6">
                        Tailored Solutions <br className="hidden md:block" />
                        Against <span className="text-primary-blue">Generic Code.</span>
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We don't build one-size-fits-all software. Each industry has unique challenges,
                        and we engineer solutions that speak your business language.
                    </p>
                </div>

                {/* Industry Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Image Background with Overlay */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={industry.image}
                                    alt={industry.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className={`absolute inset-0 bg-gradient-to-t ${industry.color} opacity-80 group-hover:opacity-70 transition-opacity duration-500`}></div>

                                {/* Icon Badge */}
                                <div className={`absolute top-4 right-4 w-12 h-12 ${industry.iconBg} rounded-xl flex items-center justify-center ${industry.iconColor} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                                    <industry.icon size={24} />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-primary-midnight mb-1 group-hover:text-primary-blue transition-colors">
                                    {industry.name}
                                </h3>
                                <p className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wide">
                                    {industry.tagline}
                                </p>

                                {/* Benefits List */}
                                <ul className="space-y-2 mb-4">
                                    {industry.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                            <Check size={16} className={`${industry.iconColor} flex-shrink-0 mt-0.5`} />
                                            <span className="leading-tight">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Description */}
                                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                                    {industry.description}
                                </p>

                                {/* CTA - Appears on hover */}
                                <div className="flex items-center gap-2 text-sm font-semibold text-primary-blue opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                                    <span>Learn More</span>
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>

                            {/* Accent Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${industry.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
