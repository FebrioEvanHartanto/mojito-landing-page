"use client"

import Image from "next/image";
import {sliderLists} from "@/app/constants/slider";
import {useRef, useState} from "react";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Menu = () => {

    const contentRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalCocktails = sliderLists.length;
    const goToSlide = (index: number) => {
        const newIndex = (index + totalCocktails) % totalCocktails;

        setCurrentIndex(newIndex);
    }

    const getCocktailAt = (indexOffset : number) => {
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }

    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt (1);

    useGSAP(() => {
    gsap.fromTo("#title", {opacity:0}, {opacity:1, duration: 1});
    gsap.fromTo(".cocktail img", {opacity:0, xPercent:-100}, {xPercent:0, opacity: 1, ease: "power1.inOut"});
    gsap.fromTo(".details h2", {yPercent:100, opacity:0}, {yPercent:0, opacity:100, ease:"power1.inOut"});
    gsap.fromTo(".details p", {yPercent:100, opacity:0}, {yPercent:0, opacity:100, ease:"power1.inOut"});
    },[currentIndex])

    return (
        <section id="menu" aria-labelledby="menu-heading">
            <Image
                src="/images/slider-left-leaf.png"
                alt="Left Leaf"
                id="m-left-leaf"
                width={500}
                height={500}
            />
            <Image
                src="/images/slider-right-leaf.png"
                alt="Right Leaf"
                id="m-right-leaf"
                width={500}
                height={500}
            />

            <h2 id="menu-heading" className="sr-only">Cocktail Menu</h2>

            <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
                {sliderLists.map((cocktail, index) => {
                    const isActive = index === currentIndex;

                    return (
                        <button key={cocktail.id} className={`
                        ${isActive 
                            ? "text-white border-white" 
                            : "text-white/50 border-white/50"}`}
                        onClick={() => goToSlide(index)}
                        >
                            {cocktail.name}
                        </button>
                    )

                })}
            </nav>

            <div className="content">
                <div className="arrows">
                    <button className="text-left" onClick={() => goToSlide(currentIndex-1)}>
                        <span>{prevCocktail.name}</span>
                        <Image src="/images/right-arrow.png"
                               alt="right-arrow"
                               aria-hidden="true"
                               width={25}
                               height={25}/>
                    </button>
                    <button className="text-left" onClick={() => goToSlide(currentIndex+1)}>
                        <span>{nextCocktail.name}</span>
                        <Image src="/images/left-arrow.png"
                               alt="left-arrow"
                               aria-hidden="true"
                               width={25}
                               height={25}/>
                    </button>
                </div>

                <div className="cocktail">
                    <Image src={currentCocktail.image} className="object-contain" alt="Cocktail Image" width={500} height={500}/>
                </div>

                <div className="recipe">
                    <div ref={contentRef} className="info">
                        <p>Recipe for: </p>
                        <p id="title">{currentCocktail.name}</p>
                    </div>
                    <div className="details">
                        <h2>{currentCocktail.title}</h2>
                        <p>{currentCocktail.description}</p>
                    </div>
                </div>


            </div>
        </section>
    )
}
export default Menu
