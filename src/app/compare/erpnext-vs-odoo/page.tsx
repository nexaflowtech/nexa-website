import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, Check, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
    title: "ERPNext vs Odoo: Which Open Source ERP is Better in 2026?",
    description: "Complete comparison of ERPNext vs Odoo — features, pricing, customization, support, and implementation. Find out which open source ERP is better for your business in 2026.",
    alternates: { canonical: "https://nexaflowtech.com/compare/erpnext-vs-odoo" },
};

const comparison = [
    { feature: "License Cost", erpnext: "Free (Community)", odoo: "Free (Community)" },
    { feature: "Hosted Version", erpnext: "Frappe Cloud from $50/mo", odoo: "Odoo Online from $40/mo" },
    { feature: "Setup Complexity", erpnext: "Moderate", odoo: "Easy (more guided)" },
    { feature: "Manufacturing Module", erpnext: "Strong built-in", odoo: "Advanced (paid)" },
    { feature: "Indian GST Support", erpnext: "Excellent built-in", odoo: "Good via apps" },
    { feature: "Customization Ease", erpnext: "Python-based (powerful)", odoo: "Python/XML (flexible)" },
    { feature: "UI/UX", erpnext: "Functional, improving", odoo: "Modern, polished" },
    { feature: "Mobile App", erpnext: "Good (web + native)", odoo: "Excellent (native)" },
    { feature: "API / Integrations", erpnext: "Strong REST API", odoo: "Strong REST API" },
    { feature: "Multi-tenancy", erpnext: "Built-in", odoo: "Via Odoo.sh" },
    { feature: "Support Community", erpnext: "Growing (Frappe.io)", odoo: "Large (odoo.com)" },
    { feature: "Implementation Partners India", erpnext: "Growing", odoo: "Many established" },
    { feature: "Best For", erpnext: "Manufacturing, IT, Services", odoo: "Retail, E-commerce, Multi-branch" },
];

