"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Calendar, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true, subLinks: [
        { name: "ERPNext Implementation", href: "/services/erpnext" },
        { name: "Frappe Development", href: "/services/frappe" },
        { name: "SaaS Platform Development", href: "/services/saas" },
        { name: "Custom Web Development", href: "/services/web" },
        { name: "Mobile App Development", href: "/services/mobile" },
        { name: "AMC & Support", href: "/services/amc" },
    ]},
    { name: "Solutions", href: "/solutions", hasDropdown: true, subLinks: [
        { name: "Manufacturing ERP", href: "/solutions/manufacturing" },
        { name: "Retail ERP", href: "/solutions/retail" },
        { name: "Healthcare Software", href: "/solutions/healthcare" },
        { name: "Logistics ERP", href: "/solutions/logistics" },
        { name: "Education ERP", href: "/solutions/education" },
    ]},
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // @ts-expect-error - Calendly widget integration
        if (window.Calendly) {
            // @ts-expect-error - Calendly widget integration
            window.Calendly.initPopupWidget({ url: 'https://calendly.com/nexaflowtech007/30min' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/70 backdrop-blur-xl shadow-premium py-3 border-b border-white/40"
                : "bg-transparent py-6"
                }`}
            ref={dropdownRef}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="NexaFlowTech Logo"
                        className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative">
                            {link.hasDropdown ? (
                                <button
                                    onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                    className="flex items-center gap-1 text-sm font-bold text-neutral-text-dark hover:text-primary-blue transition-colors font-sans tracking-tight"
                                >
                                    {link.name}
                                    <ChevronDown size={14} className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-sm font-bold text-neutral-text-dark hover:text-primary-blue transition-colors font-sans tracking-tight"
                                >
                                    {link.name}
                                </Link>
                            )}

                            <AnimatePresence>
                                {link.hasDropdown && openDropdown === link.name && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-50"
                                    >
                                        <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45"></div>
                                        {link.subLinks?.map((subLink) => (
                                            <Link
                                                key={subLink.name}
                                                href={subLink.href}
                                                onClick={() => setOpenDropdown(null)}
                                                className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-blue rounded-lg transition-colors"
                                            >
                                                <span>{subLink.name}</span>
                                                <ArrowRight size={12} className="text-gray-400" />
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    <button
                        onClick={openCalendly}
                        className="relative h-11 px-6 flex items-center gap-2 bg-primary-blue text-white font-bold rounded-xl hover:bg-blue-700 border border-transparent hover:shadow-lg hover:shadow-blue-500/30 transition-all ml-4"
                        style={{ boxShadow: '0 0 20px rgba(8, 112, 184, 0.4)' }}
                    >
                        <Calendar size={18} className="animate-bounce" style={{ animationDuration: '2s' }} />
                        Schedule Call
                    </button>
                </nav>

                <button
                    className="lg:hidden p-2 text-primary-midnight"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 lg:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.hasDropdown ? (
                                        <>
                                            <button
                                                onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                                                className="flex items-center justify-between w-full py-3 text-base font-medium text-neutral-text-dark hover:text-primary-blue"
                                            >
                                                {link.name}
                                                <ChevronDown size={16} className={`transition-transform ${openDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {openDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="pl-4 space-y-1 mb-2"
                                                    >
                                                        {link.subLinks?.map((subLink) => (
                                                            <Link
                                                                key={subLink.name}
                                                                href={subLink.href}
                                                                onClick={() => {
                                                                    setIsMobileMenuOpen(false);
                                                                    setOpenDropdown(null);
                                                                }}
                                                                className="block py-2 text-sm text-gray-600 hover:text-primary-blue"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block py-3 text-base font-medium text-neutral-text-dark hover:text-primary-blue"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <button
                                onClick={(e) => {
                                    setIsMobileMenuOpen(false);
                                    openCalendly(e);
                                }}
                                className="w-full mt-4 flex items-center justify-center gap-2 px-5 py-3 bg-primary-blue text-white font-semibold rounded-lg hover:bg-blue-700"
                            >
                                <Calendar size={20} />
                                Schedule Call
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}