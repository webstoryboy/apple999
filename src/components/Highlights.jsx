import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg, rightImg } from "../utils"
import VideoCarousel from "./VideoCarousel"

const Highlights = () => {
    useGSAP(() => {
        gsap.to("#title", { opacity: 1, y: 0 })
        gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
    })

    return (
        <section id="highlights" className="w-screen overflow-hidden h-full bg-zinc py-20 px-5">
            <div className="screen-max-width">
                <div className="mb-12 w-full md:flex items-end justify-between">
                    <h1
                        id="title"
                        className="text-gray text-3xl font-medium opacity-0 translate-y-20">
                        Get the heighlights.
                    </h1>
                    <div className="flex flex-wrap items-end gap-5">
                        <p className="link">
                            Watch the film
                            <img src={watchImg} alt="watch" className="ml-2" />
                        </p>
                        <p className="link">
                            Watch the event
                            <img src={rightImg} alt="right" className="ml-2" />
                        </p>
                    </div>
                </div>

                <VideoCarousel />
            </div>
        </section>
    )
}

export default Highlights 