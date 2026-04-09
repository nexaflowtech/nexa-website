import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: ReactNode;
}

export default function Button({
    className,
    variant = "primary",
    size = "md",
    children,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-primary-blue text-white hover:bg-blue-600 shadow-tactile hover:shadow-premium active:scale-[0.98]",
        secondary: "bg-secondary-teal text-white hover:bg-teal-600 shadow-tactile active:scale-[0.98]",
        outline: "border-2 border-primary-blue text-primary-blue hover:bg-blue-50 active:scale-[0.98]",
        ghost: "text-primary-blue hover:bg-blue-50 active:scale-[0.98]",
    };

    const sizes = {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
    };

    return (
        <button
            className={twMerge(
                clsx(
                    "inline-flex items-center justify-center rounded-xl font-display font-bold tracking-tight transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:opacity-50 disabled:cursor-not-allowed",
                    variants[variant],
                    sizes[size],
                    className
                )
            )}
            {...props}
        >
            {children}
        </button>
    );
}
