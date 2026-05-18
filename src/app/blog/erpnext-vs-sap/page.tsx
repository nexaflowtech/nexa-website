import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext vs SAP Business One: Complete Comparison for SMEs | NexaFlowTech",
    description: "Compare ERPNext vs SAP Business One: pricing, features, implementation cost, and which is better for Indian SMEs.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-vs-sap" },
};

export default function ERPNextVsSAP() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">ERPNext vs SAP</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-200 text-sm font-medium rounded-full mb-4">Comparison</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">ERPNext vs SAP Business One: Which ERP is Right for Your SME?</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
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
                                SAP Business One has long been the enterprise ERP standard, but is it worth the premium price for SMEs? Let's compare it with ERPNext, the open-source alternative gaining massive traction in India.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Pricing Comparison</h2>
                            <div className="bg-gray-50 p-6 rounded-xl mb-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="font-bold text-primary-midnight mb-2">ERPNext</h3>
                                        <p className="text-3xl font-bold text-secondary-teal">₹0 - ₹50K</p>
                                        <p className="text-sm text-gray-500">Free community or ₹50K one-time</p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-midnight mb-2">SAP Business One</h3>
                                        <p className="text-3xl font-bold text-orange-600">₹8-15 Lakhs</p>
                                        <p className="text-sm text-gray-500">Plus annual maintenance</p>
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">When to Choose ERPNext</h2>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-start gap-3"><Check size={20} className="text-secondary-teal mt-1" /> Budget under ₹10 Lakhs</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-secondary-teal mt-1" /> Need customization flexibility</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-secondary-teal mt-1" /> Prefer open-source with no vendor lock-in</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">When to Choose SAP</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3"><Check size={20} className="text-orange-500 mt-1" /> Already using SAP ecosystem</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-orange-500 mt-1" /> Need enterprise-grade analytics</li>
                                <li className="flex items-start gap-3"><Check size={20} className="text-orange-500 mt-1" /> Budget above ₹15 Lakhs</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Get Custom ERP Recommendation</h2>
                            <p className="text-gray-600 mb-6">Our experts can help you choose the right ERP for your budget and needs.</p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                    Book Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">More Comparisons</h3>
                            <div className="space-y-3">
                                <Link href="/blog/erpnext-vs-odoo" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext vs Odoo</Link>
                                <Link href="/blog/erpnext-vs-tally" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext vs Tally</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}