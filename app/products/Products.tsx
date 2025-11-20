"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

//Icons
import { ChevronRight, Droplets, Plane, Flame, Package, Zap, CircleCheckBig } from 'lucide-react';

type ProductDetail = {
    id: number;
    name: string;
    category: string;
    section: string;
    description: string;
    specifications: string[];
    useCases: string[];
    icon: React.ReactNode;
    color: string;
    backgroundImage: string;
}

const productsData: ProductDetail[] = [
    {
        id: 1,
        name: 'Diesel Fuel EN590',
        category: 'Automotive & Marine',
        section: 'diesel',
        description: 'High-quality ultra-low sulfur diesel fuel compliant with EN590 standards',
        specifications: ['Sulfur content: < 10 ppm', 'Density: 820-860 kg/m³', 'Flashpoint: > 55°C'],
        useCases: ['Heavy-duty vehicles', 'Marine engines', 'Power generation', 'Industrial equipment'],
        icon: <Droplets className="size-6" />,
        color: 'from-blue-600 to-blue-700',
        backgroundImage: "/en-950.jpg"
    },
    {
        id: 2,
        name: 'Jet Fuel Jet A-1',
        category: 'Aviation',
        section: 'jet',
        description: 'Premium aviation turbine fuel meeting ASTM D1655 specifications',
        specifications: ['Flashpoint: -40°C minimum', 'Energy content: > 43.15 MJ/kg', 'Freezing point: -47°C'],
        useCases: ['Commercial aircraft', 'Military jets', 'Private aviation', 'Helicopter operations'],
        icon: <Plane className="size-6" />,
        color: 'from-sky-600 to-sky-700',
        backgroundImage: "/jet a-1.jpg"
    },
    {
        id: 3,
        name: 'LPG / Propane-Butane',
        category: 'Petrochemicals',
        section: 'lpg',
        description: 'Liquefied petroleum gas for heating, cooking, and industrial applications',
        specifications: ['Pressure: 16-25 bar', 'Boiling point: -42°C', 'Calorific value: 46.3 MJ/kg'],
        useCases: ['Heating systems', 'Cooking appliances', 'Industrial processes', 'Vehicle fuel'],
        icon: <Flame className="size-6" />,
        color: 'from-orange-600 to-orange-700',
        backgroundImage: "/lpg.jpeg"
    },
    {
        id: 4,
        name: 'Fuel Oil Mazut M-100',
        category: 'Industrial',
        section: 'fuel',
        description: 'Heavy fuel oil for power generation and industrial heating systems',
        specifications: ['Sulfur content: < 3.5%', 'Density: 900-920 kg/m³', 'Viscosity: 100 cSt @ 40°C'],
        useCases: ['Power plants', 'Industrial boilers', 'Heat generation', 'Marine vessels'],
        icon: <Flame className="size-6" />,
        color: 'from-red-600 to-red-700',
        backgroundImage: "/m-100.webp"
    },
    {
        id: 5,
        name: 'Bitumen / Asphalt',
        category: 'Construction',
        section: 'bitumen',
        description: 'Premium asphalt binder for road construction and waterproofing',
        specifications: ['Softening point: 47-52°C', 'Penetration: 60-70 (0.1 mm)', 'Density: 1.0-1.1 g/cm³'],
        useCases: ['Road construction', 'Waterproofing', 'Roofing materials', 'Pavement binders'],
        icon: <Package className="size-6" />,
        color: 'from-stone-700 to-stone-800',
        backgroundImage: "/bitumen.jpg"
    },
    {
        id: 6,
        name: 'D6 Virgin Fuel Oil',
        category: 'Industrial',
        section: 'virgin',
        description: 'Virgin fuel oil used in heavy industrial applications',
        specifications: ['Viscosity: 5.0-8.0 cSt @ 100°C', 'Flash point: > 180°C', 'Density: 860-920 kg/m³'],
        useCases: ['Industrial furnaces', 'Bunker fuel', 'Marine applications', 'Power generation'],
        icon: <Droplets className="size-6" />,
        color: 'from-amber-700 to-amber-800',
        backgroundImage: "/dg.jpg"
    },
    {
        id: 7,
        name: 'D2 Gasoil',
        category: 'Marine & Industrial',
        section: 'gasoil',
        description: 'High-specification gasoil for marine engines and equipment',
        specifications: ['Sulfur content: < 0.1%', 'Viscosity: 1.9-4.1 cSt @ 40°C', 'Density: 775-840 kg/m³'],
        useCases: ['Marine engines', 'Industrial equipment', 'Diesel generators', 'Heating systems'],
        icon: <Droplets className="size-6" />,
        color: 'from-cyan-600 to-cyan-700',
        backgroundImage: "/D2.jpg"
    },
    {
        id: 8,
        name: 'LNG Liquified Natural Gas',
        category: 'Energy',
        section: 'lng',
        description: 'Liquified natural gas for power generation and industrial use',
        specifications: ['Temperature: -162°C', 'Density: 422-465 kg/m³', 'Energy: 50-55 MJ/kg'],
        useCases: ['Power plants', 'Industrial heating', 'Petrochemical feedstock', 'Fuel gas'],
        icon: <Zap className="size-6" />,
        color: 'from-indigo-600 to-indigo-700',
        backgroundImage: "/LNG.webp"
    },
    {
        id: 9,
        name: 'Urea Prilled/Granular',
        category: 'Chemicals',
        section: 'urea',
        description: 'High-purity urea for fertilizers and industrial applications',
        specifications: ['Nitrogen content: 46%', 'Purity: > 99.3%', 'Granule size: 0.8-2.5 mm'],
        useCases: ['Agricultural fertilizer', 'Industrial synthesis', 'Polymers', 'Cosmetics'],
        icon: <Package className="size-6" />,
        color: 'from-green-600 to-green-700',
        backgroundImage: "/urea.jpg"
    },
    {
        id: 10,
        name: 'Petroleum Coke',
        category: 'Industrial',
        section: 'coke',
        description: 'Premium petroleum coke for aluminum smelting and energy',
        specifications: ['Fixed carbon: > 99%', 'Sulfur content: < 1%', 'Energy: 32 MJ/kg'],
        useCases: ['Aluminum production', 'Steel manufacturing', 'Power generation', 'Electrode production'],
        icon: <Zap className="size-6" />,
        color: 'from-gray-700 to-gray-800',
        backgroundImage: "/dg.jpg"
    },
]

