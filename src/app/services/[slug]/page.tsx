import { notFound } from "next/navigation";
import { Layers, Database, Globe, Code, Smartphone, Headphones, Check, ArrowRight, Star, Users, Clock, Shield, TrendingUp, ChevronDown } from "lucide-react";
import type React from "react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";

const serviceData: Record<string, {
    title: string;
    description: string;
    longDescription: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    features: string[];
    benefits: string[];
    process: { title: string; desc: string }[];
    faqs: { q: string; a: string }[];
    cta: string;
}> = {
    "erpnext": {
        title: "ERPNext Implementation",
        description: "End-to-end ERPNext ecosystem setup tailored to your business workflows and industry requirements.",
        longDescription: "NexaFlowTech is a certified ERPNext implementation partner with 5+ years of experience deploying enterprise-grade ERP systems across manufacturing, retail, healthcare, logistics, and services industries. Our implementation methodology goes beyond standard installations — we configure workflows, permissions, dashboards, and custom fields that mirror your actual business processes, ensuring high user adoption and immediate ROI.\n\nWhether you are migrating from legacy systems like Tally, SAP, or spreadsheets, or starting fresh with ERPNext, our team handles the complete journey from requirement analysis to go-live support. We specialize in ERPNext manufacturing modules with BOM management, work orders, and production planning, as well as full accounting automation with Indian GST compliance.\n\nOur ERPNext implementation services cover both cloud and on-premise deployments, with options for Frappe Cloud hosting or self-hosted infrastructure on AWS, DigitalOcean, or Azure. We also provide ongoing support and AMC services to ensure your ERP system stays optimized and up-to-date.",
        icon: Layers,
        features: [
            "Business Process Analysis & Mapping",
            "ERPNext Server Setup & Security Hardening",
            "Module Configuration (CRM, HR, Accounting, Inventory)",
            "Custom DocTypes and Fields Development",
            "Data Migration from Legacy Systems (Tally, SAP, Excel)",
            "Custom Print Formats and Reports",
            "Workflow Automation and Approval Chains",
            "User Training and Documentation",
            "Go-Live Support and Hypercare",
            "Post-Implementation Support & AMC"
        ],
        benefits: [
            "40% reduction in manual data entry",
            "Real-time inventory and financial visibility",
            "Automated approval workflows saving 15+ hours/week",
            "GST-compliant accounting out of the box",
            "Multi-company and multi-currency support",
            "Full customization without breaking core ERPNext"
        ],
        process: [
            { title: "Discovery & Analysis", desc: "We study your current workflows, pain points, and business goals through stakeholder interviews. This forms the blueprint for ERPNext configuration." },
            { title: "Configuration & Customization", desc: "Setting up ERPNext to match your specific needs — roles, permissions, workflows, custom fields, and integrations." },
            { title: "Data Migration", desc: "Safely transferring your legacy data from Tally, SAP, Excel, or other systems with validation and integrity checks." },
            { title: "User Training", desc: "Comprehensive training for admins and end-users, plus video tutorials and documentation for ongoing reference." },
            { title: "Go-Live & Hypercare", desc: "Phased go-live with 24/7 support during the critical first two weeks. We monitor performance and fix issues proactively." },
            { title: "Ongoing Support", desc: "AMC plans with priority support, security updates, performance tuning, and feature enhancements." }
        ],
        faqs: [
            {
                q: "How long does ERPNext implementation take?",
                a: "A typical ERPNext implementation takes 4-12 weeks depending on complexity. Starter implementations with core modules (Accounting, Inventory, CRM) take 4-6 weeks. Enterprise implementations with manufacturing, HR, and custom integrations take 8-12 weeks. We follow a phased approach to deliver value early."
            },
            {
                q: "What is the cost of ERPNext implementation in India?",
                a: "ERPNext implementation costs in India range from ₹1,50,000 for small businesses (starter plan, basic modules) to ₹10,00,000+ for enterprise deployments with custom development, data migration, and multiple company setups. Our pricing is transparent and based on scope — contact us for a custom quote."
            },
            {
                q: "Can ERPNext handle GST accounting for Indian businesses?",
                a: "Yes, ERPNext has built-in GST support including GSTIN validation, HSN/SAC codes, GST return filing integration, e-way billing, and multi-state GST compliance. We configure GST charts of accounts and tax templates specific to your business during implementation."
            },
            {
                q: "Do you provide ERPNext training for our team?",
                a: "Yes, all our implementations include comprehensive user training. We conduct live training sessions for admin and end-users covering ERPNext basics, module-specific workflows, and reporting. We also provide video tutorials and documentation for ongoing reference."
            },
            {
                q: "Can NexaFlowTech migrate data from Tally to ERPNext?",
                a: "Yes, we have extensive experience migrating data from Tally. Our migration process includes chart of accounts mapping, ledger balances transfer, stock item migration, and GST data conversion. We validate all data post-migration to ensure accuracy."
            },
            {
                q: "Is ERPNext suitable for manufacturing businesses?",
                a: "ERPNext is an excellent choice for manufacturing. It includes full BOM (Bill of Materials) management, work orders, job cards, production planning, and subcontractor tracking. We specialize in configuring ERPNext manufacturing modules for discrete and process manufacturing."
            },
            {
                q: "Do you offer ERPNext hosting and server management?",
                a: "Yes, we offer managed ERPNext hosting on Frappe Cloud or self-hosted on AWS, DigitalOcean, or Azure. Our hosting includes SSL, daily backups, monitoring, security updates, and 99.9% uptime guarantee. We also handle all server maintenance and optimization."
            },
            {
                q: "What is included in ERPNext AMC (Annual Maintenance Contract)?",
                a: "Our AMC includes priority support desk, regular security and version updates, bug fixes, performance optimization, database maintenance, and up to 10 hours/month of minor feature enhancements. We also provide monthly health check reports for your ERPNext instance."
            }
        ],
        cta: "Start Your ERP Journey"
    },
    "frappe": {
        title: "Frappe Development",
        description: "Custom enterprise applications built on the Frappe Framework with Python and React.",
        longDescription: "When off-the-shelf software doesn't fit your unique business requirements, NexaFlowTech builds custom applications using the powerful Frappe Framework. Frappe is a full-stack web framework built on Python that powers ERPNext — making it the ideal choice for building ERP-like applications, internal tools, customer portals, and complex business software.\n\nOur Frappe development team specializes in custom DocType creation, REST API development, server-side scripting, workflow automation, and Frappe UI customization. Whether you need a specialized inventory system, a project management tool with unique reporting, or a B2B customer portal, we deliver scalable, Python-based solutions rapidly.\n\nWe also provide Frappe Cloud deployment, Docker-based hosting, and ongoing support for Frappe applications. Our developers are certified in Frappe framework development and follow best practices for security, performance, and maintainability.",
        icon: Database,
        features: [
            "Custom App Development with Frappe Framework",
            "Server-Side Scripting (Python)",
            "Client-Side Scripting (JavaScript/React)",
            "Custom DocType and Field Development",
            "REST API Development and Integration",
            "Workflow Automation and Approval Engines",
            "Role-Based Permission Systems",
            "Frappe UI/UX Customization",
            "Version Upgrades and Migration",
            "Dockerization and CI/CD Deployment"
        ],
        benefits: [
            "Rapid development with Python-based stack",
            "Full ERPNext compatibility and integration",
            "Custom reports and dashboard creation",
            "Webhook and API integrations with third-party tools",
            "Scalable architecture for enterprise use",
            "Open-source with no licensing costs"
        ],
        process: [
            { title: "Design & Architecture", desc: "We architect the database schema (DocTypes), UI designs, and API structure before writing any code." },
            { title: "Agile Development", desc: "2-week sprints to build features incrementally with regular demos and feedback loops." },
            { title: "Integration", desc: "Connecting with third-party APIs, payment gateways, ERPNext, and legacy systems." },
            { title: "Testing & QA", desc: "Comprehensive testing including unit tests, integration tests, and user acceptance testing." },
            { title: "Deployment", desc: "Frappe Cloud deployment or self-hosted Docker containers with CI/CD pipelines." },
            { title: "Maintenance", desc: "Ongoing support, version upgrades, and feature enhancements." }
        ],
        faqs: [
            {
                q: "What is the Frappe Framework?",
                a: "Frappe is an open-source, full-stack web application framework built with Python and JavaScript. It powers ERPNext and allows developers to build custom web applications, ERPs, and business tools rapidly. Frappe includes a built-in admin panel, form builder, REST API, and workflow engine."
            },
            {
                q: "How is Frappe different from Django?",
                a: "Frappe is built on top of Django and adds a meta-framework layer including a built-in ORM, form builder, permission system, and ERPNext-specific features. While Django is a general-purpose framework, Frappe is optimized for business applications and comes with built-in features for building ERP-like systems. Frappe also includes a low-code form builder that Django lacks."
            },
            {
                q: "Can you build a custom CRM with Frappe?",
                a: "Yes, Frappe is excellent for building custom CRMs. We can extend the built-in ERPNext CRM module or create a standalone CRM application with custom lead management, deal tracking, pipeline views, email integration, and reporting. Our Frappe CRM solutions are tailored to specific sales processes and industries."
            },
            {
                q: "Do you provide Frappe mobile app development?",
                a: "While Frappe is primarily a web framework, we can build mobile-responsive web apps (PWA) or React Native apps that connect to Frappe backends via REST API. For native mobile experiences, we recommend coupling Frappe backend with a React Native frontend."
            },
            {
                q: "How long does a custom Frappe app take to develop?",
                a: "A basic Frappe app with 3-5 modules takes 6-10 weeks. Complex enterprise apps with multiple DocTypes, API integrations, and custom workflows take 12-20 weeks. We provide detailed timelines after requirement analysis."
            }
        ],
        cta: "Build Custom Apps"
    },
    "web": {
        title: "Custom Web Development",
        description: "High-performance websites and web apps using Next.js, React, and modern web technologies.",
        longDescription: "We build pixel-perfect, lightning-fast web experiences that drive engagement and conversion. Using the latest technologies like Next.js, React, and Tailwind CSS, we create corporate websites, customer portals, SaaS platforms, and complex web applications that perform at scale.\n\nOur web development services cover the full spectrum — from static marketing sites with SEO optimization to dynamic web applications with real-time data, authentication, and payment integration. We follow a mobile-first design approach and ensure all our sites meet WCAG accessibility standards.\n\nOur team specializes in Next.js for SEO-critical sites, React for complex SPAs, and Headless CMS integration with Contentful, Strapi, or Sanity. We also provide ongoing maintenance, performance optimization, and security audits for all web projects.",
        icon: Globe,
        features: [
            "Next.js / React Development",
            "Search Engine Optimization (SEO)",
            "Progressive Web Apps (PWA)",
            "Headless CMS Integration",
            "E-commerce Development",
            "Authentication & User Management",
            "API Integration and Microservices",
            "Performance Optimization (Core Web Vitals)",
            "Accessibility (WCAG) Compliance",
            "Cloud Deployment (Vercel, AWS, Azure)"
        ],
        benefits: [
            "Blazing fast page loads (sub-second)",
            "SEO-optimized architecture with server-side rendering",
            "Mobile-first responsive design",
            "Scalable component-based architecture",
            "Excellent developer experience and maintainability",
            "Edge deployment for global performance"
        ],
        process: [
            { title: "UX/UI Design", desc: "Wireframing, user flow design, and high-fidelity mockups in Figma with client review." },
            { title: "Frontend Development", desc: "Clean, component-based development using Next.js, React, and Tailwind CSS." },
            { title: "Backend Development", desc: "API development, database design, authentication, and third-party integrations." },
            { title: "Testing & QA", desc: "Cross-browser testing, performance auditing, and security checks before launch." },
            { title: "Launch & SEO", desc: "Deployment, sitemap submission, meta tag optimization, and search console setup." },
            { title: "Maintenance", desc: "Ongoing updates, security patches, and feature enhancements." }
        ],
        faqs: [
            {
                q: "What is the difference between Next.js and React?",
                a: "React is a library for building UI components, while Next.js is a React framework that adds routing, server-side rendering, image optimization, and other production features. Next.js is preferred for SEO-critical sites because it renders pages on the server, making content available to search engines. React alone typically renders in the browser (client-side), which can be slower for initial page loads and less SEO-friendly."
            },
            {
                q: "How long does a custom web application take to build?",
                a: "A corporate website takes 4-8 weeks. A complex web application with authentication, dashboard, and API integrations takes 8-16 weeks. SaaS platforms with multi-tenancy take 16-24 weeks. We provide detailed timelines after requirements gathering."
            },
            {
                q: "Do you provide website hosting?",
                a: "Yes, we offer managed hosting on Vercel (recommended for Next.js), AWS, or Azure. Hosting includes SSL certificates, CDN, daily backups, monitoring, and 99.9% uptime guarantee. We also handle domain setup and DNS configuration."
            },
            {
                q: "Can you redesign our existing website?",
                a: "Yes, we offer website redesigns with a focus on improving UX, performance, and SEO. We start with a full audit of your current site, then create redesign mockups while ensuring all existing SEO rankings are preserved through proper redirect mapping and meta tag transfer."
            }
        ],
        cta: "Upgrade Your Web Presence"
    },
    "saas": {
        title: "SaaS Product Development",
        description: "From MVP to scalable product — we build your SaaS vision with multi-tenant architecture.",
        longDescription: "Launching a SaaS product requires more than just code — it needs a scalable architecture, secure payment systems, and a user experience that drives retention. NexaFlowTech helps startups and enterprises build multi-tenant SaaS platforms that scale to thousands of users.\n\nOur SaaS development services cover the full lifecycle from product discovery and MVP development to production deployment and growth optimization. We specialize in multi-tenant architecture that allows you to serve multiple customers from a single codebase while keeping their data isolated and secure.\n\nWe integrate with Stripe, Razorpay, and other payment gateways for subscription management, handle authentication with Auth0 or custom JWT-based systems, and build admin dashboards for you to manage your customer base, usage analytics, and billing.",
        icon: Code,
        features: [
            "MVP Development with Fast Time-to-Market",
            "Multi-Tenant Architecture Design",
            "Stripe/Razorpay Payment Integration",
            "User Management and Role-Based Access",
            "Admin Dashboard and Analytics",
            "RESTful API Development",
            "Scalable Cloud Infrastructure",
            "Security Audits and Compliance",
            "Performance Monitoring",
            "White-label and Custom Branding"
        ],
        benefits: [
            "Faster time-to-market with proven architecture",
            "Scalable infrastructure that grows with your business",
            "Secure by design with data isolation between tenants",
            "Feature-rich MVPs with room for rapid iteration",
            "Cost-effective with shared resources across tenants",
            "Full ownership and source code delivery"
        ],
        process: [
            { title: "Product Discovery", desc: "Validating the product roadmap, defining core features for MVP, and creating user stories." },
            { title: "MVP Development", desc: "Building core features for launch — authentication, key workflows, and payment integration." },
            { title: "User Testing", desc: "Beta testing with select users, gathering feedback, and iterating on UX and features." },
            { title: "Launch", desc: "Production deployment, marketing site setup, and go-live support." },
            { title: "Scale", desc: "Infrastructure optimization, feature enhancements, and new module development." }
        ],
        faqs: [
            {
                q: "How much does SaaS MVP development cost in India?",
                a: "SaaS MVP development costs in India range from ₹3,00,000 to ₹15,00,000 depending on complexity, features, and integrations. A basic SaaS MVP with authentication, user management, and a core feature takes 8-12 weeks and costs ₹3-6 lakhs. Complex SaaS with multi-tenancy, payments, and admin dashboards takes 4-6 months and costs ₹8-15 lakhs."
            },
            {
                q: "What is multi-tenant SaaS architecture?",
                a: "Multi-tenant architecture allows multiple customers (tenants) to use the same application instance while keeping their data isolated. This is the standard for SaaS products as it reduces infrastructure costs, simplifies updates, and allows easy scaling. We implement multi-tenancy using database isolation, schema separation, or shared database with tenant_id filtering."
            },
            {
                q: "Do you handle SaaS payment integration?",
                a: "Yes, we integrate Stripe, Razorpay, and other payment gateways for subscription billing. We handle recurring payments, one-time charges, failed payment retries, invoice generation, and customer portal setup. We also implement usage-based billing models for metered SaaS products."
            },
            {
                q: "Will I own the source code?",
                a: "Yes, we deliver full source code ownership upon project completion and payment. We use standard open-source technologies (Next.js, Python, PostgreSQL) so you are not locked into any proprietary stack. We can also provide ongoing support and development after launch."
            }
        ],
        cta: "Launch Your SaaS"
    },
    "mobile": {
        title: "Mobile App Development",
        description: "Native-quality iOS and Android apps with React Native and Flutter.",
        longDescription: "Reach your customers wherever they are with beautiful, responsive mobile applications. NexaFlowTech uses React Native and Flutter to build cross-platform apps that offer a native feel, ensuring consistent performance on both iOS and Android devices at a fraction of the cost of native development.\n\nOur mobile development services cover the full lifecycle from concept and UI design to app store submission and ongoing maintenance. We specialize in business mobile apps with offline capabilities, push notifications, secure authentication, and API integration with backend systems like ERPNext.\n\nWhether you need a field sales app, an employee attendance app, a customer ordering portal, or a IoT dashboard, we build mobile experiences that work reliably in real-world conditions including low-connectivity environments.",
        icon: Smartphone,
        features: [
            "Cross-Platform Development (React Native / Flutter)",
            "Native Performance and UI",
            "Offline Capabilities with Local Database",
            "Push Notifications (FCM / APNs)",
            "App Store and Play Store Submission",
            "API Integration with Backend Systems",
            "Biometric Authentication",
            "Camera and GPS Integration",
            "Background Sync and Data Transfer",
            "UI/UX Design and Prototyping"
        ],
        benefits: [
            "Single codebase for iOS and Android — 50% cost savings",
            "Native performance and smooth animations",
            "Offline-first architecture for field users",
            "Faster development compared to native Swift/Kotlin",
            "Easy maintenance with shared code base",
            "Direct App Store and Play Store distribution"
        ],
        process: [
            { title: "Prototyping", desc: "Interactive mockups and user flow design with Figma. Client review and iteration." },
            { title: "Development", desc: "Building the app logic, UI components, and API integrations in 2-week sprints." },
            { title: "Testing", desc: "Device lab testing on multiple iOS and Android devices, performance profiling." },
            { title: "App Store Submission", desc: "Preparing screenshots, descriptions, and handling review process for both stores." },
            { title: "Maintenance", desc: "Bug fixes, OS version updates, and feature enhancements post-launch." }
        ],
        faqs: [
            {
                q: "React Native vs Flutter — which is better?",
                a: "Both are excellent cross-platform frameworks. React Native uses JavaScript/TypeScript (preferred if your team has web developers) and has a larger ecosystem. Flutter uses Dart (less common) but offers better performance and custom UI capabilities. We recommend React Native for most projects due to easier hiring and maintenance, and Flutter for highly custom UI requirements."
            },
            {
                q: "How long does mobile app development take?",
                a: "A basic cross-platform app takes 8-12 weeks. A complex app with offline capabilities, push notifications, payment integration, and backend development takes 4-6 months. We provide detailed timelines after requirements gathering."
            },
            {
                q: "Can you integrate the mobile app with ERPNext?",
                a: "Yes, we specialize in ERPNext mobile integrations. We can build apps that connect to ERPNext via REST API for real-time data sync, or offline-first apps that sync with ERPNext when connectivity is available. Common use cases include field sales, inventory management, and employee attendance apps."
            },
            {
                q: "What is the cost of mobile app development in India?",
                a: "Cross-platform mobile app development in India costs ₹2,00,000 to ₹15,00,000. A basic app with 3-5 screens costs ₹2-4 lakhs. A feature-rich business app with offline capabilities, API integration, and custom UI costs ₹5-12 lakhs. Enterprise apps with complex workflows cost ₹12-25 lakhs."
            }
        ],
        cta: "Build Mobile App"
    },
    "amc": {
        title: "AMC & Support",
        description: "Reliable maintenance and priority support for your ERP, web, and mobile systems.",
        longDescription: "Technology requires constant care. New software versions, security patches, performance optimizations, and feature requests are a continuous reality. Our Annual Maintenance Contracts (AMC) ensure your ERP system, website, or mobile app runs smoothly so you can focus on your business.\n\nNexaFlowTech AMC services cover the complete technology stack — from server monitoring and backups to code updates and feature enhancements. We provide a dedicated support desk, monthly health reports, and priority response times for critical issues.\n\nOur AMC clients benefit from reduced downtime, predictable costs, and access to our team of experts who know your systems inside-out. We also provide advisory services to help you plan technology upgrades and expansions.",
        icon: Headphones,
        features: [
            "Priority Support Desk with Fast Response",
            "Regular Security and Version Updates",
            "Daily and Weekly Backups with Testing",
            "Server Monitoring and Performance Optimization",
            "Bug Fixes and Issue Resolution",
            "Code Audits and Security Scans",
            "Feature Enhancements (10-20 hours/month)",
            "Monthly Health Check Reports",
            "Technology Advisory and Planning",
            "Emergency Response for Critical Issues"
        ],
        benefits: [
            "Minimized downtime with proactive monitoring",
            "Predictable annual costs for budgeting",
            "Secure systems with latest patches",
            "Expert access to the team who built your system",
            "Regular performance optimization",
            "Priority response during critical issues"
        ],
        process: [
            { title: "System Audit", desc: "Reviewing current system health, identifying risks, and documenting the tech stack." },
            { title: "Onboarding", desc: "Setting up monitoring tools, support desk access, and communication channels." },
            { title: "Proactive Monitoring", desc: "24/7 server monitoring, daily backups, and weekly security scans." },
            { title: "Incident Response", desc: "Quick response to reported issues with clear SLAs for resolution." },
            { title: "Monthly Reporting", desc: "Health check reports covering uptime, performance, and recommendations." }
        ],
        faqs: [
            {
                q: "What is included in NexaFlowTech AMC?",
                a: "Our standard AMC includes priority support desk access, security and version updates, bug fixes, daily backups, performance monitoring, and up to 10 hours/month of minor feature enhancements. We also provide monthly health reports and technology advisory."
            },
            {
                q: "What are your response times for critical issues?",
                a: "For critical issues (system down, data loss risk), we provide 2-hour response during business hours and 8-hour response after hours. For high-priority issues, response is within 4 business hours. Standard issues are addressed within 24-48 hours."
            },
            {
                q: "Do you provide server management as part of AMC?",
                a: "Yes, server management is included in our AMC plans. We handle OS updates, security patches, firewall configuration, SSL certificate renewal, and server performance optimization. For Frappe/ERPNext servers, we also handle bench updates and migration management."
            },
            {
                q: "Can I upgrade or downgrade my AMC plan?",
                a: "Yes, you can upgrade your AMC plan anytime to include more hours or additional services. Downgrades are effective from the next renewal date. We offer flexible monthly and annual billing options."
            }
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

const serviceSEOMeta: Record<string, { title: string; description: string }> = {
    "erpnext": {
        title: "ERPNext Implementation Services in India | NexaFlowTech",
        description: "End-to-end ERPNext implementation — module configuration, data migration, training & support. Trusted ERPNext partner for SMEs and enterprises in India, serving USA, UK & UAE.",
    },
    "frappe": {
        title: "Frappe Framework Development Company India | NexaFlowTech",
        description: "Custom Frappe app development, API integrations, and workflow automation. Expert Frappe developers in India serving global clients in USA, UK & UAE.",
    },
    "saas": {
        title: "SaaS MVP Development Company India | NexaFlowTech",
        description: "Build scalable, multi-tenant SaaS platforms with NexaFlowTech. End-to-end SaaS development including architecture, billing, authentication & global cloud deployment.",
    },
    "web": {
        title: "Custom Web Application Development Company India | NexaFlowTech",
        description: "High-performance web application development using Next.js and React. NexaFlowTech builds fast, SEO-optimized, conversion-focused web platforms for global businesses.",
    },
    "mobile": {
        title: "Mobile App Development Company India | NexaFlowTech",
        description: "Cross-platform and native mobile app development for iOS and Android using React Native and Flutter. NexaFlowTech builds secure, offline-capable business apps.",
    },
    "amc": {
        title: "Software AMC & Annual Maintenance Contracts | NexaFlowTech",
        description: "Reliable software maintenance, security monitoring, and priority support contracts for ERP, web, and mobile systems. NexaFlowTech AMC services for businesses in India.",
    },
};

const serviceSchemaMap: Record<string, { name: string; description: string }> = {
    "erpnext": { name: "ERPNext Implementation Services", description: "End-to-end ERPNext implementation including configuration, customization, data migration, training, and ongoing support for manufacturing, retail, and services businesses." },
    "frappe": { name: "Frappe Framework Development", description: "Custom Frappe app development, REST API integrations, workflow automation, and ERPNext customization for enterprise applications." },
    "saas": { name: "SaaS Platform Development", description: "Multi-tenant SaaS platform development with MVP architecture, subscription management, Stripe integration, and scalable cloud infrastructure." },
    "web": { name: "Custom Web Application Development", description: "Next.js and React web application development with SEO optimization, PWA support, and enterprise-grade performance." },
    "mobile": { name: "Mobile App Development", description: "Cross-platform mobile app development using React Native and Flutter for iOS and Android with offline capabilities." },
    "amc": { name: "Software AMC & Annual Maintenance", description: "Annual maintenance contracts for ERP, web, and mobile systems including security updates, bug fixes, and priority support." },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        return { title: "Service Not Found | NexaFlowTech" };
    }

    const seoMeta = serviceSEOMeta[slug] ?? {
        title: `${service.title} | NexaFlowTech`,
        description: service.description,
    };

    const schema = serviceSchemaMap[slug];

    return {
        title: seoMeta.title,
        description: seoMeta.description,
        alternates: {
            canonical: `https://nexaflowtech.com/services/${slug}`,
        },
        openGraph: {
            title: seoMeta.title,
            description: seoMeta.description,
            url: `https://nexaflowtech.com/services/${slug}`,
            type: "website",
        },
        other: schema ? {
            "application/ld+json": JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": schema.name,
                "description": schema.description,
                "provider": {
                    "@type": "Organization",
                    "name": "NexaFlowTech",
                    "url": "https://nexaflowtech.com",
                    "telephone": "+91-83829-06349",
                    "email": "info@nexaflowtech.com",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "545 KA NK, Gayatri Vihar, Phase 2",
                        "addressLocality": "Lucknow",
                        "addressRegion": "Uttar Pradesh",
                        "postalCode": "226011",
                        "addressCountry": "IN"
                    }
                },
                "areaServed": ["India", "USA", "UK", "UAE", "Canada", "Australia"],
                "serviceType": schema.name,
                "url": `https://nexaflowtech.com/services/${slug}`
            })
        } : undefined,
    };
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
    return (
        <details className="group border border-gray-200 rounded-xl overflow-hidden">
            <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-primary-midnight text-left">{question}</span>
                <ChevronDown size={20} className="text-gray-400 flex-shrink-0 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                {answer}
            </div>
        </details>
    );
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = serviceData[slug];

    if (!service) {
        notFound();
    }

    const isErpnext = slug === "erpnext";
    const erpnextStats = [
        { icon: Users, value: "50+", label: "Projects Delivered" },
        { icon: Clock, value: "5+", label: "Years Experience" },
        { icon: Shield, value: "100%", label: "Data Security" },
        { icon: TrendingUp, value: "40%", label: "Avg Cost Reduction" },
    ];

    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-white">{service.title}</span>
                    </nav>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
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

            {isErpnext && (
                <div className="bg-white border-b border-gray-100 py-8">
                    <div className="container mx-auto px-6">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {erpnextStats.map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <stat.icon size={24} />
                                    </div>
                                    <div className="text-3xl font-bold text-primary-midnight">{stat.value}</div>
                                    <div className="text-sm text-gray-500">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div className="container mx-auto px-6 mt-12">
                <div className="grid lg:grid-cols-3 gap-8">

                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">Overview</h2>
                            <div className="prose prose-lg max-w-none text-gray-600">
                                {service.longDescription.split('\n\n').map((para, i) => (
                                    <p key={i} className="mb-4 leading-relaxed">{para}</p>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-6">Key Features</h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                                        <Check size={18} className="text-primary-blue flex-shrink-0" strokeWidth={2.5} />
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-8">Our Implementation Process</h2>
                            <div className="space-y-8">
                                {service.process.map((step, index) => (
                                    <div key={index} className="flex gap-6">
                                        <div className="flex flex-col items-center">
                                            <div className="w-12 h-12 rounded-full bg-primary-midnight text-white flex items-center justify-center font-bold flex-shrink-0 text-lg">
                                                {index + 1}
                                            </div>
                                            {index !== service.process.length - 1 && (
                                                <div className="w-0.5 flex-1 bg-gray-200 my-2"></div>
                                            )}
                                        </div>
                                        <div className="pb-8">
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-primary-midnight mb-8">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {service.faqs.map((faq, i) => (
                                    <FAQItem key={i} question={faq.q} answer={faq.a} />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-primary-midnight text-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-xl font-bold mb-2">Ready to get started?</h3>
                            <p className="text-blue-200 text-sm mb-6">Book a free 30-minute consultation with our ERPNext experts.</p>
                            <div className="space-y-4 mb-8">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm">
                                        <Star size={16} className="text-yellow-400 flex-shrink-0 fill-yellow-400" />
                                        <span className="text-gray-200">{benefit}</span>
                                    </li>
                                ))}
                            </div>
                            <Link href="/contact" className="block">
                                <Button className="w-full bg-secondary-teal hover:bg-teal-600 text-white border-none text-lg py-4">
                                    {service.cta}
                                    <ArrowRight size={18} className="ml-2" />
                                </Button>
                            </Link>
                            <p className="text-center text-gray-400 text-xs mt-4">No commitment required. 100% free consultation.</p>
                        </div>

                        <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                            <h3 className="font-bold text-primary-midnight mb-4">Need something else?</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                We offer a complete range of software development services.
                            </p>
                            <div className="space-y-2">
                                {["erpnext", "frappe", "saas", "web", "mobile", "amc"].filter(s => s !== slug).map(s => (
                                    <Link key={s} href={`/services/${s}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-blue transition-colors py-1">
                                        <ArrowRight size={14} /> {s.charAt(0).toUpperCase() + s.slice(1)} Development
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 text-center">
                            <h4 className="font-bold text-primary-midnight mb-2">Call us directly</h4>
                            <p className="text-2xl font-bold text-primary-blue mb-4">+91 83829 06349</p>
                            <p className="text-xs text-gray-500">Mon-Fri: 9:00 AM – 6:00 PM IST</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}