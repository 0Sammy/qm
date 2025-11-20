//Components
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Home/Services";
import FAQs from "@/components/Home/FAQs";

const page = () => {
    return (
        <main>
            <HeroSection title="Services" backgroundImage="/servicesHero.jpg" description="TOO Qazaqstan Marine Fuels Services" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }]} />
            <Services />
            <FAQs />
        </main>
    );
}

export default page;