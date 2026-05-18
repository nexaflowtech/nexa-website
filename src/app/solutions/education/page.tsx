import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, Users, BookOpen, Calendar, CreditCard, GraduationCap, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Education ERP Software | ERPNext for Schools & Colleges | NexaFlowTech",
    description: "Education ERP software for schools, colleges, and coaching centers. Student information system, fee management, attendance tracking, and online learning integration.",
    alternates: { canonical: "https://nexaflowtech.com/solutions/education" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Education ERP Software",
            "description": "ERPNext education ERP for schools, colleges, and coaching centers with student information, fee management, and attendance tracking.",
            "provider": { "@type": "Organization", "name": "NexaFlowTech", "url": "https://nexaflowtech.com" },
            "areaServed": "India",
            "serviceType": "Education ERP"
        })
    },
};

const features = [
    { icon: Users, title: "Student Management", desc: "Complete student profiles, admission tracking, and academic records management." },
    { icon: BookOpen, title: "Course Management", desc: "Curriculum planning, subject assignments, and batch scheduling." },
    { icon: Calendar, title: "Attendance Tracking", desc: "Digital attendance with SMS alerts to parents for absences." },
    { icon: CreditCard, title: "Fee Management", desc: "Automated fee collection, reminders, and expense tracking." },
    { icon: GraduationCap, title: "Examination System", desc: "Online exams, grade management, and report card generation." },
    { icon: BookOpen, title: "Learning Management", desc: "LMS integration for online classes, assignments, and materials." },
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

export default function EducationPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/solutions" className="hover:text-white">Solutions</Link><span>/</span>
                        <span className="text-white">Education ERP</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Education ERP Software — ERPNext for Schools & Colleges</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">Complete student information system with admissions, fee management, attendance, examinations, and online learning for educational institutions in India.</p>
                    <Link href="/contact"><Button className="bg-secondary-teal text-white">Get Education ERP Demo <ArrowRight size={18} className="ml-2" /></Button></Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Educational Institutions Choose ERPNext</h2>
                            <p className="text-lg text-gray-600 mb-4">ERPNext provides a comprehensive education management solution for schools, colleges, universities, and coaching centers. From student admissions to alumni management, ERPNext covers the complete academic lifecycle.</p>
                            <p className="text-lg text-gray-600 mb-4">NexaFlowTech implements ERPNext education modules forCBSE, ICSE, and state board schools as well as higher education institutions. We customize the system for admission workflows, fee structures, examination patterns, and reporting requirements specific to Indian educational institutions.</p>
                            <p className="text-lg text-gray-600">Our education ERP includes parent portals for real-time updates on attendance and academic progress, reducing administrative overhead while improving parent engagement.</p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">Education ERP Features</h2>
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
                                <FAQItem question="Can ERPNext handle multiple branches of a school?" answer="Yes, ERPNext's multi-company and multi-warehouse setup allows you to manage multiple school branches from a single system. Each branch can have its own students, staff, and fee structures while sharing the central curriculum and product catalog." />
                                <FAQItem question="Does ERPNext support CBSE and ICSE board requirements?" answer="Yes, we configure ERPNext for CBSE and ICSE requirements including specific grading systems, subject configurations, and report card templates. We also handle state board requirements for various Indian state education boards." />
                                <FAQItem question="Can parents access student progress online?" answer="Yes, we implement parent portals integrated with ERPNext where parents can view attendance records, examination results, fee payment history, and school announcements. We also configure SMS notifications for important updates." />
                                <FAQItem question="How does fee management work in ERPNext?" answer="ERPNext provides comprehensive fee management with configurable fee structures, automatic reminders, online payment integration, and expense tracking. You can set different fees for different programs, generate fee receipts, and track pending payments with aging reports." />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Digitize Your Institution</h3>
                            <p className="text-blue-200 text-sm mb-6">Get a free education ERP consultation with NexaFlowTech.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Student information system</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Fee management & online payments</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Attendance tracking</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Parent portal</div>
                            </div>
                            <Link href="/contact"><Button className="w-full bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                        </div>

                        <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                            <h3 className="font-bold mb-3">Other Solutions</h3>
                            <div className="space-y-2">
                                <Link href="/solutions/manufacturing" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">Manufacturing ERP <ArrowRight size={12} /></Link>
                                <Link href="/solutions/retail" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">Retail ERP <ArrowRight size={12} /></Link>
                                <Link href="/solutions/healthcare" className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue">Healthcare Software <ArrowRight size={12} /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}