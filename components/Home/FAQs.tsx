"use client"

import { useState } from "react";
import { motion } from "framer-motion";

//Components
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

//Icons
import { AlertTriangle, CheckCircle2, Shield, AlertCircle } from "lucide-react";
import { Box, InfoCircle, Lock1 } from "iconsax-reactjs";

type FAQItem = {
    id: string
    question: string
    answer: string
    category: "general" | "products" | "security"
}

const faqItems: FAQItem[] = [
    {
        id: "security-1",
        category: "security",
        question: "How can I verify this is the official TOO Qazaqstan Marine Fuels website?",
        answer: `This is the legitimate TOO Qazaqstan Marine Fuels website. Here's how to verify:
    
    • Domain: Official domain is www.qmfuels.kz and www.tooqazaqstanmarinefuels.kz — any other domain is not ours
    • Email: Official emails come from @qmfuels.kz (we do not use free email services like Gmail or Outlook)
    • Phone & Address: Call +7 (7172) 777-777 or visit our registered office at KORME business center, 3 Dostyq street, Astana, Republic of Kazakhstan, Office 12
    • SSL Certificate: This site uses a valid HTTPS connection (look for the padlock icon in your browser)
    • Regulatory IDs: We are registered as "Qazaqstan Marine Fuels LLP" with status as "Oil supplier" per RoK Law on State Regulation of Production and Circulation of Petroleum Products`,
    },
    {
        id: "security-2",
        category: "security",
        question: "How to tell the real TOO Qazaqstan Marine Fuels site from impersonators?",
        answer: `OFFICIAL SITE vs FAKE SITES:

    Domain Name:
    ✓ Real: www.qmfuels.kz and www.tooqazaqstanmarinefuels.kz
    ✗ Fake: Similar-looking domains with slight variations (qazaqstanmarinefuels.kz, qazaqstanmarinefuels.com, too-qmf.kz etc.)

    Email Address:
    ✓ Real: contact@qmfuels.kz, sales@qmfuels.kz
    ✗ Fake: Free email services (gmail.com, yahoo.com, mail.ru) or unofficial domains

    Phone Number:
    ✓ Real: +7 (7172) 777-777 (verified in our official communications)
    ✗ Fake: Numbers not listed on this official site

    SSL Certificate:
    ✓ Real: Green padlock icon with HTTPS and valid certificate
    ✗ Fake: No padlock, HTTP only, or invalid certificate

    Website Design:
    ✓ Real: Professional design with consistent branding, our logo, and complete product/service information
    ✗ Fake: Poorly designed, missing information, or copied content with errors`,
    },
    {
        id: "security-3",
        category: "security",
        question: "What should I do if I found a fake TOO Qazaqstan Marine Fuels website?",
        answer: `If you encountered an impersonating site:

    IMMEDIATE ACTIONS:
    • Do NOT provide personal, financial, or payment information on that site
    • Report the fraudulent URL and screenshots to us at security@qmfuels.kz
    • Contact us immediately at +7 (7172) 777-777 if you shared sensitive information
    • Document the date, time, and how you found the fake site

    REPORT TO AUTHORITIES:
    • Report to the Kazakhstan Information Security Center
    • Contact your bank if you made any payments
    • File a complaint with local law enforcement

    LEGAL STATUS:
    A legal action is currently pending regarding impersonation and fraud. For legal reasons, we cannot provide further details at this time.`,
    },
    {
        id: "products-1",
        category: "products",
        question: "What marine fuels does TOO Qazaqstan Marine Fuels produce?",
        answer: `We specialize in producing environmentally friendly marine fuels compliant with MARPOL 73/78 standards:

    • Marine Fuel Distillate DMA (ISO 8217-2017): Ultra-low sulfur diesel for marine vessels
    • Marine Fuel Residual RMD (ISO 8217-2017): Residual fuel for large marine engines

    Additionally, we supply a comprehensive range of petroleum products including:
    • Diesel Fuel (EN590/Gasoil)
    • Jet Fuel (Jet A-1)
    • Liquefied Petroleum Gas (LPG)
    • Fuel Oil (Mazut M-100/M-40)
    • Bitumen (Asphalt Binder)
    • D6 Virgin Fuel Oil & D2 Gasoil
    • LNG (Liquified Natural Gas)
    • Urea (Prilled/Granular)
    • Petroleum Coke`,
    },
    {
        id: "products-2",
        category: "products",
        question: "Are your marine fuels environmentally compliant?",
        answer: `Yes, absolutely. Our marine fuels are produced from Kazakh ultra-low sulfur oil and strictly comply with:

    • International Convention MARPOL 73/78 standards
    • ISO 8217-2017 specifications for marine fuel quality
    • Environmental regulations for reducing sulfur emissions
    • International maritime environmental protection requirements

    We are committed to sustainable and responsible fuel production for the global shipping industry.`,
    },
    {
        id: "general-1",
        category: "general",
        question: "What is the company status of TOO Qazaqstan Marine Fuels?",
        answer: `Qazaqstan Marine Fuels LLP (QMF) is a Kazakh company with the following status:

    • Official status: "Oil supplier" per RoK Law on State Regulation of Production and Circulation of Certain Types of Petroleum Products
    • Founder: Subsoil user company (76% share)
    • Operations: Produce and supply marine fuels, mazut (heavy fuel oil), and process oil from parent subsoil user companies
    • Location: Astana, Republic of Kazakhstan
    • Registered Address: KORME business center, 3 Dostyq street, Office 12`,
    },
    {
        id: "general-2",
        category: "general",
        question: "How can I contact TOO Qazaqstan Marine Fuels?",
        answer: `Please use the following official contact information:

    Address: KORME business center, 3 Dostyq street, Office 12, Astana, Republic of Kazakhstan

    Phone: +7 (7172) 777-777

    Email:
    • General Inquiries: contact@qmfuels.kz
    • Sales: sales@qmfuels.kz
    • Security Issues: security@qmfuels.kz
    • Reporting Fraud: security@qmfuels.kz

    Please verify all contact information directly with our official website before reaching out.`,
    },
    {
        id: "general-3",
        category: "general",
        question: "Can other companies process oil through QMF?",
        answer: `Yes. As a licensed oil supplier, Qazaqstan Marine Fuels can:

    • Process oil from the parent subsoil user company (76% shareholder)
    • Process oil from other authorized subsoil user companies
    • Supply high-quality marine fuels and mazut (heavy fuel oil)

    This allows multiple petroleum companies to benefit from our specialized marine fuel production capabilities and MARPOL compliance expertise.`,
    },
]

