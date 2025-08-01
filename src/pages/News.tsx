import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fazendaImage from "@/assets/fazenda-moderna.jpg";
import droneImage from "@/assets/news-drone.jpg";
import storageImage from "@/assets/news-storage.jpg";
import assinaturaImage from "@/assets/assinatura-porto.jpg";

const News = () => {
  const allNews = [
    {
      id: "autorizacao-porto",
      title: "Autorização oficial do Projeto Portuário do Grupo Cangaia",
      excerpt: "Dia histórico marca a autorização oficial do projeto portuário que revolucionará a logística da região norte do Brasil.",
      image: assinaturaImage,
      date: "9 de Julho de 2025",
      category: "Marco Histórico"
    },
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
    <div className="min-h-screen">
      <Navbar />
      
      <div className="pt-24 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Últimas <span className="text-primary">Notícias</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Acompanhe as principais novidades, projetos e conquistas do Grupo Cangaia
            </p>
          </div>

          {/* News Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {allNews.map((item, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-0 shadow-card overflow-hidden">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    {item.date}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 line-clamp-2">{item.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{item.excerpt}</p>
                  
                  <Link to={`/noticias/${item.id}`}>
                    <Button 
                      className="bg-primary hover:bg-primary/90 text-white group/btn"
                    >
                      Leia a notícia completa
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default News;