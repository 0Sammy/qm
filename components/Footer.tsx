"use client"

import { motion } from "framer-motion";
import { Whatsapp } from "iconsax-reactjs";

//Icons
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
  ]

  const companyLinks = [
    { label: "Contact Us", href: "/contact" },
    { label: "Suppliers/Procurement", href: "/suppliers" },
  ]

  const legalLinks = [
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Sustainability/ESG", href: "/sustainability" },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-slate-100">
      {/* Main Footer Content */}
      <div className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] py-20">
        <div className="mx-auto max-w-7xl">
          {/* Grid Layout */}
          <motion.div className="gap-12 md:gap-8 lg:gap-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-16" variants={containerVariants} initial="hidden"
            whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            {/* Company Info */}
            <motion.div variants={itemVariants}>
              <h3 className="mb-6 font-bold text-white text-2xl">TOO Qazaqstan</h3>
              <div className="space-y-4 text-slate-300 text-sm">
                <p className="leading-relaxed">
                  Premium marine fuels and petroleum products engineered for global markets with MARPOL compliance.
                </p>
                <div className="pt-2">
                  <p className="font-semibold text-amber-500 text-xs uppercase tracking-wide">
                    Oil Supplier Status
                  </p>
                  <p className="text-slate-400 text-xs">RoK Law Certified</p>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="mb-6 font-bold text-white text-lg">Products</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a href={link.href} className="font-medium text-slate-300 hover:text-amber-500 text-sm transition-colors" whileHover={{ x: 4 }}>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants}>
              <h4 className="mb-6 font-bold text-white text-lg">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.label}>
                    <motion.a href={link.href} className="font-medium text-slate-300 hover:text-amber-500 text-sm transition-colors" whileHover={{ x: 4 }}>
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="mb-6 font-bold text-white text-lg">Contact</h4>
              <div className="space-y-4 text-slate-300 text-sm">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5 text-amber-500" />
                  <div>
                    <p className="mb-1 font-semibold text-white text-xs">Address</p>
                    <p className="text-xs leading-relaxed">
                      KORME Business Center 3 Dostyq Street, Office 12 Astana, Kazakhstan
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone size={18} className="flex-shrink-0 mt-0.5 text-amber-500" />
                  <div>
                    <p className="mb-1 font-semibold text-white text-xs">Phone</p>
                    <motion.a href="tel:+77177777777" className="hover:text-amber-500 text-xs transition-colors" whileHover={{ x: 2 }}>
                      +7 (717) 777-7777
                    </motion.a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail size={18} className="flex-shrink-0 mt-0.5 text-amber-500" />
                  <div>
                    <p className="mb-1 font-semibold text-white text-xs">Email</p>
                    <motion.a href="mailto:contact@tooqazaqstanmarinefuels.kz" className="block hover:text-amber-500 text-xs truncate transition-colors" whileHover={{ x: 2 }}>
                      contact@qmfuels.kz
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <div className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 mb-10 h-px"></div>

          {/* Bottom Section */}
          <motion.div className="flex md:flex-row flex-col justify-between items-center gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
            {/* Copyright */}
            <motion.div variants={itemVariants} className="md:text-left text-center">
              <p className="text-slate-400 text-xs">
                © {currentYear} TOO Qazaqstan Marine Fuels LLP. All rights reserved.
              </p>
              <p className="mt-1 text-slate-500 text-xs">
                Registered Oil Supplier per RoK Law
              </p>
            </motion.div>

            {/* Social Media Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-6">
              <motion.a href="https://wa.me/77474196443?partnertoken=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjMxMjY1MDAsImlzcyI6Ikdvb2dsZSIsImlhdCI6MTc2MzEyNjIwMCwidXJsIjoiaHR0cHM6Ly93YS5tZS83NzQ3NDE5NjQ0MyJ9.RDiS8jtH59u7SLux4fYIaB5AtP8wS6VwsDQopI8gJUPJAiTXHI9yak-EIZ4PjhMddQQQUSBFdbNeXfaRs8E-hQ" target="_blank" rel="noopener noreferrer"
                className="hover:bg-slate-800 p-2 rounded-full text-slate-400 hover:text-amber-500 transition-colors"
                whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} aria-label="WhatsApp">
                <Whatsapp className="size-7 text-white" />
              </motion.a>
            </motion.div>

            {/* Legal Links */}
            <motion.div variants={itemVariants} className="flex gap-6 text-slate-400 text-xs">
              {legalLinks.map((link, idx) => (
                <motion.a key={link.label} href={link.href} className="hover:text-amber-500 transition-colors" whileHover={{ y: -2 }}>
                  {link.label}
                  {idx < legalLinks.length - 1 && <span className="ml-6">|</span>}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Top Border Accent */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 opacity-50 h-1"></div>
    </footer>
  )
}
