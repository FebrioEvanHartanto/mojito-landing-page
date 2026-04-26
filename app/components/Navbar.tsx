import Routes from "@/app/constants/routes";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Navbar = () => {

    useGSAP(() => {
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger:"nav",
                start: "bottom top",
            }
        });

        navTween.fromTo("nav", {backgroundColor: "transparent"}, {backgroundColor:"#00000050", backgroundFilter: "blur(10px)", duration:1, ease:"power1.inOut"});

    })

    return (
        <nav className="flex justify-between items-center px-20">

            <div>
                <Image src="/images/concota-logo-white.png" width={250} height={200} alt="Concota Logo" priority/>
            </div>

            <div>
                {Routes.map((menu) => (
                    <Link href={menu.url} key={menu.label} className="flex items-center gap-2">{menu.label}</Link>
                ))}
            </div>
        </nav>
    )
}
export default Navbar
