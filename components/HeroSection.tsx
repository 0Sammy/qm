'use client'

//Icons
import { ChevronRight } from 'lucide-react';

interface PageHeroProps {
    title: string
    description?: string
    breadcrumbs?: Array<{
        label: string
        href?: string
    }>
    backgroundImage?: string
}

export default function HeroSection({ title, description, breadcrumbs, backgroundImage = '/2ndHero.jpg' }: PageHeroProps) {
    return (
        <div className="relative w-full overflow-hidden">
            <div className={`absolute inset-0 bg-cover bg-no-repeat bg-center`} style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-slate-900/70" />
            </div>

            {/* Content Container */}
            <div className="z-10 relative mx-auto px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-24 max-w-7xl h-[40vh]">
                <div className="flex flex-col justify-center items-center h-full text-center">
                    {/* Breadcrumbs */}
                    {breadcrumbs && breadcrumbs.length > 0 && (
                        <nav className="flex justify-center items-center gap-2 mb-4" aria-label="Breadcrumb">
                            {breadcrumbs.map((breadcrumb, index) => {
                                const isLast = index === breadcrumbs.length - 1;
                                return (
                                    <div key={index} className="flex items-center gap-2 text-muted dark:text-muted-foreground text-sm">
                                        {index > 0 && <ChevronRight className="size-4" />}
                                        {breadcrumb.href && !isLast ? (
                                            <a href={breadcrumb.href} className="font-medium hover:text-accent transition-colors">
                                                {breadcrumb.label}
                                            </a>
                                        ) : isLast && breadcrumb.href ? (
                                            <a href={breadcrumb.href} className="font-semibold text-accent decoration-accent underline">
                                                {breadcrumb.label}
                                            </a>
                                        ) : (
                                            // last item or non-link — plain element with different style
                                            <span className={isLast ? "font-semibold text-accent" : "font-medium "}>
                                                {breadcrumb.label}
                                            </span>
                                        )}
                                    </div>
                                );
                            })}
                        </nav>
                    )}


                    {/* Main Title */}
                    <h1 className="mb-4 font-bold text-white text-2xl sm:text-3xl md:text-4xl xl:text-5xl tracking-tight">
                        {title}
                    </h1>

                    {/* Description */}
                    {description && (
                        <p className="mx-auto max-w-2xl text-slate-200">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Accent Line at Bottom */}
            <div className="z-10 relative bg-gradient-to-r from-transparent via-accent to-transparent h-1" />
        </div>
    )
}
