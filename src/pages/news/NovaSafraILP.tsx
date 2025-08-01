import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import fazendaImage from "@/assets/fazenda-moderna.jpg";

const NovaSafraILP = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/noticias" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para notícias
          </Link>

          <header className="mb-8">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              15 de julho de 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Nova Safra com Sistema ILP
            </h1>
            
            <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Agricultura
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={fazendaImage} 
              alt="Sistema de Integração Lavoura-Pecuária"
              className="w-full h-96 object-cover rounded-2xl shadow-card"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A implementação do sistema de Integração Lavoura-Pecuária (ILP) em nossa fazenda demonstrou 
              resultados extraordinários na nova safra, com aumento de 30% na produtividade e significativa 
              melhoria na qualidade do solo.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O ILP representa uma revolução na forma como conduzimos nossas atividades agropecuárias. 
              Este sistema integrado combina o cultivo de grãos com a criação de gado na mesma área, 
              promovendo sustentabilidade e maximizando o aproveitamento da terra.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Resultados da Safra</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Os números desta safra comprovam a eficiência do sistema ILP. Além do aumento de 30% na 
              produtividade, observamos melhorias significativas na estrutura do solo, redução de custos 
              com fertilizantes e maior resistência das culturas a pragas e doenças.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A rotação estratégica entre culturas de soja, milho e pastagens permitiu a recuperação 
              natural da fertilidade do solo, reduzindo nossa dependência de insumos externos e 
              promovendo um ciclo mais sustentável de produção.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Inovação Tecnológica</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Para apoiar a implementação do ILP, investimos em tecnologias de precisão que nos 
              permitem monitorar em tempo real as condições do solo, clima e desenvolvimento das 
              culturas. Drones, sensores e análises laboratoriais guiam nossas decisões diárias.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              O sucesso desta safra nos motiva a expandir o sistema ILP para outras áreas da fazenda, 
              sempre priorizando práticas sustentáveis que garantam produtividade a longo prazo e 
              preservação ambiental.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link to="/noticias">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar para notícias
              </Button>
            </Link>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default NovaSafraILP;