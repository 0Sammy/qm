'use client';
import Link from 'next/link';

import { motion } from 'framer-motion';

//Icons
import { Droplets, Flame, Cog, Leaf, Truck, Headphones } from 'lucide-react';

type ServiceCard = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceCard[] = [
  {
    id: "dma",
    icon: <Droplets className="size-8" />,
    title: 'Marine Fuel Distillate (DMA)',
    description: 'ISO 8217-2017 compliant marine fuel distillate produced from ultra-low sulfur Kazakh oil, meeting international MARPOL standards for cleaner maritime operations.',
  },
  {
    id: "rmd",
    icon: <Flame className="size-8" />,
    title: 'Marine Fuel Residual (RMD)',
    description: 'ISO 8217-2017 certified marine fuel residual offering cost-effective energy solutions with environmental compliance for large vessel operations.',
  },
  {
    id: "ops",
    icon: <Cog className="size-8" />,
    title: 'Oil Processing Services',
    description: 'Professional processing and refining of crude oil from subsoil user companies into marine-grade fuels with strict quality control.',
  },
  {
    id:"marpol",
    icon: <Leaf className="size-8" />,
    title: 'MARPOL Compliance & Standards',
    description: 'Full adherence to MARPOL 73/78 international convention ensuring environmentally friendly marine fuel production and supply.',
  },
  {
    id: "scm",
    icon: <Truck className="size-8" />,
    title: 'Supply Chain Management',
    description: 'Reliable and efficient logistics network for marine fuel distribution and delivery to shipping ports and maritime operations.',
  },
  {
    id: "tsl",
    icon: <Headphones className="size-8" />,
    title: 'Technical Support & Logistics',
    description: 'Expert guidance on fuel specifications, delivery coordination, and comprehensive support for maritime fuel requirements.',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section className="bg-background px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">
            Our Services
          </p>
          <h2 className="my-4 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
            Marine Fuel Excellence & Environmental Compliance
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
            Comprehensive solutions for marine fuel production, processing, and supply adhering to international MARPOL standards.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div className="gap-6 grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {services.map((service, index) => (
            <motion.div key={index} variants={cardVariants} className="group relative">
              <div className="relative bg-card hover:shadow-lg p-4 md:p-6 xl:p-8 border border-border h-full overflow-hidden transition-all duration-300">
                <div className="top-0 bottom-0 left-0 absolute bg-accent w-1 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 transform"></div>

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="inline-flex justify-center items-center bg-accent/10 group-hover:bg-accent/20 rounded-full size-16 transition-colors duration-300">
                    <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 font-bold text-foreground group-hover:text-accent text-xl uppercase tracking-tight transition-colors duration-300 montserrat">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* View Details Link */}
                <Link href={`/about#${service.id}`} className="inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 mt-6 font-semibold text-accent text-sm transition-all translate-y-2 group-hover:translate-y-0 duration-300 transform">
                  <span>View Details</span>
                  <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>

                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}