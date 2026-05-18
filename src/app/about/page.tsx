import { Target, Eye, Heart, Zap, Code, Database, Smartphone, Globe, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About NexaFlowTech — ERPNext Partner in Lucknow, India",
  description: "NexaFlowTech is a Lucknow-based custom software development company with expertise in ERP systems, ERPNext, SaaS platforms, and enterprise web solutions.",
  alternates: { canonical: "https://nexaflowtech.com/about" },
};

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Happy Clients" },
  { value: "6", label: "Countries Served" },
];

const expertise = [
  { icon: Database, title: "ERP Development", desc: "ERPNext & Frappe implementations for manufacturing, retail, and services." },
  { icon: Code, title: "SaaS Platforms", desc: "Multi-tenant SaaS architecture built to scale globally." },
  { icon: Globe, title: "Web Applications", desc: "High-performance Next.js and React apps with SEO-first architecture." },
  { icon: Smartphone, title: "Mobile Apps", desc: "Cross-platform iOS & Android apps using React Native & Flutter." },
];

const values = [
  { icon: Heart, title: "Customer First", desc: "Your success is our success. We prioritize your needs in every decision." },
  { icon: Zap, title: "Agility", desc: "We move fast, adapt quickly, and deliver value iteratively." },
  { icon: Target, title: "Excellence", desc: "We hold ourselves to the highest standards of code quality and design." },
];

const reasons = [
  "Transparent pricing with no hidden costs",
  "Fixed timelines with money-back guarantee",
  "Dedicated project manager for every engagement",
  "Post-launch support and AMC options",
  "Open-source first — no vendor lock-in",
  "Global delivery with local support"
];

export default function AboutPage() {
  return (
    <div className="bg-neutral-bg min-h-screen">
      <section className="bg-primary-midnight text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-blue/10 rounded-l-full blur-3xl"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About NexaFlowTech</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Bridging the gap between startup agility and enterprise stability for clients across India, USA, UK, UAE & beyond.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-gray-50 rounded-2xl">
                <div className="text-4xl font-bold text-primary-blue mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-blue-50 text-primary-blue text-sm font-bold rounded-full mb-4">Who We Are</span>
              <h2 className="text-3xl font-bold text-primary-midnight mb-6">Software That Works, Partners Who Care</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                NexaFlowTech is a <strong>Lucknow-based custom software development company</strong> specialising in ERPNext implementation, Frappe development, SaaS platforms, and high-performance web & mobile solutions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded on the principle that technology should be an enabler — not a bottleneck — we bring together a team of seasoned developers, architects, and business analysts dedicated to your success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our clients span startups and SMEs in India to enterprises in the USA, UK, UAE, Canada, and Australia. Whether you need a full-scale ERP project, a scalable SaaS platform, or a custom mobile app — NexaFlowTech is your trusted partner.
              </p>
              <Link href="/contact">
                <Button className="bg-primary-blue text-white">Work With Us <ArrowRight size={16} className="ml-2" /></Button>
              </Link>
            </div>
            <div className="bg-primary-midnight text-white p-10 rounded-2xl">
              <h3 className="text-xl font-bold mb-6">Why Clients Choose Us</h3>
              <div className="space-y-4">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <Check size={18} className="text-secondary-teal flex-shrink-0 mt-0.5" />
                    <span className="text-gray-200">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-teal-50 text-secondary-teal text-sm font-bold rounded-full mb-4">What We Do</span>
            <h2 className="text-3xl font-bold text-primary-midnight mb-4">Our Core Expertise</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Over 5 years of delivering enterprise-grade software across multiple industries and countries.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-lg hover:border-primary-blue/20 transition-all">
                <div className="w-14 h-14 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mx-auto mb-5">
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-primary-midnight mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-neutral-bg p-10 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-blue-50 text-primary-blue rounded-xl flex items-center justify-center mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To democratize access to enterprise-grade technology for businesses of all sizes, enabling them to operate smarter and grow faster — whether they are a startup in Lucknow or an enterprise in New York.
              </p>
            </div>
            <div className="bg-neutral-bg p-10 rounded-2xl border border-gray-100">
              <div className="w-14 h-14 bg-teal-50 text-secondary-teal rounded-xl flex items-center justify-center mb-6">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-bold text-primary-midnight mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the global partner of choice for digital infrastructure, known for innovation, reliability, and transformative impact across India, USA, UK, UAE, Canada, and Australia.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-neutral-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-blue-50 text-primary-blue text-sm font-bold rounded-full mb-4">How We Work</span>
            <h2 className="text-3xl font-bold text-primary-midnight mb-4">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary-midnight text-white rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-primary-midnight mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-midnight text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Work With a Trusted Software Partner</h2>
          <p className="text-blue-200 max-w-2xl mx-auto mb-2">545 KA NK, Gayatri Vihar, Phase 2, Lucknow, Uttar Pradesh 226011, India</p>
          <p className="text-blue-200 mb-2">+91 8382906349 &nbsp;|&nbsp; info@nexaflowtech.com</p>
          <p className="text-blue-300 text-sm mb-10">Monday – Friday: 9:00 AM – 6:00 PM IST</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services">
              <Button className="bg-primary-blue text-white">Explore Services</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">Get Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}