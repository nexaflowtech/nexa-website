import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <img
                                src="/logo.png"
                                alt="NexaFlowTech Logo"
                                className="h-10 w-auto object-contain brightness-0 invert"
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            NexaFlowTech is a premier <strong className="text-gray-300">software development company in India</strong>, delivering custom ERP solutions, SaaS platforms, and enterprise automation for businesses in USA, UK, UAE & Australia.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="https://www.linkedin.com/company/nexaflowtech" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://www.instagram.com/nexaflowtech007?igsh=MW5zcXRra2Q2bHF0cQ==" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Company</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/about" className="hover:text-primary-blue transition-colors">About Us</Link></li>
                            <li><Link href="/careers" className="hover:text-primary-blue transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-primary-blue transition-colors">Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-primary-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Software Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/services/erpnext" className="hover:text-primary-blue transition-colors">ERPNext Implementation</Link></li>
                            <li><Link href="/services/frappe" className="hover:text-primary-blue transition-colors">Frappe Framework Development</Link></li>
                            <li><Link href="/services/saas" className="hover:text-primary-blue transition-colors">SaaS Platform Development</Link></li>
                            <li><Link href="/services/web" className="hover:text-primary-blue transition-colors">Custom Web App Development</Link></li>
                            <li><Link href="/services/mobile" className="hover:text-primary-blue transition-colors">Mobile App Development</Link></li>
                        </ul>
                    </div>

                    {/* Solutions */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Business Solutions</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/solutions" className="hover:text-primary-blue transition-colors">Manufacturing ERP</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary-blue transition-colors">Retail Management</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary-blue transition-colors">Healthcare Software</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary-blue transition-colors">Education & LMS</Link></li>
                            <li><Link href="/solutions" className="hover:text-primary-blue transition-colors">Logistics & Supply Chain</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary-blue mt-0.5" />
                                <span>545 KA NK, Gayatri Vihar, Phase 2,<br /> Lucknow, Uttar Pradesh, 226011.</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary-blue" />
                                <span>+91 8382906349</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary-blue" />
                                <span>info@nexaflowtech.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} NexaFlowTech. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
