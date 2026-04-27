"use client"

import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Cocktails from "@/app/components/Cocktails";


export default function Home() {
  return (
   <main>
       <Navbar />
       <Hero />
       <Cocktails />
   </main>
  );
}
