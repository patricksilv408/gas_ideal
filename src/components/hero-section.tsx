import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const whatsappNumber = "5571982303179";
  const phoneNumber = "+5571982303179";
  const [isOpen, setIsOpen] = useState(true);

  // Verifica se está aberto baseado no horário real
  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay(); // 0 = domingo
      
      if (day === 0) { // Domingo/Feriado
        return hour >= 7 && hour < 13;
      }
      return hour >= 7 && hour < 19; // Seg-Sáb
    };
    
    setIsOpen(checkIfOpen());
    
    // Atualiza a cada minuto
    const interval = setInterval(() => {
      setIsOpen(checkIfOpen());
    }, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de pedir um botijão de gás. 🔥"
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      >
        {/* Overlay melhorado para melhor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        
        {/* Badge Dinâmico com Animação */}
        {isOpen ? (
          <Badge className="mb-6 bg-[#00FF00] hover:bg-[#00DD00] text-white text-sm md:text-base px-6 py-3 animate-pulse inline-flex items-center gap-2 shadow-lg shadow-green-500/50">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            🟢 ABERTO AGORA - ENTREGA EM ATÉ 30 MIN
          </Badge>
        ) : (
          <Badge className="mb-6 bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base px-6 py-3 inline-flex items-center gap-2">
            ⏰ FECHADO - Abrimos às 07:00
          </Badge>
        )}

        {/* Main Headline com melhor legibilidade */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          GÁS DE COZINHA COM<br />ENTREGA RÁPIDA
        </h1>

        {/* Subtitle com melhor contraste */}
        <p className="text-lg sm:text-xl md:text-2d`xl text-white mb-12 max-w-3xl mx-auto font-medium drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
          Receba seu botijão no conforto da sua casa.<br />
          Rápido, seguro e confiável.
        </p>

        {/* CTA Buttons com hierarquia melhorada */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-8">
          {/* WhatsApp Button - Primary CTA (maior) */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#00FF00] hover:bg-[#00DD00] text-white font-bold text-lg md:text-xl px-10 py-8 rounded-xl shadow-2xl hover:shadow-[#00FF00]/50 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#00DD00]"
          >
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.p`x-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              PEÇA PELO WHATSAPP
            </a>
          </Button>

          {/* Phone Button - Secondary CTA (menor) */}
          <Button
            asChild
            size="lg"
            className="w-full sm:w-auto bg-[#0000FF] hover:bg-[#0000DD] text-white font-bold text-base md:text-lg px-8 py-7 rounded-xl shadow-2xl hover:shadow-[#0000FF]/50 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-[#0000DD]"
          >
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              LIGUE AGORA
            </a>
          </Button>
        </div>

        {/* Trust Signal Melhorado */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center text-sm md:text-base">
          <a 
            href={`tel:${phoneNumber}`}
            className="flex items-center gap-2 text-white hover:text-[#00FFFF] transition-colors drop-shadow-lg"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(71) 98230-3179</span>
          </a>
          <span className="hidden sm:inline text-white/50">|</span>
          <div className="flex items-center gap-2 drop-shadow-lg">
            <span className="text-yellow-400 text-lg">★★★★★</span>
            <span className="text-white font-medium">4.9/5 • 1.000+ clientes</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Melhorado */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <svg 
          className="w-8 h-8 text-white drop-shadow-lg animate-bounce" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;