function TableRow({ feature, erpnext, odoo }: { feature: string; erpnext: string; odoo: string }) {
    const erpnextGood = !erpnext.includes("Moderate") && !erpnext.includes("Functional") && !erpnext.includes("Good") && !erpnext.includes("Growing");
    return (
        <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
            <td className="py-4 px-4 font-medium text-gray-800">{feature}</td>
            <td className="py-4 px-4 text-center">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${erpnextGood ? 'bg-green-50 text-green-700' : erpnext.includes('Moderate') || erpnext.includes('Functional') ? 'bg-yellow-50 text-yellow-700' : 'bg-gray-100 text-gray-600'}`}>
                    {erpnext}
                </span>
            </td>
            <td className="py-4 px-4 text-center">
                <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${odoo.includes('Large') || odoo.includes('Many') || odoo.includes('Excellent') || odoo.includes('Modern') ? 'bg-green-50 text-green-700' : odoo.includes('Good') ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>
                    {odoo}
                </span>
            </td>
        </tr>
    );
}

const faqs = [
    {
        q: "Is ERPNext better than Odoo for manufacturing?",
        a: "ERPNext generally has a stronger built-in manufacturing module with BOM management, work orders, and job cards at no extra cost. Odoo's manufacturing module requires an enterprise subscription. For pure manufacturing businesses, ERPNext offers better value."
    },
    {
        q: "Which is easier to implement — ERPNext or Odoo?",
        a: "Odoo has a more guided setup with an easy-to-use configuration wizard, making it slightly easier for non-technical users. ERPNext requires more technical understanding but offers more flexibility for developers. For Indian businesses, ERPNext's built-in GST support often reduces implementation time."
    },
    {
        q: "What are the total costs of ownership for ERPNext vs Odoo?",
        a: "ERPNext: Free community version + hosting (₹3,000-10,000/month) + implementation (₹1-5 lakhs). Total first year: ₹2-8 lakhs. Odoo: Free community + Odoo Online (₹2,500/month) or Odoo.sh hosting (₹5,000+/month) + implementation. Enterprise features add significantly to the cost. ERPNext typically has lower TCO for similar functionality."
    },
    {
        q: "Does NexaFlowTech implement both ERPNext and Odoo?",
        a: "Yes, we specialize in ERPNext implementation. For Odoo projects, we can connect you with certified Odoo partners. We primarily recommend ERPNext for manufacturing, IT services, and businesses with complex custom requirements due to its open-source flexibility and lower cost."
    },
    {
        q: "Which ERP has better Indian GST support?",
        a: "ERPNext has better built-in Indian GST support out of the box — GSTIN validation, HSN/SAC codes, e-way billing, and GSTR filing are integrated without additional apps. Odoo requires third-party GST apps that add cost and complexity."
    },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50">
                <span className="font-semibold text-primary-midnight">{question}</span>
                <ChevronDown size={20} className="text-gray-400 group-open:rotate-180" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 border-t leading-relaxed">{answer}</div>
        </details>
    );
}

export default function ErpnextVsOdoo() {
    return (
        <div className="bg-neutral-bg min-h-screen">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white">Home</Link><span>/</span>
                        <Link href="/compare" className="hover:text-white">Compare</Link><span>/</span>
                        <span className="text-white">ERPNext vs Odoo</span>
                    </nav>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">ERPNext vs Odoo — Which Open Source ERP is Better in 2026?</h1>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl">Complete feature-by-feature comparison of ERPNext and Odoo including pricing, manufacturing, GST support, customization, and implementation costs for Indian businesses.</p>
                    <Link href="/contact"><Button className="bg-secondary-teal text-white">Get Free ERP Consultation <ArrowRight size={18} className="ml-2" /></Button></Link>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-10">
                        <div className="grid md:grid-cols-3 gap-6 p-8 bg-gray-50 border-b">
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-gray-800">Feature</h3>
                            </div>
                            <div className="text-center bg-primary-midnight text-white p-4 rounded-xl">
                                <h3 className="text-xl font-bold">ERPNext</h3>
                                <p className="text-xs text-blue-200 mt-1">Our Recommendation</p>
                            </div>
                            <div className="text-center p-4">
                                <h3 className="text-xl font-bold text-gray-800">Odoo</h3>
                            </div>
                        </div>
                        <div className="divide-y">
                            {comparison.map((row) => (
                                <TableRow key={row.feature} feature={row.feature} erpnext={row.erpnext} odoo={row.odoo} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border mb-10">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Our Verdict: ERPNext for Most Indian Businesses</h2>
                        <div className="prose prose-lg max-w-none text-gray-600">
                            <p className="mb-4">ERPNext edges out Odoo for most Indian businesses, particularly those in manufacturing, IT services, and sectors requiring deep customization. The key advantages are:</p>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-start gap-3">
                                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Lower Total Cost of Ownership:</strong> ERPNext&apos;s community version is fully functional. Odoo&apos;s advanced features like manufacturing, advanced inventory, and MRP require expensive enterprise licenses.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Better Indian GST Support:</strong> Built-in GST compliance without third-party apps saves cost and reduces complexity.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Python-Based Customization:</strong> More powerful and maintainable for complex customizations compared to Odoo&apos;s XML-based approach.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Check size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Built-in Multi-tenancy:</strong> ERPNext natively supports multi-company and multi-currency setups critical for businesses operating across India and internationally.</span>
                                </li>
                            </ul>
                            <p>Odoo does have advantages for retail and e-commerce businesses where the polished UI, native mobile apps, and drag-and-drop studio provide faster time-to-market. If your primary need is retail POS with e-commerce integration, Odoo may be the better choice.</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border mb-10">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-8">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => <FAQItem key={i} question={faq.q} answer={faq.a} />)}
                        </div>
                    </div>

                    <div className="bg-primary-midnight text-white p-8 md:p-12 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Ready to Choose the Right ERP?</h3>
                        <p className="text-blue-200 mb-8 max-w-lg mx-auto">Get a free consultation to understand which ERP — ERPNext or Odoo — is right for your business. We provide unbiased recommendations based on your specific requirements.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/contact"><Button className="bg-secondary-teal text-white">Book Free Consultation</Button></Link>
                            <Link href="/services/erpnext"><Button variant="outline" className="border-white/20 text-white hover:bg-white/10">ERPNext Services</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}