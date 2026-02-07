import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white">
                            NexaFlow<span className="text-primary-blue">Tech</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering businesses with smart ERP solutions, custom software, and scalable digital infrastructure.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors">
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
                        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link href="/services/erpnext" className="hover:text-primary-blue transition-colors">ERPNext Implementation</Link></li>
                            <li><Link href="/services/frappe" className="hover:text-primary-blue transition-colors">Frappe Development</Link></li>
                            <li><Link href="/services/web" className="hover:text-primary-blue transition-colors">Custom Web Apps</Link></li>
                            <li><Link href="/services/saas" className="hover:text-primary-blue transition-colors">SaaS Development</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-white">Get in Touch</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary-blue mt-0.5" />
                                <span>123 Tech Park, Innovation Hub,<br />Bangalore, India 560100</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary-blue" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary-blue" />
                                <span>hello@nexaflowtech.com</span>
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
