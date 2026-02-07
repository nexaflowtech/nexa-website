import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function ERPSolutions() {
    return (
        <section className="py-24 bg-neutral-bg">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-secondary-teal bg-teal-50 rounded-full">
                            Powered by ERPNext & Frappe
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-primary-midnight mb-6 leading-tight">
                            Unified Business Management for the Modern Enterprise
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Stop juggling multiple disconnected tools. Experience the power of a single, integrated platform that grows with you. From accounting to HR, we automate it all.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {[
                                "Financial Accounting",
                                "HR & Payroll",
                                "CRM & Sales",
                                "Inventory Management",
                                "Project Management",
                                "Help Desk"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-primary-blue w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Link href="/services/erpnext">
                            <Button size="lg" className="w-full sm:w-auto">
                                Explore ERP Solutions
                                <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </Link>
                    </div>

                    <div className="flex-1 relative w-full">
                        <div className="aspect-square relative rounded-2xl overflow-hidden shadow-2xl border border-white/50 bg-white/50 backdrop-blur-sm p-4">
                            {/* Placeholder for now, can use hero or generate new specific one later if needed, using generic illustration for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
                            <Image
                                src="/images/illustration-erp.svg"
                                alt="ERPNext Unified Dashboard"
                                fill
                                className="object-contain p-8"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-teal-100/50 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
