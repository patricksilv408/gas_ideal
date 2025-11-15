import HeroSection from "@/components/hero-section";
import BenefitsSection from "@/components/benefits-section";
import ProductSection from "@/components/product-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ProductSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;