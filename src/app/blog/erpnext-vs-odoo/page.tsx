import type { Metadata } from "next";
import Link from "next/link";
import { Check, X, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext vs Odoo 2026: Which Open Source ERP is Better? | NexaFlowTech",
    description: "Complete comparison of ERPNext vs Odoo: pricing, features, ease of use, implementation, and which is better for Indian businesses.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-vs-odoo" },
};

export default function ERPNextVsOdoo() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">ERPNext vs Odoo</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-200 text-sm font-medium rounded-full mb-4">Comparison</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">ERPNext vs Odoo: Which Open Source ERP is Better in 2026?</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 15 min read</span>
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
                                Choosing between ERPNext and Odoo is one of the most common decisions for businesses looking at open-source ERP solutions. Both are powerful, but they serve different needs. This comprehensive comparison will help you make the right choice.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Quick Comparison</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="p-4 text-left">Feature</th>
                                            <th className="p-4 text-left">ERPNext</th>
                                            <th className="p-4 text-left">Odoo</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t">
                                            <td className="p-4 font-medium">Starting Price</td>
                                            <td className="p-4 text-secondary-teal font-bold">Free (Community)</td>
                                            <td className="p-4">Free (Community)</td>
                                        </tr>
                                        <tr className="border-t bg-gray-50">
                                            <td className="p-4 font-medium">Enterprise Plans</td>
                                            <td className="p-4">$99/mo (per user)</td>
                                            <td className="p-4">$159/mo (per user)</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4 font-medium">Database</td>
                                            <td className="p-4">MariaDB</td>
                                            <td className="p-4">PostgreSQL</td>
                                        </tr>
                                        <tr className="border-t bg-gray-50">
                                            <td className="p-4 font-medium">Mobile App</td>
                                            <td className="p-4">Limited</td>
                                            <td className="p-4 text-secondary-teal">✓ Full Apps</td>
                                        </tr>
                                        <tr className="border-t">
                                            <td className="p-4 font-medium">India GST Support</td>
                                            <td className="p-4 text-secondary-teal">✓ Excellent</td>
                                            <td className="p-4">Good</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">When to Choose ERPNext</h2>
                            <ul className="space-y-4">
                                {["Manufacturing businesses needing strong BOM and production planning", "Indian businesses requiring GST compliance out-of-box", "Companies preferring Python/Frappe tech stack", "Teams wanting simpler, focused interface"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-secondary-teal mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">When to Choose Odoo</h2>
                            <ul className="space-y-4">
                                {["Businesses needing e-commerce integration (built-in)", "Companies wanting more third-party apps (15,000+)", "Retail POS with advanced features", "Enterprises needing complex multi-company setups"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <Check size={20} className="text-primary-blue mt-1 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Need Help Choosing?</h2>
                            <p className="text-gray-600 mb-6">
                                Our ERPNext consultants can help you evaluate both platforms for your specific needs.
                            </p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                                    Get Free Consultation
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Related Comparisons</h3>
                            <div className="space-y-3">
                                <Link href="/blog/erpnext-vs-sap" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext vs SAP</Link>
                                <Link href="/blog/erpnext-vs-tally" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext vs Tally</Link>
                                <Link href="/blog/erpnext-vs-zoho" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext vs Zoho</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}