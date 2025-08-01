import { Target, Eye, Heart, Sprout, Shield, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Missão",
      description: "Promover o desenvolvimento sustentável do agronegócio através de práticas inovadoras, tecnologia avançada e responsabilidade ambiental."
    },
    {
      icon: <Eye className="w-8 h-8 text-accent" />,
      title: "Visão",
      description: "Ser referência nacional em excelência agropecuária, construção civil e logística portuária, contribuindo para o crescimento econômico do país."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Valores",
      description: "Tradição familiar, inovação tecnológica, sustentabilidade, ética nos negócios e compromisso com a comunidade."
    }
  ];

  const pillars = [
    {
      icon: <Sprout className="w-12 h-12 text-accent" />,
      title: "Sustentabilidade",
      description: "Práticas responsáveis que preservam o meio ambiente para as futuras gerações"
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Excelência",
      description: "Padrão de qualidade superior em todos os nossos processos e produtos"
    },
    {
      icon: <Users className="w-12 h-12 text-accent" />,
      title: "Tradição Familiar",
      description: "Valores familiares sólidos que guiam nossa trajetória há mais de duas décadas"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sobre o <span className="text-primary">Grupo Cangaia</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nascemos no coração do Pará no início dos anos 2000, como uma empresa familiar 
            comprometida com a excelência no agronegócio. Hoje, expandimos nossos horizontes 
            para construção civil e logística portuária, sempre mantendo nossos valores de 
            tradição, inovação e sustentabilidade.
          </p>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 bg-gray-50 rounded-full group-hover:bg-primary/10 transition-colors">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pilares */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-card">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossos <span className="text-accent">Pilares</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Três princípios fundamentais que orientam todas as nossas ações e decisões empresariais
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="text-center group">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-gray-50 rounded-full group-hover:bg-accent/10 transition-all duration-300 group-hover:scale-110">
                    {pillar.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h4>
                <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;