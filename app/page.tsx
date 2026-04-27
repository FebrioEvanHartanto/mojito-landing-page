"use client"

import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Cocktails from "@/app/components/Cocktails";
import About from "@/app/components/About";


export default function Home() {
  return (
   <main>
       <Navbar />
       <Hero />
       <Cocktails />
       <About />
   </main>
  );
}
