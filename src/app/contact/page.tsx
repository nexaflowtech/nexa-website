"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "a2e95ac0-5e3c-49a9-84ed-e6d29da1c791", // Replace with actual key
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    message: formData.message,
                    subject: `New Contact Form Submission from ${formData.name}`,
                    from_name: "NexaFlowTech Website",
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitted(true);
                setFormData({ name: "", email: "", company: "", message: "" });
            } else {
                alert("Something went wrong. Please try again or email us directly.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Connection error. Please check your internet and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-neutral-bg min-h-screen pb-20">
            <section className="bg-primary-midnight text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Ready to transform your business? Let's start a conversation.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-6 mt-16">
                <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">

                    {/* Contact Info */}
                    <div className="flex-1 lg:w-1/3 space-y-8">
                        <h2 className="text-3xl font-bold text-primary-midnight mb-6">Contact Information</h2>
                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-blue-100 text-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Our Office</h3>
                                <p className="text-gray-600">123 Tech Park, Innovation Hub,<br />Bangalore, India 560100</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-teal-100 text-secondary-teal rounded-lg flex items-center justify-center flex-shrink-0">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                                <p className="text-gray-600">business@nexaflowtech.com</p>
                                <p className="text-gray-600">info@nexaflowtech.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                                <p className="text-gray-600">Mon-Fri: 9am - 6pm IST</p>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100">
                            <h4 className="font-bold text-primary-blue mb-2">Need a quick answer?</h4>
                            <p className="text-sm text-gray-600 mb-4">Check out our FAQ section or chat with our support bot.</p>
                            <Button variant="outline" size="sm" className="bg-white hover:bg-white text-primary-blue">Visit Help Center</Button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="flex-1 lg:w-2/3 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100">
                        {submitted ? (
                            <div className="text-center py-16">
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                                <p className="text-gray-600 mb-8">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <Button onClick={() => setSubmitted(false)} variant="outline">Send Another Message</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <h2 className="text-2xl font-bold text-primary-midnight mb-6">Send us a Message</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-gray-700">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="company" className="text-sm font-semibold text-gray-700">Company</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                                        placeholder="Company Name (Optional)"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-lg">
                                    {isSubmitting ? "Sending..." : "Submit Inquiry"}
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
