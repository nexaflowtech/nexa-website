import { Factory, ShoppingBag, Stethoscope, GraduationCap, Truck, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata = {
    title: "Enterprise Software & ERP Solutions by Industry | NexaFlowTech",
    description: "Industry-specific software solutions for manufacturing, retail, healthcare, education, and logistics. NexaFlowTech delivers custom ERPNext and SaaS platforms tailored to your business needs.",
    alternates: {
        canonical: "https://nexaflowtech.com/solutions",
    },
    openGraph: {
        title: "Industry Software Solutions | ERP, SaaS & Automation | NexaFlowTech",
        description: "Custom software solutions for manufacturing, retail, healthcare, and startups. Scale your business with NexaFlowTech's enterprise expertise.",
        url: "https://nexaflowtech.com/solutions",
        type: "website",
    },
};

const solutions = [
    {
        icon: Factory,
        title: "Manufacturing",
        description: "Streamline production, manage inventory, and optimize supply chains with custom ERPNext modules.",
        points: ["Production Planning", "BOM Management", "Shop Floor Control"]
    },
    {
        icon: ShoppingBag,
        title: "Retail",
        description: "Unified POS, inventory management, and e-commerce integration for modern retail businesses.",
        points: ["Omnichannel Sales", "Loyalty Programs", "Real-time Inventory"]
    },
    {
        icon: Stethoscope,
        title: "Healthcare",
        description: "Manage patient records, appointments, and billing with secure and compliant healthcare software.",
        points: ["EMR/EHR", "Appointment Scheduling", "Billing & Insurance"]
    },
    {
        icon: GraduationCap,
        title: "Education",
        description: "Comprehensive SIS (Student Information Systems) and LMS (Learning Management Systems).",
        points: ["Student Records", "Fee Management", "Online Learning"]
    },
    {
        icon: Truck,
        title: "Logistics",
        description: "Fleet management, route optimization, and shipment tracking solutions.",
        points: ["Fleet Tracking", "Route Optimization", "Warehouse Management"]
    },
    {
        icon: Rocket,
        title: "Startups",
        description: "Agile MVPs and scalable tech stacks designed for rapid growth and fundraising.",
        points: ["Rapid Prototyping", "Scalable Architecture", "Investor Metrics"]
    }
];

export default function SolutionsPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Enterprise Software Solutions</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        High-performance, industry-specific <strong className="text-white">ERP software and custom applications</strong> designed to solve complex business challenges across India and global markets.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-14 h-14 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mb-6">
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary-midnight mb-3">{item.title}</h3>
                            <p className="text-gray-600 mb-6">{item.description}</p>
                            <ul className="space-y-2 mb-8">
                                {item.points.map((pt, i) => (
                                    <li key={i} className="flex items-center text-sm text-gray-500">
                                        <span className="w-1.5 h-1.5 bg-secondary-teal rounded-full mr-2"></span>
                                        {pt}
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/contact?subject=${item.title}`}>
                                <span className="text-primary-blue font-semibold flex items-center hover:underline">
                                    Learn More <ArrowRight size={16} className="ml-1" />
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
