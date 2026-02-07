import Link from "next/link";
import Button from "@/components/ui/Button";
import { Check } from "lucide-react";

export const metadata = {
    title: "Pricing - NexaFlowTech",
    description: "Transparent pricing plans for startups, SMEs, and enterprises.",
};

const plans = [
    {
        name: "Starter",
        target: "Startups",
        price: "Custom",
        description: "Essential features to get your business off the ground.",
        features: [
            "Core ERP Modules",
            "Standard Support",
            "Cloud Hosting",
            "5 Users",
            "Basic Training"
        ],
        cta: "Get Started",
        variant: "outline"
    },
    {
        name: "Growth",
        target: "SMEs",
        price: "Custom",
        description: "Advanced tools and integrations for scaling businesses.",
        popular: true,
        features: [
            "All Starter Features",
            "Custom Modules",
            "Priority Support",
            "Unlimited Users",
            "API Access",
            "Integration Support"
        ],
        cta: "Contact Sales",
        variant: "primary"
    },
    {
        name: "Enterprise",
        target: "Large Orgs",
        price: "Custom",
        description: "Full-scale digital transformation and dedicated resources.",
        features: [
            "Full Customization",
            "Dedicated Account Manager",
            "On-Premise Option",
            "24/7 SLA Support",
            "Security Audits",
            "Performance Tuning"
        ],
        cta: "Talk to Experts",
        variant: "outline"
    }
];

export default function PricingPage() {
    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Choose the plan that fits your stage of growth. No hidden fees.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border relative overflow-hidden ${plan.popular ? 'border-primary-blue ring-4 ring-blue-50' : 'border-gray-100'}`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 right-0 bg-primary-blue text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    POPULAR
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-primary-midnight mb-2">{plan.name}</h3>
                            <div className="text-sm font-semibold text-primary-blue bg-blue-50 px-3 py-1 rounded-full mb-6">
                                For {plan.target}
                            </div>
                            <p className="text-gray-600 mb-8 h-12">{plan.description}</p>

                            <div className="text-4xl font-bold text-gray-900 mb-8">
                                {plan.price}
                            </div>

                            <ul className="space-y-4 w-full mb-8 text-left">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-600">
                                        <Check size={18} className="text-secondary-teal mr-3 flex-shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-auto w-full">
                                <Link href="/contact" className="w-full">
                                    <Button variant={plan.variant as any} className="w-full">
                                        {plan.cta}
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-gray-500 mb-4">Need a custom quote? We're happy to help.</p>
                    <Link href="/contact" className="text-primary-blue font-semibold hover:underline">
                        Contact our sales team &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}
