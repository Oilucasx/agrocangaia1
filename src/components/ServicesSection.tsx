import { ArrowRight, Sprout, Building, Anchor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import fazendaImage from "@/assets/fazenda-moderna.jpg";
import construcaoImage from "@/assets/construcao-civil.jpg";
import portoImage from "@/assets/porto-moderno.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: <Sprout className="w-8 h-8 text-accent" />,
      title: "Fazenda",
      description: "A Fazenda Grupo Cangaia é símbolo de tradição, inovação e sustentabilidade no campo. Investimos em tecnologia agrícola, mão de obra qualificada e manejo responsável para garantir produtividade e respeito à terra.",
      image: fazendaImage,
      link: "/atuacao/fazenda"
    },
    {
      icon: <Building className="w-8 h-8 text-primary" />,
      title: "Construção Civil",
      description: "A frente de Construção Civil do Grupo Cangaia entrega obras com excelência, segurança e comprometimento. Atuamos em projetos industriais, residenciais e obras públicas com equipes especializadas.",
      image: construcaoImage,
      link: "/atuacao/construcao"
    },
    {
      icon: <Anchor className="w-8 h-8 text-accent" />,
      title: "Porto",
      description: "O Projeto Portuário do Grupo Cangaia representa um novo marco logístico para a região norte do Brasil. Com estrutura moderna e autorização oficial, vamos contribuir diretamente para o crescimento econômico e social da região.",
      image: portoImage,
      link: "/atuacao/porto"
    }
  ];

  return (
    <section id="atuacao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Áreas de <span className="text-primary">Atuação</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Diversificamos nossos negócios para criar um ecossistema integrado de desenvolvimento 
            sustentável, inovação tecnológica e crescimento econômico regional.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden">
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="p-3 bg-white/90 backdrop-blur-sm rounded-full">
                    {service.icon}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                
                <Link to={service.link}>
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Saiba mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;