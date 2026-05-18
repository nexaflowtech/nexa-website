import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, Truck, Package, MapPin, BarChart3, Globe, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Logistics ERP Software | ERPNext for Logistics & Supply Chain | NexaFlowTech",
    description: "ERPNext logistics and supply chain management with fleet tracking, warehouse management, shipment tracking, and inventory control. India's trusted logistics ERP partner.",
    alternates: { canonical: "https://nexaflowtech.com/solutions/logistics" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Logistics ERP Software",
            "description": "ERPNext logistics and supply chain management with fleet tracking, warehouse management, shipment tracking, and inventory control.",
            "provider": { "@type": "Organization", "name": "NexaFlowTech", "url": "https://nexaflowtech.com" },
            "areaServed": "Worldwide",
            "serviceType": "Logistics ERP"
        })
    },
};

const features = [
    { icon: Package, title: "Warehouse Management", desc: "Bin-wise inventory, putaway rules, pick-pack-ship workflows, and warehouse transfers." },
    { icon: Truck, title: "Fleet Management", desc: "Vehicle tracking, driver assignments, maintenance schedules, and fuel cost tracking." },
    { icon: MapPin, title: "Shipment Tracking", desc: "Real-time shipment status, delivery confirmations, and customer notifications." },
    { icon: Globe, title: "Multi-branch Logistics", desc: "Manage multiple warehouses, depots, and regional offices from one platform." },
    { icon: BarChart3, title: "Supply Chain Analytics", desc: "Delivery performance, fleet utilization, and cost analysis dashboards." },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50">
                <span className="font-semibold text-primary-midnight">{question}</span>
                <ChevronDown size={20} className="text-gray-400 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 border-t">{answer}</div>
        </details>
    );
}

export default function LogisticsPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/solutions" className="hover:text-white">Solutions</Link><span>/</span>
                        <span className="text-white">Logistics</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Logistics & Supply Chain ERP — ERPNext for Logistics</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">Warehouse management, fleet tracking, shipment tracking, and supply chain analytics for logistics companies and 3PL providers in India and globally.</p>
                    <Link href="/contact"><Button className="bg-secondary-teal text-white">Get Logistics ERP Demo <ArrowRight size={18} className="ml-2" /></Button></Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Logistics Companies Choose ERPNext</h2>
                            <p className="text-lg text-gray-600 mb-4">ERPNext provides logistics companies with end-to-end visibility from procurement to last-mile delivery. The warehouse management system (WMS) handles bin-wise inventory, pick-pack-ship workflows, and cross-docking operations efficiently.</p>
                            <p className="text-lg text-gray-600 mb-4">NexaFlowTech implements ERPNext for 3PL providers, freight forwarders, and distribution companies. We customize the system for industry-specific workflows including vehicle management, route optimization tracking, and e-way bill integration for Indian logistics compliance.</p>
                            <p className="text-lg text-gray-600">Track shipments in real-time, manage fleet maintenance schedules, analyze delivery performance, and optimize supply chain costs — all from a single integrated platform.</p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">Logistics ERP Features</h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {features.map((f) => (
                                    <div key={f.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                        <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                            <f.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-primary-midnight mb-1">{f.title}</h3>
                                            <p className="text-sm text-gray-600">{f.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                <FAQItem question="Can ERPNext handle 3PL (third-party logistics) operations?" answer="Yes, ERPNext's warehouse management and stock management modules are well-suited for 3PL operations. We can configure customer-specific inventory views, billing based on storage and handling, and multi-customer reporting from a single ERPNext instance." />
                                <FAQItem question="Does ERPNext support e-way bill generation for Indian logistics?" answer="Yes, ERPNext integrates with the Indian government's e-way bill system for GST-compliant transportation of goods. We configure e-way bill generation directly from delivery notes and handle the e-way bill portal integration for seamless compliance." />
                                <FAQItem question="Can ERPNext track delivery vehicles and driver assignments?" answer="ERPNext has basic vehicle and driver management features. We can extend this with custom integrations to GPS tracking systems, driver mobile apps, and real-time delivery tracking for complete fleet management visibility." />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Optimize Your Supply Chain</h3>
                            <p className="text-blue-200 text-sm mb-6">Get a free logistics ERP consultation with NexaFlowTech.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Warehouse management</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Fleet tracking</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> E-way bill integration</div>
                            </div>
                            <Link href="/contact"><Button className="w-full bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}