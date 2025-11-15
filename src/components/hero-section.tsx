import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  const whatsappNumber = "5571982303179";
  const phoneNumber = "+5571982303179";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-blue-600/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <img 
            src="/gasideal-logo.png" 
            alt="Gás Ideal - Clicou. Pediu. Chegou!" 
            className="h-32 md:h-40 w-auto drop-shadow-2xl"
          />
        </div>

        {/* Badge */}
        <Badge className="mb-6 bg-green-500 hover:bg-green-600 text-white text-sm md:text-base px-4 py-2 animate-pulse">
          🔥 ABERTO AGORA - ENTREGA EM ATÉ 30 MIN
        </Badge>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight">
          GÁS DE COZINHA COM<br />ENTREGA RÁPIDA
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md font-medium">
          Receba seu botijão no conforto da sua casa.<br />
          Rápido, seguro e confiável.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
          {/* WhatsApp Button - Primary */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 border-2 border-green-400"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              PEÇA PELO WHATSAPP
            </a>
          </Button>

          {/* Phone Button - Secondary */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 border-2 border-blue-400"
          >
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3"
            >
              <Phone className="w-7 h-7" />
              LIGUE AGORA
            </a>
          </Button>
        </div>

        {/* Trust Signal */}
        <p className="mt-8 text-white text-sm md:text-base drop-shadow-md">
          📞 (71) 98230-3179 | ⭐ Mais de 1000 clientes atendidos
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;