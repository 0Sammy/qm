//Components
import HeroSection from "@/components/HeroSection";
import ContactPage from "./Contact";

const page = () => {
    return ( 
        <main>
            <HeroSection title="Contact" backgroundImage="/contact.jpg" description="TOO Qazaqstan Marine Fuels Contacts" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact", href: "/contact" }]} />
            <ContactPage />
        </main>
     );
}
 
export default page;