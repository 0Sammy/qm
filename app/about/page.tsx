// Components
import HeroSection from "@/components/HeroSection";
import AboutUs from "@/app/about/About";
import Team from "@/app/about/Team";
import Partners from "./Partners";
import FAQs from "@/components/Home/FAQs";

const page = () => {
    return (
        <main>
            <HeroSection title="About Us" description="About TOO Qazaqstan Marine Fuels." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us", href: "/about" }]} />
            <AboutUs />
            <Team />
            <Partners />
            <FAQs />
        </main>
    );
}

export default page;