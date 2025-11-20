//Components
import HeroSection from "@/components/HeroSection";
import Suppliers from "./Suppliers";

const page = () => {
    return (
        <main>
            <HeroSection title="Supplies" backgroundImage="/supplier.jpg" description="TOO Qazaqstan Marine Fuels Suppliers" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Suppliers", href: "/suppliers" }]} />
            <Suppliers />
        </main>
    );
}

export default page;