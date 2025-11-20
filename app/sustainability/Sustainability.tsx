'use client'

import { motion } from 'framer-motion';

//Components
import { Card } from '@/components/ui/card';

//Icons
import { Leaf, Droplet, Globe, TrendingDown, Award, Zap } from 'lucide-react';

export default function Sustainability() {

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
                    <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Sustainability</span>
                </div>
                <h3 className="mb-6 font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    TOO Qazaqstan Marine Fuels Sustainability & ESG
                </h3>
                <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                    TOO Qazaqstan Marine Fuels is committed to reducing marine pollution and
                    advancing environmental sustainability in the maritime industry through
                    ultra-low sulfur fuel production.
                </p>
            </motion.div>

            {/* Environmental Impact */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Environmental Impact & Challenge
                    </h2>

                    <div className="gap-8 grid min-[600px]:grid-cols-2">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <div className="flex gap-4 mb-4">
                                <Globe className="flex-shrink-0 size-8 text-accent" />
                                <h3 className="mt-1 font-bold text-base md:text-lg xl:text-xl">
                                    The Maritime Pollution Crisis
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                More than 95,000 ships emit greater quantities of sulfur-containing
                                emissions into the atmosphere annually than all 1.45 billion cars
                                worldwide combined. This represents a critical environmental challenge
                                in global air quality management.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <div className="flex gap-4 mb-4">
                                <TrendingDown className="flex-shrink-0 size-8 text-accent" />
                                <h3 className="mt-1 font-bold text-base md:text-lg xl:text-xl">
                                    Our Solution
                                </h3>
                            </div>
                            <p className="text-muted-foreground leading-relaxed">
                                We produce ultra-low sulfur marine fuel with only 0.5% sulfur content,
                                complying with international regulations that came into force on
                                January 1, 2020. This dramatically reduces maritime air pollution
                                and protects our atmosphere.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Regulatory Compliance */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Regulatory Compliance & Standards
                    </h2>

                    <div className="gap-8 grid md:grid-cols-3">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Award className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                MARPOL 73/78 Certification
                            </h3>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
                                All marine fuels produced by QMF meet the stringent requirements of
                                the International Convention for the Prevention of Pollution from Ships.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Award className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                ISO 8217-2017 Standard
                            </h3>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
                                Our marine fuel distillate (DMA) and residual (RMD) products strictly
                                comply with the ISO 8217-2017 international maritime fuel standards.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Leaf className="mb-4 size-8 text-accent" />
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">
                                Paris Agreement Aligned
                            </h3>
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm leading-relaxed">
                                We support the Paris Agreement climate goals signed by UN countries
                                in 2015, actively reducing global air pollution through cleaner fuels.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Product Portfolio */}
            <section className="py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Environmentally Friendly Products
                    </h2>

                    <div className="gap-8 grid md:grid-cols-2">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Droplet className="mb-4 size-8 md:size-9 xl:size-10 text-accent" />
                            <h3 className="mb-3 font-bold text-base md:text-lg xl:text-xl">
                                Marine Fuel Distillate (DMA)
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Specification
                                    </p>
                                    <p className="font-semibold">
                                        ISO 8217-2017
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Sulfur Content
                                    </p>
                                    <p className="font-semibold">
                                        ≤ 0.5%
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Application
                                    </p>
                                    <p className="font-semibold">
                                        Modern maritime vessels
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <Zap className="mb-4 size-8 md:size-9 xl:size-10 text-accent" />
                            <h3 className="mb-3 font-bold text-xl">
                                Marine Fuel Residual (RMD)
                            </h3>
                            <div className="space-y-3">
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Specification
                                    </p>
                                    <p className="font-semibold">
                                        ISO 8217-2017
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Sulfur Content
                                    </p>
                                    <p className="font-semibold">
                                        ≤ 0.5%
                                    </p>
                                </div>
                                <div>
                                    <p className="mb-1 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Application
                                    </p>
                                    <p className="font-semibold">
                                        Large cargo ships
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Production Capacity & Investment */}
            <section className="px-4 md:px-8 lg:px-12 py-20 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Sustainable Infrastructure Development
                    </h2>

                    <div className="gap-8 grid md:grid-cols-2">
                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                                1.5 M
                            </h3>
                            <p className="mb-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm uppercase tracking-wide">
                                Annual Production Capacity
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Our Marine Fuel Plant in Makat, Atyrau region, will process ultra-low
                                sulfur Kazakh oil to produce 1.5 million tons of environmentally
                                compliant marine fuel annually.
                            </p>
                        </Card>

                        <Card className="p-4 md:p-6 xl:p-8 border border-border">
                            <h3 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                                $118 M USD
                            </h3>
                            <p className="mb-3 text-[11px] text-muted-foreground md:text-xs xl:text-sm uppercase tracking-wide">
                                Total Investment 2024-2027
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                QMF is committed to major capital investments, with $100 million
                                dedicated to plant construction and $18 million for working capital,
                                creating sustainable energy infrastructure.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Regulatory Status */}
            <section className="py-20">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 font-bold text-xl md:text-2xl xl:text-3xl text-balance">
                        Official Regulatory Status
                    </h2>

                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <div className="space-y-6">
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm uppercase tracking-wide">
                                    Legal Status
                                </p>
                                <h3 className="font-bold text-base md:text-lg xl:text-xl">
                                    Certified Oil Supplier
                                </h3>
                            </div>

                            <div className="pt-6 border-border border-t">
                                <p className="mb-4 text-muted-foreground leading-relaxed">
                                    TOO Qazaqstan Marine Fuels has obtained the official status of
                                    <span className="font-semibold"> "Oil Supplier" </span>
                                    in accordance with the Republic of Kazakhstan Law on State Regulation
                                    of Production and Circulation of Certain Types of Petroleum Products.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    As an authorized oil supplier with a subsoil user company as founder
                                    (76% share), QMF is legally authorized to process oil from parent
                                    and other subsoil user companies and carry out the supply of marine
                                    fuel and mazut (heavy fuel oil) to domestic and international markets.
                                </p>
                            </div>

                            <div className="bg-muted/30 p-4 pt-6 border-border border-t">
                                <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    <span className="font-semibold">
                                        Market Opportunity:
                                    </span>
                                    {' '}Major international companies demonstrate strong interest in
                                    purchasing marine fuel under long-term contracts, positioning QMF as
                                    a key supplier in the global clean maritime fuel market.
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}
