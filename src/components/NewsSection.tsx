import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import fazendaImage from "@/assets/fazenda-moderna.jpg";
import droneImage from "@/assets/news-drone.jpg";
import storageImage from "@/assets/news-storage.jpg";

const NewsSection = () => {
  const news = [
    {
      id: "nova-safra-ilp",
      title: "Nova Safra com Sistema ILP",
      excerpt: "Implementação bem-sucedida do sistema de Integração Lavoura-Pecuária aumenta produtividade em 30% na fazenda.",
      image: fazendaImage,
      date: "15 de Julho de 2025",
      category: "Agricultura"
    },
    {
      id: "tecnologia-drones",
      title: "Tecnologia com Drones na Agricultura",
      excerpt: "Monitoramento por drones revoluciona o manejo das culturas, otimizando aplicação de defensivos e fertilizantes.",
      image: droneImage,
      date: "10 de Julho de 2025",
      category: "Tecnologia"
    },
    {
      id: "expansao-armazenagem",
      title: "Expansão da Capacidade de Armazenagem",
      excerpt: "Novos silos aumentam capacidade de armazenamento em 50%, garantindo melhor logística para comercialização.",
      image: storageImage,
      date: "05 de Julho de 2025",
      category: "Infraestrutura"
    }
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Últimas <span className="text-primary">Notícias</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Acompanhe as principais novidades e inovações do Grupo Cangaia
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">{item.excerpt}</p>
                
                <Link to={`/noticias/${item.id}`}>
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary/80 p-0 h-auto font-semibold group/btn"
                  >
                    Leia mais
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/noticias">
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-3"
            >
              Ver todas as notícias
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;