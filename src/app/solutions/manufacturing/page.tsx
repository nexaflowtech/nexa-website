import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, TrendingUp, Shield, Settings, BarChart3, Package, Factory, Target, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Manufacturing ERP Software | ERPNext for Manufacturing | NexaFlowTech",
    description: "ERPNext manufacturing ERP with BOM management, production planning, shop floor control, and inventory automation. India's #1 manufacturing ERP partner serving USA, UK, UAE & beyond.",
    alternates: { canonical: "https://nexaflowtech.com/solutions/manufacturing" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Manufacturing ERP Software",
            "description": "ERPNext manufacturing ERP with BOM management, production planning, shop floor control, and inventory automation for Indian manufacturers.",
            "provider": {
                "@type": "Organization",
                "name": "NexaFlowTech",
                "url": "https://nexaflowtech.com"
            },
            "areaServed": "Worldwide",
            "serviceType": "Manufacturing ERP"
        })
    },
};

const manufacturingFeatures = [
    { icon: Package, title: "Bill of Materials (BOM)", desc: "Multi-level BOM management with nested structures, costing, and version control." },
    { icon: Settings, title: "Work Orders", desc: "Create and track work orders with scheduling, operation tracking, and status management." },
    { icon: Factory, title: "Production Planning", desc: "Material Requirements Planning (MRP) with demand forecasting and procurement planning." },
    { icon: BarChart3, title: "Job Cards & Timesheets", desc: "Track production progress, labor hours, and machine utilization with digital job cards." },
    { icon: Package, title: "Inventory Management", desc: "Real-time raw material and finished goods tracking with FIFO/LIFO and serial number tracking." },
    { icon: Target, title: "Quality Assurance", desc: "QC checklists, inspection stages, and non-conformance tracking for consistent product quality." },
    { icon: TrendingUp, title: "Production Analytics", desc: "OEE dashboards, production reports, and cost analysis for continuous improvement." },
    { icon: Shield, title: "Subcontractor Management", desc: "Manage subcontract operations, material transfers, and payables tracking." },
];

const benefits = [
    { value: "30%", label: "Reduction in Production Costs" },
    { value: "25%", label: "Faster Order Fulfillment" },
    { value: "99%", label: "Inventory Accuracy" },
    { value: "40%", label: "Less Manual Data Entry" },
];

const modules = [
    { name: "Manufacturing", desc: "BOM, Work Orders, Job Cards, Production Planning, Operations" },
    { name: "Stock Management", desc: "Inventory, Stock Balance, Stock Entry, Serial Numbers, Batches" },
    { name: "Quality Inspection", desc: "QC Template, Inspection Criteria, Non-Conformance Reports" },
    { name: "Accounts Payable", desc: "Supplier Invoices, Payments, Landed Cost Wizard" },
    { name: "Project Management", desc: "Production Project, Task Tracking, Costing" },
    { name: "Maintenance", desc: "Equipment Tracking, AMC Schedules, Work Order for Repairs" },
];

const faqs = [
    {
        q: "Can ERPNext handle discrete manufacturing?",
        a: "Yes, ERPNext is well-suited for discrete manufacturing where products are made from individual parts. It supports multi-level BOMs, operation tracking, and job cards for tracking production at each stage."
    },
    {
        q: "Does ERPNext support process manufacturing?",
        a: "ERPNext has basic process manufacturing support through the Manufacturing module. For advanced process manufacturing with formulas, recipe management, and batch processing, we can customize the system or recommend specialized add-ons."
    },
    {
        q: "How does ERPNext handle BOM costing?",
        a: "ERPNext supports multiple BOM costing methods: Material Cost, Operating Cost, and Total Manufacturing Cost. You can set scrap percentages, operation costs, and get auto-calculated BOM costs based on item prices and routing operations."
    },
    {
        q: "Can ERPNext integrate with our existing CNC machines and shop floor equipment?",
        a: "ERPNext can integrate with shop floor equipment via custom APIs and IoT integrations. We can build solutions to capture machine data, track production in real-time, and sync with ERPNext for complete visibility."
    },
    {
        q: "Does NexaFlowTech provide implementation for small-scale manufacturing units?",
        a: "Yes, we work with small, medium, and large manufacturing units. For SMEs, we offer a streamlined implementation with core manufacturing features that can grow as your business scales."
    },
    {
        q: "How long does manufacturing ERP implementation take?",
        a: "A manufacturing ERP implementation typically takes 6-12 weeks. Basic implementations with BOM and work orders take 6-8 weeks. Complex implementations with subcontractor management, quality inspection, and multi-level production take 10-12 weeks."
    }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-primary-midnight text-left">{question}</span>
                <ChevronDown size={20} className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                {answer}
            </div>
        </details>
    );
}

