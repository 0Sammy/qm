'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';

//Component
import { Card } from '@/components/ui/card';

//Icons
import { Mail, Phone, MapPin, AlertCircle } from 'lucide-react';

export default function ContactPage() {

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' as const },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    }

    return (
        <main className="min-h-dvh">
            {/* Hero Section */}
            <section className="relative px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] pt-20 pb-10 border-border border-b">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <div className="flex items-center gap-3 mx-auto mb-4 w-fit">
                            <div className="bg-accent w-12 h-1"></div>
                            <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Enquiry Channels</span>
                        </div>
                        <h3 className="mb-6 font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                            Get in Touch
                        </h3>
                        <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                            Contact TOO Qazaqstan Marine Fuels. for inquiries about our petroleum products and services.
                            We're here to assist you 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information */}
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="gap-8 grid min-[600px]:grid-cols-2 mb-12">

                        {/* Main Contact Card */}
                        <Card className="bg-card p-4 md:p-6 xl:p-8 border border-border">
                            <h2 className="mb-8 font-bold text-lg md:text-xl xl:text-2xl">
                                Contact Information
                            </h2>

                            <div className="space-y-6">
                                {/* Address */}
                                <div className="flex gap-4">
                                    <MapPin className="flex-shrink-0 mt-1 size-6 text-accent" />
                                    <div>
                                        <h3 className="mb-2 font-semibold">
                                            Our Office
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            KORME Business Center<br />
                                            3 Dostyq Street, Office 12<br />
                                            Astana, Kazakhstan
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex gap-4">
                                    <Phone className="flex-shrink-0 mt-1 size-6 text-accent" />
                                    <div>
                                        <h3 className="mb-2 font-semibold">
                                            Phone
                                        </h3>
                                        <Link href="tel:+77177777777"  className="text-accent hover:text-accent/80 transition-colors">
                                            +7 (717) 777-7777
                                        </Link>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex gap-4">
                                    <Mail className="flex-shrink-0 mt-1 size-6 text-accent" />
                                    <div>
                                        <h3 className="mb-2 font-semibold">
                                            Email
                                        </h3>
                                        <Link  href="mailto:contact@qmfuels.kz"  className="text-accent hover:text-accent/80 transition-colors">
                                            contact@qmfuels.kz
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Card>

                        {/* Security & Compliance Card */}
                        <Card className="bg-card p-4 md:p-6 xl:p-8 border border-border">
                            <h2 className="flex items-center gap-2 mb-8 font-bold text-lg md:text-xl xl:text-2xl">
                                <AlertCircle className="size-6 text-accent" />
                                Report Fraud
                            </h2>

                            <div className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    If you have concerns regarding fraudulent activity or security issues,
                                    please report them directly to our security team:
                                </p>

                                <div className="bg-muted/50 p-4 border border-border rounded-lg">
                                    <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                        Security Email Address
                                    </p>
                                    <Link href="mailto:security@qmfuels.kz" className="font-semibold text-accent hover:text-accent/80 text-sm md:text-base xl:text-lg break-all transition-colors">
                                        security@qmfuels.kz
                                    </Link>
                                </div>

                                <p className="pt-4 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    All fraud reports are treated with the highest priority and
                                    confidentiality. We take security very seriously.
                                </p>
                            </div>
                        </Card>
                    </div>

                    {/* Business Hours */}
                    <Card className="bg-card p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-6 font-bold text-lg md:text-xl xl:text-2xl">
                            Response Times
                        </h2>
                        <div className="gap-6 grid min-[600px]:grid-cols-3">
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    General Inquiries
                                </p>
                                <p className="font-semibold">
                                    24-48 Hours
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    Urgent Matters
                                </p>
                                <p className="font-semibold">
                                    4-6 Hours
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    Security Issues
                                </p>
                                <p className="font-semibold">
                                    2 Hours
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </motion.div>
        </main>
    )
}