const Products = () => {

    const [expandedId, setExpandedId] = useState<number | null>(null)

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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' as const },
        },
    }

    return (
        <main className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-3 mx-auto mb-4 w-fit">
                        <div className="bg-accent w-12 h-1"></div>
                        <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Our Premium Product Line</span>
                    </div>
                    <h3 className="mb-6 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                        Excellence in Every Product
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                        Our management team brings over 70 combined years of experience in the oil and gas industry, with proven expertise in marine fuel production, project management, and global operations.
                    </p>
                </motion.div>

                {/* Products grid */}
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="gap-6 grid grid-cols-1 min-[600px]:grid-cols-2">
                    {productsData.map((product) => (
                        <motion.div id={product.section} key={product.id} variants={itemVariants}
                            onClick={() => setExpandedId(expandedId === product.id ? null : product.id)} className="cursor-pointer">
                            <div className="bg-card shadow-lg hover:shadow-2xl border border-border hover:border-accent h-full overflow-hidden text-card-foreground transition-all duration-300">
                                {/* Product header */}
                                <div className={`bg-cover bg-no-repeat bg-center p-4 md:p-6 xl:p-8 relative overflow-hidden`} style={{ backgroundImage: `url(${product.backgroundImage})` }}>
                                    <div className="absolute inset-0 bg-black/70" />

                                    <div className="z-[2] relative flex justify-between items-start mb-4">
                                        <motion.div className="bg-white backdrop-blur p-3 text-accent" whileHover={{ scale: 1.1, rotate: 10 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
                                            {product.icon}
                                        </motion.div>
                                        <span className="opacity-90 font-semibold text-sm uppercase tracking-widest">#{product.id}</span>
                                    </div>

                                    <h3 className="relative mb-2 font-bold text-white text-xl md:text-2xl xl:text-3xl">{product.name}</h3>
                                    <p className="relative text-[11px] text-white/80 md:text-xs xl:text-sm">{product.category}</p>
                                </div>

                                {/* Product content */}
                                <div className="p-4 md:p-6 xl:p-8">
                                    <p className="mb-6 leading-relaxed">{product.description}</p>

                                    {/* Expandable section */}
                                    <motion.div
                                        initial={false}
                                        animate={{
                                            height: expandedId === product.id ? 'auto' : 0,
                                            opacity: expandedId === product.id ? 1 : 0,
                                            marginBottom: expandedId === product.id ? 24 : 0,
                                        }} transition={{ duration: 0.3 }} className="overflow-hidden">
                                        <div className="space-y-6 pt-6 border-border border-t">
                                            {/* Specifications */}
                                            <div>
                                                <h4 className="flex items-center mb-3 font-semibold">
                                                    <span className="bg-accent mr-2 rounded-full size-2"></span>
                                                    Specifications
                                                </h4>
                                                <ul className="space-y-2">
                                                    {product.specifications.map((spec, idx) => (
                                                        <li key={idx} className="flex items-center gap-x-1 text-[11px] md:text-xs xl:text-sm">
                                                            <span className="text-accent"><CircleCheckBig className='size-3' /></span>
                                                            <span>{spec}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Use cases */}
                                            <div>
                                                <h4 className="flex items-center mb-3 font-semibold">
                                                    <span className="bg-accent mr-2 rounded-full size-2"></span>
                                                    Primary Applications
                                                </h4>
                                                <ul className="space-y-2">
                                                    {product.useCases.map((useCase, idx) => (
                                                        <li key={idx} className="flex items-center gap-x-1 text-[11px] md:text-xs xl:text-sm">
                                                            <span className="text-accent"><CircleCheckBig className='size-3' /></span>
                                                            <span>{useCase}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Expand button */}
                                    <motion.button className="inline-flex justify-between items-center w-full font-semibold text-accent hover:text-amber-700 transition-colors" whileHover={{ x: 5 }}>
                                        <span>{expandedId === product.id ? 'Show Less' : 'View Full Details'}</span>
                                        <motion.span animate={{ rotate: expandedId === product.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                            <ChevronRight size={20} />
                                        </motion.span>
                                    </motion.button>
                                </div>

                                {/* Bottom accent */}
                                <div className={`h-1 bg-gradient-to-r ${product.color}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="mt-20 text-center">
                    <p className="mb-8 text-sm md:text-base xl:text-lg">
                        Ready to explore our products in detail or discuss your requirements?
                    </p>
                    <motion.a href="/contact" className="bg-gradient-to-r from-accent to-amber-700 hover:shadow-lg px-8 py-4 font-semibold text-white transition-all duration-300" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        Contact Our Sales Team
                    </motion.a>
                </motion.div>
            </div>
        </main>
    );
}

export default Products;