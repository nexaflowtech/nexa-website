import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Check, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext Company in Delhi NCR | NexaFlowTech",
    description: "Best ERPNext implementation company in Delhi NCR. Certified ERPNext partners serving Delhi, Gurgaon, Noida, and across NCR.",
    alternates: { canonical: "https://nexaflowtech.com/location/erpnext-delhi" },
};

export default function ERPNextDelhi() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span className="text-white">Delhi NCR</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">ERPNext in Delhi NCR</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">Leading ERPNext implementation company serving Delhi, Gurgaon, Noida, and Faridabad.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Why Choose Us in Delhi NCR?</h2>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>On-site Support</strong><p className="text-gray-600">Available for face-to-face meetings in Delhi, Gurgaon, Noida</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Quick Response</strong><p className="text-gray-600">Same-day support for Delhi NCR clients</p></div></li>
                            <li className="flex items-start gap-3"><Check className="text-secondary-teal mt-1" size={20} /><div><strong>Competitive Pricing</strong><p className="text-gray-600">Best ERPNext implementation rates in Delhi NCR</p></div></li>
                        </ul>
                        <p className="text-gray-600 mb-6">We serve all of Delhi NCR including: New Delhi, South Delhi, North Delhi, East Delhi, West Delhi, Gurgaon, Noida, Greater Noida, Faridabad, Ghaziabad.</p>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border">
                        <h3 className="text-xl font-bold text-primary-midnight mb-6">Contact Delhi NCR Team</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3"><MapPin className="text-primary-blue" size={20} /><span>Delhi NCR, India</span></div>
                            <div className="flex items-center gap-3"><Phone className="text-primary-blue" size={20} /><span>+91 83829 06349</span></div>
                            <div className="flex items-center gap-3"><Mail className="text-primary-blue" size={20} /><span>info@nexaflowtech.com</span></div>
                        </div>
                        <Link href="/contact"><button className="w-full mt-6 px-6 py-3 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700">Get Free Consultation</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
}