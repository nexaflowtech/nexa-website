import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Package, Settings, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext Manufacturing Module Setup Guide 2026 | NexaFlowTech",
    description: "Complete guide to setting up ERPNext manufacturing module. BOM, work orders, production planning, and shop floor control.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-manufacturing-setup" },
};

export default function ERPNextManufacturing() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">ERPNext Manufacturing</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-4">Manufacturing</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">ERPNext Manufacturing Module: Complete Setup Guide</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 20 min read</span>
                            <span>May 18, 2026</span>
                        </div>
                    </div>
                </div>
            </article>

            <div className="container mx-auto px-6 mt-12">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                ERPNext's manufacturing module is powerful yet often underutilized. This guide walks through setting up BOMs, work orders, and production planning for your factory.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Key Manufacturing Features</h2>
                            <div className="grid md:grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: Package, title: "BOM Management", desc: "Multi-level Bill of Materials" },
                                    { icon: Settings, title: "Work Orders", desc: "Shop floor production tracking" },
                                    { icon: TrendingUp, title: "Production Planning", desc: "Material requirements planning" },
                                ].map((item, i) => (
                                    <div key={i} className="p-4 bg-gray-50 rounded-xl">
                                        <item.icon className="text-primary-blue mb-2" size={24} />
                                        <h3 className="font-bold text-primary-midnight">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 1: Enable Manufacturing Module</h2>
                            <p className="text-gray-600 mb-6">Go to Settings > Modules and enable Manufacturing. This activates BOM, Work Order, and Production Plan doctypes.</p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 2: Create Item Templates</h2>
                            <p className="text-gray-600 mb-6">Create your finished products and raw materials with proper item codes, stock units, and default warehouses.</p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 3: Build BOMs</h2>
                            <p className="text-gray-600 mb-6">Create Bill of Materials for each finished product listing all raw materials and their quantities.</p>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Need Manufacturing ERP Setup?</h2>
                            <p className="text-gray-600 mb-6">We have implemented ERPNext for 20+ manufacturing companies in India.</p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                    Get Free Assessment
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Manufacturing Resources</h3>
                            <div className="space-y-3">
                                <Link href="/solutions/manufacturing" className="block text-sm text-gray-600 hover:text-primary-blue">Manufacturing ERP Page</Link>
                                <Link href="/blog/erpnext-implementation-guide" className="block text-sm text-gray-600 hover:text-primary-blue">Implementation Guide</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}