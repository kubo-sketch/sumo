"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Ensure plugin is registered
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Market() {
    const sectionRef = useRef<HTMLElement>(null);
    const beamRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Text Decode Animation
        gsap.to(".decode-market", {
            scrollTrigger: {
                trigger: "#market",
                start: "top 80%",
            },
            duration: 1,
            text: { value: "THE LAST BLUE OCEAN", delimiter: "" },
            ease: "none"
        });

        // Beam Scroll Animation
        gsap.to(beamRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "center center",
                end: "bottom center",
                scrub: 1,
            },
            height: "150vh",
            ease: "none"
        });
    }, []);

    return (
        <section id="market" ref={sectionRef} className="relative min-h-screen bg-pitch-black py-20 overflow-hidden border-t border-gray-900">
            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col items-center justify-center">
                <h2 className="text-5xl md:text-8xl mb-4 text-center text-white font-oswald decode-market">LOADING DATA...</h2>
                <p className="text-gray-400 font-mono text-center mb-12 max-w-2xl">
                    SUMO IS THE UNTAPPED GIANT.<br />
                    <span className="text-neon-cyan">AS SEEN ON ABEMA</span>
                </p>

                <div className="relative w-full max-w-5xl h-[60vh] border border-gray-800 bg-gray-900/50 rounded-lg overflow-hidden flex items-center justify-center group interactable">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]" />

                    <div className="text-gray-600 font-mono text-sm absolute top-4 left-4">
                        GLOBAL_MARKET_STATUS: <span className="text-red-500">RED OCEAN</span>
                    </div>

                    {/* Animated Blobs */}
                    <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-red-900/20 rounded-full blur-xl animate-pulse" />
                    <div className="absolute top-1/4 right-1/3 w-40 h-40 bg-red-900/20 rounded-full blur-xl animate-pulse delay-500" />

                    {/* Center Ping */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_30px_#00FFFF] z-20 animate-ping" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-cyan rounded-full z-20" />

                    {/* Beam */}
                    <div
                        ref={beamRef}
                        id="the-beam"
                        className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-2 md:w-20 bg-gradient-to-t from-neon-cyan via-white to-neon-cyan origin-bottom opacity-80 shadow-[0_0_50px_#00FFFF] mix-blend-screen h-0 z-10"
                    >
                        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap text-black font-bold text-xl md:text-4xl tracking-widest bg-neon-cyan px-4">
                            BLUE OCEAN
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
