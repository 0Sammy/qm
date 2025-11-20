"use client"

import { useState } from "react";
import { motion } from "framer-motion";

//Icons
import { ChevronLeft, ChevronRight } from "lucide-react"

type Product = {
    id: number
    section: string,
    name: string
    category: string
    icon: string
    description: string
}

const products: Product[] = [
    {
        id: 1,
        section: "diesel",
        name: "Diesel Fuel EN590",
        category: "Automotive & Marine",
        icon: "⛽",
        description: "High-quality ultra-low sulfur diesel fuel compliant with EN590 standards",
    },
    {
        id: 2,
        section: "jet",
        name: "Jet Fuel Jet A-1",
        category: "Aviation",
        icon: "✈️",
        description: "Premium aviation turbine fuel meeting ASTM D1655 specifications",
    },
    {
        id: 3,
        section: "lpg",
        name: "LPG / Propane-Butane",
        category: "Petrochemicals",
        icon: "🔥",
        description: "Liquefied petroleum gas for heating, cooking, and industrial applications",
    },
    {
        id: 4,
        section: "fuel",
        name: "Fuel Oil Mazut M-100",
        category: "Industrial",
        icon: "🛢️",
        description: "Heavy fuel oil for power generation and industrial heating systems",
    },
    {
        id: 5,
        section: "bitumen",
        name: "Bitumen / Asphalt",
        category: "Construction",
        icon: "🏗️",
        description: "Premium asphalt binder for road construction and waterproofing",
    },
    {
        id: 6,
        section: "virgin",
        name: "D6 Virgin Fuel Oil",
        category: "Industrial",
        icon: "🛢️",
        description: "Virgin fuel oil used in heavy industrial applications",
    },
    {
        id: 7,
        section: "gasoil",
        name: "D2 Gasoil",
        category: "Marine & Industrial",
        icon: "⛵",
        description: "High-specification gasoil for marine engines and equipment",
    },
    {
        id: 8,
        section: "lng",
        name: "LNG Liquified Natural Gas",
        category: "Energy",
        icon: "❄️",
        description: "Liquified natural gas for power generation and industrial use",
    },
    {
        id: 9,
        section: "urea",
        name: "Urea Prilled/Granular",
        category: "Chemicals",
        icon: "🧪",
        description: "High-purity urea for fertilizers and industrial applications",
    },
    {
        id: 10,
        section: "coke",
        name: "Petroleum Coke",
        category: "Industrial",
        icon: "⚙️",
        description: "Premium petroleum coke for aluminum smelting and energy",
    },
]

export default function Products() {

    const [currentIndex, setCurrentIndex] = useState<number>(0)

    const itemsPerView = 3
    const totalItems = products.length
    const canSlideLeft = currentIndex > 0
    const canSlideRight = currentIndex < totalItems - itemsPerView

    const handlePrev = () => {
        if (canSlideLeft) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    const handleNext = () => {
        if (canSlideRight) {
            setCurrentIndex((prev) => prev + 1)
        }
    }

    const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView)

    return (
        <section className="relative bg-[url('../public/services.jpg')] bg-cover bg-no-repeat px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div className='absolute inset-0 bg-background/80' />
            <div className="z-[2] relative mx-auto max-w-7xl">
                {/* Header */}
                <div className="mb-16 text-center">
                    <p className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Our Products</p>
                    <h2 className="my-4 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                        Premium Petroleum Products for Global Markets
                    </h2>
                    <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
                        TOO Qazaqstan Marine Fuels offers a comprehensive range of high-quality petroleum products, engineered to
                        meet international standards and environmental regulations.
                    </p>
                </div>

                {/* Carousel */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.div className="flex gap-6" animate={{ x: -currentIndex * (100 / itemsPerView) + "%" }} transition={{ type: "spring", stiffness: 300, damping: 30 }}>
                            {products.map((product) => (
                                <motion.div key={product.id} className="flex-shrink-0 w-full md:w-1/3" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
                                    <div className="group bg-card hover:bg-card-foreground shadow-lg hover:shadow-2xl border border-border h-full overflow-hidden transition-all duration-300">
                                        {/* Product Header */}
                                        <div className="relative bg-popover-foreground p-4 md:p-6 xl:p-8 overflow-hidden">
                                            {/* Decorative background */}
                                            <div className="absolute inset-0 opacity-10">
                                                <div className="top-0 right-0 absolute bg-accent blur-3xl rounded-full size-32"></div>
                                            </div>

                                            {/* Icon */}
                                            <motion.div className="z-10 relative mb-4 text-6xl" whileHover={{ scale: 1.2, rotate: 10 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                                {product.icon}
                                            </motion.div>

                                            {/* Category */}
                                            <p className="z-10 relative font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">
                                                {product.category}
                                            </p>
                                        </div>

                                        {/* Product Content */}
                                        <div className="p-4 md:p-6 xl:p-8">
                                            <h3 className="mb-3 font-bold group-hover:text-amber-600 text-base md:text-lg xl:text-xl uppercase tracking-tight transition-colors montserrat">
                                                {product.name}
                                            </h3>
                                            <p className="mb-6 text-popover-foreground group-hover:text-popover text-sm leading-relaxed">{product.description}</p>

                                            {/* Action Link */}
                                            <motion.a href={`products#${product.section}`} className="inline-flex items-center font-semibold text-accent hover:text-accent/80 text-sm transition-colors" whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                                Learn More
                                                <motion.span className="ml-2" whileHover={{ x: 3 }}>
                                                    →
                                                </motion.span>
                                            </motion.a>
                                        </div>

                                        {/* Bottom accent line */}
                                        <div className="bg-gradient-to-r from-accent to-amber-600 h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 transform"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-center items-center gap-4 mt-12">
                        <motion.button onClick={handlePrev} disabled={!canSlideLeft}
                            className="bg-popover hover:bg-popover-foreground p-3 border border-border rounded-full text-popover-foreground hover:text-popover disabled:text-muted-foreground transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
                            whileHover={{ scale: canSlideLeft ? 1.1 : 1 }} whileTap={{ scale: canSlideLeft ? 0.95 : 1 }}>
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Indicator dots */}
                        <div className="flex gap-2">
                            {Array.from({ length: Math.ceil(totalItems - itemsPerView + 1) }).map((_, idx) => (
                                <motion.button key={idx} onClick={() => setCurrentIndex(idx)}
                                    className={`h-2 rounded-full transition-all ${idx === currentIndex ? "bg-secondary w-8" : "hover:bg-secondary w-2 bg-popover-foreground"
                                        }`} whileHover={{ scale: 1.2 }} />
                            ))}
                        </div>

                        <motion.button onClick={handleNext} disabled={!canSlideRight}
                            className="bg-popover hover:bg-popover-foreground p-3 border border-border rounded-full text-popover-foreground hover:text-popover disabled:text-muted-foreground transition-all duration-300 cursor-pointer disabled:cursor-not-allowed"
                            whileHover={{ scale: canSlideRight ? 1.1 : 1 }} whileTap={{ scale: canSlideRight ? 0.95 : 1 }}>
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-popover-foreground text-sm">
                            Showing {currentIndex + 1} - {Math.min(currentIndex + itemsPerView, totalItems)} of {totalItems} products
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