const securityChecks = [
    {
        icon: <Shield className="fill-inherit size-6" />,
        title: "Valid HTTPS & SSL",
        description: "This site uses encrypted security (look for padlock)",
    },
    {
        icon: <CheckCircle2 className="fill-inherit size-6" />,
        title: "Official Domain",
        description: "Verified domain: www.qmfuels.kz and www.tooqazaqstanmarinefuels.kz",
    },
    {
        icon: <AlertCircle className="fill-inherit size-6" />,
        title: "Regulatory Status",
        description: 'Registered as "Oil supplier" per RoK Law',
    },
    {
        icon: <Shield className="fill-inherit size-6" />,
        title: "Official Contact Info",
        description: "Verified phone & address on file",
    },
]

export default function FAQs() {

    const [selectedCategory, setSelectedCategory] = useState<"all" | "general" | "products" | "security">("all")

    const filteredFAQs =
        selectedCategory === "all" ? faqItems : faqItems.filter((item) => item.category === selectedCategory)

    const categoryTabs = [
        { id: "all", label: "All FAQs", count: faqItems.length },
        {
            id: "security",
            label: "Security & Verification",
            count: faqItems.filter((i) => i.category === "security").length,
        },
        { id: "products", label: "Products", count: faqItems.filter((i) => i.category === "products").length },
        { id: "general", label: "General", count: faqItems.filter((i) => i.category === "general").length },
    ]

    return (
        <section className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
            <div className="mx-auto max-w-7xl">

                <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
                    className="bg-gradient-to-r from-amber-50 dark:from-amber-900 to-orange-50 dark:to-orange-900 mb-16 p-4 md:p-6 xl:p-8 border-2 border-accent/80">
                    <div className="flex items-start gap-4 mb-4">
                        <AlertTriangle className="flex-shrink-0 mt-1 size-6 text-accent" />
                        <div>
                            <h3 className="mb-2 font-bold text-sm md:text-base xl:text-lg uppercase tracking-tight montserrat">Security Notice</h3>
                            <p className="mb-3 font-semibold">
                                Official website of TOO Qazaqstan Marine Fuels — Verified. This is the only legitimate online presence.
                            </p>
                            <p className="mb-3">
                                We are currently aware of fraudulent impersonation attempts. A legal action is pending regarding
                                impersonation and fraud. Please verify this is our official domain before sharing any sensitive
                                information.
                            </p>
                            <p>
                                <span className="font-semibold">Report fraud:</span> security@qmfuels.kz
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* VERIFICATION CHECKLIST */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className="mb-16">
                    <h3 className="mb-6 font-bold text-lg md:text-xl xl:text-2xl text-center">
                        How to Verify This Is Our Official Site
                    </h3>
                    <div className="gap-4 grid grid-cols-1 md:grid-cols-2">
                        {securityChecks.map((check, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} className="hover:shadow-lg p-4 md:p-5 xl:p-6 border-accent border-l-4 transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 text-accent">{check.icon}</div>
                                    <div>
                                        <h4 className="mb-1 font-bold uppercase tracking-tight montserrat">{check.title}</h4>
                                        <p>{check.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CATEGORY TABS */}
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="mb-12">
                    <h2 className="mb-8 font-bold text-foreground text-2xl sm:text-3xl md:text-4xl xl:text-5xl text-center leading-tight">Frequently Asked Questions</h2>

                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        {categoryTabs.map((tab) => (
                            <motion.button key={tab.id} onClick={() => setSelectedCategory(tab.id as any)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                                className={`px-6 py-2 font-semibold transition-all ${selectedCategory === tab.id
                                    ? "bg-secondary text-secondary-foreground shadow-lg"
                                    : "border-2 border-border hover:border-secondary"}`}>
                                {tab.label} <span className="opacity-75 ml-2 text-xs md:text-sm">({tab.count})</span>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* FAQ ACCORDION */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }}>
                    <Accordion type="single" collapsible className="space-y-3">
                        {filteredFAQs.map((faq, idx) => (
                            <motion.div key={faq.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }}>
                                <AccordionItem value={faq.id} className="px-4 md:px-5 xl:px-6 border-2 border-border hover:border-accent transition-colors">
                                    <AccordionTrigger className="py-5 text-left hover:no-underline">
                                        <span className="flex flex-1 items-start gap-3">
                                            <span
                                                className={`text-lg font-bold flex-shrink-0 mt-0.5 ${faq.category === "security"
                                                    ? "text-destructive"
                                                    : faq.category === "products"
                                                        ? "text-primary"
                                                        : "text-accent"}`}>
                                                {faq.category === "security" ? <Lock1 className="size-4 text-accent" /> : faq.category === "products" ? <Box className="size-4 text-primary" /> : <InfoCircle className="size-4 text-destructive" />}
                                            </span>
                                            <span className="font-semibold">{faq.question}</span>
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent className="leading-relaxed whitespace-pre-line montserrat">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </motion.div>
                        ))}
                    </Accordion>
                </motion.div>

                {/* FRAUD REPORT SECTION */}
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }} className="bg-destructive/10 mt-16 p-8 border-2 border-destructive/50">
                    <div className="flex items-start gap-4">
                        <AlertTriangle className="flex-shrink-0 mt-1 size-6 text-destructive" />
                        <div>
                            <h3 className="mb-3 font-bold text-sm md:text-base xl:text-lg">Report Fraudulent Activity</h3>
                            <p className="mb-4">
                                If you've encountered a fake TOO Qazaqstan Marine Fuels website or received suspicious communications
                                claiming to be from us:
                            </p>
                            <ul className="space-y-2">
                                <li>
                                    • <span className="font-semibold">Do NOT provide personal or payment information</span>
                                </li>
                                <li>
                                    • Email details to:{" "}
                                    <span className="font-semibold text-destructive">security@qmfuels.kz</span>
                                </li>
                                <li>
                                    • Call us immediately: <span className="font-semibold">+7 (7172) 777-777</span>
                                </li>
                                <li>• Report to local law enforcement and your bank if information was compromised</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
