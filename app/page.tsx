"use client"

import gsap from 'gsap';
import {ScrollTrigger, SplitText} from "gsap/all";
gsap.registerPlugin(ScrollTrigger,SplitText);
import Image from "next/image";
import Navbar from "@/app/components/Navbar";


export default function Home() {
  return (
   <main>
       <Navbar />
   </main>
  );
}
