import { Layers, Database, Globe, Code, Smartphone, Headphones, Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "Services - NexaFlowTech",
    description: "Comprehensive ERP, web, and mobile development services for modern businesses.",
};

const services = [
    {
        id: "erpnext",
        title: "ERPNext Implementation",
        description: "End-to-end ERPNext implementation customized to business workflows.",
        icon: Layers,
        features: [
            "Requirement Analysis",
            "System Configuration",
            "Custom Modules",
            "Data Migration",
            "User Training",
            "Go-Live Support"
        ]
    },
    {
        id: "frappe",
        title: "Frappe Development",
        description: "Custom Frappe apps, integrations and automation.",
        icon: Database,
        features: [
            "Custom App Development",
            "API Integrations",
            "Workflow Automation",
            "Performance Tuning",
            "Legacy Migration",
            "Version Upgrades"
        ]
    },
    {
        id: "web",
        title: "Custom Web Development",
        description: "Scalable custom web platforms built with modern stacks.",
        icon: Globe,
        features: [
            "React / Next.js Development",
            "Progressive Web Apps (PWA)",
            "E-commerce Solutions",
            "CMS Development",
            "API First Design",
            "Cloud Deployment"
        ]
    },
    {
        id: "saas",
        title: "SaaS Platforms",
        description: "Build SaaS products from idea to production.",
        icon: Code,
        features: [
            "MVP Development",
            "Multi-tenant Architecture",
            "Subscription Management",
            "Scalable Infrastructure",
            "Analytics Integration",
            "Security Audits"
        ]
    },
    {
        id: "mobile",
        title: "Mobile Apps",
        description: "Cross-platform mobile apps for iOS and Android.",
        icon: Smartphone,
        features: [
            "React Native / Flutter",
            "Native Performance",
            "Offline Capabilities",
            "Push Notifications",
            "App Store Deployment",
            "Maintenance"
        ]
    },
    {
        id: "amc",
        title: "AMC & Support",
        description: "Ongoing maintenance and priority support.",
        icon: Headphones,
        features: [
            "24/7 Monitoring",
            "Bug Fixes",
            "Security Updates",
            "Performance Optimization",
            "Feature Enhancements",
            "Priority Support"
        ]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        From ERP implementation to custom software, we build the digital infrastructure your business needs to thrive.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid gap-12">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            id={service.id}
                            className={`bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1">
                                <div className="w-16 h-16 bg-blue-50 text-primary-blue rounded-2xl flex items-center justify-center mb-6">
                                    <service.icon size={32} />
                                </div>
                                <h2 className="text-3xl font-bold text-primary-midnight mb-4">{service.title}</h2>
                                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                    {service.description}
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 rounded-full bg-teal-50 text-secondary-teal flex items-center justify-center flex-shrink-0">
                                                <Check size={14} strokeWidth={3} />
                                            </div>
                                            <span className="text-gray-700 font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-8">
                                    <Link href="/contact">
                                        <Button variant="outline" className="mt-4">
                                            Get a Quote
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-100 group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src={`/images/service-${service.id.replace('amc', 'support')}.svg`}
                                        alt={service.title}
                                        fill
                                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
