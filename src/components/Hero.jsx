import { useEffect, useState } from "react";
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

    const handleVideoSrcSet = () => {
        if (window.innerWidth < 760) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleVideoSrcSet);

        return () => {
            window.addEventListener('resize', handleVideoSrcSet);
        }
    }, [])

    useGSAP(() => {
        gsap.to('#hero', { opacity: 1, delay: 2 })
        gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
    });

    return (
        <section className="w-full h-[calc(100vh-60px)] bg-black relative">
            <div className="h-5/6 w-full flex-center flex-col">
                <p id="hero" className="hero-title ">iPhone 15 Pro</p>
                <div>
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>
            </div>
            <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                <a href="#" className="px-5 py-2 rounded-3xl my-4 bg-blue">Buy</a>
                <p className="text-xl">From ₩1,550,000</p>
            </div>
        </section>
    )
}

export default Hero