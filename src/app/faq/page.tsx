import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Minus } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ | NexaFlowTech - ERPNext & Software Development Questions",
    description: "Frequently asked questions about ERPNext implementation, Frappe development, pricing, and custom software services.",
    alternates: { canonical: "https://nexaflowtech.com/faq" },
};

const faqs = [
    {
        category: "ERPNext Implementation",
        questions: [
            { q: "How long does ERPNext implementation take?", a: "Typical implementation takes 2-8 weeks depending on complexity. A basic setup with standard modules can be done in 2-3 weeks. Manufacturing or custom implementations may take 6-8 weeks." },
            { q: "What is the cost of ERPNext implementation?", a: "ERPNext implementation costs vary from ₹50,000 to ₹10+ Lakhs depending on modules, customization, and data migration. We offer fixed-price packages starting at ₹75,000 for small businesses." },
            { q: "Can you migrate data from Tally to ERPNext?", a: "Yes! We specialize in Tally to ERPNext data migration. We've migrated 30+ companies from Tally with zero data loss." },
            { q: "Do you provide ERPNext training?", a: "Yes, we provide comprehensive training for all users including admin, managers, and end-users. Training can be done onsite or via video calls." },
            { q: "Do you offer ERPNext support after implementation?", a: "Yes, we offer annual support contracts starting at ₹12,000/year covering bug fixes, updates, and priority support." }
        ]
    },
    {
        category: "Frappe Development",
        questions: [
            { q: "What is Frappe Framework?", a: "Frappe is a full-stack web framework built on Python. It's the same framework ERPNext is built on. It allows rapid development of custom business applications." },
            { q: "Can you build custom apps on Frappe?", a: "Yes, we build custom Frappe applications tailored to specific business needs. We've built 20+ custom apps for various industries." },
            { q: "How long does it take to build a custom Frappe app?", a: "Development time depends on complexity. A basic app takes 2-4 weeks. Complex enterprise apps may take 3-6 months." }
        ]
    },
    {
        category: "Custom Software",
        questions: [
            { q: "What technologies do you use?", a: "We specialize in Next.js, React, Node.js, Python (Django/Frappe), and mobile apps using React Native. For ERP projects, we primarily use ERPNext/Frappe." },
            { q: "Do you provide SaaS development?", a: "Yes, we build multi-tenant SaaS platforms with features like subscription management, usage tracking, and role-based access." },
            { q: "How much does custom software cost?", a: "Custom software costs range from ₹2 Lakhs to ₹50+ Lakhs depending on complexity, features, and development time. We provide detailed quotes after understanding requirements." }
        ]
    },
    {
        category: "Pricing & Payment",
        questions: [
            { q: "What are your payment terms?", a: "We typically work with 50% advance and 50% on delivery. For larger projects, we use milestone-based payments." },
            { q: "Do you offer monthly retainer?", a: "Yes, we offer monthly retainer plans starting at ₹25,000/month for ongoing support and development." },
            { q: "Are there any hidden costs?", a: "No, we provide detailed proposals with clear cost breakdowns. Any additional work outside scope is discussed and approved before implementation." }
        ]
    },
    {
        category: "Support & Maintenance",
        questions: [
            { q: "What support do you offer?", a: "We offer email support, phone support, and remote desktop assistance. Priority support is available for retainer clients." },
            { q: "How do you handle bug fixes?", a: "Critical bugs are addressed within 24 hours. Minor bugs are fixed in the next release cycle. All issues are tracked and resolved systematically." },
            { q: "Can I get emergency support?", a: "Yes, we provide 24/7 emergency support for critical issues. Emergency support is available at additional charges." }
        ]
    }
];

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Find answers to common questions about ERPNext, Frappe development, and our services.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="space-y-12">
                    {faqs.map((category, i) => (
                        <div key={i}>
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">{category.category}</h2>
                            <div className="space-y-4">
                                {category.questions.map((item, j) => (
                                    <details key={j} className="group bg-white rounded-xl border p-6 cursor-pointer">
                                        <summary className="flex items-center justify-between font-semibold text-primary-midnight">
                                            {item.q}
                                            <Plus className="group-open:hidden text-gray-400" size={20} />
                                            <Minus className="hidden group-open:block text-primary-blue" size={20} />
                                        </summary>
                                        <p className="mt-4 text-gray-600 group-open:animate-fade-in">{item.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary-midnight mb-4">Still Have Questions?</h2>
                    <p className="text-gray-600 mb-8">Contact us for personalized answers to your specific questions.</p>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}