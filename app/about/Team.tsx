'use client'

import { motion } from 'framer-motion';


type TeamMember = {
    id: number
    name: string
    role: string
    expertise: string
    experience: string
    image: string
    bio: string
}

const teamMembers: TeamMember[] = [

    {
        id: 1,
        name: 'Ilyat Kuzhagaliyev',
        role: 'General Director',
        expertise: 'Oil Industry Operations',
        experience: '17+ Years',
        image: '/generalDirector.jpg',
        bio: 'Extensive experience delivering major projects on Kashagan and Karachaganak',
    },
    {
        id: 2,
        name: 'Yerlan Nurgaliyev',
        role: 'Deputy Chairman',
        expertise: 'Oil Products Marketing Expert',
        experience: '20+ Years',
        image: '/deputyChairman.jpg',
        bio: 'Strategic expert in marketing and logistics of petroleum products',
    },
    {
        id: 3,
        name: 'Askar Kuzhagaliyev',
        role: 'PhD | Construction & Project Management',
        expertise: 'Infrastructure Development',
        experience: '20+ Years',
        image: '/coFounder.jpg',
        bio: 'Expert in construction and project management for complex facilities',
    },
    {
        id: 4,
        name: 'Asem Kairatkyzy',
        role: 'Executive Director',
        expertise: 'Corporate Development and Policy',
        experience: '15+ Years',
        image: '/executiveDirector.jpg',
        bio: 'Leading project management expert in marine fuel production',
    },
    {
        id: 5,
        name: "Aidan Beket Dassen",
        role: "Executive Board Member - International Affairs & Investments",
        expertise: "International Relations and Investment Strategy",
        experience: "12+ Years",
        image: "/boardMember.jpeg",
        bio: "Oversees global partnerships and investment planning to drive cross-border growth."
    },
    {
        id: 6,
        name: "Anjali María Navarro",
        role: "Deputy Chairwoman, Board of Directors",
        expertise: "Governance and Strategic Leadership",
        experience: "18+ Years",
        image: "/chairwoman.jpeg",
        bio: "Supports board governance and long-term strategic direction across the organization."
    },
    {
        id: 7,
        name: "Aigul Saparbayeva",
        role: "Senior Vice President - Strategic Development & Policy",
        expertise: "Strategic Planning and Policy Development",
        experience: "14+ Years",
        image: "/vicePresident.jpeg",
        bio: "Leads strategic initiatives and policy formulation to align growth with regulatory frameworks."
    },
    {
        id: 8,
        name: "Larisa Petrovna",
        role: "Director of Corporate Communications & Public Relations",
        expertise: "Corporate Communications and Media Relations",
        experience: "10+ Years",
        image: "/directorOfCorporate.jpeg",
        bio: "Manages external communications and public relations to strengthen corporate reputation."
    }
]

export default function Team() {
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

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' as const },
        },
    }

    return (
        <section className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-16 md:mb-20 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <div className="flex items-center gap-3 mx-auto mb-4 w-fit">
                        <div className="bg-accent w-12 h-1"></div>
                        <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Expert Team</span>
                    </div>
                    <h3 className="mb-6 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                        Leadership with Decades of Expertise
                    </h3>
                    <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                        Our management team brings over 70 combined years of experience in the oil and gas industry, with proven expertise in marine fuel production, project management, and global operations.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <motion.div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" variants={containerVariants} initial="hidden"
                    whileInView="visible" viewport={{ once: true }}>
                    {teamMembers.map((member) => (
                        <motion.div id={member.name} key={member.id} variants={itemVariants}>
                            <div className="group relative h-full">
                                {/* Card Container */}
                                <div className="relative flex flex-col bg-card shadow-lg hover:shadow-2xl border border-border hover:border-secondary h-full overflow-hidden transition-all duration-300">
                                    {/* Image Section */}
                                    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 h-80 overflow-hidden">
                                        <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover object-top"
                                            whileHover={{ scale: 1.05 }} transition={{ duration: 0.6 }} />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="space-y-4 p-4 md:p-5 xl:p-6">
                                        {/* Name & Role */}
                                        <div>
                                            <h4 className="mb-1 font-bold text-base md:text-lg xl:text-xl">{member.name}</h4>
                                            <p className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm">{member.role}</p>
                                        </div>

                                        {/* Experience & Expertise */}
                                        <div className="space-y-2 py-3 border-border border-t border-b">
                                            <div className="flex justify-between items-center">
                                                <span className="font-medium">Experience:</span>
                                                <span className="font-bold text-accent">{member.experience}</span>
                                            </div>
                                            <p className="text-[11px] md:text-xs xl:text-sm italic">{member.expertise}</p>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-[11px] text-card-foreground/70 md:text-xs xl:text-sm">{member.bio}</p>
                                    </div>

                                    <div className="bg-accent h-1 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 transform"></div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
