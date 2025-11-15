import { Zap, Shield, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Zap,
      title: "ENTREGA RÁPIDA",
      description: "Receba em minutos",
      color: "text-cyan-400",
      bgColor: "bg-cyan-50"
    },
    {
      icon: Shield,
      title: "SEGURANÇA GARANTIDA",
      description: "Produtos certificados",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: CreditCard,
      title: "PAGAMENTO FÁCIL",
      description: "Diversas formas de pagamento",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900">
          Por que escolher a Gás Ideal?
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Qualidade e confiança em cada entrega
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index}
                className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className={`${benefit.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Icon className={`w-10 h-10 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-base">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;