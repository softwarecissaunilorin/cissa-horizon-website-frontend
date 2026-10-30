"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight, BookOpen, ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const subTextRef = useRef<HTMLParagraphElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    const [headlineText, setHeadlineText] = useState(
        "Hello, CISSAite. You're in the right place.",
    );
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const headlines = [
            "Hello, CISSAite. You're in the right place.",
            "Hello, CISSAite. We've been expecting you.",
            "Hey CISSAite, your association is here.",
            "Welcome, CISSAite. This one's built for you.",
            "CISSAite? You belong here.",
        ];
        setHeadlineText(
            headlines[Math.floor(Math.random() * headlines.length)],
        );
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            tl.fromTo(
                badgeRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, delay: 0.1 },
            )
                .to(".word-anim", {
                    y: 0,
                    opacity: 1,
                    stagger: 0.05,
                    duration: 1.1,
                }, "-=0.5")
                .fromTo(
                    subTextRef.current,
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9 },
                    "-=0.7",
                )
                .fromTo(
                    btnRef.current,
                    { y: 25, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.9 },
                    "-=0.7",
                );
        }, containerRef);

        return () => ctx.revert();
    }, [isMounted, headlineText]);

    return (
        <div className="bg-base-100 p-0 sm:p-2 lg:p-4 min-h-[92vh] sm:min-h-screen flex flex-col justify-center">
            <div
                ref={containerRef}
                id="home"
                className="hero min-h-[92vh] sm:min-h-screen relative overflow-hidden flex items-center justify-center sm:rounded-2xl lg:rounded-3xl flex-1"
                style={{
                    backgroundImage: "url(/assets/fac3-5.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Filmic gradient overlay with depth */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85 z-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)] z-0 pointer-events-none" />

                <div className="relative z-10 w-full max-w-5xl px-5 sm:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center text-white mx-auto flex flex-col items-center justify-center">
                    {/* Floating badge */}
                    <div
                        ref={badgeRef}
                        className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-md mb-4 sm:mb-6 shadow-xs opacity-0"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-amber-300 animate-pulse" />
                        <span>Faculty of CIS • University of Ilorin</span>
                    </div>

                    {/* Headline */}
                    <h1 className="font-bold text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.1] md:leading-[1.04] tracking-tight mb-4 sm:mb-6 max-w-4xl mx-auto">
                        {headlineText.split(" ").map((word, index) => (
                            <span
                                key={index}
                                className="inline-block whitespace-nowrap mr-2 sm:mr-3 md:mr-5 last:mr-0"
                            >
                                <span className="inline-block opacity-0 translate-y-16 word-anim will-change-transform">
                                    {word}
                                </span>
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <p
                        ref={subTextRef}
                        className="text-base sm:text-lg md:text-xl font-normal text-white/85 max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed opacity-0 px-2"
                    >
                        Your central hub for academics, vibrant events, student support, and opportunities across our five departments.
                    </p>

                    {/* CTA Buttons */}
                    <div
                        ref={btnRef}
                        className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto opacity-0 px-2"
                    >
                        <Link
                            href="/about"
                            className="group relative inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-neutral-950 transition-all duration-300 bg-white hover:bg-neutral-100 rounded-full shadow-[0_8px_24px_rgba(255,255,255,0.2)] hover:shadow-[0_12px_32px_rgba(255,255,255,0.3)] active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Explore CISSA
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </span>
                        </Link>

                        <Link
                            href="/materials"
                            className="group relative inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-base font-semibold text-white transition-all duration-300 bg-white/10 hover:bg-white/20 border border-white/25 rounded-full backdrop-blur-md active:scale-[0.98]"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                <BookOpen className="w-4 h-4 text-amber-300" />
                                Course Materials
                            </span>
                        </Link>
                    </div>

                    {/* Subtle scroll cue */}
                    <div className="hidden sm:flex mt-12 flex-col items-center gap-1 text-white/40 text-xs uppercase tracking-widest animate-bounce">
                        <ChevronDown className="h-4 w-4" />
                    </div>
                </div>
            </div>
        </div>
    );
}
