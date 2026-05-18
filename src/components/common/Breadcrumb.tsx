import Link from "next/link";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            {items.map((item, index) => (
                <span key={index} className="flex items-center gap-2">
                    <span className="text-gray-600">/</span>
                    {item.href ? (
                        <Link href={item.href} className="hover:text-white transition-colors">{item.label}</Link>
                    ) : (
                        <span className="text-white">{item.label}</span>
                    )}
                </span>
            ))}
        </nav>
    );
}