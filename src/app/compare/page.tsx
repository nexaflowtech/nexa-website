import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ERP Software Comparison | NexaFlowTech",
    description: "Compare ERPNext with SAP, Odoo, Tally, Zoho, and other ERP systems. Unbiased comparison of features, pricing, and implementation costs for Indian businesses.",
    alternates: { canonical: "https://nexaflowtech.com/compare" },
};

const comparisons = [
    {
        title: "ERPNext vs Odoo",
        desc: "Feature-by-feature comparison of ERPNext and Odoo including pricing, manufacturing, GST support, and total cost of ownership.",
        slug: "erpnext-vs-odoo",
        badge: "Most Popular",
    },
    {
        title: "ERPNext vs SAP",
        desc: "Enterprise ERP comparison for SMEs: ERPNext vs SAP Business One. Implementation cost, features, and enterprise readiness.",
        slug: "erpnext-vs-sap",
        badge: null,
    },
];

export default function ComparePage() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ERP Software Comparison</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Unbiased comparison of ERPNext with other ERP systems. Features, pricing, implementation cost, and suitability for different business types.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {comparisons.map((comp) => (
                        <Link key={comp.slug} href={`/compare/${comp.slug}`} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-primary-blue/30 transition-all group">
                            {comp.badge && (
                                <span className="inline-block px-3 py-1 bg-secondary-teal text-white text-xs font-bold rounded-full mb-4">{comp.badge}</span>
                            )}
                            <h2 className="text-2xl font-bold text-primary-midnight mb-3 group-hover:text-primary-blue transition-colors">{comp.title}</h2>
                            <p className="text-gray-600 mb-6">{comp.desc}</p>
                            <span className="inline-flex items-center gap-2 text-primary-blue font-semibold">
                                View Comparison <ArrowRight size={16} />
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">Don&apos;t know which ERP is right for you?</p>
                    <Link href="/contact" className="text-primary-blue font-semibold hover:underline">
                        Get a free ERP recommendation →
                    </Link>
                </div>
            </div>
        </div>
    );
}