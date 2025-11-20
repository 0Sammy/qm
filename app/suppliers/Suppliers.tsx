'use client'

import { motion } from 'framer-motion';

//Components
import { Card } from '@/components/ui/card';

//Icons
import { Ship, Leaf, TrendingUp, Award, Zap, Globe } from 'lucide-react';

export default function Suppliers() {

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' as const },
        },
    }

    return (
        <main className='px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20'>
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-3 mx-auto mb-4 w-fit">
                    <div className="bg-accent w-12 h-1"></div>
                    <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Supply</span>
                </div>
                <h3 className="mb-6 font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    Marine Fuel Solutions for a Sustainable Future
                </h3>
                <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                    TOO Qazaqstan Marine Fuels (QMF) is revolutionizing marine fuel production with ultra-low sulfur solutions compliant with international environmental standards.
                </p>
            </motion.div>

            {/* Company Overview */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-3xl text-balance">
                        About Our Operations
                    </h2>

                    <div className="gap-8 grid min[600px]:grid-cols-2">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="flex items-center gap-2 mb-4 font-bold text-lg md:text-xl xl:text-2xl">
                                <Ship className="size-6 text-accent" />
                                Production Capacity
                            </h3>
                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                Our state-of-the-art Marine Fuel Plant (MFP) in Makat district, Atyrau region,
                                processes ultra-low sulfur Kazakh oil with exceptional efficiency.
                            </p>
                            <div className="bg-muted/50 p-4 md:p-5 xl:p-6 border border-border">
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">Annual Processing Capacity</p>
                                <p className="font-bold text-accent text-xl md:text-2xl xl:text-3xl">1.5M Tons/Year</p>
                            </div>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="flex items-center gap-2 mb-4 font-bold text-lg md:text-xl xl:text-2xl">
                                <Leaf className="size-6 text-accent" />
                                Environmental Commitment
                            </h3>
                            <p className="mb-6 text-muted-foreground leading-relaxed">
                                We comply with MARPOL 73/78 international standards and produce environmentally
                                friendly marine fuels that meet the strictest global emission regulations.
                            </p>
                            <div className="bg-muted/50 p-2 md:p-3 xl:p-4 border border-border">
                                <p className="font-semibold text-[11px] md:text-xs xl:text-sm">
                                    Sulfur Content: &lt; 0.5% (Global Standard Compliance)
                                </p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Product Portfolio */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-3xl text-balance">
                        Product Portfolio
                    </h2>

                    <div className="gap-8 grid md:grid-cols-2">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="mb-4 font-bold text-base md:text-lg xl:text-xl">
                                Marine Fuel Distillate DMA
                            </h3>
                            <p className="mb-4 text-muted-foreground leading-relaxed">
                                Premium quality marine distillate fuel meeting ISO 8217-2017 standards.
                                Ideal for engines requiring high energy efficiency and minimal environmental impact.
                            </p>
                            <div className="space-y-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                <p><span className="font-semibold">Standard:</span> ISO 8217-2017</p>
                                <p><span className="font-semibold">Type:</span> Distillate Fuel</p>
                                <p><span className="font-semibold">Application:</span> High-Performance Marine Engines</p>
                            </div>
                        </Card>

                        <Card className="bg-card p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="mb-4 font-bold text-base md:text-lg xl:text-xl">
                                Marine Fuel Residual RMD
                            </h3>
                            <p className="mb-4 text-muted-foreground leading-relaxed">
                                Heavy fuel oil (Mazut) engineered for larger marine vessels. Meets ISO 8217-2017
                                specifications with ultra-low sulfur content for maximum compliance.
                            </p>
                            <div className="space-y-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                <p><span className="font-semibold">Standard:</span> ISO 8217-2017</p>
                                <p><span className="font-semibold">Type:</span> Residual/Heavy Fuel Oil</p>
                                <p><span className="font-semibold">Application:</span> Cargo Vessels & Large Ships</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Investment & Expansion */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Strategic Investment & Growth
                    </h2>

                    <Card className="bg-card mb-8 p-4 md:p-6 xl:p-8 border border-border">
                        <h3 className="flex items-center gap-2 mb-6 font-bold text-lg md:text-xl xl:text-2xl">
                            <TrendingUp className="size-6 text-accent" />
                            Investment Plan (2024-2027)
                        </h3>

                        <div className="gap-8 grid min-[600px]:grid-cols-2 mb-8">
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">Total Planned Investment</p>
                                <p className="font-bold text-accent text-xl md:text-2xl xl:text-3xl">$118 Million USD</p>
                            </div>
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">Investment Period</p>
                                <p className="font-bold text-lg md:text-xl xl:text-2xl">2024 - 2027</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold">Fund Allocation:</h4>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center bg-muted/50 p-4 border border-border">
                                    <p>Marine Fuel Plant Construction (Makat)</p>
                                    <p className="font-bold text-accent">$100M USD</p>
                                </div>
                                <div className="flex justify-between items-center bg-muted/50 p-4 border border-border">
                                    <p>Working Capital (2024)</p>
                                    <p className="font-bold text-accent">$18M USD</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Key Advantages */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Why Partner With QMF
                    </h2>

                    <div className="gap-6 grid md:grid-cols-3">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Award className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                Regulatory Compliance
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Full MARPOL 73/78 compliance with ultra-low sulfur content &lt; 0.5%
                                meeting all international standards.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Zap className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                Strategic Location
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Located in Makat district, Atyrau region with direct access to
                                Kazakh oil reserves and major shipping routes.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Globe className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                Long-Term Partnerships
                            </h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Designed for major international companies seeking stable,
                                long-term marine fuel supply contracts.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Supply Status & Regulatory */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-xl xl:text-3xl text-balance">
                        Supply Authority & Regulatory Status
                    </h2>

                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <div className="gap-8 grid min-[600px]:grid-cols-2">
                            <div>
                                <h3 className="mb-4 font-bold text-base md:text-lg xl:text-xl">
                                    Official Status
                                </h3>
                                <div className="space-y-3">
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Registered Entity:</span><br />
                                        TOO Qazaqstan Marine Fuels LLP
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Classification:</span><br />
                                        Certified Oil Supplier (Republic of Kazakhstan)
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Regulatory Authority:</span><br />
                                        RoK Law on State Regulation of Production and Circulation of Certain Types of Petroleum Products
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-4 font-bold text-base md:text-lg xl:text-xl">
                                    Processing Authority
                                </h3>
                                <div className="space-y-3">
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Subsoil User Company:</span><br />
                                        76% stakeholder providing access to ultra-low sulfur crude reserves
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Processing Rights:</span><br />
                                        Authorized to process parent company and other subsoil user company crude oil
                                    </p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <span className="font-semibold">Supply Authority:</span><br />
                                        Full authorization for marine fuel and mazut (heavy fuel oil) distribution
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}
