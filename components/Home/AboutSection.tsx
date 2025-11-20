'use client'

import Image from 'next/image';

//Components
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

//Images
import aboutUsImg from "../../public/aboutUs.jpg";

//Icons
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function AboutSection() {
    const capabilities = [
        'MARPOL 73/78 Compliant Marine Fuels',
        'Ultra-Low Sulfur Oil Processing',
        'DMA & RMD Fuel Production (ISO 8217-2017)',
        'Licensed Oil Supplier Status (RoK Certified)',
    ]

    return (
        <section className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div>
                {/* Main Content Grid */}
                <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-2 mb-16">
                    <div className="relative h-96 md:h-[500px]">
                        <Image src={aboutUsImg} alt="TOO Qazaqstan Marine Fuels production facility in Astana, Kazakhstan" fill className="object-cover" />

                        <Card className="right-6 bottom-6 left-6 absolute bg-primary shadow-lg p-4 md:p-5 xl:p-6 rounded-none md:w-72 text-primary-foreground">
                            <h3 className="mb-4 font-semibold text-sm uppercase montserrat">Our Capabilities</h3>
                            <ul className="space-y-3">
                                {capabilities.map((capability, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle className="flex-shrink-0 mt-0.5 size-5" />
                                        <span className="text-sm leading-tight">{capability}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    </div>

                    {/* Right: Text Content */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <div className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">About Us</div>
                            <h2 className="font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                                Environmentally Friendly Marine Fuels for Global Shipping
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
                            TOO Qazaqstan Marine Fuels (QMF) is a Kazakh company dedicated to producing high-quality marine fuels in strict accordance with the International Convention MARPOL 73/78 standards.
                        </p>

                        <div className="space-y-4">
                            <div>
                                <h3 className="mb-2 font-semibold text-foreground uppercase montserrat">Our Mission</h3>
                                <p className="text-muted-foreground">
                                    We produce two types of environmentally friendly marine fuel from Kazakh ultra-low sulfur oil: Marine fuel distillate DMA and Marine fuel residual RMD, both compliant with ISO 8217-2017 standards.
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 font-semibold text-foreground uppercase montserrat">Our Authority</h3>
                                <p className="text-muted-foreground">
                                    With our founder as a subsoil user company (76% share), QMF holds official "Oil Supplier" status under the Republic of Kazakhstan Law on State Regulation of Production and Circulation of Petroleum Products. This enables us to process oil from both our parent company and other subsoil user companies.
                                </p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <Link href="/about">
                                <Button size="lg" className="bg-accent hover:bg-accent/90 rounded-none uppercase cursor-pointer montserrat">
                                    Learn More About Our Products
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Company Details Footer */}
                <div className="pt-12 border-t">
                    <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center">
                        <div>
                            <h4 className="mb-2 font-semibold text-foreground">Company Name</h4>
                            <p className="text-muted-foreground">TOO Qazaqstan Marine Fuels</p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold text-foreground">Location</h4>
                            <p className="text-muted-foreground">
                                Republic of Kazakhstan
                                <br />
                                Astana, 3 Dostyq street
                                <br />
                                KORME Business Center, Office 12
                            </p>
                        </div>
                        <div>
                            <h4 className="mb-2 font-semibold text-foreground">Expertise</h4>
                            <p className="text-muted-foreground">
                                Marine Fuel Production
                                <br />
                                MARPOL Compliance
                                <br />
                                ISO 8217-2017 Standards
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}