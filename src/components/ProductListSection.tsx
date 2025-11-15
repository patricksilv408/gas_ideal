import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const ProductListSection = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section id="produtos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-[#00FF00]/10 text-[#00FF00] px-4 py-2 rounded-full mb-4">
              <span className="text-sm font-semibold">🔥 PRODUTOS DISPONÍVEIS</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Nossos Produtos
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Botijões de gás Ultragaz com entrega rápida em Camaçari. Qualidade garantida e preços competitivos.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {products.map((product) => (
              <Link
                key={product.id}
                to={`/produto/${product.slug}`}
                className="group"
              >
                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white overflow-hidden">
                  {/* Product Image */}
                  <div className="relative bg-gradient-to-br from-[#00FFFF]/10 to-[#0000FF]/10 p-6 flex items-center justify-center min-h-[250px]">
                    {product.availability === "in stock" && (
                      <Badge className="absolute top-4 right-4 bg-[#00FF00] text-white text-xs px-3 py-1">
                        ✓ Disponível
                      </Badge>
                    )}
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-auto max-w-[180px] object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Info */}
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-[#0000FF] transition-colors">
                      {product.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl font-bold text-[#0000FF]">
                          {formatPrice(product.price)}
                        </p>
                        {product.weight && (
                          <p className="text-xs text-gray-500 mt-1">
                            {product.weight}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Ver detalhes</span>
                      <ArrowRight className="w-4 h-4 text-[#0000FF] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#0000FF] to-[#00FFFF] rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de ajuda para escolher?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Nossa equipe está pronta para te ajudar a escolher o produto ideal para suas necessidades!
            </p>
            <a
              href="https://wa.me/5571982303179?text=Olá!%20Preciso%20de%20ajuda%20para%20escolher%20um%20produto%20🔥"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#0000FF] hover:bg-gray-100 font-bold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Falar com Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListSection;