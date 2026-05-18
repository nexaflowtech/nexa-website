import type { Metadata } from "next";
import Link from "next/link";
import { Globe, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext for UAE Businesses | NexaFlowTech",
    description: "ERPNext implementation for UAE companies. VAT-compliant ERP solutions serving Dubai, Abu Dhabi, and across UAE.",
    alternates: { canonical: "https://nexaflowtech.com/global/erpnext-uae" },
};

export default function ERPNextUAE() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className="text-white">UAE</span>
                    </nav>
                    <div className="flex items-center gap-4 mb-4">
                        <Globe className="text-secondary-teal" size={32} />
                        <span className="text-secondary-teal font-semibold">Global Presence</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">ERPNext for UAE Businesses</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">VAT-compliant ERPNext implementation serving Dubai, Abu Dhabi, Sharjah, and across the UAE.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why ERPNext for UAE?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>VAT Compliance</strong><p className="text-gray-600">Full VAT 5% support with VAT returns and e-invoicing</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Multi-Currency</strong><p className="text-gray-600">AED, USD, EUR, GBP with real-time exchange rates</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Localization</strong><p className="text-gray-600">Arabic language support and UAE-specific features</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Cloud Hosting</strong><p className="text-gray-600">Servers in UAE for data residency compliance</p></div></li>
                        </ul>

                        <h3 className="text-xl font-bold text-primary-midnight mb-4">Industries We Serve in UAE</h3>
                        <div className="flex flex-wrap gap-2">
                            {["Manufacturing", "Retail", "Trading", "Construction", "Logistics", "Healthcare"].map((item, i) => (
                                <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm">{item}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Contact UAE Team</h3>
                        <p className="text-gray-600 mb-6">We serve clients across UAE including Dubai, Abu Dhabi, Sharjah, and Ajman.</p>
                        <Link href="/contact" className="block">
                            <button className="w-full px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                Get UAE ERP Quote
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}