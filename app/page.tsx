//Components
import HeroSection from "@/components/Home/HeroSection";
import FeaturesSection from "@/components/Home/SecondSection";
import AboutSection from "@/components/Home/AboutSection";
import ManagementSection from "@/components/Home/Leadership";
import Services from "@/components/Home/Services";
import Products from "@/components/Home/Products";
import FAQs from "@/components/Home/FAQs";

const page = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ManagementSection />
      <Services />
      <Products />
      <FAQs />
    </main>
  );
}

export default page;