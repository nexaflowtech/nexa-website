import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext vs SAP Business One: Enterprise ERP Comparison 2026",
    description: "ERPNext vs SAP Business One comparison for SMEs. Features, pricing, implementation cost, customization, and support. Which enterprise ERP is better for Indian businesses?",
    alternates: { canonical: "https://nexaflowtech.com/compare/erpnext-vs-sap" },
};

const comparison = [
    { feature: "License Cost", erpnext: "Free (Community)", sap: "₹3-8 lakhs per user" },
    { feature: "Annual Maintenance", erpnext: "₹12,000-50,000/year", sap: "₹2-5 lakhs/year" },
    { feature: "Implementation Cost", erpnext: "₹1-5 lakhs", sap: "₹10-50 lakhs" },
    { feature: "Total Cost (3 Years)", erpnext: "₹2-8 lakhs", sap: "₹50-150 lakhs+" },
    { feature: "Indian GST Support", erpnext: "Excellent built-in", sap: "Requires customization" },
    { feature: "Manufacturing", erpnext: "Strong built-in", sap: "Advanced (extra cost)" },
    { feature: "Customization", erpnext: "Python (full access)", sap: "ABAP (limited)" },
    { feature: "Cloud Deployment", erpnext: "Yes (Frappe Cloud)", sap: "SAP HANA Cloud extra" },
    { feature: "Mobile Access", erpnext: "Web + add-ons", sap: "Native apps (paid)" },
    { feature: "Multi-currency", erpnext: "Built-in", sap: "Built-in" },
    { feature: "Setup Time", erpnext: "4-12 weeks", sap: "6-18 months" },
    { feature: "Implementation Partners India", erpnext: "Growing", sap: "Many large firms" },
    { feature: "Best For", erpnext: "SMEs, Startups, India-focus", sap: "Large enterprises, MNCs" },
];

function TableRow({ feature, erpnext, sap }: { feature: string; erpnext: string; sap: string }) {
    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-medium text-gray-800">{feature}</td>
            <td className="py-4 px-4 text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${erpnext.includes('Free') || erpnext.includes('Excellent') || erpnext.includes('Strong') || erpnext.includes('4-') ? 'bg-green-50 text-green-700' : erpnext.includes('2-') || erpnext.includes('Built') ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>{erpnext}</span>
            </td>
            <td className="py-4 px-4 text-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-600">{sap}</span>
            </td>
        </tr>
    );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50">
                <span className="font-semibold text-primary-midnight">{question}</span>
                <ChevronDown size={20} className="text-gray-400 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 border-t leading-relaxed">{answer}</div>
        </details>
    );
}

export default function ErpnextVsSap() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/compare" className="hover:text-white">Compare</Link><span>/</span>
                        <span className="text-white">ERPNext vs SAP</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ERPNext vs SAP Business One — Enterprise ERP Comparison 2026</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">Which ERP is right for your Indian SME: ERPNext or SAP Business One? Complete cost, feature, and implementation comparison for businesses considering enterprise software.</p>
                    <Link href="/contact"><Button className="bg-secondary-teal text-white">Get Free ERP Consultation <ArrowRight size={18} className="ml-2" /></Button></Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
                        <div className="grid md:grid-cols-3 gap-6 p-8 bg-gray-50 border-b">
                            <div className="text-center"><h3 className="text-2xl font-bold text-gray-800">Feature</h3></div>
                            <div className="text-center bg-primary-midnight text-white p-4 rounded-xl">
                                <h3 className="text-xl font-bold">ERPNext</h3><p className="text-xs text-blue-200 mt-1">Our Recommendation</p>
                            </div>
                            <div className="text-center p-4"><h3 className="text-xl font-bold text-gray-800">SAP Business One</h3></div>
                        </div>
                        <div className="divide-y">
                            {comparison.map((row) => (
                                <TableRow key={row.feature} feature={row.feature} erpnext={row.erpnext} sap={row.sap} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border mb-10">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Our Verdict: ERPNext for Indian SMEs</h2>
                        <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                            SAP Business One is a powerful enterprise ERP designed for large organizations with complex requirements and significant budgets. For Indian SMEs and growing businesses, ERPNext delivers 80% of SAP&apos;s functionality at 10% of the cost.
                        </p>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            The key differentiator is total cost of ownership. A typical SAP Business One implementation costs ₹30-150 lakhs over 3 years (licenses, implementation, customization, annual maintenance). An equivalent ERPNext implementation costs ₹2-8 lakhs — a 5-20x difference that most Indian SMEs cannot justify.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                                <h3 className="font-bold text-green-800 mb-3">Choose ERPNext If:</h3>
                                <ul className="space-y-2 text-sm text-green-700">
                                    <li className="flex items-center gap-2"><Check size={14} /> Budget under ₹10 lakhs</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Manufacturing or services focus</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Indian GST compliance needed</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Need customization flexibility</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Faster implementation (&lt; 3 months)</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Open-source preference</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                                <h3 className="font-bold text-blue-800 mb-3">Choose SAP B1 If:</h3>
                                <ul className="space-y-2 text-sm text-blue-700">
                                    <li className="flex items-center gap-2"><Check size={14} /> Budget over ₹50 lakhs</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Very large organization (100+ users)</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Global operations with multi-entity</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Need SAP ecosystem integration</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Existing SAP infrastructure</li>
                                    <li className="flex items-center gap-2"><Check size={14} /> Enterprise SLA support required</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border mb-10">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            <FAQItem question="Is SAP Business One better than ERPNext for large enterprises?" answer="Yes, for very large enterprises (100+ users, complex multi-entity operations, global presence), SAP Business One offers more robust features, enterprise-grade support, and integration with other SAP products. However, for most mid-size Indian enterprises, ERPNext's modern architecture, lower cost, and greater customization flexibility make it the better choice." />
                            <FAQItem question="What is the implementation timeline for ERPNext vs SAP Business One?" answer="ERPNext implementations typically take 4-12 weeks for a complete setup. SAP Business One implementations usually take 6-18 months due to the complexity of the system, customizations, and data migration requirements. ERPNext's simpler architecture allows faster deployment and quicker time-to-value." />
                            <FAQItem question="Does ERPNext have the same features as SAP?" answer="ERPNext covers 80-90% of core ERP functionality for SMEs — accounting, inventory, CRM, HR, purchasing, and manufacturing. SAP has more advanced features in areas like advanced planning, supply chain optimization, and industry-specific functionality that ERPNext may need custom development to match." />
                            <FAQItem question="Can NexaFlowTech migrate from SAP to ERPNext?" answer="Yes, we have experience migrating from legacy systems including SAP Business One. Our migration process includes data extraction, transformation mapping to ERPNext's data model, validation, and cutover support. We have migrated several clients from Tally, SAP, and other ERPs to ERPNext." />
                        </div>
                    </div>

                    <div className="bg-primary-midnight text-white p-8 md:p-12 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Considering ERP for Your Business?</h3>
                        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Get a free consultation to understand whether ERPNext or SAP is the right fit for your business size, industry, and budget.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact"><Button className="bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                            <Link href="/compare/erpnext-vs-odoo"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10">ERPNext vs Odoo</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}