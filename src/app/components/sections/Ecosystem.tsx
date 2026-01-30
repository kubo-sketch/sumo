"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Ecosystem() {
    const liquidRef = useRef<HTMLDivElement>(null);
    const tvlRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        ScrollTrigger.create({
            trigger: "#ecosystem",
            start: "top center",
            onEnter: () => {
                // Decode Text
                gsap.to(".decode-ecosystem", {
                    duration: 1,
                    text: { value: "EAT. FIGHT. BURN.", delimiter: "" },
                    ease: "none"
                });

                if (liquidRef.current) {
                    gsap.to(liquidRef.current, { height: "85%", duration: 2.5, ease: "elastic.out(1, 0.5)" });
                }

                const tvlObj = { val: 0 };
                gsap.to(tvlObj, {
                    val: 450000000,
                    duration: 4,
                    ease: "power2.out",
                    onUpdate: function () {
                        if (tvlRef.current) {
                            tvlRef.current.innerText = Math.floor(tvlObj.val).toLocaleString();
                        }
                    }
                });
            }
        });
    }, []);

    return (
        <section id="ecosystem" className="relative min-h-screen bg-gray-900 py-20 flex flex-col items-center justify-center">
            {/* BG Video */}
            <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src="/ecosystem_cyber_chanko_pot.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative z-10 text-center w-full max-w-4xl px-4">
                <h2 className="text-5xl md:text-7xl text-white mb-4 font-oswald decode-ecosystem">LOADING...</h2>
                <p className="text-neon-cyan font-mono mb-12">POWERED BY REAL MONEY (REVENUE)</p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 text-sm font-mono text-gray-400">
                    <div className="border border-gray-700 p-4 bg-black/50 backdrop-blur"><div className="text-2xl mb-2">🎟️</div><div>EVENT REVENUE</div></div>
                    <div className="border border-gray-700 p-4 bg-black/50 backdrop-blur"><div className="text-2xl mb-2">💴</div><div>REWARD POOL</div></div>
                    <div className="border border-gray-700 p-4 bg-black/50 backdrop-blur"><div className="text-2xl mb-2">📈</div><div>BUYBACK $SMO</div></div>
                    <div className="border border-red-900/50 p-4 bg-red-900/20 backdrop-blur text-red-500"><div className="text-2xl mb-2">🔥</div><div>BURN</div></div>
                </div>

                {/* Pot Animation */}
                <div className="relative w-48 h-48 mx-auto mb-8 interactable hover:scale-105 transition-transform duration-300">
                    <div className="absolute bottom-0 left-0 w-full h-32 bg-blue-500 blur-3xl animate-pulse opacity-60" />
                    <div className="w-full h-full border-b-8 border-l-8 border-r-8 border-gray-700 rounded-b-[3rem] bg-black/80 flex items-end justify-center overflow-hidden backdrop-blur-sm relative">
                        <div ref={liquidRef} className="w-full bg-gradient-to-t from-yellow-700 to-yellow-400 transition-all duration-300 relative h-[10%]" />
                    </div>
                </div>

                <div className="font-mono text-white text-xl">
                    REVENUE GENERATED: <span ref={tvlRef} className="text-neon-cyan">0</span> JPYC
                </div>
            </div>
        </section>
    );
}
