'use client'

//Components
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

//Icons
import { CircleCheckBig, Pickaxe, Truck } from 'lucide-react';

type Feature = {
  icon: React.ReactNode
  title: string
  description: string
}

const features: Feature[] = [
  {
    icon: (
      <Pickaxe className="size-6 md:size-7 xl:size-8" />
    ),
    title: 'High-Tech Extraction',
    description: 'Cutting-edge drilling and production systems that maximize recovery efficiency while minimizing environmental impact.',
  },
  {
    icon: (
      <CircleCheckBig className="size-6 md:size-7 xl:size-8" />
    ),
    title: 'Sustainable Operations',
    description: 'Committed to reducing carbon footprint and environmental stewardship through innovative green initiatives.',
  },
  {
    icon: (
      <Truck className="size-6 md:size-7 xl:size-8" />
    ),
    title: 'Global Supply Chain',
    description: 'Reliable distribution network ensuring consistent energy supply to markets worldwide with transparent logistics.',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem]">
      {/* Header */}
      <div className="max-w-2xl mx-auto mb-16 text-center">
        <p className="text-accent font-semibold tracking-wider uppercase text-[11px] md:text-xs xl:text-sm mb-4 montserrat">
          Our Capabilities
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight">
          Industry-Leading Solutions
        </h2>
        <p className="text-muted-foreground text-sm md:text-base xl:text-lg">
          Delivering exceptional value through innovation, reliability, and unwavering commitment to excellence in oil and other related production.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="group relative rounded-none overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border-l-4 border-l-accent">
            {/* Gradient accent on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <CardHeader className="relative">
              {/* Icon Circle */}
              <div className="size-12 md:size-14 xl:size-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <div className="text-accent">{feature.icon}</div>
              </div>
              <CardTitle className="text-base md:text-lg xl:text-xl text-foreground montserrat uppercase tracking-tight">{feature.title}</CardTitle>
            </CardHeader>

            <CardContent className="relative">
              <CardDescription className="text-muted-foreground leading-relaxed">
                {feature.description}
              </CardDescription>
            </CardContent>

            {/* Bottom accent line on hover */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Card>
        ))}
      </div>
    </section>
  )
}