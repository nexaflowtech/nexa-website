import Image from "next/image";

const technologies = [
    { name: "ERPNext", logo: "/images/tech/erpnext.svg" }, // We might need to handle logos later, for now text or placeholders
    { name: "Frappe", logo: "/images/tech/frappe.svg" },
    { name: "Next.js", logo: "/images/tech/nextjs.svg" },
    { name: "React", logo: "/images/tech/react.svg" },
    { name: "Python", logo: "/images/tech/python.svg" },
    { name: "PostgreSQL", logo: "/images/tech/postgresql.svg" },
    { name: "Docker", logo: "/images/tech/docker.svg" },
    { name: "AWS", logo: "/images/tech/aws.svg" }
];

export default function TechStack() {
    return (
        <section className="py-20 border-t border-gray-100 bg-white">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
                    Powered by Modern & Scalable Technologies
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Since we don't have actual SVG logos yet, I'll use text representations styled nicely */}
                    {technologies.map((tech, index) => (
                        <div key={index} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-primary-midnight transition-colors cursor-default">
                            {tech.name}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
