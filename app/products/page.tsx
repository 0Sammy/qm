//Components
import HeroSection from "@/components/HeroSection";
import Products from "@/app/products/Products";
import FAQs from "@/components/Home/FAQs";

const page = () => {
    return (
        <main>
            <HeroSection title="Products" backgroundImage="/services.jpg" description="TOO Qazaqstan Marine Fuels Products" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }]} />
            <Products />
            <FAQs />
        </main>
    );
}

export default page;