import type { Metadata } from "next";
import { Geist_Mono, Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NexaFlowTech – Smart ERP & Web Solutions",
  description: "Automate operations with ERPNext, Frappe, and custom software platforms. Built for startups and enterprises.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${inter.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
