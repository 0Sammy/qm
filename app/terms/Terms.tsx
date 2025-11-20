'use client'

import { motion } from 'framer-motion';

//Components
import { Card } from '@/components/ui/card';

export default function Terms() {

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
                    <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Terms and Conditions</span>
                </div>
                <h3 className="mb-6 font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    TOO Qazaqstan Marine Fuels Terms and Conditions
                </h3>
                <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                    Please read these terms and conditions carefully before using our services.
                    Last updated: November 2024
                </p>
            </motion.div>

            {/* Content Section */}
            <section>
                <div className="space-y-8 mx-auto max-w-7xl">

                    {/* Section 1 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            1. Acceptance of Terms
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            By accessing and using this website and the services provided by TOO Qazaqstan Marine Fuels (hereinafter referred to as "QMF" or "Company"), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            QMF reserves the right to modify these terms at any time. Continued use of our services following the posting of revised terms means that you accept and agree to the changes.
                        </p>
                    </Card>

                    {/* Section 2 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            2. Products and Services
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            QMF is an authorized oil supplier and manufacturer of environmentally friendly marine fuels in accordance with the standards of the International Convention MARPOL 73/78 and ISO 8217-2017. Our primary products include:
                        </p>
                        <ul className="space-y-3 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Marine Fuel Distillate DMA</strong> - ISO 8217-2017 compliant ultra-low sulfur fuel</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Marine Fuel Residual RMD</strong> - ISO 8217-2017 compliant ultra-low sulfur fuel</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Heavy Fuel Oil (Mazut)</strong> - Processed from ultra-low sulfur Kazakh oil</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            All products comply with international environmental standards and regulations set by SECA zones and IMO 2020 regulations limiting sulfur content to 0.5% in all World Ocean waters.
                        </p>
                    </Card>

                    {/* Section 3 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            3. Use License
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Modify or copy the materials</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Use the materials for any commercial purpose or for any public display</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Attempt to decompile or reverse engineer any software contained on the website</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Remove any copyright or other proprietary notations from the materials</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Transfer the materials to another person or "mirror" the materials on any other server</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Section 4 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            4. Disclaimer of Warranties
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials on this website are provided on an 'as is' basis. QMF makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, QMF does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
                        </p>
                    </Card>

                    {/* Section 5 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            5. Limitations of Liability
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            In no event shall QMF or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on QMF's website, even if QMF or an authorized representative has been notified orally or in writing of the possibility of such damage.
                        </p>
                    </Card>

                    {/* Section 6 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            6. Accuracy of Materials
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            The materials appearing on QMF's website could include technical, typographical, or photographic errors. QMF does not warrant that any of the materials on its website are accurate, complete, or current. QMF may make changes to the materials contained on its website at any time without notice. However, QMF does not make any commitment to update the materials.
                        </p>
                    </Card>

                    {/* Section 7 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            7. Links
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            QMF has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by QMF of the site. Use of any such linked website is at the user's own risk. If you decide to leave our site and access third-party content, you do so at your own risk and subject to the terms and conditions of use for such websites.
                        </p>
                    </Card>

                    {/* Section 8 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            8. Modifications
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            QMF may revise these terms and conditions for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms and conditions.
                        </p>
                    </Card>

                    {/* Section 9 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            9. Governing Law
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            These terms and conditions are governed by and construed in accordance with the laws of the Republic of Kazakhstan, and you irrevocably submit to the exclusive jurisdiction of the courts located therein. The failure of QMF to enforce any right or provision of these terms and conditions will not constitute a waiver of that right or provision.
                        </p>
                    </Card>

                    {/* Section 10 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            10. Contact Information
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            For any questions regarding these Terms and Conditions, please contact us at:
                        </p>
                        <div className="space-y-2 bg-muted/50 p-4 border border-border">
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">TOO Qazaqstan Marine Fuels</p>
                            <p className="text-muted-foreground">KORME Business Center, 3 Dostyq Street, Office 12, Astana, Kazakhstan</p>
                            <p className="text-muted-foreground">
                                Email: <a href="mailto:contact@qmfuels.kz" className="text-accent hover:text-accent/80 transition-colors">contact@qmfuels.kz</a>
                            </p>
                            <p className="text-muted-foreground">
                                Phone: <a href="tel:+77177777777" className="text-accent hover:text-accent/80 transition-colors">+7 (717) 777-7777</a>
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}
