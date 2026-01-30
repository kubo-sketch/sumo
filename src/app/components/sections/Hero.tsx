"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { RainCanvas } from "@/app/components/features/RainCanvas";

// Ensure plugin is registered
if (typeof window !== "undefined") {
    gsap.registerPlugin(TextPlugin);
}

export default function Hero() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Decode effect for title
        tl.to(titleRef.current, {
            opacity: 1,
            duration: 1,
            // ease: "power2.out"
        })
            .to(".decode-target-hero", {
                duration: 1,
                text: { value: "THE KING HAS ARRIVED", delimiter: "" },
                ease: "none"
            })
            .to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, "-=0.5");

    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;

        const x = (clientX / innerWidth - 0.5) * 20;
        const y = (clientY / innerHeight - 0.5) * 20;

        if (badgeRef.current) {
            gsap.to(badgeRef.current, {
                rotationY: x * 2,
                rotationX: -y * 2,
                duration: 0.5,
                overwrite: 'auto'
            });
        }
    };

    return (
        <section
            id="hero"
            className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden"
            onMouseMove={handleMouseMove}
        >
            <div className="absolute inset-0 z-[-1] pointer-events-none">
                <RainCanvas />
                <video
                    autoPlay loop muted playsInline
                    className="w-full h-full object-cover opacity-60"
                // poster="/poster-hero.jpg"
                >
                    <source src="/hero_cyber_sumo_back_rain.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/50 bg-[url('/grid-overlay.svg')] opacity-50" />
            </div>

            <div className="perspective-1000 absolute top-20 right-4 md:right-10 z-20">
                <div ref={badgeRef} className="border border-neon-cyan bg-black/50 backdrop-blur-sm p-4 cursor-pointer hover:bg-neon-cyan/20 transition-colors shadow-[0_0_20px_rgba(0,255,255,0.5)] transform-style-preserve-3d interactive">
                    <div className="text-neon-cyan font-mono text-xs text-center">[ISL OFFICIAL PRODUCT]</div>
                    <div className="w-16 h-16 mx-auto mt-2 bg-cover bg-center bg-neon-cyan/10" style={{ backgroundImage: "url('/hologram_seal.webp')" }} />
                </div>
            </div>

            <div className="relative z-10 text-center mix-blend-difference flex flex-col items-center">
                <h1 ref={titleRef} className="text-[15vw] md:text-[20vw] leading-none font-bold text-transparent stroke-white opacity-0 text-stroke-white" >
                    $SMO
                </h1>
                <p className="text-white font-mono text-xl md:text-4xl tracking-[0.2em] mt-4 decode-target-hero">
                    _ _ _ _ _ _ _ _ _ _
                </p>
                <p className="text-neon-cyan font-mono text-sm md:text-lg mt-2 tracking-wider">
                    The Only Official Token of International Sumo League
                </p>

                <div ref={ctaRef} className="mt-8 flex gap-4 opacity-0 translate-y-4">
                    <button className="interactable border border-neon-cyan bg-neon-cyan/10 text-neon-cyan px-8 py-3 font-mono hover:bg-neon-cyan hover:text-black transition-all">
                        BUY $SMO
                    </button>
                    <button className="interactable border border-gray-500 text-gray-400 px-8 py-3 font-mono hover:border-white hover:text-white transition-all">
                        VIEW CHART
                    </button>
                </div>
            </div>

            {/* Marquee */}
            <div className="absolute bottom-0 w-full bg-neon-cyan text-black font-oswald text-2xl py-2 overflow-hidden whitespace-nowrap z-20">
                <div className="animate-marquee inline-block whitespace-nowrap">
                    FEATURED ON JAPAN'S NO.1 TV PLATFORM: ABEMA +++ BLUE OCEAN MARKET +++ REAL YIELD +++ FEATURED ON JAPAN'S NO.1 TV PLATFORM: ABEMA +++ BLUE OCEAN MARKET +++ REAL YIELD +++
                </div>
            </div>
        </section>
    );
}
