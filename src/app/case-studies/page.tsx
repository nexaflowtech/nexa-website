import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingDown, TrendingUp, Clock, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "Case Studies | NexaFlowTech - ERP Implementation Success Stories",
    description: "See how we've helped manufacturing, retail, and healthcare companies transform with ERPNext. Real results, real ROI.",
    alternates: { canonical: "https://nexaflowtech.com/case-studies" },
};

const caseStudies = [
    {
        client: "Precision Engineers",
        industry: "Manufacturing",
        location: "Lucknow, UP",
        challenge: "Manual inventory tracking with Excel, 40% stock discrepancies, 3 weeks for monthly reports",
        solution: "ERPNext with manufacturing module, custom BOM workflow, real-time inventory",
        results: [
            { metric: "40%", label: "Reduction in manual data entry", icon: TrendingDown },
            { metric: "₹12L", label: "Annual savings in inventory costs", icon: TrendingUp },
            { metric: "85%", label: "Faster reporting time", icon: Clock },
        ],
        quote: "NexaFlowTech transformed our operations. We now have real-time visibility into our entire manufacturing process.",
        person: "Rajesh Agarwal, Director",
        link: "/case-studies/precision-engineers"
    },
    {
        client: "HealthPlus Hospitals",
        industry: "Healthcare",
        location: "Lucknow, UP",
        challenge: "Paper-based patient records, billing errors, no inventory control for medicines",
        solution: "ERPNext Healthcare module with patient records, billing, and inventory management",
        results: [
            { metric: "60%", label: "Reduction in billing errors", icon: TrendingDown },
            { metric: "30%", label: "Faster patient check-in", icon: Clock },
            { metric: "25%", label: "Cost reduction in inventory", icon: TrendingUp },
        ],
        quote: "Our staff now manages patient records digitally. The transformation has been remarkable.",
        person: "Dr. Ankit Mehrotra, Administrator",
        link: "/case-studies/healthplus"
    },
    {
        client: "Fashion Hub India",
        industry: "Retail",
        location: "Delhi NCR",
        challenge: "Multiple store inventory sync issues, manual GST filing, poor sales insights",
        solution: "ERPNext with POS, multi-warehouse, and integrated GST compliance",
        results: [
            { metric: "50%", label: "Faster inventory sync across stores", icon: Clock },
            { metric: "₹8L", label: "Annual GST savings", icon: TrendingUp },
            { metric: "35%", label: "Increase in repeat customers", icon: TrendingUp },
        ],
        quote: "Managing 5 stores from one system is seamless. GST filing is now automated.",
        person: "Sonia Gupta, Owner",
        link: "/case-studies/fashion-hub"
    },
    {
        client: "TechLogistics Pvt Ltd",
        industry: "Logistics",
        location: "Mumbai, Maharashtra",
        challenge: "No visibility into fleet, driver allocation issues, fuel expense tracking problems",
        solution: "ERPNext with vehicle management, driver allocation, and expense tracking",
        results: [
            { metric: "45%", label: "Reduction in fuel costs", icon: TrendingDown },
            { metric: "20%", label: "More deliveries per day", icon: TrendingUp },
            { metric: "100%", label: "Fleet visibility", icon: Award },
        ],
        quote: "We now track every vehicle in real-time. Fuel costs have dropped significantly.",
        person: "Vikram Shah, Operations Head",
        link: "/case-studies/techlogistics"
    },
    {
        client: "EduWorld Schools",
        industry: "Education",
        location: "Bangalore, Karnataka",
        challenge: "Manual fee collection, no student records database, inefficient attendance tracking",
        solution: "ERPNext Education module with student portal, fee management, and attendance",
        results: [
            { metric: "90%", label: "Fee collection efficiency", icon: TrendingUp },
            { metric: "100%", label: "Digital student records", icon: Award },
            { metric: "50%", label: "Reduced administrative work", icon: TrendingDown },
        ],
        quote: "Parents love the student portal. Fee collection has never been easier.",
        person: "Principal Sharma, Management",
        link: "/case-studies/eduworld"
    },
    {
        client: "AutoParts Wholesale",
        industry: "Manufacturing",
        location: "Pune, Maharashtra",
        challenge: "Complex BOM with 500+ parts, slow production planning, inventory mismatches",
        solution: "ERPNext with multi-level BOM, production planning, and barcode scanning",
        results: [
            { metric: "70%", label: "Faster production planning", icon: Clock },
            { metric: "95%", label: "Inventory accuracy", icon: Award },
            { metric: "₹18L", label: "Annual cost savings", icon: TrendingUp },
        ],
        quote: "The BOM management is incredible. We've reduced production time by a week.",
        person: "Manoj Desai, Production Manager",
        link: "/case-studies/autoparts"
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Real results from 50+ ERPNext implementations across manufacturing, retail, healthcare, and more.
                    </p>
                    <div className="flex gap-8 mt-8 text-sm">
                        <div><span className="text-3xl font-bold text-secondary-teal">50+</span><span className="ml-2">Projects Delivered</span></div>
                        <div><span className="text-3xl font-bold text-secondary-teal">30+</span><span className="ml-2">Clients Served</span></div>
                        <div><span className="text-3xl font-bold text-secondary-teal">5+</span><span className="ml-2">Years Experience</span></div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="space-y-12">
                    {caseStudies.map((study, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                            <div className="grid lg:grid-cols-3">
                                <div className="p-8 bg-gray-50">
                                    <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-sm font-medium rounded-full mb-4">{study.industry}</span>
                                    <h3 className="text-2xl font-bold text-primary-midnight mb-2">{study.client}</h3>
                                    <p className="text-gray-500">{study.location}</p>
                                    <div className="mt-6 pt-6 border-t border-gray-200">
                                        <p className="text-sm text-gray-500 mb-1">Challenge</p>
                                        <p className="text-gray-700">{study.challenge}</p>
                                    </div>
                                    <div className="mt-4">
                                        <p className="text-sm text-gray-500 mb-1">Solution</p>
                                        <p className="text-gray-700">{study.solution}</p>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 p-8">
                                    <h4 className="text-lg font-bold text-primary-midnight mb-6">Results</h4>
                                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                                        {study.results.map((result, j) => (
                                            <div key={j} className="text-center p-4 bg-gray-50 rounded-xl">
                                                <result.icon className="mx-auto mb-2 text-secondary-teal" size={24} />
                                                <p className="text-2xl font-bold text-primary-midnight">{result.metric}</p>
                                                <p className="text-sm text-gray-600">{result.label}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-xl">
                                        <p className="text-gray-700 italic">"{study.quote}"</p>
                                        <p className="text-sm text-primary-blue mt-2">— {study.person}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-gradient-to-br from-primary-midnight to-[#1e293b] text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                        Get a free consultation and see how ERPNext can improve your operations.
                    </p>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-secondary-teal text-white font-semibold rounded-xl hover:bg-teal-600 transition-colors">
                            Book Free Consultation
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}