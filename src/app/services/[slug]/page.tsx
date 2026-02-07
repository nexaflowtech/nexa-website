import { notFound } from "next/navigation";
import { Layers, Database, Globe, Code, Smartphone, Headphones, Check, ArrowRight, Star } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

// Data mapping for services
const serviceData: Record<string, {
    title: string;
    description: string;
    longDescription: string;
    icon: any;
    features: string[];
    benefits: string[];
    process: { title: string; desc: string }[];
    cta: string;
}> = {
    "erpnext": {
        title: "ERPNext Implementation",
        description: "End-to-end ERPNext ecosystem setup tailored to your business.",
        longDescription: "Unlock the full potential of your business with our expert ERPNext implementation services. We move beyond standard installations to configure workflows, permissions, and dashboards that mirror your actual business processes, ensuring high adoption and immediate ROI.",
        icon: Layers,
        features: [
            "Process Mapping",
            "Server Setup & Security",
            "Module Configuration",
            "Data Migration",
            "Custom Print Formats",
            "User Training"
        ],
        benefits: [
            "Centralized Data",
            "Automated Workflows",
            "Real-time Reporting",
            "Lower Operational Costs"
        ],
        process: [
            { title: "Analysis", desc: "We study your current workflows and pain points." },
            { title: "Configuration", desc: "Setting up ERPNext to match your needs." },
            { title: "Migration", desc: "Safely transferring your legacy data." },
            { title: "Training", desc: "Empowering your team to use the system." }
        ],
        cta: "Start Your ERP Journey"
    },
    "frappe": {
        title: "Frappe Development",
        description: "Custom enterprise applications built on the Frappe Framework.",
        longDescription: "When off-the-shelf software doesn't fit, we build custom applications using the robust Frappe Framework. Whether you need a specialized inventory system, a customer portal, or a unique internal tool, our Frappe experts deliver scalable, Python-based solutions rapidly.",
        icon: Database,
        features: [
            "Custom App Development",
            "Third-party API Integrations",
            "Performance Optimization",
            "Frappe Cloud Deployment",
            "Version Upgrades",
            "Dockerization"
        ],
        benefits: [
            "Rapid Development",
            "Python/JS Stack",
            "Open Source Core",
            "Seamless ERPNext Integration"
        ],
        process: [
            { title: "Design", desc: "Architecting the database and UI." },
            { title: "Development", desc: "Agile sprints to build features." },
            { title: "Integration", desc: "Connecting with other tools." },
            { title: "Deployment", desc: "Going live with CI/CD pipelines." }
        ],
        cta: "Build Custom Apps"
    },
    "web": {
        title: "Custom Web Development",
        description: "High-performance websites and web apps using Next.js and React.",
        longDescription: "We build pixel-perfect, lightning-fast web experiences. Using the latest technologies like Next.js, React, and Tailwind CSS, we create corporate websites, customer portals, and complex web applications that drive engagement and conversion.",
        icon: Globe,
        features: [
            "Next.js / React Development",
            "Headless CMS Integration",
            "Progressive Web Apps (PWA)",
            "SEO Optimization",
            "Accessibility (WCAG)",
            "Performance Tuning"
        ],
        benefits: [
            "Blazing Fast Speed",
            "SEO Friendly",
            "Mobile First Design",
            "Scalable Architecture"
        ],
        process: [
            { title: "UX/UI", desc: "Wireframing and high-fidelity design." },
            { title: "Code", desc: "Clean, component-based development." },
            { title: "Content", desc: "Integration with CMS or APIs." },
            { title: "Launch", desc: "SEO checks and performance audit." }
        ],
        cta: "Upgrade Your Web Presence"
    },
    "saas": {
        title: "SaaS Product Development",
        description: "From MVP to scalable product. We build your SaaS vision.",
        longDescription: "Launching a SaaS requires more than just code—it needs a scalable architecture. We help startups and enterprises build multi-tenant SaaS platforms with subscription management, secure authentication, and robust API layers.",
        icon: Code,
        features: [
            "MVP Development",
            "Multi-tenant Architecture",
            "Stripe/Payment Integration",
            "User Management",
            "Admin Dashboards",
            "API Development"
        ],
        benefits: [
            "Faster Time to Market",
            "Scalable Infrastructure",
            "Secure by Design",
            "Feature-Rich MVPs"
        ],
        process: [
            { title: "Discovery", desc: "Validating the product roadmap." },
            { title: "MVP Build", desc: "Core features for launch." },
            { title: "Iterate", desc: "Enhancing based on user feedback." },
            { title: "Scale", desc: "Optimizing for growth." }
        ],
        cta: "Launch Your SaaS"
    },
    "mobile": {
        title: "Mobile App Development",
        description: "Native-quality iOS and Android apps with React Native.",
        longDescription: "Reach your customers wherever they are with beautiful, responsive mobile applications. We use React Native and Flutter to build cross-platform apps that offer a native feel, ensuring consistent performance on both iOS and Android devices.",
        icon: Smartphone,
        features: [
            "Cross-Platform Dev",
            "Offline Capabilities",
            "Push Notifications",
            "App Store Submission",
            "Native Module Integration",
            "UI/UX Design"
        ],
        benefits: [
            "Single Codebase",
            "Native Performance",
            "Cost Effective",
            "Faster Development"
        ],
        process: [
            { title: "Prototype", desc: "Interactive mockups." },
            { title: "Develop", desc: "Building the app logic and UI." },
            { title: "Test", desc: "Device lab testing." },
            { title: "Publish", desc: "App Store & Play Store launch." }
        ],
        cta: "Build Mobile App"
    },
    "amc": {
        title: "AMC & Support",
        description: "Reliable maintenance and support for peace of mind.",
        longDescription: "Technology needs constant care. Our Annual Maintenance Contracts (AMC) ensure your ERP, website, or app runs smoothly. We handle updates, security patches, backups, and minor feature enhancements so you can focus on your business.",
        icon: Headphones,
        features: [
            "Priority Support Desk",
            "Regular Backups",
            "Security Monitoring",
            "Server Management",
            "Code Audits",
            "Performance Reporting"
        ],
        benefits: [
            "Minimized Downtime",
            "Predictable Costs",
            "Secure Systems",
            "Expert Access"
        ],
        process: [
            { title: "Audit", desc: "Reviewing system health." },
            { title: "Onboard", desc: "Setting up monitoring tools." },
            { title: "Monitor", desc: "24/7 proactive checks." },
            { title: "Resolve", desc: "Quick incident response." }
        ],
        cta: "Get Support Plan"
    }
};

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        return {
            title: "Service Not Found",
        };
    }

    return {
        title: `${service.title} - NexaFlowTech Services`,
        description: service.description,
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            {/* Hero Section */}
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <Link href="/services" className="text-blue-300 hover:text-white mb-6 inline-flex items-center text-sm font-medium transition-colors">
                        &larr; Back to Services
                    </Link>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                            <service.icon size={48} className="text-secondary-teal" />
                        </div>
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">{service.title}</h1>
                            <p className="text-xl text-blue-100 max-w-2xl">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-6 -mt-10 relative z-20">
                <div className="grid lg:grid-cols-3 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-4">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {service.longDescription}
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">Key Features</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                        <Check size={18} className="text-primary-blue flex-shrink-0" />
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-8">Our Process</h2>
                            <div className="space-y-8">
                                {service.process.map((step, index) => (
                                    <div key={index} className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-10 h-10 rounded-full bg-primary-midnight text-white flex items-center justify-center font-bold flex-shrink-0">
                                                {index + 1}
                                            </div>
                                            {index !== service.process.length - 1 && (
                                                <div className="w-0.5 h-full bg-gray-200 my-2"></div>
                                            )}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-6">Why Choose Us?</h3>
                            <ul className="space-y-4">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <Star size={18} className="text-yellow-400 flex-shrink-0 fill-yellow-400" />
                                        <span className="text-gray-200">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-8 border-t border-white/10">
                                <Link href="/contact" className="w-full">
                                    <Button className="w-full bg-secondary-teal hover:bg-teal-600 text-white border-none">
                                        {service.cta}
                                        <ArrowRight size={18} className="ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
                            <h3 className="font-bold text-primary-midnight mb-2">Need something else?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                We offer a wide range of services tailored to your needs.
                            </p>
                            <Link href="/services" className="text-primary-blue font-semibold hover:underline">
                                View All Services
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
