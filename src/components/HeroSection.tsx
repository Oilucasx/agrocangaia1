import { ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-agro.jpg";

const HeroSection = () => {
  const scrollToAtuacao = () => {
    const atuacaoSection = document.getElementById('atuacao');
    if (atuacaoSection) {
      atuacaoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Grupo Cangaia
            <span className="block text-accent">Performance & Inovação</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl font-medium mt-2">
              no Agronegócio
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Mais de 20 anos de excelência no Pará, unindo tradição, tecnologia e produtividade
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToAtuacao}
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold group"
            >
              Conheça nossas áreas de atuação
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Link to="/sobre">
              <Button 
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 px-8 py-4 text-lg font-semibold group"
              >
                <Target className="mr-2 w-5 h-5" />
                Nossa História
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Role para baixo</span>
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;