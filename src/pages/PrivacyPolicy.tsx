import Header from "@/components/header";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center">
              Políticas do Site
            </h1>
            <p className="text-gray-600 text-lg text-center mb-12">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>

            <div className="space-y-8">
              {/* Política de Privacidade */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0000FF]">Política de Privacidade</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>A sua privacidade é importante para nós. É política da Gás Ideal respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Gás Ideal.</p>
                  <p>Solicitamos informações pessoais como nome, telefone e endereço apenas quando realmente precisamos delas para lhe fornecer um serviço de entrega. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento, através de canais como o WhatsApp.</p>
                  <p>Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.</p>
                  <p>Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.</p>
                  <p>O nosso site pode ter links para sites externos que não são operados por nós, como o WhatsApp. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.</p>
                  <p>O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contato conosco.</p>
                </CardContent>
              </Card>

              {/* Política de Entrega */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0000FF]">Política de Entrega</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p><strong>Área de Atendimento:</strong> Realizamos entregas em toda a cidade de Camaçari - BA. Consulte a disponibilidade para bairros mais afastados através do nosso WhatsApp.</p>
                  <p><strong>Prazo de Entrega:</strong> Nosso compromisso é entregar seu pedido em até 30 minutos após a confirmação. O tempo pode variar dependendo das condições de trânsito e do clima, mas nossa equipe sempre se esforçará para cumprir o prazo.</p>
                  <p><strong>Horário de Entrega:</strong> Nossas entregas são realizadas durante nosso horário de funcionamento:
                    <ul className="list-disc list-inside mt-2 pl-4">
                      <li><strong>Segunda a Sábado:</strong> 07:00 às 19:00</li>
                      <li><strong>Domingos e Feriados:</strong> 07:00 às 13:00</li>
                    </ul>
                  </p>
                  <p><strong>Confirmação do Pedido:</strong> Todos os pedidos são confirmados via WhatsApp ou telefone antes do envio para garantir a precisão das informações e agilizar a entrega.</p>
                  <p><strong>Taxa de Entrega:</strong> A taxa de entrega pode variar de acordo com a localidade. O valor será informado durante a confirmação do seu pedido.</p>
                </CardContent>
              </Card>

              {/* Política de Reembolso e Devolução */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-[#0000FF]">Política de Reembolso e Devolução</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-gray-700">
                  <p>A satisfação dos nossos clientes é nossa prioridade. Caso haja algum problema com seu pedido, siga as diretrizes abaixo:</p>
                  <p><strong>Condições para Troca ou Devolução:</strong>
                    <ul className="list-disc list-inside mt-2 pl-4">
                      <li>Produto entregue diferente do solicitado.</li>
                      <li>Vasilhame com avarias ou defeitos de fabricação visíveis no ato da entrega.</li>
                    </ul>
                  </p>
                  <p><strong>Como Solicitar:</strong> Entre em contato conosco imediatamente através do nosso WhatsApp (71) 98230-3179, informando o problema e, se possível, enviando uma foto do produto. A solicitação deve ser feita no ato da entrega.</p>
                  <p><strong>Análise e Resolução:</strong> Nossa equipe analisará a solicitação e, se constatado o problema, providenciará a troca imediata do produto sem custos adicionais. Não realizamos reembolso em dinheiro, apenas a troca por um produto novo e em perfeitas condições.</p>
                  <p><strong>Importante:</strong> Não aceitaremos reclamações posteriores à partida do entregador, por isso, pedimos que verifique seu produto no momento do recebimento.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default PrivacyPolicyPage;