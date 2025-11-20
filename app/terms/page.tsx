//Components
import HeroSection from "@/components/HeroSection";
import Terms from "./Terms";

const page = () => {
    return ( 
        <main>
            <HeroSection title="Legal Terms" backgroundImage="/legal.jpg" description="TOO Qazaqstan Marine Fuels Legal Terms" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Legal", href: "/legal" }]} />
            <Terms />
        </main>
     );
}
 
export default page;