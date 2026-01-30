"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const outlineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(pointer: coarse)").matches) return; // Disable on touch devices

        const dot = dotRef.current;
        const outline = outlineRef.current;

        const moveCursor = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            
            if (dot) {
                dot.style.transform = `translate(${clientX}px, ${clientY}px) translate(-50%, -50%)`;
            }
            
            if (outline) {
                // GSAP for smooth trailing effect
                gsap.to(outline, {
                    x: clientX,
                    y: clientY,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        };

        const handleHoverStart = () => {
            if (outline) outline.classList.add("scale-[1.5]", "bg-neon-cyan/10");
        };
        const handleHoverEnd = () => {
            if (outline) outline.classList.remove("scale-[1.5]", "bg-neon-cyan/10");
        };

        window.addEventListener("mousemove", moveCursor);

        // Attach hover listeners to interactive elements
        const addListeners = () => {
             document.querySelectorAll('a, button, .interactable').forEach(el => {
                el.addEventListener('mouseenter', handleHoverStart);
                el.addEventListener('mouseleave', handleHoverEnd);
            });
        };

        addListeners();
        
        // Observer to add listeners to new elements
        const observer = new MutationObserver(addListeners);
        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            observer.disconnect();
            document.querySelectorAll('a, button, .interactable').forEach(el => {
                el.removeEventListener('mouseenter', handleHoverStart);
                el.removeEventListener('mouseleave', handleHoverEnd);
            });
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="fixed top-0 left-0 w-2 h-2 bg-neon-cyan rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2" />
            <div ref={outlineRef} className="fixed top-0 left-0 w-10 h-10 border border-neon-cyan/50 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out" />
        </>
    );
}
