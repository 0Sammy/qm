"use client"

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from 'next/navigation'
import Image from "next/image";

//Components
import { ThemeToggle } from "./ThemeToggle";

//Image
import logo from "../public/logo.png";

//Icons
import { Category2 } from "iconsax-reactjs";

const GTranslate = dynamic(() => import("./GTranslate"), {
    ssr: false,
});

// NavLink Component for consistent styling
const NAV_LINKS = [
    { path: "/", label: "HOME" },
    { path: "/products", label: "PRODUCTS" },
    { path: "/about", label: "ABOUT US" },
    { path: "/services", label: "SERVICES" },
    { path: "/contact", label: "CONTACT US" },
];

const NavLink = ({ to, label, isActive }: { to: string; label: string; isActive: boolean }) => (
    <Link href={to} className={`${isActive ? "text-accent font-bold" : "hover:text-accent text-primary duration-300 font-medium"} text-xs md:text-sm montserrat`}>
        {label}
    </Link>
);

// Mobile Menu Component
const MobileMenu = ({ isOpen, toggleMenu, locationPath }: { isOpen: boolean; toggleMenu: () => void; locationPath: string }) => (
    <div className={`md:hidden flex flex-col gap-y-5 ${isOpen ? "translate-x-0 delay-500" : "-translate-x-full"} bg-background w-64 border-r border-foreground z-10 fixed top-0 left-0 h-dvh text-[#FFF4E8] transition-transform duration-500 ease-in-out p-4 py-20`} onClick={toggleMenu}>
        {NAV_LINKS.map((link) => (
            <NavLink key={link.path} to={link.path} label={link.label} isActive={locationPath === link.path} />
        ))}
    </div>
);


const Nav = () => {

    const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();

    // Toggle Menu Visibility
    const toggleMenu = () => setMenuOpen((prev) => !prev);

    return (
        <main className="px-[0.5rem] sm:px-8 lg:px-[4rem] 2xl:px-[6rem] xl:px-[5rem] pt-2 pb-4">
            <section className="flex justify-between items-center">
                <div className="flex items-center gap-x-2 md:gap-x-3 xl:gap-x-5">
                    <p className="hidden sm:block">Tel: <span className="font-semibold">++7 747 419 64-43</span></p>
                    <hr className="hidden sm:block bg-primary w-6 md:w-8 xl:w-10 h-1" />
                    <p>Mail: <span className="font-semibold">info@qmfuels.kz</span></p>
                </div>
                <div className="flex justify-end items-center gap-x-5 bg-primary px-4 md:px-6 2xl:px-12 xl:px-8 py-2 text-background">
                    <Link className="hidden md:block hover:text-accent text-sm duration-300" href="/suppliers">Suppliers</Link>
                    <Link className="hidden md:block hover:text-accent text-sm duration-300" href="/sustainability">Sustainability / ESG</Link>
                    <ThemeToggle />
                    <GTranslate />
                </div>
            </section>
            <nav className="z-[20] relative flex justify-between items-center mt-4">
                <Image src={logo} alt="Logo" className="w-28 xl:w-32" />
                <div className="hidden md:flex items-center gap-x-5 lg:gap-x-7 xl:gap-x-10">
                    {NAV_LINKS.map((link) => (
                        <NavLink key={link.path} to={link.path} label={link.label} isActive={pathname === link.path} />
                    ))}
                </div>

                {/* Mobile Menu */}
                <Category2 className="md:hidden bg-primary p-1 size-7 text-background cursor-pointer" variant="Bold" onClick={toggleMenu} />
                <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} locationPath={pathname} />

                {/* Overlay for Mobile Menu */}
                <div className={`md:hidden fixed inset-0 bg-black opacity-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full delay-500"} transition-transform duration-500 ease-in-out`} onClick={toggleMenu} />
            </nav>
        </main>
    );
}

export default Nav;