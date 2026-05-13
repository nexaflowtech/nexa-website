"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const openCalendly = (e: React.MouseEvent) => {
        e.preventDefault();
        // @ts-ignore
        if (window.Calendly) {
            // @ts-ignore
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

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-white/70 backdrop-blur-xl shadow-premium py-3 border-b border-white/40"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <img
                        src="/logo.png"
                        alt="NexaFlowTech Logo"
                        className="h-10 w-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold text-neutral-text-dark hover:text-primary-blue transition-colors font-sans tracking-tight"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={openCalendly} className="relative group flex items-center justify-center">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-teal-400 to-primary-blue rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
                        <Button size="md" className="relative h-11 flex items-center gap-2 bg-primary-midnight text-white hover:bg-gray-900 border border-transparent hover:shadow-lg hover:shadow-blue-500/20 transition-all">
                            <Calendar size={18} className="animate-bounce" style={{ animationDuration: '2s' }} />
                            Schedule Call
                        </Button>
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary-midnight"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 md:hidden"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-base font-medium text-neutral-text-dark hover:text-primary-blue transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={(e) => {
                                    setIsMobileMenuOpen(false);
                                    openCalendly(e);
                                }}
                                className="w-full relative group mt-2"
                            >
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue via-teal-400 to-primary-blue rounded-lg blur opacity-40 animate-pulse"></div>
                                <div className="relative flex items-center justify-center gap-2 w-full text-center px-5 py-3 bg-primary-midnight text-white font-semibold rounded-lg hover:bg-gray-900 transition-all">
                                    <Calendar size={20} className="animate-bounce" style={{ animationDuration: '2s' }} />
                                    Schedule Call
                                </div>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
