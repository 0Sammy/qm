'use client'

import { motion } from 'framer-motion';

//Components
import { Card } from '@/components/ui/card';

export default function Privacy() {

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
                    <span className="font-semibold text-[11px] text-accent md:text-xs xl:text-sm uppercase tracking-wider montserrat">Privacy Policy</span>
                </div>
                <h3 className="mb-6 font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl leading-tight">
                    TOO Qazaqstan Marine Fuels Privacy Policy
                </h3>
                <p className="mx-auto max-w-2xl text-sm md:text-base xl:text-lg">
                    Your privacy is important to us. This policy explains how we collect, use, and protect your information.
                    Last updated: November 2024
                </p>
            </motion.div>

            {/* Content Section */}
            <section>
                <div className="space-y-8 mx-auto max-w-7xl">

                    {/* Section 1 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            1. Introduction
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            TOO Qazaqstan Marine Fuels (hereinafter referred to as "QMF," "we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and otherwise process your personal information in connection with our website and services. We comply with applicable data protection laws and regulations in the Republic of Kazakhstan and internationally.
                        </p>
                    </Card>

                    {/* Section 2 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            2. Information We Collect
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            We may collect information from you in various ways:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="mb-2 font-semibold text-foreground">Information You Provide Directly</h3>
                                <p className="ml-4 text-muted-foreground">Contact forms, emails, phone calls, and inquiries regarding our products or services</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold text-foreground">Automatically Collected Information</h3>
                                <p className="ml-4 text-muted-foreground">Website usage data, IP addresses, browser type, pages visited, and time spent on pages through cookies and similar technologies</p>
                            </div>
                            <div>
                                <h3 className="mb-2 font-semibold text-foreground">Business Information</h3>
                                <p className="ml-4 text-muted-foreground">For B2B inquiries, we may collect your company name, position, business contact details, and purchasing information</p>
                            </div>
                        </div>
                    </Card>

                    {/* Section 3 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            3. How We Use Your Information
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            We use the information we collect for the following purposes:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To respond to your inquiries and provide customer support</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To process and fulfill orders for marine fuel products</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To send marketing communications about our products and services</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To improve our website and services</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To comply with legal obligations and regulatory requirements</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>To prevent fraud, security issues, and other harmful activity</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Section 4 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            4. Information Sharing and Disclosure
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            We do not sell, trade, or rent your personal information to third parties. However, we may share your information in the following circumstances:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Service Providers:</strong> With vendors and partners who assist us in operating our website and providing services</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Legal Compliance:</strong> When required by law or in response to government requests</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Business Transactions:</strong> In connection with mergers, acquisitions, or asset sales</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span><strong>Protection:</strong> To protect our rights, privacy, safety, or property</span>
                            </li>
                        </ul>
                    </Card>

                    {/* Section 5 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            5. Data Security
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. These measures include:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Secure Socket Layer (SSL) encryption for data transmission</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Restricted access to personal information</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Regular security audits and updates</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                        </p>
                    </Card>

                    {/* Section 6 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            6. Cookies and Tracking Technologies
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            Our website uses cookies and similar tracking technologies to enhance your experience. Cookies are small files stored on your device that help us understand user behavior and preferences. You can control cookie settings through your browser, though disabling cookies may affect website functionality.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Types of cookies we use include: analytics cookies for website performance, functional cookies for website features, and marketing cookies for targeted content.
                        </p>
                    </Card>

                    {/* Section 7 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            7. Your Rights and Choices
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            Depending on your location, you may have the following rights:
                        </p>
                        <ul className="space-y-2 ml-4">
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Right to access your personal information</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Right to correct or update inaccurate information</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Right to delete your information (subject to legal obligations)</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Right to opt-out of marketing communications</span>
                            </li>
                            <li className="flex gap-3 text-muted-foreground">
                                <span className="font-bold text-accent">•</span>
                                <span>Right to data portability</span>
                            </li>
                        </ul>
                        <p className="mt-4 text-muted-foreground leading-relaxed">
                            To exercise these rights, please contact us using the information provided in the Contact section below.
                        </p>
                    </Card>

                    {/* Section 8 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            8. Data Retention
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We retain your personal information for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. The retention period may vary depending on the nature of the information and the purposes for which we use it. Once information is no longer needed, we securely delete or anonymize it.
                        </p>
                    </Card>

                    {/* Section 9 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            9. Third-Party Links
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of external sites. We encourage you to review their privacy policies before providing any personal information.
                        </p>
                    </Card>

                    {/* Section 10 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            10. Fraud Reporting and Security
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            If you suspect fraudulent activity or security issues related to your information, please report it immediately to our security team:
                        </p>
                        <div className="bg-muted/50 p-4 border border-border rounded-lg">
                            <p className="text-muted-foreground">
                                Email: <a href="mailto:security@qmfuels.kz" className="font-semibold text-accent hover:text-accent/80 transition-colors">security@qmfuels.kz</a>
                            </p>
                            <p className="mt-2 text-muted-foreground text-sm">
                                All fraud reports are treated with the highest priority and confidentiality.
                            </p>
                        </div>
                    </Card>

                    {/* Section 11 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            11. Changes to This Privacy Policy
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by updating the "Last updated" date at the top of this page. Continued use of our website and services following the posting of changes means you accept the updated Privacy Policy.
                        </p>
                    </Card>

                    {/* Section 12 */}
                    <Card className="p-4 md:p-6 xl:p-8 border border-border">
                        <h2 className="mb-4 font-bold text-accent text-lg md:text-xl xl:text-2xl">
                            12. Contact Information
                        </h2>
                        <p className="mb-4 text-muted-foreground leading-relaxed">
                            If you have questions about this Privacy Policy or our privacy practices, please contact us:
                        </p>
                        <div className="space-y-2 bg-muted/50 p-4 border border-border">
                            <p className="text-[11px] text-muted-foreground md:text-xs xl:text-sm">TOO Qazaqstan Marine Fuels</p>
                            <p className="text-muted-foreground">43, Syganak Street, Office 8, Yesil district, Astana 010000, Kazakhstan</p>
                            <p className="text-muted-foreground">
                                Email: <a href="mailto:contact@qmfuels.kz" className="text-accent hover:text-accent/80 transition-colors">contact@qmfuels.kz</a>
                            </p>
                            <p className="text-muted-foreground">
                                Phone: <a href="tel:+77474196443" className="text-accent hover:text-accent/80 transition-colors">+77474196443</a>
                            </p>
                        </div>
                    </Card>
                </div>
            </section>
        </main>
    )
}
