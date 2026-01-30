"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoadingScreen() {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);
    const flashRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Autoplay handling
        if (videoRef.current) {
            videoRef.current.play().catch(e => console.log("Video Autoplay Blocked", e));
        }

        tl.to(videoRef.current, { opacity: 1, duration: 0.1 })
            .to(flashRef.current, { opacity: 1, duration: 0.1, delay: 0.4, ease: "power4.out" })
            .to(videoRef.current, { opacity: 0, duration: 0 })
            .to(flashRef.current, { opacity: 0, duration: 0.8 })
            .to(textRef.current, { opacity: 1, scale: 1, duration: 0.2 }, "-=0.6")
            .to(textRef.current, { opacity: 0, scale: 3, duration: 0.4, delay: 0.4 })
            .to(containerRef.current, {
                opacity: 0, duration: 0.5, onComplete: () => {
                    if (containerRef.current) containerRef.current.style.display = "none";
                }
            });

    }, []);

    return (
        <div ref={containerRef} id="loading-screen" className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden pointer-events-none">
            <video ref={videoRef} id="intro-video" className="absolute inset-0 w-full h-full object-cover opacity-0" muted playsInline>
                <source src="/opening_sumo_collision.mp4" type="video/mp4" />
            </video>
            <div ref={flashRef} id="intro-flash" className="absolute inset-0 bg-white opacity-0 z-10" />
            <h1
                ref={textRef}
                id="intro-text"
                className="absolute text-neon-cyan text-4xl md:text-9xl opacity-0 scale-50 font-bold z-20"
                style={{ textShadow: '0 0 50px #00FFFF' }}
            >
                TACHIAI
            </h1>
        </div>
    );
}
