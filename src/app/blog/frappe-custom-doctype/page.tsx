import type { Metadata } from "next";
import Link from "next/link";
import { Check, Clock, Code } from "lucide-react";

export const metadata: Metadata = {
    title: "Frappe Custom DocType Guide: Build Custom Apps | NexaFlowTech",
    description: "Learn how to create custom DocTypes in Frappe Framework. Step-by-step guide for building custom business applications.",
    alternates: { canonical: "https://nexaflowtech.com/blog/frappe-custom-doctype" },
};

export default function FrappeCustomDoctype() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-16">
            <article className="bg-primary-midnight text-white py-16">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="text-white">Frappe Custom DocType</span>
                    </nav>
                    <div className="max-w-3xl">
                        <span className="inline-block px-3 py-1 bg-indigo-500/20 text-indigo-200 text-sm font-medium rounded-full mb-4">Frappe Tutorial</span>
                        <h1 className="text-3xl md:text-5xl font-bold mb-6">How to Create Custom DocTypes in Frappe Framework</h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1"><Clock size={14} /> 18 min read</span>
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
                                DocTypes are the building blocks of any Frappe application. Whether you're customizing ERPNext or building a custom SaaS app, understanding DocTypes is essential.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">What is a DocType?</h2>
                            <p className="text-gray-600 mb-6">
                                A DocType in Frappe is like a database table with a UI. It defines the structure of your data - fields, permissions, and behavior. Examples include: Customer, Sales Order, Employee, Leave Application.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 1: Create New DocType</h2>
                            <div className="bg-gray-900 text-gray-100 p-6 rounded-xl mb-6 overflow-x-auto">
                                <code className="text-sm">bench new-doctype --module [module_name] [docname]</code>
                            </div>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 2: Define Fields</h2>
                            <p className="text-gray-600 mb-6">
                                Add fields like Data, Link, Select, Date, Currency, Table, etc. Each field has properties for validation, mandatory, and default values.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Step 3: Configure Permissions</h2>
                            <p className="text-gray-600 mb-6">
                                Set role-based permissions to control who can read, write, delete, or submit documents.
                            </p>

                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Need Custom Development?</h2>
                            <p className="text-gray-600 mb-6">
                                Our Frappe developers can build custom DocTypes and applications tailored to your business needs.
                            </p>
                            <Link href="/contact">
                                <button className="px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                                    Talk to Frappe Developer
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border">
                            <h3 className="font-bold text-primary-midnight mb-4">Frappe Services</h3>
                            <div className="space-y-3">
                                <Link href="/services/frappe" className="block text-sm text-gray-600 hover:text-primary-blue">Custom Frappe App Development</Link>
                                <Link href="/services/erpnext" className="block text-sm text-gray-600 hover:text-primary-blue">ERPNext Customization</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}