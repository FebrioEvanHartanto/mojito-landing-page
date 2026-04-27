"use client";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/all";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const heroRef = useRef<HTMLElement | null>(null);

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(
        () => {
            if (!heroRef.current) return;

            const heroSplit = new SplitText(".title", {
                type: "chars, words",
            });

            const paragraphSplit = new SplitText(".subtitle", {
                type: "lines",
            });

            heroSplit.chars.forEach((char) =>
                char.classList.add("text-gradient")
            );

            gsap.from(heroSplit.chars, {
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
            });

            gsap.from(paragraphSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 1.8,
                ease: "expo.out",
                stagger: 0.06,
                delay: 1,
            });

            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: heroRef.current,
                        start: "top top",
                        end: "bottom top",
                        scrub: true,
                    },
                })
                .to(".right-leaf", { y: 200 }, 0)
                .to(".left-leaf", { y: -200 }, 0)
                .to(".arrow", { y: 100 }, 0);

            const video = videoRef.current;
            if (!video) return;

            const startValue = isMobile ? "top 50%" : "center 60%";
            const endValue = isMobile ? "120% top" : "bottom top";

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: video,
                    start: startValue,
                    end: endValue,
                    scrub: true,
                    pin: true,
                },
            });

            video.onloadedmetadata = () => {
                tl.to(video, {
                    currentTime: video.duration,
                    ease: "none",
                });
            };
        },
        { scope: heroRef }
    );

    return (
        <>
            <section id="hero" ref={heroRef} className="noisy">
                <h1 className="title">MOJITO</h1>

                <Image
                    src="/images/hero-left-leaf.png"
                    alt="Left Leaf"
                    className="left-leaf"
                    width={500}
                    height={500}
                />

                <Image
                    src="/images/hero-right-leaf.png"
                    alt="Right Leaf"
                    className="right-leaf"
                    width={500}
                    height={500}
                />

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                            <p className="subtitle">
                                Sip the Spirit
                                <br />
                                of Summer
                            </p>
                        </div>

                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail on our menu is a blend of premium ingredients,
                                creative flair, and timeless recipes — designed to delight your
                                senses.
                            </p>
                            <Link href="#cocktails">View Cocktails</Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="video absolute inset-0">
                <video
                    ref={videoRef}
                    src="/videos/output.mp4"
                    muted
                    playsInline
                    preload="auto"
                />
            </div>
        </>
    );
};

export default Hero;