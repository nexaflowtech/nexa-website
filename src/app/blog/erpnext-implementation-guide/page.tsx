import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Calendar, Users, Database, Settings } from "lucide-react";

export const metadata: Metadata = {
    title: "How to Implement ERPNext in 30 Days: Complete Step-by-Step Guide | NexaFlowTech",
    description: "A practical ERPNext implementation roadmap for small and medium businesses. 30-day implementation checklist, timeline, and common pitfalls to avoid for successful ERP deployment.",
    alternates: { canonical: "https://nexaflowtech.com/blog/erpnext-implementation-guide" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How to Implement ERPNext in 30 Days: Complete Step-by-Step Guide",
            "description": "A practical implementation roadmap for businesses deploying ERPNext within 30 days.",
            "author": { "@type": "Organization", "name": "NexaFlowTech" },
            "datePublished": "2026-05-18",
            "dateModified": "2026-05-18"
        })
    },
};

const steps = [
    { icon: Calendar, title: "Week 1: Discovery & Planning", tasks: ["Stakeholder interviews", "Process mapping workshop", "Requirements document", "Budget finalization", "Timeline agreement"] },
    { icon: Settings, title: "Week 2: Configuration", tasks: ["ERPNext cloud setup", "Core modules enabled", "Company structure", "Chart of accounts", "Roles & permissions"] },
    { icon: Database, title: "Week 3: Customization & Data", tasks: ["Custom fields & doctypes", "Workflow automation", "Data migration plan", "Legacy data cleanup", "Print formats"] },
    { icon: Users, title: "Week 4: Testing & Go-Live", tasks: ["User acceptance testing", "Data migration execution", "User training sessions", "Hypercare support", "Handover documentation"] },
];

const commonMistakes = [
    "Underestimating data cleanup time",
    "Skipping process documentation",
    "No dedicated project manager",
    "Training users at the last minute",
    "Skipping backup before go-live",
];

export default function ERPNextImplementationGuide() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link>
                        <span>/</span>
                        <Link href="/blog" className="hover:text-white">Blog</Link>
                        <span>/</span>
                        <span className="text-white">ERPNext Implementation Guide</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-200 text-sm font-medium rounded-full mb-4">ERPNext How-To</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">How to Implement ERPNext in 30 Days: Complete Step-by-Step Guide</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 12 min read</span>
                            <span>May 18, 2026</span>
                            <span>By NexaFlowTech Team</span>
                        </div>
                    </div>
                </div>
            </article>

            <div className="container mx-auto px-6 mt-12 pb-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Implementing an ERP system like ERPNext in 30 days is ambitious but achievable with proper planning and the right partner. This guide walks you through a proven methodology that NexaFlowTech has used for 50+ successful ERPNext implementations.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">Why 30 Days?</h2>
                            <p className="text-gray-600 mb-6">
                                Most small and medium businesses can&apos;t afford a 6-month ERP implementation. A 30-day timeline forces focus on core functionality while delivering immediate value. Extended implementations often stall, lose momentum, and exceed budgets without adding business value.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">The 30-Day Implementation Roadmap</h2>
                            <div className="space-y-6">
                                {steps.map((step, i) => (
                                    <div key={i} className="flex gap-4 p-6 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-primary-blue text-white rounded-xl flex items-center justify-center flex-shrink-0">
                                            <step.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary-midnight mb-3">{step.title}</h3>
                                            <ul className="space-y-2">
                                                {step.tasks.map((task) => (
                                                    <li key={task} className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Check size={14} className="text-secondary-teal" />
                                                        {task}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">Common Implementation Mistakes to Avoid</h2>
                            <div className="space-y-4">
                                {commonMistakes.map((mistake, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl">
                                        <div className="w-8 h-8 bg-red-50 text-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">{i + 1}</div>
                                        <p className="text-gray-700">{mistake}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 md:p-12 rounded-2xl border border-blue-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Ready to Implement ERPNext?</h2>
                            <p className="text-gray-600 mb-6">
                                NexaFlowTech has implemented ERPNext for 50+ clients in manufacturing, retail, healthcare, and services. We offer fixed-price, fixed-timeline ERPNext implementations with a 30-day go-live guarantee.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                                        Book Free Consultation
                                    </button>
                                </Link>
                                <Link href="/services/erpnext">
                                    <button className="px-6 py-3 border border-primary-blue text-primary-blue font-semibold rounded-xl hover:bg-blue-50 transition-colors">
                                        View ERPNext Services
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">What Comes Next?</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <Link href="/blog/erpnext-manufacturing-setup" className="flex flex-col p-4 border border-gray-100 rounded-xl hover:border-primary-blue/30 transition-colors h-full min-h-[80px]">
                                    <span className="text-sm text-primary-blue font-medium mb-2">Next Article</span>
                                    <h3 className="font-bold text-primary-midnight">ERPNext Manufacturing Module Setup Guide</h3>
                                </Link>
                                <Link href="/blog/erpnext-vs-odoo" className="flex flex-col p-4 border border-gray-100 rounded-xl hover:border-primary-blue/30 transition-colors h-full min-h-[80px]">
                                    <span className="text-sm text-primary-blue font-medium mb-2">Related</span>
                                    <h3 className="font-bold text-primary-midnight">ERPNext vs Odoo Comparison</h3>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Quick Checklist</h3>
                            <div className="space-y-3">
                                {[
                                    "Assign a project manager",
                                    "Map current processes",
                                    "Clean legacy data",
                                    "Define success metrics",
                                    "Train power users first",
                                    "Plan post-go-live support"
                                ].map((item) => (
                                    <label key={item} className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-blue" />
                                        <span className="text-sm text-gray-700">{item}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary-midnight text-white p-6 rounded-2xl">
                            <h3 className="font-bold mb-4">Need Help?</h3>
                            <p className="text-blue-200 text-sm mb-4">Get a free implementation assessment from NexaFlowTech.</p>
                            <Link href="/contact" className="inline-block w-full text-center py-3 bg-secondary-teal text-white font-semibold rounded-xl hover:bg-teal-600">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}