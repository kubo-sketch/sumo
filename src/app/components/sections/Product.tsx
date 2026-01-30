"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Product() {
    // Using simple useEffect for the animation
    useEffect(() => {
        if (typeof window !== "undefined") {
            gsap.registerPlugin(ScrollTrigger);
        }

        gsap.to(".decode-product", {
            scrollTrigger: {
                trigger: "#product",
                start: "top 80%",
            },
            duration: 1,
            text: { value: "365-DAY BATTLE", delimiter: "" },
            ease: "none"
        });
    }, []);

    return (
        <section id="product" className="relative min-h-screen bg-pitch-black py-20 border-y border-neon-cyan/30">
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 font-mono">
                    <div className="bg-neon-cyan/10 border border-neon-cyan p-2 inline-block mb-4 text-xs animate-pulse">
                        PROTOCOL: ACTIVE
                    </div>
                    <h2 className="text-4xl md:text-6xl font-oswald mb-6 text-white decode-product">
                        CONNECTING...
                    </h2>
                    <p className="text-2xl text-white mb-6">SUMO NEVER SLEEPS.</p>
                    <div className="space-y-4 text-gray-400">
                        <p>Official Game: <strong className="text-neon-cyan">CYBER PAPER SUMO (Beta)</strong></p>
                        <ul className="space-y-2 pl-4 border-l border-gray-800">
                            <li>{">"} TAP</li>
                            <li>{">"} FIGHT</li>
                            <li>{">"} WIN JPYC</li>
                        </ul>
                    </div>
                </div>

                <div className="order-1 md:order-2 relative h-[50vh] bg-black border border-neon-cyan/50 rounded-lg overflow-hidden group interactable">
                    <div className="absolute inset-0 bg-neon-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay" />
                    <video
                        autoPlay loop muted playsInline
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500 scale-100 group-hover:scale-105 transition-transform"
                    >
                        <source src="/product_hologram_paper_sumo.mp4" type="video/mp4" />
                    </video>

                    <div className="absolute inset-0 p-4 pointer-events-none flex items-center justify-center">
                        <div className="text-neon-cyan/20 text-6xl font-mono font-bold italic text-center">
                            PREDICTION<br />ENGINE
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
