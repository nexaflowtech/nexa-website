import type { Metadata } from "next";
import { Geist_Mono, Manrope, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nexaflowtech.com"),
  title: {
    default: "NexaFlowTech | ERP, SaaS & Custom Software Development Company India",
    template: "%s | NexaFlowTech",
  },
  description:
    "NexaFlowTech provides ERPNext implementation, Frappe development, SaaS platforms, CRM systems and custom software solutions for startups, SMEs and enterprises worldwide.",
  keywords: [
    "ERP software development company India",
    "SaaS development company",
    "custom software development India",
    "ERPNext implementation partner",
    "Frappe development company",
    "mobile app development India",
    "enterprise software solutions",
    "business automation software",
    "software company Lucknow",
    "web application development company",
  ],
  authors: [{ name: "NexaFlowTech", url: "https://nexaflowtech.com" }],
  creator: "NexaFlowTech",
  publisher: "NexaFlowTech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    title: "NexaFlowTech | ERP, SaaS & Custom Software Development Company India",
    description:
      "NexaFlowTech provides ERPNext implementation, Frappe development, SaaS platforms, CRM systems and custom software solutions worldwide.",
    url: "https://nexaflowtech.com",
    siteName: "NexaFlowTech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NexaFlowTech - Custom Software Development Company India",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NexaFlowTech | ERP, SaaS & Custom Software Development Company India",
    description:
      "Custom ERPNext, Frappe, and SaaS platform development services for businesses worldwide. Based in Lucknow, India.",
    images: ["/og-image.png"],
    creator: "@nexaflowtech",
  },
  alternates: {
    canonical: "https://nexaflowtech.com",
  },
  verification: {
    google: "AN3p-xK_Cv6m9Q9fHFbuYwczW9JQO9uBSX5k6JtqVVI",
  },
};

// Organization + LocalBusiness JSON-LD Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nexaflowtech.com/#organization",
      name: "NexaFlowTech",
      url: "https://nexaflowtech.com",
      logo: {
        "@type": "ImageObject",
        url: "https://nexaflowtech.com/logo.png",
        width: 200,
        height: 60,
      },
      description:
        "NexaFlowTech is a custom software development company in Lucknow, India, specializing in ERP software development, SaaS platforms, mobile apps, and enterprise automation solutions.",
      foundingDate: "2020",
      areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8382906349",
        contactType: "customer service",
        email: "business@nexaflowtech.com",
        areaServed: ["IN", "US", "GB", "AE", "CA", "AU"],
        availableLanguage: "English",
        contactOption: "TollFree",
      },
      sameAs: [
        "https://www.linkedin.com/company/nexaflowtech",
        "https://clutch.co/profile/nexaflowtech",
        "https://www.goodfirms.co/company/nexaflowtech",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "545 KA NK, Gayatri Vihar, Phase 2",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226011",
        addressCountry: "IN",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Software Development Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Application Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Automation Solutions" } },
        ],
      },
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://nexaflowtech.com/#localbusiness",
      name: "NexaFlowTech",
      image: "https://nexaflowtech.com/og-image.png",
      url: "https://nexaflowtech.com",
      telephone: "+91-8382906349",
      email: "business@nexaflowtech.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "545 KA NK, Gayatri Vihar, Phase 2",
        addressLocality: "Lucknow",
        addressRegion: "Uttar Pradesh",
        postalCode: "226011",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8467",
        longitude: "80.9462",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      servesCuisine: undefined,
      areaServed: [
        { "@type": "Country", name: "India" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "Country", name: "Canada" },
        { "@type": "Country", name: "Australia" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://nexaflowtech.com/#website",
      url: "https://nexaflowtech.com",
      name: "NexaFlowTech",
      description: "ERP, SaaS & Custom Software Development Company in India",
      publisher: {
        "@id": "https://nexaflowtech.com/#organization",
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://nexaflowtech.com/services?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What ERP solutions does NexaFlowTech provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "NexaFlowTech provides ERPNext implementation, customization, integration and support services for startups, SMEs and enterprises."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer custom software development services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, NexaFlowTech builds custom web applications, SaaS platforms and enterprise automation solutions tailored to business workflows."
          }
        },
        {
          "@type": "Question",
          "name": "Does NexaFlowTech serve international clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, NexaFlowTech delivers ERP, SaaS and custom software solutions to clients across the USA, UK, UAE, Canada, Australia and India."
          }
        },
        {
          "@type": "Question",
          "name": "How long does ERPNext implementation take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "ERPNext implementation timelines typically range from 2 to 8 weeks depending on customization requirements and business complexity."
          }
        },
        {
          "@type": "Question",
          "name": "Can NexaFlowTech integrate ERPNext with existing systems?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, NexaFlowTech integrates ERPNext with CRM systems, payment gateways, inventory tools and third-party business platforms."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "ERPNext Implementation and Custom Software Development",
      "provider": {
        "@id": "https://nexaflowtech.com/#organization"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Worldwide"
      },
      "description": "NexaFlowTech provides ERPNext implementation, Frappe development, SaaS platforms, CRM systems and custom enterprise software solutions for startups and businesses globally."
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
