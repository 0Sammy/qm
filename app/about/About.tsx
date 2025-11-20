'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

//Icons
import { CircleCheckBig } from 'lucide-react'

export default function AboutUs() {
    const businessFactors = [
        {
            title: 'IMO Standards Compliance',
            description: 'Adherence to United Nations IMO sulfur content limits for marine fuel',
        },
        {
            title: 'Unique Oil Resources',
            description: 'Access to ultra-low sulfur oil fields unique to the Republic of Kazakhstan',
        },
        {
            title: 'Global Market Position',
            description: 'Competitive advantage in the international marine fuel market',
        },
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' as const },
        },
    }

    return (
        <section className="relative px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            {/* Main Content */}
            <div className="mx-auto max-w-7xl">
                <div className="items-center gap-8 lg:gap-16 grid grid-cols-1 lg:grid-cols-2">
                    {/* Left: Images */}
                    <motion.div className="relative h-[600px] lg:h-[700px]" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                        {/* Back Image */}
                        <div className="top-0 left-0 z-[2] absolute shadow-xl w-3/5 h-3/5 overflow-hidden">
                            <Image src="/office.jpeg" alt="Refinery storage tanks" fill className="object-cover" />
                        </div>

                        {/* Front Image */}
                        <div className="right-0 bottom-0 z-[2] absolute shadow-2xl w-4/5 h-[70%] overflow-hidden">
                            <Image src="/aboutUs2.jpg" alt="Industrial worker" fill className="object-bottom object-cover" />
                        </div>
                    </motion.div>

                    {/* Right: Content */}
                    <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-6">
                        {/* Header */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="bg-accent w-12 h-1"></div>
                                <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">About TOO QMF</span>
                            </div>
                            <h1 className="font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                                Leading Marine Fuel Innovation in Central Asia
                            </h1>
                        </motion.div>

                        {/* Subheading */}
                        <motion.p variants={itemVariants} className="font-medium text-accent text-sm md:text-base xl:text-lg italic">
                            "Pioneering MARPOL-compliant marine fuels from Kazakhstan's ultra-low sulfur resources"
                        </motion.p>

                        {/* History */}
                        <motion.div variants={itemVariants} className="space-y-4">
                            <p className="leading-relaxed">
                                In 2011, our team successfully implemented a landmark project for the construction and commissioning of a refinery in Aktobe with a processing capacity of 300,000 tons annually. All our products are certified in accordance with the State system of technical regulation of the Republic of Kazakhstan.
                            </p>
                            <p className="leading-relaxed">
                                By the end of 2016, we achieved a significant milestone by producing an industrial batch of ULSFO with a sulfur content of just 0.056% at our Aktobe facility, setting new standards for environmental compliance in marine fuel production.
                            </p>
                        </motion.div>

                        {/* Business Model */}
                        <motion.div variants={itemVariants} className="space-y-3 py-6">
                            <h3 className="font-bold">Our Business Model Foundation</h3>
                            <div className="space-y-3">
                                {businessFactors.map((factor, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CircleCheckBig className="flex-shrink-0 mt-0.5 size-5 text-accent" />
                                        <div>
                                            <p className="font-semibold uppercase tracking-tight montserrat">{factor.title}</p>
                                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">{factor.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div className="pt-10 border-border border-t" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
                        <div className="space-y-2">
                            <p className="font-bold text-accent text-2xl sm:text-3xl md:text-4xl xl:text-5xl">300K+</p>
                            <p>Tons Annual Capacity</p>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">Aktobe Refinery Processing</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-accent text-2xl sm:text-3xl md:text-4xl xl:text-5xl">0.056%</p>
                            <p>ULSFO Sulfur Content</p>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">Industry-Leading Low Emissions</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-accent text-2xl sm:text-3xl md:text-4xl xl:text-5xl">2011</p>
                            <p>Founded</p>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">Refinery Commissioning Year</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}