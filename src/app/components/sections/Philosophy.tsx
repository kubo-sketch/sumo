"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Philosophy() {
    const sectionRef = useRef<HTMLElement>(null);
    // Refs for animation
    const sideFakeRef = useRef<HTMLDivElement>(null);
    const sideRealRef = useRef<HTMLDivElement>(null);
    const shatterRef = useRef<HTMLDivElement>(null);
    const sumoImgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "center center",
                end: "+=600",
                scrub: true,
                pin: true,
                onEnter: () => document.body.classList.add('shake-screen'),
                onLeaveBack: () => document.body.classList.remove('shake-screen'),
            }
        });

        tl.to(sideFakeRef.current, { x: "20%", opacity: 0.5, duration: 1 }, "clash")
            .to(sideRealRef.current, { x: "-20%", scale: 1.1, duration: 1 }, "clash")
            .to(shatterRef.current, { opacity: 1, scale: 1.2, duration: 0.1 }, ">")
            .to(sideFakeRef.current, { opacity: 0, scale: 0, duration: 0.2 }, "<")
            .to(sumoImgRef.current, { scale: 1.6, filter: "brightness(1.5) drop-shadow(0 0 20px cyan)", duration: 0.5 });

        return () => {
            tl.kill(); // Cleanup
        };
    }, []);

    return (
        <section id="philosophy" ref={sectionRef} className="relative min-h-screen bg-pitch-black flex items-center overflow-hidden">
            <div className="container mx-auto px-4 grid grid-cols-2 gap-0 relative">
                {/* Left Side (Fake) */}
                <div ref={sideFakeRef} className="h-[60vh] border-r border-gray-800 flex flex-col items-center justify-center relative bg-red-900/5">
                    <div className="text-6xl grayscale opacity-50 mb-4">🎰</div>
                    <h3 className="font-mono text-gray-500 text-xl md:text-3xl text-center px-4">
                        BETTING MAKES<br />LOSERS
                    </h3>
                </div>

                {/* Right Side (Real) */}
                <div ref={sideRealRef} className="h-[60vh] flex flex-col items-center justify-center relative">
                    <div className="relative w-64 h-auto z-10">
                        <Image
                            ref={sumoImgRef}
                            src="/cyber_sumo_fullbody.webp"
                            alt="Cyber Sumo"
                            width={500}
                            height={500}
                            className="object-contain drop-shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                        />
                    </div>
                    <h3 className="font-oswald text-neon-cyan text-xl md:text-3xl mt-4 text-center px-4 tracking-widest">
                        $SMO MAKES<br />PARTNERS
                    </h3>
                </div>

                {/* Shatter Overlay */}
                <div ref={shatterRef} className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 scale-50">
                    <h2
                        className="text-[10vw] font-bold text-transparent stroke-white font-oswald italic text-stroke-white-sm"
                        style={{ textShadow: '10px 10px 0px rgba(0,255,255,0.5)' }}
                    >
                        INVESTOMER
                    </h2>
                </div>
            </div>
        </section>
    );
}
