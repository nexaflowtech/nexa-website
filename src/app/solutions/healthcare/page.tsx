import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, Activity, Users, FileText, Shield, Calendar, Bell, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "Healthcare ERP Software | ERPNext for Healthcare | NexaFlowTech",
    description: "ERPNext healthcare management software for hospitals, clinics, and medical practices. Patient records, appointment scheduling, billing, and inventory management in one system.",
    alternates: { canonical: "https://nexaflowtech.com/solutions/healthcare" },
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Healthcare ERP Software",
            "description": "ERPNext healthcare management software for hospitals, clinics, and medical practices with patient records, appointments, and billing.",
            "provider": { "@type": "Organization", "name": "NexaFlowTech", "url": "https://nexaflowtech.com" },
            "areaServed": "Worldwide",
            "serviceType": "Healthcare Software"
        })
    },
};

const features = [
    { icon: Users, title: "Patient Management", desc: "Comprehensive patient profiles, medical history, allergies, and emergency contacts." },
    { icon: Calendar, title: "Appointment Scheduling", desc: "Multi-doctor calendar with online booking, reminders, and waitlist management." },
    { icon: Activity, title: "Clinical Records", desc: "Digital patient records, diagnosis, prescriptions, and treatment plans." },
    { icon: FileText, title: "Lab & Radiology Integration", desc: "Connect with lab systems for seamless reporting and result sharing." },
    { icon: Shield, title: "HIPAA Compliance Ready", desc: "Role-based access, audit logs, and data encryption for patient privacy." },
    { icon: Bell, title: "Patient Communication", desc: "SMS and email reminders, prescription notifications, and follow-up alerts." },
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

export default function HealthcarePage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/solutions" className="hover:text-white">Solutions</Link><span>/</span>
                        <span className="text-white">Healthcare</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Healthcare Management Software — ERPNext for Healthcare</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">Patient records, appointment scheduling, billing, and medical inventory management for hospitals, clinics, and medical practices in India.</p>
                    <Link href="/contact"><Button className="bg-secondary-teal text-white">Get Healthcare ERP Demo <ArrowRight size={18} className="ml-2" /></Button></Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-10">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Healthcare Organizations Choose ERPNext</h2>
                            <p className="text-lg text-gray-600 mb-4">ERPNext provides healthcare organizations with a unified platform to manage patient records, appointments, billing, inventory, and HR — eliminating the need for multiple disconnected systems.</p>
                            <p className="text-lg text-gray-600 mb-4">NexaFlowTech customizes ERPNext for healthcare workflows including patient encounters, clinical notes, prescription management, lab result integration, and insurance billing. We implement HIPAA-equivalent data security with role-based access controls and comprehensive audit trails.</p>
                            <p className="text-lg text-gray-600">From small clinics to multi-specialty hospitals, ERPNext scales to handle your patient volumes while keeping data secure and compliant with Indian healthcare regulations.</p>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-8">Healthcare ERP Features</h2>
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
                                <FAQItem question="Can ERPNext handle multi-specialty hospital management?" answer="Yes, ERPNext can be configured for multi-specialty hospitals with separate departments, doctor schedules, and billing profiles. We customize the system to match your specific specialty workflows and reporting requirements." />
                                <FAQItem question="Does ERPNext support patient appointment online booking?" answer="Yes, we can build a patient portal with online appointment booking integrated with ERPNext. Patients can book slots, view their history, and receive SMS/email reminders. We also integrate with Google Calendar for doctor schedules." />
                                <FAQItem question="Is ERPNext compliant with Indian healthcare data regulations?" answer="ERPNext provides robust security features including role-based access, data encryption, and audit trails. While HIPAA is a US standard, we implement equivalent data protection practices for Indian healthcare organizations, including consent management and data retention policies." />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-bold mb-2">Digitize Your Healthcare Operations</h3>
                            <p className="text-blue-200 text-sm mb-6">Get a free healthcare ERP consultation with NexaFlowTech.</p>
                            <div className="space-y-2 mb-6">
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Patient records management</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Appointment scheduling</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Billing & insurance</div>
                                <div className="flex items-center gap-2 text-sm"><Check size={14} className="text-teal-400" /> Data security</div>
                            </div>
                            <Link href="/contact"><Button className="w-full bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}