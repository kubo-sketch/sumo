"use client";
import { useEffect, useRef } from "react";

export function RainCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        let columns = Math.floor(width / 20);
        const drops: number[] = [];
        for (let i = 0; i < columns; i++) drops[i] = 1;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            columns = Math.floor(width / 20); // Resetting drops on resize for simplicity, or preserve
            // Re-init drops array to match new width
            if (drops.length < columns) {
                for (let i = drops.length; i < columns; i++) drops[i] = Math.random() * height / 20;
            }
        };

        window.addEventListener('resize', resize);

        let animationFrameId: number;
        let lastDrawTime = 0;
        const fpsInterval = 1000 / 30; // 30 FPS

        const draw = (timestamp: number) => {
            animationFrameId = requestAnimationFrame(draw);

            const elapsed = timestamp - lastDrawTime;
            if (elapsed > fpsInterval) {
                lastDrawTime = timestamp - (elapsed % fpsInterval);

                ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
                ctx.fillRect(0, 0, width, height);
                ctx.font = '15px monospace';

                for (let i = 0; i < drops.length; i++) {
                    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
                    const x = i * 20;
                    const y = drops[i] * 20;

                    ctx.fillStyle = Math.random() > 0.95 ? '#FFF' : '#00FFFF';
                    ctx.fillText(text, x, y);

                    if (y > height && Math.random() > 0.975) {
                        drops[i] = 0;
                    }
                    drops[i]++;
                }
            }
        };

        draw(0);

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full z-0 opacity-30 pointer-events-none"
        />
    );
}
