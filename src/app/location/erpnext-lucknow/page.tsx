import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Check, Phone, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext Company in Lucknow, UP | NexaFlowTech",
    description: "Best ERPNext implementation company in Lucknow, Uttar Pradesh. Certified ERPNext partners serving Lucknow and across UP.",
    alternates: { canonical: "https://nexaflowtech.com/location/erpnext-lucknow" },
};

const services = ["ERPNext Implementation", "ERPNext Customization", "Frappe Development", "Data Migration", "ERPNext Support", "Cloud Hosting"];

export default function ERPNextLucknow() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className="text-white">Lucknow</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">ERPNext in Lucknow</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Leading ERPNext implementation company based in Lucknow, serving businesses across Uttar Pradesh and India.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Choose NexaFlowTech in Lucknow?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Local Presence</strong><p className="text-gray-600">Based in Lucknow with on-site support available</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>5+ Years Experience</strong><p className="text-gray-600">Delivered 50+ ERP projects across India</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Certified Team</strong><p className="text-gray-600">ERPNext certified implementers and developers</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Affordable Pricing</strong><p className="text-gray-600">Flexible pricing for small and medium businesses</p></div></li>
                        </ul>

                        <h3 className="text-xl font-bold text-primary-midnight mb-4">Services in Lucknow</h3>
                        <div className="flex flex-wrap gap-2">
                            {services.map((service, i) => (
                                <span key={i} className="px-4 py-2 bg-gray-100 rounded-full text-sm">{service}</span>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Contact Us in Lucknow</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <MapPin className="text-primary-blue" size={20} />
                                <span>545 KA NK, Gayatri Vihar Phase 2, Lucknow, UP 226011</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-primary-blue" size={20} />
                                <span>+91 83829 06349</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-primary-blue" size={20} />
                                <span>info@nexaflowtech.com</span>
                            </div>
                        </div>
                        <Link href="/contact">
                            <button className="w-full mt-6 px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">Get Free Consultation</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary-midnight mb-4">Serving All of Uttar Pradesh</h2>
                    <p className="text-gray-600 mb-8">Agra, Kanpur, Varanasi, Allahabad, Meerut, Aligarh, Bareilly, Moradabad, Gorakhpur, Jhansi</p>
                    <Link href="/contact">
                        <button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">Contact Us</button>
                    </Link>
                </div>
            </section>
        </div>
    );
}