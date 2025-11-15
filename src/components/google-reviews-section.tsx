import { Star, ExternalLink, Quote, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CONTACT, BUSINESS } from "@/config/constants";

const GoogleReviewsSection = () => {
  const [imageError, setImageError] = useState(false);

  const renderStars = (count: number) => {
    return Array.from({ length: count }, (_, i) => (
      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00FF00]/10 text-[#00FF00] px-4 py-2 rounded-full mb-4">
            <Quote className="w-4 h-4" />
            <span className="text-sm font-semibold">AVALIAÇÕES REAIS DO GOOGLE</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            O que nossos clientes dizem
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Avaliações 100% reais e verificadas direto do Google Maps
          </p>

          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-6xl font-bold text-gray-900">{BUSINESS.rating}</div>
              <div className="text-left">
                <div className="flex gap-1 mb-2">
                  {renderStars(5)}
                </div>
                <p className="text-sm text-gray-600 font-medium">
                  Avaliação no Google
                </p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-16 bg-gray-300"></div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#00FF00]">98%</div>
                <p className="text-xs text-gray-600 mt-1">Recomendam</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#0000FF]">{BUSINESS.reviewCount}+</div>
                <p className="text-xs text-gray-600 mt-1">Clientes</p>
              </div>
            </div>
          </div>

          {/* Google Maps Link */}
          <a
            href={CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#0000FF] hover:text-[#0000DD] transition-colors font-semibold group mb-12"
            aria-label="Ver todas as avaliações no Google Maps"
          >
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/>
            </svg>
            Ver todas as avaliações no Google Maps
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Screenshot das Avaliações */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="border-none shadow-2xl overflow-hidden bg-white">
            <CardContent className="p-0">
              {/* Badge de Autenticidade */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#4285F4">
                      <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12 12-5.373 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018 1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062-2.31 0-4.187 1.956-4.187 4.273 0 2.315 1.877 4.277 4.187 4.277 2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474 0 4.01-2.677 6.86-6.72 6.86z"/>
                    </svg>
                    <span className="text-sm font-semibold text-gray-700">
                      Avaliações verificadas pelo Google
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm font-semibold text-green-700">
                      100% Autênticas
                    </span>
                  </div>
                </div>
              </div>

              {/* Imagem das Avaliações */}
              <div className="relative bg-gray-100 p-4 sm:p-8">
                {!imageError ? (
                  <img
                    src="/reviews/reviews-google.png"
                    alt={`Avaliações reais do Google - ${BUSINESS.name} Camaçari`}
                    className="w-full h-auto rounded-lg shadow-xl"
                    loading="lazy"
                    onError={() => setImageError(true)}
                    width="749"
                    height="1331"
                  />
                ) : (
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-8 text-center">
                    <p className="text-yellow-800 font-semibold mb-2">📸 Adicione sua imagem de avaliações!</p>
                    <p className="text-yellow-700 text-sm">Salve como: <code className="bg-yellow-100 px-2 py-1 rounded">public/reviews/reviews-google.png</code></p>
                  </div>
                )}
              </div>

              {/* Informações adicionais */}
              <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#0000FF]" />
                    <span>{CONTACT.address.street} - {CONTACT.address.city}, {CONTACT.address.state}</span>
                  </div>
                  <a
                    href={CONTACT.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0000FF] hover:text-[#0000DD] font-medium flex items-center gap-1 transition-colors"
                    aria-label="Ver mais avaliações no Google Maps"
                  >
                    Ver mais avaliações
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Destaques das Avaliações (em texto) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Entrega Rápida</h3>
              <p className="text-sm text-gray-600">
                "Entrega com excelência e agilidade!"
              </p>
              <div className="flex gap-1 justify-center mt-3">
                {renderStars(5)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Atendimento Top</h3>
              <p className="text-sm text-gray-600">
                "Atencioso e profissional sempre!"
              </p>
              <div className="flex gap-1 justify-center mt-3">
                {renderStars(5)}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-shadow bg-white">
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">Melhor da Região</h3>
              <p className="text-sm text-gray-600">
                "A melhor empresa de Camaçari!"
              </p>
              <div className="flex gap-1 justify-center mt-3">
                {renderStars(5)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#0000FF] to-[#00FFFF] rounded-2xl p-8 md:p-12 shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Junte-se aos clientes 5 estrelas da {BUSINESS.name}!
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto text-lg">
            Faça seu pedido agora e receba em até {BUSINESS.deliveryTime}. Atendimento nota 10 garantido! ⭐⭐⭐⭐⭐
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-[#0000FF] hover:bg-gray-100 font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a 
                href={`https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent("Olá! Vi as ótimas avaliações e gostaria de fazer um pedido! 🔥")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Fazer pedido pelo WhatsApp"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Fazer Pedido Agora
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0000FF] font-bold px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
            >
              <a 
                href={CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Deixar avaliação no Google"
              >
                <Star className="w-5 h-5" />
                Deixar Avaliação
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;