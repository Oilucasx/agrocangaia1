import { ArrowLeft, Building, Users, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import construcaoImage from "@/assets/construcao-civil.jpg";

const Construcao = () => {
  const diferenciais = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Excelência em projetos",
      description: "Padrão de qualidade superior em todas as etapas da obra"
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      title: "Segurança e comprometimento",
      description: "Rigorosos protocolos de segurança e prazos cumpridos"
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Equipes especializadas",
      description: "Profissionais qualificados e experientes"
    },
    {
      icon: <Building className="w-6 h-6 text-accent" />,
      title: "Projetos diversificados",
      description: "Obras industriais, residenciais e públicas"
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
              Construção <span className="text-primary">Civil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8">
              Obras com Excelência e Segurança
            </p>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={construcaoImage} 
                alt="Construção Civil Grupo Cangaia"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                A frente de Construção Civil do Grupo Cangaia entrega obras com excelência, 
                segurança e comprometimento. Atuamos em projetos industriais, residenciais 
                e obras públicas com equipes especializadas.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8">
                Nossa experiência na construção civil combina métodos tradicionais com 
                inovações tecnológicas, garantindo eficiência, qualidade e sustentabilidade 
                em cada projeto executado.
              </p>

              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Fale Conosco
              </Button>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nossos <span className="text-primary">Diferenciais</span>
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

          {/* Services Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Tipos de <span className="text-primary">Projetos</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Obras Industriais</h3>
                  <p className="text-gray-600">Galpões, fábricas e instalações industriais complexas</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Projetos Residenciais</h3>
                  <p className="text-gray-600">Casas, condomínios e empreendimentos habitacionais</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Obras Públicas</h3>
                  <p className="text-gray-600">Infraestrutura urbana e equipamentos públicos</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-section rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Precisa de uma construtora confiável?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para discutir seu projeto de construção civil. 
              Oferecemos orçamentos detalhados e prazos realistas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white"
              >
                Solicitar Orçamento
              </Button>
              
              <Link to="/trabalhe-conosco">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Trabalhe Conosco
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

export default Construcao;