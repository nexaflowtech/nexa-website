import type { Metadata } from "next";
import Link from "next/link";
import { Linkedin, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Team | NexaFlowTech - ERPNext & Software Experts",
    description: "Meet the NexaFlowTech team - certified ERPNext implementers, Frappe developers, and software engineers with 5+ years experience.",
    alternates: { canonical: "https://nexaflowtech.com/team" },
};

const team = [
    {
        name: "Somil Vaishya",
        role: "Co-Founder & Tech Lead",
        bio: "ERPNext/Frappe Developer with proven experience in building, customizing, and scaling ERP systems. Expert in full-system ownership across Accounting, Sales, Purchase, HRMS, Inventory, and CRM. Specializes in workflow automation, REST API development, system integrations, and performance optimization. Successfully automated 70%+ operations for improved speed, accuracy, and decision-making.",
        image: "https://ui-avatars.com/api/?name=Somil+Vaishya&background=3b82f6&color=fff&size=200&font-size=0.4&bold=true",
        linkedin: "https://www.linkedin.com/in/somil78/",
        email: "info@nexaflowtech.com"
    },
    {
        name: "Adarsh Srivastava",
        role: "Co-Founder & Data Analyst",
        bio: "Data curator with an analytical mindset. Diligent and focused professional with strong knowledge of SQL, R, Tableau, and MS Excel. Earned Data Analyst Professional Certificate from Google. Specializes in business intelligence, data visualization, and turning raw data into actionable insights.",
        image: "https://ui-avatars.com/api/?name=Adarsh+Sr&background=10b981&color=fff&size=200&font-size=0.4&bold=true",
        linkedin: "https://www.linkedin.com/in/adarsh-srivastava-data-analyst/",
        email: "info@nexaflowtech.com"
    },
    {
        name: "Mohd Suaib Warsi",
        role: "Co-Founder & Web Developer",
        bio: "Full Stack Developer specializing in MERN stack (MongoDB, Express.js, React.js, Node.js) with experience in Next.js, WordPress, Shopify, and React Native mobile apps. Builds scalable, user-centric web and mobile applications with clean UI, efficient backend logic, and reliable API integrations. Currently working as Web Developer at TZS Digital, combining technical skills with business understanding to create practical, real-world solutions.",
        image: "https://ui-avatars.com/api/?name=Mohd+Warsi&background=6366f1&color=fff&size=200&font-size=0.4&bold=true",
        linkedin: "https://www.linkedin.com/in/mohd-suaib-warsi/",
        email: "info@nexaflowtech.com"
    }
];

export default function TeamPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-primary-midnight text-white py-20">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
                    <p className="text-xl text-gray-300 max-w-2xl">
                        Certified ERPNext implementers and software experts with 5+ years of experience delivering enterprise solutions.
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, i) => (
                        <div key={i} className="bg-white rounded-2xl shadow-sm border p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-start gap-4 mb-4">
                                <img src={member.image} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
                                <div>
                                    <h3 className="text-xl font-bold text-primary-midnight">{member.name}</h3>
                                    <p className="text-primary-blue font-medium">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{member.bio}</p>
                            <div className="flex gap-3">
                                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary-blue">
                                    <Linkedin size={20} />
                                </a>
                                <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-primary-blue">
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-blue-50 py-16">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-primary-midnight mb-4">Join Our Team</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        We're always looking for talented ERPNext developers and software engineers. Check our careers page for open positions.
                    </p>
                    <Link href="/careers">
                        <button className="px-8 py-4 bg-primary-blue text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                            View Careers
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}