"use client";

import { ReactNode } from "react";
// import ReactLenis from "@studio-freight/react-lenis"; // Older package
import Lenis from "lenis";
import { useEffect, useRef } from "react";

// Manual Lenis implementation for React 19 compatibility
export function SmoothScroll({ children }: { children: ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            smoothWheel: !isMobile, // Disable smooth scroll on mobile if preferred, or keep it. Original script had !isMobile
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        const rafId = requestAnimationFrame(raf);

        return () => {
            cancelAnimationFrame(rafId);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
