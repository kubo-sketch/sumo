"use client";
import { useEffect, useRef, useState } from "react";

export function HUD() {
    const [time, setTime] = useState("00:00:00:00");
    const [coord, setCoord] = useState("0.00");
    const [velocity, setVelocity] = useState("0");
    
    // In a real implementation with Lenis, we would subscribe to scroll events via context or store
    // For now, we use basic window scroll listener as a fallback, or we can improve SmoothScroll to provide context.
    
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toISOString().split('T')[1].slice(0, 11));
        };
        
        const interval = setInterval(updateTime, 100); // 100ms precision
        
        const handleScroll = () => {
            setCoord(window.scrollY.toFixed(0));
            // Velocity calculation requires tracking previous scroll pos and time, skipping for brevity in this MVP step
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            clearInterval(interval);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-[9000] p-5 font-mono text-[10px] text-neon-cyan/70 uppercase">
             {/* Corners */}
            <div className="absolute top-5 left-5 w-5 h-5 border-t-2 border-l-2 border-neon-cyan" />
            <div className="absolute top-5 right-5 w-5 h-5 border-t-2 border-r-2 border-neon-cyan" />
            <div className="absolute bottom-5 left-5 w-5 h-5 border-b-2 border-l-2 border-neon-cyan" />
            <div className="absolute bottom-5 right-5 w-5 h-5 border-b-2 border-r-2 border-neon-cyan" />

            {/* Data */}
            <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-5">
                <span>{time}</span>
                <span>SYSTEM: ONLINE</span>
                <span>CONN: SECURE</span>
            </div>
            
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -rotate-90 origin-left ml-5 whitespace-nowrap">
                COORD: {coord} // VELOCITY: {velocity}
            </div>

             {/* Right Bar */}
            <div className="absolute top-[20%] right-5 w-[2px] h-[60%] bg-neon-cyan/10">
                {/* Indicator would need calculation based on scroll height */}
                {/* <div className="absolute w-[10px] h-1 bg-neon-cyan -left-1" style={{ top: '0%' }}></div> */}
            </div>
        </div>
    );
}
