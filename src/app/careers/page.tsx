import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, Users, Code, Layers, Database } from "lucide-react";

export const metadata: Metadata = {
    title: "Careers | Join NexaFlowTech - ERPNext & Software Development",
    description: "Join NexaFlowTech — a leading ERPNext implementation company in Lucknow, India. We're hiring ERPNext developers, Frappe developers, and software consultants. Apply now!",
    alternates: { canonical: "https://nexaflowtech.com/careers" },
};

const benefits = [
    "Remote-first work culture",
    "Flexible working hours",
    "Competitive salary packages",
    "Health insurance coverage",
    "Learning & development budget",
    "Annual team outings",
    "Work with global clients",
    "Certificate training programs",
];

const culturePoints = [
    { icon: Code, title: "Build Real Products", desc: "Work on actual ERP implementations, SaaS platforms, and business software that clients use every day." },
    { icon: Users, title: "Collaborative Team", desc: "Small team with big impact. Every voice matters and every contribution is visible." },
    { icon: Layers, title: "Grow Fast", desc: "Rapid career progression for performers. Get real responsibility early in your career." },
    { icon: Database, title: "Learn Latest Tech", desc: "Work with ERPNext, Frappe, Next.js, React Native, and modern cloud infrastructure." },
];

export default function CareersPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <span className="inline-block px-4 py-1 bg-secondary-teal/20 text-secondary-teal text-sm font-bold rounded-full mb-6">We're Growing!</span>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Join NexaFlowTech</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                        Build your career at Lucknow's leading ERPNext and software development company. Work with global clients on challenging projects.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-secondary-teal text-white">Get in Touch <ArrowRight size={18} className="ml-2" /></Button>
                    </Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-8">Why Work With Us?</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {culturePoints.map((point) => (
                                <div key={point.title} className="flex gap-4 p-5 bg-gray-50 rounded-xl">
                                    <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center flex-shrink-0">
                                        <point.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary-midnight mb-1">{point.title}</h3>
                                        <p className="text-sm text-gray-600">{point.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4">Don't See Your Role?</h3>
                        <p className="text-blue-200 text-sm mb-6">Send us your resume anyway. We're always looking for talented people.</p>
                        <div className="space-y-2 mb-6">
                            <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Startup-like work culture</div>
                            <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Performance bonuses</div>
                            <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Certificate training</div>
                            <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Remote work options</div>
                        </div>
                        <Link href="/contact">
                            <Button className="w-full bg-secondary-teal text-white">Send Your Resume</Button>
                        </Link>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Employee Benefits</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            {benefits.map((benefit) => (
                                <div key={benefit} className="flex items-center gap-3">
                                    <Check size={16} className="text-secondary-teal flex-shrink-0" />
                                    <span className="text-gray-700 text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}