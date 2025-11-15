import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductSection from "@/components/product-section";
import GoogleReviewsSection from "@/components/google-reviews-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <GoogleReviewsSection />
      <ProductSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;