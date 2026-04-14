import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NexaFlowTech | Hire Software Developers in India",
  description:
    "Get in touch with NexaFlowTech for custom ERP, SaaS, mobile app, or web application development. Office in Lucknow, India. Serving clients in USA, UK, UAE, Canada & Australia.",
  alternates: {
    canonical: "https://nexaflowtech.com/contact",
  },
  openGraph: {
    title: "Contact NexaFlowTech | Hire Software Developers in India",
    description:
      "Reach out to NexaFlowTech for ERP software, SaaS development, or custom software projects. Free consultation available.",
    url: "https://nexaflowtech.com/contact",
    type: "website",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
