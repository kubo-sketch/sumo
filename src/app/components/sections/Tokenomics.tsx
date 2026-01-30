"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Tokenomics() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(".decode-tokenomics", {
            scrollTrigger: {
                trigger: "#tokenomics",
                start: "top 80%",
            },
            duration: 1,
            text: { value: "HEAVYWEIGHT ALLOCATION", delimiter: "" },
            ease: "none"
        });
    }, []);

    return (
        <section id="tokenomics" className="relative py-20 bg-dark-metal border-b border-gray-900">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl text-white mb-12 font-oswald decode-tokenomics">
                    CALCULATING...
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
                    {/* Pie Chart Representation */}
                    <div className="w-64 h-64 rounded-full relative bg-gray-800" style={{ background: 'conic-gradient(#00FFFF 0% 90%, #333 90% 100%)' }}>
                        <div className="absolute inset-4 bg-dark-metal rounded-full flex items-center justify-center flex-col">
                            <span className="text-4xl font-bold text-neon-cyan">90%</span>
                            <span className="text-xs text-gray-500">COMMUNITY</span>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="text-left space-y-4 font-mono">
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-neon-cyan mr-4" />
                            <div>
                                <div className="text-white text-xl">90% COMMUNITY (FAIR LAUNCH)</div>
                                <div className="text-gray-500 text-sm">NO VC. NO PRESALE.</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-gray-700 mr-4" />
                            <div>
                                <div className="text-gray-300 text-xl">10% ECOSYSTEM RESERVE</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="inline-block border border-red-500 bg-red-900/10 p-4 text-red-500 font-mono text-sm animate-pulse">
                    WARNING: MAKE SURE YOU ARE BUYING THE OFFICIAL $SMO.<br />
                    CHECK CONTRACT: 0x...
                </div>
            </div>
        </section>
    );
}
