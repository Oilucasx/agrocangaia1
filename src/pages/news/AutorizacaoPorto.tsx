import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import assinaturaImage from "@/assets/assinatura-porto.jpg";

const AutorizacaoPorto = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <article className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/noticias" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para notícias
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Calendar className="w-4 h-4 mr-2" />
              9 de julho de 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Autorização oficial do Projeto Portuário do Grupo Cangaia
            </h1>
            
            <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Marco Histórico
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={assinaturaImage} 
              alt="Assinatura do Projeto Portuário"
              className="w-full h-96 object-cover rounded-2xl shadow-card"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Hoje é um dia histórico para a nossa trajetória. Com muita honra, participamos da assinatura oficial 
              que marca a autorização do nosso projeto portuário — um passo gigante para o desenvolvimento 
              logístico, econômico e social da nossa região.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esse momento, vivido ao lado do Ministro dos Portos e tantas entidades comprometidas com o progresso, 
              representa mais do que uma conquista empresarial: é a concretização de um sonho construído com 
              muita luta, responsabilidade e parceria.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              O Projeto Portuário do Grupo Cangaia não apenas amplia nosso portfólio de negócios, mas também 
              fortalece nossa missão de contribuir para o crescimento sustentável da região norte do Brasil. 
              Com infraestrutura moderna e tecnologia de ponta, nosso porto será um marco na logística nacional.
            </p>

            <blockquote className="border-l-4 border-primary bg-gray-50 p-6 my-8">
              <p className="text-lg italic text-gray-800">
                "Este projeto representa nossa visão de futuro: um desenvolvimento que une tradição familiar, 
                inovação tecnológica e responsabilidade social. Estamos construindo não apenas um porto, 
                mas um legado para as próximas gerações."
              </p>
              <footer className="text-gray-600 mt-4">— Direção Executiva Grupo Cangaia</footer>
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Impacto Regional</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              A autorização oficial do projeto portuário marca uma nova era para a economia paraense. 
              O empreendimento gerará centenas de empregos diretos e indiretos, movimentará a cadeia 
              produtiva local e facilitará o escoamento da produção agrícola regional.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Nossa estrutura portuária será equipada com tecnologia de última geração para movimentação 
              de cargas, armazenamento especializado e sistemas de logística integrada. O projeto foi 
              desenvolvido seguindo os mais rigorosos padrões ambientais e de sustentabilidade.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Próximos Passos</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Com a autorização em mãos, iniciamos imediatamente as próximas fases do projeto. 
              As obras de infraestrutura começarão ainda este ano, com previsão de inauguração 
              parcial em 2026 e operação completa em 2027.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Continuamos firmes em nosso compromisso de crescer de forma responsável, sempre 
              priorizando o desenvolvimento sustentável e o bem-estar das comunidades onde atuamos. 
              Este é apenas o começo de uma nova etapa na história do Grupo Cangaia.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <Link to="/noticias">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para notícias
                </Button>
              </Link>
              
              <div className="text-sm text-gray-500">
                Compartilhe esta notícia
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default AutorizacaoPorto;