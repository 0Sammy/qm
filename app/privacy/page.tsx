//Components
import HeroSection from "@/components/HeroSection";
import Privacy from "./Privacy";

const page = () => {
    return ( 
        <main>
            <HeroSection title="Privacy Policy" backgroundImage="/legal.jpg" description="TOO Qazaqstan Marine Fuels Privacy Policy" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy", href: "/privacy" }]} />
            <Privacy />
        </main>
     );
}
 
export default page;