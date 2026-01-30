"use client";
import { useRef } from "react";
import gsap from "gsap";

export default function Footer() {
    const whiteoutRef = useRef<HTMLDivElement>(null);
    const welcomeTextRef = useRef<HTMLHeadingElement>(null);

    const handleSaltRitual = () => {
        // Create Salt particles
        const container = document.body;
        for (let i = 0; i < 200; i++) {
            const p = document.createElement("div");
            p.classList.add("salt-particle");

            const size = Math.random() * 6 + 2;
            p.style.width = size + "px";
            p.style.height = size + "px";
            p.style.left = Math.random() * 100 + "vw";
            p.style.top = "-20px";

            container.appendChild(p);

            gsap.to(p, {
                y: window.innerHeight + 100,
                x: (Math.random() - 0.5) * 300,
                rotation: Math.random() * 720,
                duration: Math.random() * 1.5 + 0.5,
                ease: "power1.in",
                onComplete: () => { p.remove(); }
            });
        }

        // Whiteout Effect
        if (whiteoutRef.current && welcomeTextRef.current) {
            gsap.to(whiteoutRef.current, {
                opacity: 1,
                duration: 2,
                delay: 0.5,
                ease: "power3.in",
                onComplete: () => {
                    gsap.to(welcomeTextRef.current, { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)" });
                }
            });
        }
    };

    return (
        <section id="cta" className="relative min-h-[80vh] flex flex-col items-center justify-center bg-pitch-black overflow-hidden">
            <div className="relative z-10 text-center px-4">
                <h2 className="text-6xl md:text-9xl font-oswald text-white mb-12">
                    WAITING...
                </h2>

                <div className="flex flex-col md:flex-row gap-6 justify-center w-full">
                    <button
                        onClick={handleSaltRitual}
                        className="interactable group relative px-12 py-6 bg-transparent overflow-hidden border-2 border-neon-cyan transition-all duration-300 hover:shadow-[0_0_30px_#00FFFF]"
                    >
                        <span className="relative z-10 font-bold text-xl tracking-widest group-hover:text-black transition-colors">
                            BUY $SMO (UNISWAP)
                        </span>
                        <div className="absolute inset-0 bg-neon-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-200" />
                    </button>

                    <button className="interactable group relative px-12 py-6 bg-transparent overflow-hidden border-2 border-gray-600 transition-all duration-300 hover:border-white">
                        <span className="relative z-10 font-bold text-xl tracking-widest text-gray-400 group-hover:text-white transition-colors">
                            VIEW CHART
                        </span>
                    </button>
                </div>
            </div>

            {/* Whiteout / Welcome Layer */}
            <div ref={whiteoutRef} className="fixed inset-0 bg-white pointer-events-none opacity-0 z-50 flex items-center justify-center">
                <h1 ref={welcomeTextRef} className="text-black font-oswald text-6xl md:text-8xl tracking-widest opacity-0 scale-90">
                    WELCOME TO THE HEYA
                </h1>
            </div>

            {/* Bottom Footer Info */}
            <div className="absolute bottom-0 w-full bg-black py-12 border-t border-gray-900 text-center font-mono text-gray-600 text-xs md:text-sm">
                <div className="mb-8">
                    <h3 className="text-gray-400 mb-4 tracking-widest">THE COUNCIL</h3>
                    <div className="flex justify-center gap-8 opacity-50">
                        <span>ISL (International Sumo League)</span>
                        <span>abc Corporation</span>
                    </div>
                </div>
                <p>OPERATED BY THE COLLECTIVE (BVI).</p>
                <p className="mt-2 text-neon-cyan/50">[ISL OFFICIAL LICENSED PRODUCT]</p>
                <p className="mt-8 opacity-30">&copy; 2026 CYBER SUMO REVOLUTION. ALL RIGHTS RESERVED.</p>
            </div>
        </section>
    );
}
