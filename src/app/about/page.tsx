import { Target, Eye, Heart, Zap, Code, Database, Smartphone, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About NexaFlowTech | Software Development Company in Lucknow, India",
  description:
    "NexaFlowTech is a Lucknow-based custom software development company with expertise in ERP systems, ERPNext, SaaS platforms, and enterprise web solutions. Serving global clients since 2020.",
  alternates: {
    canonical: "https://nexaflowtech.com/about",
  },
  openGraph: {
    title: "About NexaFlowTech | Software Development Company in Lucknow, India",
    description:
      "Learn about NexaFlowTech — a Lucknow-based ERP and custom software company serving startups and enterprises in India, USA, UK, UAE, Canada & Australia.",
    url: "https://nexaflowtech.com/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      {/* Header */}
      <section className="bg-primary-midnight text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About NexaFlowTech — Software Development Company in Lucknow, India
          </h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Bridging the gap between startup agility and enterprise stability for clients across India, USA, UK, UAE & beyond.
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
                NexaFlowTech is a premier <strong>custom software development company</strong> based in Lucknow, India, specialising in{" "}
                <Link href="/services/erpnext" className="text-primary-blue hover:underline font-semibold">
                  ERPNext implementation
                </Link>
                , custom Frappe development, SaaS platform development, and high-performance web & mobile solutions.
                We help businesses streamline operations, automate workflows, and scale efficiently.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded on the principle that technology should be an enabler — not a bottleneck — we bring together a team of seasoned developers,
                architects, and business analysts dedicated to your success. Our clients span startups and SMEs in India to enterprises in the
                USA, UK, UAE, Canada, and Australia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you need a full-scale{" "}
                <Link href="/services/erpnext" className="text-primary-blue hover:underline font-semibold">
                  ERP software development
                </Link>{" "}
                project, a scalable{" "}
                <Link href="/services/saas" className="text-primary-blue hover:underline font-semibold">
                  SaaS platform
                </Link>
                , or a custom mobile app — NexaFlowTech is the trusted partner for companies that demand quality and speed.
              </p>
            </div>
            <div className="flex-1">
              <Image
                src="/images/illustration-about.svg"
                alt="NexaFlowTech software development team in Lucknow, India"
                width={800}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* EEAT: Key Expertise */}
      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary-midnight mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Over 5 years of delivering enterprise-grade software across multiple industries and countries.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Database, label: "ERP Development", desc: "ERPNext & Frappe implementations for manufacturing, retail, and services." },
              { icon: Code, label: "SaaS Platforms", desc: "Multi-tenant SaaS architecture built to scale globally." },
              { icon: Globe, label: "Web Applications", desc: "High-performance Next.js and React apps with SEO-first architecture." },
              { icon: Smartphone, label: "Mobile Apps", desc: "Cross-platform iOS & Android apps using React Native & Flutter." },
            ].map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <div className="w-12 h-12 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-primary-midnight mb-2">{item.label}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-neutral-bg p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-primary-blue rounded-full flex items-center justify-center mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To democratize access to enterprise-grade technology for businesses of all sizes, enabling them to operate smarter and grow faster —
                whether they are a startup in Lucknow or an enterprise in New York.
              </p>
            </div>
            <div className="bg-neutral-bg p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-teal-100 text-secondary-teal rounded-full flex items-center justify-center mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the global partner of choice for digital infrastructure, known for innovation, reliability, and transformative impact across
                India, USA, UK, UAE, Canada, and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-neutral-bg">
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

      {/* EEAT: Contact Info & Trust */}
      <section className="py-16 bg-primary-midnight text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Work With a Trusted Software Partner</h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-4">
            Based at 545 KA NK, Gayatri Vihar Phase 2, Lucknow, Uttar Pradesh 226011, India.
          </p>
          <p className="text-blue-200 mb-2">📞 +91-83829-06349 &nbsp;|&nbsp; ✉️ business@nexaflowtech.com</p>
          <p className="text-blue-300 text-sm mb-10">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="px-8 py-4 bg-primary-blue text-white rounded-xl font-bold hover:bg-blue-700 transition-colors"
            >
              Explore Our Software Services
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