export default function ManufacturingPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/solutions" className="hover:text-white transition-colors">Solutions</Link>
                        <span>/</span>
                        <span className="text-white">Manufacturing ERP</span>
                    </nav>
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary-blue/20 border border-primary-blue/30 text-sm">
                            <Factory size={16} className="text-secondary-teal" />
                            <span className="text-blue-200">Industry Solution</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Manufacturing ERP Software — ERPNext for Industry
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl">
                            End-to-end manufacturing resource planning with BOM management, production scheduling, shop floor control, and real-time inventory tracking. Built for Indian and global manufacturers.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="/contact">
                                <Button className="bg-secondary-teal hover:bg-teal-600 text-white">
                                    Get Manufacturing ERP Demo <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <Link href="/services/erpnext">
                                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                                    View ERPNext Services
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-white border-b border-gray-100 py-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {benefits.map((b) => (
                            <div key={b.label} className="text-center">
                                <div className="text-4xl font-bold text-primary-blue mb-1">{b.value}</div>
                                <div className="text-sm text-gray-500">{b.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">
                                Why Manufacturers Choose ERPNext
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                ERPNext is the ideal ERP choice for manufacturing businesses in India and globally. Built on open-source technology, it offers complete control over your production data with enterprise-grade features at a fraction of the cost of SAP or Oracle.
                            </p>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                NexaFlowTech has implemented ERPNext manufacturing modules for automotive parts, textile, food processing, packaging, and engineering companies. Our implementation goes beyond standard configuration — we customize work flows, create custom reports, and integrate with shop floor equipment for complete digital transformation.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Whether you run a small job shop or a multi-plant manufacturing operation, ERPNext scales to your needs. Multi-level BOMs, production planning, subcontractor management, and quality inspection — all in one integrated system that talks to your accounting, inventory, and CRM in real-time.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">
                                Manufacturing ERP Features
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {manufacturingFeatures.map((feature) => (
                                    <div key={feature.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                            <feature.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary-midnight mb-1">{feature.title}</h3>
                                            <p className="text-sm text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">
                                ERPNext Modules for Manufacturing
                            </h2>
                            <div className="space-y-4">
                                {modules.map((mod) => (
                                    <div key={mod.name} className="flex items-center gap-4 p-4 border border-gray-100 rounded-xl hover:border-primary-blue/30 transition-colors">
                                        <div className="w-2 h-2 rounded-full bg-primary-blue flex-shrink-0"></div>
                                        <div>
                                            <span className="font-semibold text-primary-midnight">{mod.name}</span>
                                            <span className="text-gray-400 mx-2">—</span>
                                            <span className="text-gray-600 text-sm">{mod.desc}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-4">
                                {faqs.map((faq, i) => (
                                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Ready to digitize your factory?</h3>
                            <p className="text-blue-200 text-sm mb-6">Get a free manufacturing ERP consultation with our experts.</p>
                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-sm">
                                    <Check size={16} className="text-secondary-teal flex-shrink-0" />
                                    <span>Free ERP gap analysis</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Check size={16} className="text-secondary-teal flex-shrink-0" />
                                    <span>Custom ERP roadmap</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Check size={16} className="text-secondary-teal flex-shrink-0" />
                                    <span>Budget estimation</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Check size={16} className="text-secondary-teal flex-shrink-0" />
                                    <span>Implementation timeline</span>
                                </div>
                            </div>
                            <Link href="/contact" className="block">
                                <Button className="w-full bg-secondary-teal hover:bg-teal-600 text-white">
                                    Book Free Consultation <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-primary-midnight mb-4">Other Industry Solutions</h3>
                            <div className="space-y-3">
                                <Link href="/solutions/retail" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors">
                                    <ArrowRight size={14} /> Retail ERP
                                </Link>
                                <Link href="/solutions/healthcare" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors">
                                    <ArrowRight size={14} /> Healthcare Software
                                </Link>
                                <Link href="/solutions/logistics" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors">
                                    <ArrowRight size={14} /> Logistics ERP
                                </Link>
                                <Link href="/solutions/education" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors">
                                    <ArrowRight size={14} /> Education ERP
                                </Link>
                                <Link href="/compare/erpnext-vs-sap" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors">
                                    <ArrowRight size={14} /> ERPNext vs SAP
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}