import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Package, Truck, Shield, Star } from "lucide-react";
import { useEffect } from "react";
import { useProductBySlug } from "@/queries/products";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetailSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    <Header />
    <main className="pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <Skeleton className="h-6 w-1/3 mb-8" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div>
              <Skeleton className="h-[400px] w-full rounded-2xl" />
            </div>
            <div className="space-y-6">
              <Skeleton className="h-8 w-1/4" />
              <Skeleton className="h-12 w-full" />
              <Skeleton className="h-16 w-1/2" />
              <Skeleton className="h-24 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: product, isLoading, isError } = useProductBySlug(slug!);

  const whatsappNumber = "5571982303179";

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - Gás Ideal Camaçari | Entrega Rápida`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', `${product.description} Entrega em até 30 minutos em Camaçari. Peça agora!`);
      }
    }
  }, [product]);

  if (isLoading) {
    return <ProductDetailSkeleton />;
  }

  if (isError || !product) {
    return <Navigate to="/404" replace />;
  }

  const formatPrice = (price: number | null) => {
    if (price === null) return "Preço sob consulta";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const whatsappMessage = encodeURIComponent(
    `Olá! Gostaria de comprar: ${product.title}. Qual o preço atual? 🔥`
  );

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: product.title,
    image: `https://gasideal.com.br${product.image}`,
    description: product.description,
    sku: product.id,
    mpn: product.id,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `https://gasideal.com.br/produto/${product.slug}`,
      priceCurrency: "BRL",
      price: product.price?.toFixed(2),
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      availability:
        product.availability === "in stock"
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: "Gás Ideal Camaçari",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <nav className="mb-8 text-sm" aria-label="Breadcrumb">
                <ol className="flex items-center gap-2 text-gray-600">
                  <li><a href="/" className="hover:text-[#0000FF]">Início</a></li>
                  <li>/</li>
                  <li><a href="/#produtos" className="hover:text-[#0000FF]">Produtos</a></li>
                  <li>/</li>
                  <li className="text-gray-900 font-medium">{product.title}</li>
                </ol>
              </nav>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="relative">
                  {product.availability === "in stock" && (
                    <Badge className="absolute top-4 left-4 z-10 bg-[#00FF00] text-white text-sm px-4 py-2 shadow-lg">
                      ✓ EM ESTOQUE
                    </Badge>
                  )}
                  <div className="bg-gradient-to-br from-[#00FFFF]/10 to-[#0000FF]/10 rounded-2xl p-8 flex items-center justify-center min-h-[400px]">
                    <img
                      src={product.image || '/placeholder.svg'}
                      alt={`${product.title} - ${product.brand}`}
                      className="w-full h-auto max-w-md object-contain"
                      loading="eager"
                    />
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium">4.9/5 Avaliação</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Shield className="w-5 h-5 text-[#00FF00]" />
                      <span className="font-medium">Produto Original</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <Badge variant="outline" className="text-[#0000FF] border-[#0000FF] font-semibold">
                        {product.category}
                      </Badge>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                      {product.title}
                    </h1>
                    <div className="flex items-baseline gap-3 mb-6 bg-[#0000FF]/5 p-4 rounded-xl">
                      <span className="text-5xl font-bold text-[#0000FF]">
                        {formatPrice(product.price)}
                      </span>
                      {product.weight && (
                        <span className="text-gray-500 text-lg">
                          ({product.weight})
                        </span>
                      )}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                      {product.description}
                    </p>
                    <div className="space-y-3 mb-8 bg-gray-50 p-6 rounded-xl">
                      <h3 className="font-bold text-gray-900 mb-4">Benefícios:</h3>
                      <div className="flex items-center gap-3"><CheckCircle2 className="w-6 h-6 text-[#00FF00]"/><span className="text-gray-700">Produto original {product.brand}</span></div>
                      <div className="flex items-center gap-3"><Truck className="w-6 h-6 text-[#00FF00]"/><span className="text-gray-700">Entrega em até 30 minutos</span></div>
                      <div className="flex items-center gap-3"><Shield className="w-6 h-6 text-[#00FF00]"/><span className="text-gray-700">Certificado e seguro</span></div>
                      <div className="flex items-center gap-3"><Package className="w-6 h-6 text-[#00FF00]"/><span className="text-gray-700">{product.availability === "in stock" ? "Disponível para entrega imediata" : "Produto temporariamente indisponível"}</span></div>
                    </div>
                  </div>
                  <div>
                    <Button asChild size="lg" disabled={product.availability !== "in stock"} className="w-full bg-[#00FF00] hover:bg-[#00DD00] text-white font-bold text-lg px-8 py-7 rounded-xl shadow-2xl hover:shadow-[#00FF00]/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                      <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                        {product.availability === "in stock" ? "PEÇA AGORA PELO WHATSAPP" : "PRODUTO INDISPONÍVEL"}
                      </a>
                    </Button>
                    <p className="text-center text-sm text-gray-500 mt-4">💬 Resposta rápida garantida • 🚚 Entrega em Camaçari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default ProductDetailPage;