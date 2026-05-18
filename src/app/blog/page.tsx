import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Clock, Users, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
    title: "NexaFlowTech Blog | ERPNext, Frappe & Software Development Insights",
    description: "Expert articles on ERPNext implementation, Frappe development, SaaS building, manufacturing ERP, and software development for Indian businesses. Written by NexaFlowTech's ERP consultants.",
    alternates: { canonical: "https://nexaflowtech.com/blog" },
    openGraph: {
        title: "NexaFlowTech Blog | ERPNext & Software Development Insights",
        description: "Expert articles on ERPNext, Frappe, SaaS, and custom software development for Indian businesses.",
        url: "https://nexaflowtech.com/blog",
        type: "website",
    },
};

const categories = [
    { name: "ERPNext How-To", count: 12, desc: "Implementation guides, tutorials, and best practices" },
    { name: "Frappe Development", count: 8, desc: "Custom app development, API tutorials, and tips" },
    { name: "Manufacturing ERP", count: 6, desc: "Industry-specific guides for manufacturers" },
    { name: "SaaS Development", count: 5, desc: "Building scalable SaaS products and platforms" },
    { name: "ERP Comparisons", count: 4, desc: "ERPNext vs Odoo, SAP, Tally and more" },
    { name: "Business Automation", count: 3, desc: "Workflow optimization and digital transformation" },
];

const featuredArticles = [
    {
        title: "How to Implement ERPNext in 30 Days: A Complete Step-by-Step Guide",
        excerpt: "A practical implementation roadmap for small and medium businesses planning to deploy ERPNext within a month. Includes timeline, checklist, and common pitfalls to avoid.",
        category: "ERPNext How-To",
        readTime: "12 min read",
        date: "May 2026",
        slug: "erpnext-implementation-guide",
        featured: true
    },
    {
        title: "ERPNext vs Odoo: Which Open Source ERP is Better for Indian Businesses in 2026?",
        excerpt: "Comprehensive feature comparison covering pricing, GST support, manufacturing modules, customization, and total cost of ownership.",
        category: "ERP Comparisons",
        readTime: "15 min read",
        date: "May 2026",
        slug: "erpnext-vs-odoo",
        featured: true
    },
    {
        title: "ERPNext vs SAP Business One: Complete Comparison for SMEs",
        excerpt: "Compare ERPNext vs SAP Business One: pricing, features, implementation cost, and which is better for Indian SMEs.",
        category: "ERP Comparisons",
        readTime: "12 min read",
        date: "May 2026",
        slug: "erpnext-vs-sap",
        featured: false
    },
    {
        title: "ERPNext vs Tally Prime: Which is Better for Indian Businesses?",
        excerpt: "ERPNext vs Tally comparison for Indian businesses. Migrate from Tally to ERPNext for full ERP capabilities.",
        category: "ERP Comparisons",
        readTime: "10 min read",
        date: "May 2026",
        slug: "erpnext-vs-tally",
        featured: false
    },
    {
        title: "ERPNext Manufacturing Module: Complete Setup Guide for Indian Factories",
        excerpt: "Step-by-step guide to configuring ERPNext for discrete manufacturing — BOM setup, work orders, job cards, and production planning.",
        category: "Manufacturing ERP",
        readTime: "20 min read",
        date: "May 2026",
        slug: "erpnext-manufacturing-setup",
        featured: true
    },
    {
        title: "How to Create Custom DocTypes in Frappe Framework",
        excerpt: "Learn how to create custom DocTypes in Frappe Framework. Step-by-step guide for building custom business applications.",
        category: "Frappe Development",
        readTime: "18 min read",
        date: "May 2026",
        slug: "frappe-custom-doctype",
        featured: false
    },
    {
        title: "ERPNext Data Migration Guide: From Tally, SAP, Excel",
        excerpt: "Complete guide to migrating data from Tally, SAP, QuickBooks, or Excel to ERPNext. Best practices and common pitfalls.",
        category: "ERPNext How-To",
        readTime: "14 min read",
        date: "May 2026",
        slug: "erpnext-data-migration",
        featured: false
    },
];

const quickLinks = [
    { title: "ERPNext Implementation Checklist", desc: "50-point checklist before go-live", icon: FileText },
    { title: "ERPNext vs SAP Comparison", desc: "Enterprise ERP decision guide", icon: TrendingUp },
    { title: "Frappe Framework Tutorial", desc: "Build your first Frappe app", icon: Clock },
    { title: "ERP ROI Calculator", desc: "Calculate your ERP investment returns", icon: Users },
];

export default function BlogPage() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">NexaFlowTech Blog</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Expert insights on ERPNext, Frappe development, SaaS building, and enterprise software. Written by our ERP consultants and developers.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.slice(0, 4).map((cat) => (
                            <span key={cat.name} className="px-4 py-2 bg-white/10 rounded-full text-sm text-blue-200 border border-white/10">
                                {cat.name}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-10">
                        <h2 className="text-2xl font-bold text-primary-midnight">Featured Articles</h2>
                        {featuredArticles.map((article, i) => (
                            <div key={i} className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden ${i === 0 ? 'ring-2 ring-primary-blue/10' : ''}`}>
                                <div className="p-8">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-3 py-1 bg-blue-50 text-primary-blue text-xs font-bold rounded-full">{article.category}</span>
                                        <span className="text-gray-400 text-sm flex items-center gap-1">
                                            <Clock size={12} /> {article.readTime}
                                        </span>
                                        <span className="text-gray-400 text-sm">{article.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary-midnight mb-4 hover:text-primary-blue transition-colors">
                                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">{article.excerpt}</p>
                                    <Link href={`/blog/${article.slug}`} className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:underline">
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        ))}

                        <div className="text-center pt-8">
                            <p className="text-gray-500 mb-4">More articles coming soon. Subscribe to get notified.</p>
                            <Link href="/contact" className="text-primary-blue font-semibold hover:underline">
                                Get notified when we publish new articles →
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-bold text-primary-midnight mb-6">Browse by Topic</h3>
                            <div className="space-y-4">
                                {categories.map((cat) => (
                                    <div key={cat.name} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer">
                                        <div>
                                            <span className="font-medium text-gray-800">{cat.name}</span>
                                            <p className="text-xs text-gray-500 mt-1">{cat.desc}</p>
                                        </div>
                                        <span className="text-xs font-bold text-primary-blue bg-blue-50 px-2 py-1 rounded-full">{cat.count}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-4">Free Resources</h3>
                            <div className="space-y-4">
                                {quickLinks.map((link) => (
                                    <Link key={link.title} href="#" className="flex items-start gap-3 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                                        <link.icon size={20} className="text-secondary-teal flex-shrink-0 mt-0.5" />
                                        <div>
                                            <span className="font-medium text-white">{link.title}</span>
                                            <p className="text-xs text-blue-200 mt-1">{link.desc}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-primary-midnight mb-4">Need Expert Help?</h3>
                            <p className="text-sm text-gray-600 mb-6">Get personalized advice on ERPNext, Frappe, or your software project from our consultants.</p>
                            <Link href="/contact" className="inline-block w-full text-center bg-primary-blue text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                                Book Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}