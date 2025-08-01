import { ArrowLeft, Anchor, TrendingUp, MapPin, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import portoImage from "@/assets/porto-moderno.jpg";

const Porto = () => {
  const diferenciais = [
    {
      icon: <Anchor className="w-6 h-6 text-primary" />,
      title: "Estrutura moderna",
      description: "Instalações portuárias com tecnologia de última geração"
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Autorização oficial",
      description: "Projeto aprovado pelo Ministério dos Portos"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Marco logístico",
      description: "Impulso ao desenvolvimento da região norte"
    },
    {
      icon: <Truck className="w-6 h-6 text-accent" />,
      title: "Logística integrada",
      description: "Conexão eficiente entre produção e mercados"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contato');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/contato';
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para início
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Projeto <span className="text-accent">Portuário</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Novo Marco Logístico da Região Norte
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={portoImage} 
                alt="Projeto Portuário Grupo Cangaia"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                O Projeto Portuário do Grupo Cangaia representa um novo marco logístico para a 
                região norte do Brasil. Com estrutura moderna e autorização oficial, vamos 
                contribuir diretamente para o crescimento econômico e social da região.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Este empreendimento estratégico conectará a produção regional aos mercados 
                globais, oferecendo infraestrutura de ponta para movimentação de cargas 
                e fortalecendo a economia local.
              </p>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nossos <span className="text-accent">Diferenciais</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {diferenciais.map((item, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-50 rounded-full flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Impacto <span className="text-primary">Regional</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Empregos Diretos</h3>
                  <p className="text-gray-600">Geração de oportunidades de trabalho na região</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-accent mb-2">R$ 2bi</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Investimento</h3>
                  <p className="text-gray-600">Valor total investido no projeto portuário</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-2">2027</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Inauguração</h3>
                  <p className="text-gray-600">Previsão para início das operações completas</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Cronograma do <span className="text-accent">Projeto</span>
            </h2>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent rounded-full mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">2025 - Autorização Oficial ✓</h3>
                  <p className="text-gray-600">Aprovação pelo Ministério dos Portos concluída</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded-full mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">2026 - Construção da Infraestrutura</h3>
                  <p className="text-gray-600">Início das obras portuárias e instalações</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-300 rounded-full mr-4"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">2027 - Operação Completa</h3>
                  <p className="text-gray-600">Inauguração e início das operações</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Quer saber mais sobre o projeto portuário?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato para conhecer mais detalhes sobre este projeto histórico 
              e as oportunidades de parceria.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Entrar em Contato
              </Button>
              
              <Link to="/noticias/autorizacao-porto">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent hover:text-white"
                >
                  Ler Notícia Completa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Porto;