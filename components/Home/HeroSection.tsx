"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

//Images
import heroImg from "../../public/heroImg.jpg";
import heroImg1 from "../../public/heroImg1.jpg";
import heroImg2 from "../../public/heroImg2.jpg";
import heroImg3 from "../../public/heroImg3.jpg";

//Icons
import { ArrowRight } from "lucide-react";

const HeroSection = () => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const IMAGES = [
        { src: heroImg, heading: "Powering Progress", subheading: "Reliable energy solutions through safe, efficient drilling and production" },
        { src: heroImg1, heading: "Energy You Can Trust", subheading: "Delivering consistent supply with industry-leading safety standards" },
        { src: heroImg2, heading: "From Exploration to Fuel", subheading: "Integrated solutions across discovery, development, and distribution" },
        { src: heroImg3, heading: "Engineering Tomorrow's Energy", subheading: "Advanced technologies and sustainable practices for long-term value" },
    ];
    const INTERVAL = 10000;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
        }, INTERVAL);

        return () => clearInterval(timer);
    }, [IMAGES.length, INTERVAL]);

    const currentImage = IMAGES[currentIndex];


    return (
        <main className="relative bg-black h-[80vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div key={currentIndex} className="absolute inset-0" initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 1 }}>
                    <Image src={currentImage.src} alt={currentImage.heading} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-black/80" />
                </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
                <motion.div key={`text-${currentIndex}`} className="absolute inset-0 flex flex-col justify-center items-center text-center" initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.8 }}>
                    <div className="space-y-4">
                        <motion.h1 className="font-bold text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-balance" initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                            {currentImage.heading}
                        </motion.h1>
                        <motion.p className="mx-auto max-w-3xl text-neutral-300 text-base sm:text-lg md:text-xl xl:text-2xl text-balance montserrat" initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }} >
                            {currentImage.subheading}
                        </motion.p>
                    </div>

                    <Link href="/contact" className="group flex items-center gap-x-2 bg-accent hover:bg-white mx-auto my-10 px-6 py-2 w-fit font-medium hover:font-semibold duration-300 text-accent-foreground montserrat">REQUEST A CONSULTATION<ArrowRight className="bg-primary group-hover:bg-accent p-2 rounded-[50%] size-9 md:size-10 text-primary-foreground group-hover:translate-x-3 duration-300" /></Link>


                    <section className="gap-2 grid grid-cols-2 mt-10 text-neutral-300">
                        <div className="group flex flex-col gap-y-1 hover:bg-accent mx-auto px-2 md:px-4 xl:px-6 py-10 text-center duration-300 hover:text-accent-foreground">
                            <div className="bg-neutral-300 my-2 h-0.5 duration-300 group-hover:bg-accent-foreground" />
                            <h1 className="max-w-[40ch] font-bold text-base md:text-lg xl:text-xl text-center uppercase">Upstream Exploration & Production</h1>
                            <p className="max-w-[40ch] text-[11px] md:text-xs xl:text-sm text-center">Geological surveying, seismic imaging, and directional drilling to locate<Link href="/services" className="text-accent group-hover:text-white">...read more</Link></p>
                        </div>
                        <div className="group flex flex-col gap-y-1 hover:bg-accent mx-auto px-2 md:px-4 xl:px-6 py-10 text-center duration-300 hover:text-accent-foreground">
                            <div className="bg-neutral-300 my-2 h-0.5 duration-300 group-hover:bg-accent-foreground" />
                            <h1 className="max-w-[40ch] font-bold text-base md:text-lg xl:text-xl text-center uppercase">Midstream Transportation & Logistics</h1>
                            <p className="max-w-[40ch] text-[11px] md:text-xs xl:text-sm text-center">Pipeline engineering, storage terminal management, and bulk transport<Link href="/services" className="text-accent group-hover:text-white">...read more</Link></p>
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>

            <div className="bottom-8 left-1/2 z-10 absolute flex gap-2 -translate-x-1/2 transform">
                {IMAGES.map((_, index) => (
                    <motion.button key={index} onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-white' : 'bg-white/40'}`}
                        animate={{ width: index === currentIndex ? 32 : 8 }} transition={{ duration: 0.3 }} aria-label={`Go to slide ${index + 1}`} />
                ))}
            </div>
        </main>
    );
}

export default HeroSection;