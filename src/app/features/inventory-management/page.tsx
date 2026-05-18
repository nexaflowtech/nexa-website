import type { Metadata } from "next";
import Link from "next/link";
import { Package, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Inventory Management Software | ERPNext Inventory Module | NexaFlowTech",
    description: "Complete inventory management with ERPNext. Track stock across warehouses, manage batch/serial numbers, FIFO/LIFO, and real-time inventory reports.",
    alternates: { canonical: "https://nexaflowtech.com/features/inventory-management" },
};

const features = [
    "Multi-warehouse management",
    "Batch and serial number tracking",
    "FIFO and LIFO inventory valuation",
    "Stock reconciliation",
    "Reorder level alerts",
    "Inventory reports and analytics",
    "Barcode scanning integration",
    "Inter-warehouse transfers"
];

export default function InventoryManagementPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/services">Services</Link>
                        <span>/</span>
                        <span className="text-white">Inventory Management</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Inventory Management Software</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Powerful inventory tracking with real-time stock updates, batch tracking, and multi-warehouse support.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Complete Inventory Control</h2>
                        <p className="text-gray-600 mb-8">
                            ERPNext inventory module provides end-to-end inventory management. Track stock across multiple warehouses, manage batches and serial numbers, and get real-time visibility into your inventory.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="text-secondary-teal" size={20} />
                                    <span className="text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Who Needs This?</h3>
                        <div className="space-y-4">
                            {["Manufacturing companies", "Wholesale distributors", "Retail businesses", "E-commerce companies", "Export/Import businesses"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <Package className="text-primary-blue" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary-midnight mb-4">Get Inventory Management Setup</h2>
                    <p className="text-gray-600 mb-8">Our team can configure ERPNext inventory for your business.</p>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                            Book Free Demo
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}