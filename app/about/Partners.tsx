'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

//Components
import { Card } from '@/components/ui/card';

const Partners = () => {

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' as const },
        },
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    }

    const partnerships = [
        {
            category: "Shipping & Maritime",
            description: "Global maritime partners for fuel logistics and distribution",
            companies: ["Maersk Tankers", "Kazmortransflot", "Al-Qima"],
            logos: ["maersk.png", "kazmortransflot.png", "al-qima.jpeg"]
        },
        {
            category: "Terminal Operations",
            description: "Strategic terminal and storage infrastructure partners",
            companies: ["Litasco Terminals", "PetroKazakhstan", "KazTransOil"],
            logos: ["litasco.png", "petro.jpg", "kazoil.png"]
        },
        {
            category: "Classification & Inspection",
            description: "Quality assurance and international compliance partners",
            companies: ["SGS", "Intertek", "Bureau Veritas", "Cotecna", "TÜV SÜD"],
            logos: ["sgs.png", "intertek.jpg", "bureau.png", "cotecna.png", "tuv.jpg"]
        },
        {
            category: "Financial Institutions",
            description: "Banking and financial services partners",
            companies: [
                "Halyk Bank Kazakhstan",
                "First Heartland Bank Kazakhstan",
                "HSBC",
                "Standard Chartered",
            ],
            logos: ["halyk.png", "first.jpg", "hsbc.png", "standard.png"]
        },
        {
            category: "Trading Partners",
            description: "Strategic trading and distribution partners",
            companies: ["Vitol", "Lukoil Trading", "Glencore"],
            logos: ["vitol.png", "lukoil.png", "glencore.png"]
        },
    ]

    return (
        <main className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <section className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-3 mx-auto mb-4 w-fit">
                        <div className="bg-accent w-12 h-1"></div>
                        <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Our Partners</span>
                    </div>
                    <h3 className="mb-6 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                        Our Partners
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                        TOO Qazaqstan Marine Fuels collaborates with leading global and regional partners across maritime, logistics, finance, and trade sectors to deliver excellence in marine fuel production and distribution.
                    </p>
                </motion.div>
            </section>

            <motion.div className="place-content-center gap-12 grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {partnerships.map((category, catIndex) => (
                    <div key={category.category + catIndex}>
                        <div className="mb-8">
                            <h2 className="mb-2 font-bold text-xl md:text-2xl xl:text-3xl">
                                {category.category}
                            </h2>
                            <p className="text-muted-foreground">{category.description}</p>
                        </div>

                        <div className="gap-6 grid grid-cols-2 min-[600px]:grid-cols-3 lg:grid-cols-4">
                            {category.companies.map((company, idx) => {
                                const logo = category.logos && category.logos[idx] ? category.logos[idx] : "/logo.png";
                                return (
                                    <CompanyCard key={company + idx} company={company} logo={logo} />
                                );
                            })}
                        </div>
                    </div>
                ))}
            </motion.div>
        </main>
    );
}

export default Partners;

const CompanyCard = ({ company, logo }: { company: string, logo: string }) => (
    <Card className="flex justify-center items-center hover:shadow-lg p-4 border border-border hover:border-accent transition-all duration-300">
        <div className="text-center">
            {logo && (
                <Image width={100} height={100} src={`/partners/${logo}`} alt={`${company} logo`} className='mx-auto' />
            )}
            <h3 className="mt-2 font-semibold text-[11px] md:text-xs xl:text-sm leading-tight">
                {company}
            </h3>
        </div>
    </Card>
);