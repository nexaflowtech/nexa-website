import { Target, Eye, Heart, Zap } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About Us - NexaFlowTech",
    description: "Learn about our mission to empower businesses with smart ERP and web solutions.",
};

export default function AboutPage() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            {/* Header */}
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">About NexaFlowTech</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Bridging the gap between startup agility and enterprise stability.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold text-primary-midnight mb-6">Company Overview</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                NexaFlowTech is a premier digital transformation agency specializing in ERPNext implementation, custom Frappe development, and high-performance web solutions. We help businesses streamline operations, automate workflows, and scale efficiently.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Founded on the principle that technology should be an enabler, not a bottleneck, we bring together a team of seasoned developers, architects, and business analysts dedicated to your success.
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src="/images/illustration-about.svg"
                                alt="NexaFlowTech Team Collaboration"
                                width={800}
                                height={500}
                                className="rounded-2xl shadow-xl w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-neutral-bg">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mb-6">
                                <Target size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                To democratize access to enterprise-grade technology for businesses of all sizes, enabling them to operate smarter and grow faster.
                            </p>
                        </div>
                        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                            <div className="w-16 h-16 bg-teal-100 text-secondary-teal rounded-full flex items-center justify-center mb-6">
                                <Eye size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                To be the global partner of choice for digital infrastructure, known for innovation, reliability, and transformative impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Our Values</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Heart size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Customer First</h4>
                            <p className="text-gray-600">Your success is our success. We prioritize your needs in every decision.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Zap size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Agility</h4>
                            <p className="text-gray-600">We move fast, adapt quickly, and deliver value iteratively.</p>
                        </div>
                        <div className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Target size={24} />
                            </div>
                            <h4 className="text-xl font-bold mb-2">Excellence</h4>
                            <p className="text-gray-600">We hold ourselves to the highest standards of code quality and design.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
