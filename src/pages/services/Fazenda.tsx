import { ArrowLeft, Sprout, Target, TrendingUp, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fazendaImage from "@/assets/fazenda-moderna.jpg";

const Fazenda = () => {
  const diferenciais = [
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      title: "Rotação de culturas sustentável",
      description: "Sistema ILP que promove a recuperação natural do solo"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-primary" />,
      title: "Monitoramento por drones",
      description: "Tecnologia de precisão para otimização das culturas"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Tecnologia de precisão",
      description: "Aplicação direcionada de defensivos e fertilizantes"
    },
    {
      icon: <Sprout className="w-6 h-6 text-primary" />,
      title: "Análise de solo avançada",
      description: "Monitoramento contínuo da saúde e fertilidade do solo"
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
              Agricultura <span className="text-accent">Integrada</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Integração Lavoura-Pecuária (ILP)
            </p>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={fazendaImage} 
                alt="Fazenda Grupo Cangaia"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A Fazenda Grupo Cangaia é símbolo de tradição, inovação e sustentabilidade no campo. 
                Investimos em tecnologia agrícola, mão de obra qualificada e manejo responsável para 
                garantir produtividade e respeito à terra.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Sistema integrado que combina produção agrícola e pecuária, maximizando a produtividade 
                da terra através de rotação estratégica de culturas e pastagens, promovendo 
                sustentabilidade e eficiência operacional.
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

          {/* CTA Section */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Interessado em conhecer mais sobre nossa fazenda?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para agendar uma visita técnica ou saber mais 
              sobre nossos métodos de agricultura sustentável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Entrar em Contato
              </Button>
              
              <Link to="/noticias">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Ver Notícias
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

export default Fazenda;