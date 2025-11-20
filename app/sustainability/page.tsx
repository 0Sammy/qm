//Components
import HeroSection from "@/components/HeroSection";
import Sustainability from "./Sustainability";

const page = () => {
    return (
        <main>
            <HeroSection title="Sustainability" backgroundImage="/supplier.jpg" description="TOO Qazaqstan Marine Fuels Sustainability and ESG" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Suppliers", href: "/sustainability" }]} />
            <Sustainability />
        </main>
    );
}

export default page;