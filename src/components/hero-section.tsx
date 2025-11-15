import { Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const whatsappNumber = "5571982303179";
  const phoneNumber = "+5571982303179";
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date();
      const hour = now.getHours();
      const day = now.getDay();
      
      if (day === 0) {
        return hour >= 7 && hour < 13;
      }
      return hour >= 7 && hour < 19;
    };
    
    setIsOpen(checkIfOpen());
    const interval = setInterval(() => setIsOpen(checkIfOpen()), 60000);
    return () => clearInterval(interval);
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de comprar gás. Qual o preço? 🔥"
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background com overlay mais escuro */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo grande (se tiver) */}
          <div className="mb-8">
            <h1 className="text-white text-6xl md:text-7xl font-black mb-4 drop-shadow-2xl leading-tight">
              GÁS IDEAL
            </h1>
            <div className="text-[#00FFFF] text-2xl md:text-3xl font-bold drop-shadow-lg">
              CLICOU. PEDIU. CHEGOU!
            </div>
          </div>

          {/* Badge de status */}
          {isOpen ? (
            <Badge className="mb-8 bg-[#00FF00] hover:bg-[#00DD00] text-white text-base md:text-lg px-8 py-3 animate-pulse inline-flex items-center gap-3 shadow-2xl">
              <span className="relative flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
              </span>
              🔥 ABERTO AGORA - ENTREGA EM ATÉ 30 MINUTOS
            </Badge>
          ) : (
            <Badge className="mb-8 bg-yellow-500 text-white text-base md:text-lg px-8 py-3">
              <Clock className="w-5 h-5 mr-2" />
              FECHADO - Abrimos às 07:00
            </Badge>
          )}

          {/* Título principal */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-2xl leading-tight">
            GÁS DE COZINHA COM<br />
            <span className="text-[#00FF00]">ENTREGA RÁPIDA</span>
          </h2>

          {/* Subtítulo com benefícios */}
          <div className="text-white text-xl md:text-2xl mb-10 space-y-2 drop-shadow-lg">
            <p className="flex items-center justify-center gap-2">
              ✅ Entrega em até 30 minutos
            </p>
            <p className="flex items-center justify-center gap-2">
              ✅ Melhores preços da região
            </p>
            <p className="flex items-center justify-center gap-2">
              ✅ Pagamento facilitado
            </p>
          </div>

          {/* Botão WhatsApp GIGANTE */}
          <div className="mb-8">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto bg-[#00FF00] hover:bg-[#00DD00] text-white font-black text-xl md:text-2xl px-12 py-8 md:py-10 rounded-2xl shadow-2xl hover:shadow-[#00FF00]/50 transition-all duration-300 hover:scale-105 border-4 border-[#00DD00]"
            >
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>PEÇA PELO WHATSAPP</span>
              </a>
            </Button>
          </div>

          {/* Botão de telefone (menor) */}
          <div className="mb-10">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-[#0000FF] font-bold text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <a 
                href={`tel:${phoneNumber}`}
                className="flex items-center gap-3"
              >
                <Phone className="w-6 h-6" />
                (71) 98230-3179
              </a>
            </Button>
          </div>

          {/* Trust signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-[#00FF00]">4.9⭐</div>
              <div className="text-sm">Avaliação Google</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-[#00FFFF]">1000+</div>
              <div className="text-sm">Clientes Felizes</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="text-3xl font-bold text-[#00FF00]">30min</div>
              <div className="text-sm">Entrega Rápida</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-8 h-8 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;