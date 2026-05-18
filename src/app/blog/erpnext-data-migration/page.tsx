import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Database, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext Data Migration Guide: From Tally, SAP, Excel | NexaFlowTech",
    description: "Complete guide to migrating data from Tally, SAP, QuickBooks, or Excel to ERPNext. Best practices and common pitfalls.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-data-migration" },
};

export default function ERPNextDataMigration() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">Data Migration</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-green-500/20 text-green-200 text-sm font-medium rounded-full mb-4">Guide</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">How to Migrate Data to ERPNext: Complete Guide</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 14 min read</span>
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
                                Data migration is the most critical and often underestimated part of ERPNext implementation. Proper planning ensures you don't lose decades of business data.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Data Migration Checklist</h2>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Clean and deduplicate existing data",
                                    "Map account structures between systems",
                                    "Convert data formats to ERPNext schema",
                                    "Test migration in staging environment",
                                    "Validate all balances and transactions",
                                    "Train users on new data entry workflows"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Check size={18} className="text-secondary-teal mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Supported Migration Sources</h2>
                            <ul className="space-y-3 mb-8">
                                <li className="flex items-center gap-3"><Check size={18} className="text-secondary-teal" /> Tally (Prime, ERP 9)</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-secondary-teal" /> SAP Business One</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-secondary-teal" /> QuickBooks</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-secondary-teal" /> Excel / CSV</li>
                                <li className="flex items-center gap-3"><Check size={18} className="text-secondary-teal" /> Zoho Books</li>
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Need Help with Migration?</h2>
                            <p className="text-gray-600 mb-6">Our team has migrated data from 30+ legacy systems to ERPNext.</p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                    Get Migration Quote
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Migration Services</h3>
                            <div className="space-y-3 text-sm text-gray-600">
                                <p>Tally to ERPNext</p>
                                <p>SAP to ERPNext</p>
                                <p>Excel to ERPNext</p>
                                <p>QuickBooks to ERPNext</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}