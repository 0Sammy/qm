'use client';

import Image, { StaticImageData } from 'next/image';

//Components
import { Card } from '@/components/ui/card';

//Images
import generalDirector from "../../public/generalDirector.jpg";
import coFounder from "../../public/coFounder.jpg";
import deputyChairman from "../../public/deputyChairman.jpg";
import executiveDirector from "../../public/executiveDirector.jpg";
import Link from 'next/link';

type ExecutiveProfile = {
    id: number;
    name: string;
    position: string;
    expertise: string;
    experience: string;
    img: StaticImageData;
}

const executives: ExecutiveProfile[] = [
    {
        id: 1,
        name: 'Ilyat Kuzhagaliyev',
        position: 'General Director',
        expertise: 'Oil Industry Operations',
        experience: 'Over 17 years of industry experience',
        img: generalDirector,
    },
    {
        id: 2,
        name: 'Yerlan Nurgaliyev',
        position: 'Deputy Chairman',
        expertise: 'Oil Products Marketing Expert',
        experience: 'Over 20 years in oil and gas industry',
        img: deputyChairman
    },
    {
        id: 3,
        name: 'Askar Kuzhagaliyev',
        position: 'PhD, Co-Founder',
        expertise: 'Construction Management',
        experience: 'Over 20 years in oil and gas industry',
        img: coFounder,
    },
    {
        id: 4,
        name: 'Asem Kairatkyzy',
        position: 'Executive Director',
        expertise: 'Corporate Development and Policy',
        experience: 'Over 15 years in oil and gas industry',
        img: executiveDirector,
    },
];

export default function ManagementSection() {
    return (
        <section className="relative bg-[url('../public/background.png')] bg-cover bg-no-repeat px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div className='absolute inset-0 bg-background/50 dark:bg-background/95' />
            <div className="z-[2] relative mb-20 text-center">
                <div className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">
                    Leadership Team
                </div>
                <h2 className="my-4 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    Industry Expertise & Leadership Excellence
                </h2>
                <p className="mx-auto max-w-3xl text-muted-foreground text-sm md:text-base xl:text-lg leading-relaxed">
                    Our management team brings decades of combined experience in oil and gas operations,
                    with proven expertise in marine fuel production, project management, and industry compliance.
                </p>
            </div>

            {/* Management Grid */}
            <div className="z-[2] relative mx-auto max-w-7xl">
                <div className="gap-10 grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {executives.map((executive) => (
                        <Card key={executive.id} className="group relative bg-card hover:shadow-lg p-4 md:p-5 xl:p-6 border-t-2 border-t-accent border-l-2 border-l-accent rounded-none transition-shadow duration-300">
                            {/* Number Badge */}
                            <div className="-top-6 left-6 absolute flex justify-center items-center bg-primary rounded-[50%] size-12 font-bold text-primary-foreground text-lg group-hover:scale-110 transition-transform">
                                {executive.id}
                            </div>
                            <Image src={executive.img} alt={executive.name} className='mx-auto size-60 object-cover object-top' />
                            <div>
                                <h3 className="font-bold text-foreground text-base md:text-lg xl:text-xl uppercase tracking-tight montserrat">
                                    {executive.name}
                                </h3>
                                <p className="font-semibold text-primary text-sm md:text-base xl:text-lg">
                                    {executive.position}
                                </p>
                                <p className="mt-1 font-medium text-[11px] text-muted-foreground md:text-xs xl:text-sm">
                                    {executive.expertise}
                                </p>
                                <Link href={`/about#${executive.name}`} className='block mt-4 w-fit font-semibold text-accent hover:text-primary duration-300'>Learn More</Link>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Core Values */}
            <div className="z-[2] relative mt-24">
                <div className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">
                    Our Approach
                </div>
                <h3 className="mt-4 mb-16 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    Core Values for Industry Leadership
                </h3>

                <div className="gap-8 grid grid-cols-1 md:grid-cols-2">
                    {[
                        {
                            title: 'MARPOL Compliance',
                            description:
                                'Unwavering commitment to international maritime environmental standards, ensuring our marine fuels meet ISO 8217-2017 specifications.',
                        },
                        {
                            title: 'Environmental Sustainability',
                            description:
                                'Producing ultra-low sulfur marine fuels that minimize environmental impact and support global emission reduction initiatives.',
                        },
                        {
                            title: 'Operational Excellence',
                            description:
                                'Leveraging decades of industry experience to deliver reliable, high-quality marine fuel products and mazut (heavy fuel oil).',
                        },
                        {
                            title: 'Industry Partnerships',
                            description:
                                'Collaborating with parent subsoil companies and other industry partners to create integrated fuel supply solutions.',
                        },
                    ].map((value, index) => (
                        <div key={index} className="py-2 pl-6 border-l-4 border-l-primary hover:border-l-accent transition-colors">
                            <h4 className="mb-3 font-bold text-foreground text-base md:text-lg xl:text-xl uppercase montserrat">
                                {value.title}
                            </h4>
                            <p className="max-w-[60ch] text-muted-foreground leading-relaxed">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}