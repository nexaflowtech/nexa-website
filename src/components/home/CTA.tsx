import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="bg-gradient-to-r from-primary-midnight to-blue-900 rounded-3xl p-12 lg:p-20 text-center text-white relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-10">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-400 rounded-full mix-blend-overlay filter blur-3xl"></div>
                    </div>

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                            Ready to Modernize Your Business?
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 leading-relaxed">
                            Join the forward-thinking companies using NexaFlowTech to build better software and scale faster.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-primary-midnight hover:bg-gray-100 w-full sm:w-auto px-10 py-4 text-lg font-bold">
                                    Start Your Project
                                    <ArrowRight size={20} className="ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
