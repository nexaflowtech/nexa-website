import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, ShoppingCart, Package, BarChart3, Store, CreditCard, Users, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Retail ERP Software | ERPNext for Retail Business | NexaFlowTech",
    description: "ERPNext retail ERP with POS, inventory management, e-commerce integration, and multi-store support. India's leading retail ERP partner for omnichannel businesses.",
    alternates: { canonical: "https://nexaflowtech.com/solutions/retail" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Retail ERP Software",
            "description": "ERPNext retail ERP with Point of Sale, inventory management, e-commerce integration, and multi-store support for retail businesses.",
            "provider": { "@type": "Organization", "name": "NexaFlowTech", "url": "https://nexaflowtech.com" },
            "areaServed": "Worldwide",
            "serviceType": "Retail ERP"
        })
    },
};

const features = [
    { icon: Store, title: "Point of Sale (POS)", desc: "Multi-branch POS with barcode scanning, inventory sync, and offline mode." },
    { icon: Package, title: "Inventory Management", desc: "Real-time stock across warehouses, branches, and online stores with automated reordering." },
    { icon: ShoppingCart, title: "E-commerce Integration", desc: "Sync with WooCommerce, Shopify, and Amazon for unified inventory and order management." },
    { icon: CreditCard, title: "POS Payments", desc: "Integrated payment processing for cash, cards, UPI, and digital wallets." },
    { icon: Users, title: "Customer Management", desc: "Loyalty programs, customer profiles, and purchase history tracking." },
    { icon: BarChart3, title: "Retail Analytics", desc: "Sales dashboards, stock reports, and profitability analysis by product and branch." },
];

const benefits = [
    { value: "100%", label: "Inventory Visibility" },
    { value: "50%", label: "Less Stockouts" },
    { value: "30%", label: "Faster Billing" },
    { value: "20%", label: "Cost Reduction" },
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

export default function RetailPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/solutions" className="hover:text-white">Solutions</Link><span>/</span>
                        <span className="text-white">Retail ERP</span>
                    </nav>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Retail ERP Software — ERPNext for Retail Business</h1>
                        <p className="text-xl text-blue-100 mb-8">Omnichannel retail management with POS, inventory, e-commerce sync, and multi-store support. Built for Indian retailers and global retail chains.</p>
                        <Link href="/contact"><Button className="bg-secondary-teal hover:bg-teal-600 text-white">Get Retail ERP Demo <ArrowRight size={18} className="ml-2" /></Button></Link>
                    </div>
                </div>
            </section>

            <div className="bg-white border-b py-10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {benefits.map((b) => (
                            <div key={b.label} className="text-center">
                                <div className="text-4xl font-bold text-primary-blue">{b.value}</div>
                                <div className="text-sm text-gray-500">{b.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Retailers Choose ERPNext</h2>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                ERPNext provides a complete retail management solution for single stores to multi-branch retail chains. The Point of Sale module works offline and syncs with the central ERPNext database, making it ideal for retail environments with intermittent internet connectivity.
                            </p>
                            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                                Manage your entire retail operation from a single dashboard — inventory across warehouses and stores, purchase orders to suppliers, sales orders from online and offline channels, and customer loyalty programs, all connected to your accounting and GST compliance.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                ERPNext integrates seamlessly with popular e-commerce platforms like WooCommerce and Shopify, giving you a unified view of online and offline sales. Real-time inventory sync ensures you never oversell and always know what&apos;s in stock across every channel.
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">Retail ERP Features</h2>
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
                                <FAQItem question="Does ERPNext POS work offline?" answer="Yes, ERPNext POS can work offline for up to 24 hours without internet. Sales are stored locally and automatically synced to the server when connectivity is restored. This is ideal for retail environments with unreliable internet." />
                                <FAQItem question="Can ERPNext integrate with Shopify or WooCommerce?" answer="Yes, ERPNext has built-in integrations with WooCommerce and Shopify for syncing products, inventory, customers, and orders. We can also build custom integrations with other e-commerce platforms via REST API." />
                                <FAQItem question="Does ERPNext support multi-store retail management?" answer="Yes, ERPNext's multi-warehouse and multi-company setup allows you to manage multiple retail stores from a single system. Each store can have its own POS setup, inventory view, and sales reports while sharing the central product catalog." />
                                <FAQItem question="Can ERPNext handle GST for retail businesses?" answer="Yes, ERPNext handles GST comprehensively — from sales invoices with proper tax rates to GSTR-1 and GSTR-3B filing. It supports retail-specific GST scenarios like MRP-based valuation, composition scheme, and interstate sales." />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Transform Your Retail Operations</h3>
                            <p className="text-blue-200 text-sm mb-6">Book a free retail ERP consultation with NexaFlowTech.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Inventory optimization</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Multi-store management</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> E-commerce integration</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> GST compliance</div>
                            </div>
                            <Link href="/contact"><Button className="w-full bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                        </div>
                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold mb-3">Other Solutions</h3>
                            <div className="space-y-2">
                                <Link href="/solutions/manufacturing" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">Manufacturing ERP <ArrowRight size={12} /></Link>
                                <Link href="/solutions/healthcare" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">Healthcare Software <ArrowRight size={12} /></Link>
                                <Link href="/compare/erpnext-vs-odoo" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">ERPNext vs Odoo <ArrowRight size={12} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}