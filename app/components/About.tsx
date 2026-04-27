import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import Image from "next/image"

const About = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#about h2', {
            type: 'words'
        });

        const textSplit = new SplitText('.about-text', {
            type: 'lines'
        });

        const statsSplit = new SplitText('.stats p', {
            type: 'lines'
        });

        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center',
            }
        });

        scrollTimeline
            .from(titleSplit.words, {
                opacity: 0,
                yPercent: 100,
                duration: 0.6,
                ease: "expo.out",
                stagger: 0.015,
            })
            .from(textSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 0.6,
                ease: "expo.out",
                stagger: 0.04,
            }, "-=0.3")
            .from(statsSplit.lines, {
                opacity: 0,
                yPercent: 100,
                duration: 0.5,
                ease: "expo.out",
                stagger: 0.05,
            }, "-=0.2")
            .from(".top-grid div, .bottom-grid div", {
                opacity: 0,
                scale: 0.97,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.04,
            }, "-=0.2");
    })

    return (
        <div id="about">
            <div className="mb-16 md:px-0 px-5">
                <div className="content">
                    <div className="md:col-span-8">
                        <p className="badge">Best Cocktails</p>
                        <h2>
                            Where every detail matters <span className="text-white">-</span>
                            from muddle to garnish
                        </h2>
                    </div>

                    <div className="sub-content">
                        <p className="about-text">
                            Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                        </p>

                        <div className="stats">
                            <p className="md:text-3xl text-xl font-bold">
                                <span>4.5</span>/5
                            </p>
                            <p className="text-sm text-white-100">
                                More than +12000 customers
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-grid">
                <div className="md:col-span-3 relative" >
                    <div  className="noisy" />
                    <Image src="/images/abt1.png"
                           alt="grid-img-1"
                           fill
                           className="object-cover"/>
                </div>

                <div className="md:col-span-6 relative">
                    <div  className="noisy" />
                    <Image src="/images/abt2.png"
                           alt="grid-img-2"
                           fill
                           className="object-cover"/>
                </div>

                <div className="md:col-span-3 relative">
                    <div  className="noisy" />
                    <Image src="/images/abt5.png"
                           alt="grid-img-5"
                           fill
                           className="object-cover"/>
                </div>
            </div>

            <div className="bottom-grid">
                <div className="md:col-span-8 relative">
                    <div  className="noisy" />
                    <Image src="/images/abt3.png"
                           alt="grid-img-3"
                           fill
                           className="object-cover"/>
                </div>

                <div className="md:col-span-4 relative">
                    <div  className="noisy" />
                    <Image src="/images/abt4.png"
                           alt="grid-img-4"
                           fill
                           className="object-cover"/>
                </div>
            </div>

        </div>
    )
}
export default About