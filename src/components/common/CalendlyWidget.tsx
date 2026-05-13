"use client";
import { useEffect } from "react";

export default function CalendlyWidget() {
    useEffect(() => {
        // Load CSS
        const link = document.createElement("link");
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        // Load Script
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        
        script.onload = () => {
            // Script loaded, ready for popup triggers from buttons
        };
        
        document.body.appendChild(script);

        return () => {
            // Cleanup
            if (document.head.contains(link)) document.head.removeChild(link);
            if (document.body.contains(script)) document.body.removeChild(script);
            
            // Remove the calendly badge if it exists
            const badge = document.querySelector('.calendly-badge-widget');
            if (badge) badge.remove();
        };
    }, []);

    return null;
}
