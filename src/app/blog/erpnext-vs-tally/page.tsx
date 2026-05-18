import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext vs Tally Prime: Which is Better for Indian Businesses? | NexaFlowTech",
    description: "ERPNext vs Tally comparison for Indian businesses. Migrate from Tally to ERPNext for full ERP capabilities.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-vs-tally" },
};

export default function ERPNextVsTally() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">ERPNext vs Tally</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-200 text-sm font-medium rounded-full mb-4">Comparison</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">ERPNext vs Tally Prime: From Accounting to Full ERP</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 10 min read</span>
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
                                Tally is the go-to accounting software for millions of Indian businesses. But as your business grows, Tally's limitations become apparent. Here's why many Indian companies are migrating to ERPNext.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Key Differences</h2>
                            <div className="space-y-6">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-primary-midnight mb-2">Inventory Management</h3>
                                    <p className="text-gray-600">Tally offers basic inventory. ERPNext provides batch tracking, serial numbers, warehouse management, and multi-warehouse support.</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-primary-midnight mb-2">GST Compliance</h3>
                                    <p className="text-gray-600">Both handle GST well, but ERPNext offers better e-way bill generation, GSTR reports, and input tax credit tracking.</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <h3 className="font-bold text-primary-midnight mb-2">Multi-Company</h3>
                                    <p className="text-gray-600">Tally handles multiple companies. ERPNext goes further with inter-company transactions, consolidated reports, and role-based access.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Migrate from Tally to ERPNext</h2>
                            <p className="text-gray-600 mb-6">We specialize in Tally data migration to ERPNext with zero data loss.</p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                    Get Migration Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Why Migrate to ERPNext?</h3>
                            <ul className="space-y-3 text-sm text-gray-600">
                                <li>✓ Full ERP, not just accounting</li>
                                <li>✓ CRM, HR, Inventory in one system</li>
                                <li>✓ Customizable workflows</li>
                                <li>✓ Cloud access</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}