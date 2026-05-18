import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Accounting Software | ERPNext Accounting Module | NexaFlowTech",
    description: "Full-featured accounting software with GST compliance, financial reporting, and automated bookkeeping.",
    alternates: { canonical: "https://nexaflowtech.com/features/accounting-software" },
};

const features = ["GST-compliant invoicing", "Automated bank reconciliation", "Financial statements & reports", "Cost center tracking", "Budget vs actual analysis", "Multi-currency support", "Tax deduction at source", "Payment gateway integration"];

export default function AccountingPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/services">Services</Link>
                        <span>/</span>
                        <span className="text-white">Accounting Software</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Accounting Software</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">Complete accounting with GST compliance, automated bookkeeping, and financial insights.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">GST-Ready Accounting</h2>
                        <p className="text-gray-600 mb-8">ERPNext accounting module handles everything from invoicing to tax filing. Built for Indian businesses with full GST support.</p>
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
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Accounting Features</h3>
                        <div className="grid gap-4">
                            {["Accounts Payable", "Accounts Receivable", "General Ledger", "Trial Balance", "Profit & Loss Statement", "Balance Sheet"].map((item, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                    <DollarSign className="text-primary-blue" size={20} />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary-midnight mb-4">Switch to ERPNext Accounting</h2>
                    <p className="text-gray-600 mb-8">Migrate from Tally, QuickBooks, or other software to ERPNext.</p>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">Get Quote</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}