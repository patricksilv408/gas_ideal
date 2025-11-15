import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProductListSection from "@/components/ProductListSection";
import GoogleReviewsSection from "@/components/google-reviews-section";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductListSection />
      <GoogleReviewsSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;