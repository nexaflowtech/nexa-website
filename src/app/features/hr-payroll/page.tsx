import type { Metadata } from "next";
import Link from "next/link";
import { Users, Check } from "lucide-react";

export const metadata: Metadata = {
    title: "HR & Payroll Software | ERPNext HR Module | NexaFlowTech",
    description: "Complete HR and payroll management with attendance, leave, salary processing, and employee self-service.",
    alternates: { canonical: "https://nexaflowtech.com/features/hr-payroll" },
};

export default function HRPayrollPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className="text-white">HR & Payroll</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">HR & Payroll Management</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">Complete human resource management with attendance, leave, payroll, and employee portal.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">All-in-One HR Solution</h2>
                        <ul className="space-y-4">
                            {["Employee database management", "Attendance tracking", "Leave management", "Salary payroll processing", "Employee self-service portal", "Performance appraisal"].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <Check className="text-secondary-teal" size={20} />
                                    <span className="text-gray-700">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Benefits</h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-gray-50 rounded-lg"><span className="font-bold text-primary-midnight">70%</span><span className="text-gray-600 ml-2">less time on payroll</span></div>
                            <div className="p-4 bg-gray-50 rounded-lg"><span className="font-bold text-primary-midnight">100%</span><span className="text-gray-600 ml-2">accurate salary计算</span></div>
                            <div className="p-4 bg-gray-50 rounded-lg"><span className="font-bold text-primary-midnight">24/7</span><span className="text-gray-600 ml-2">employee self-service</span></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-16 text-center">
                <h2 className="text-3xl font-bold text-primary-midnight mb-4">Setup HR & Payroll</h2>
                <Link href="/contact"><button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl">Get Started</button></Link>
            </section>
        </div>
    );
}