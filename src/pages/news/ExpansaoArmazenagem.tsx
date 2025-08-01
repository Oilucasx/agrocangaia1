import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import storageImage from "@/assets/news-storage.jpg";

const ExpansaoArmazenagem = () => {
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
              5 de julho de 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expansão da Capacidade de Armazenagem
            </h1>
            
            <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Infraestrutura
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={storageImage} 
              alt="Novos silos de armazenagem"
              className="w-full h-96 object-cover rounded-2xl shadow-card"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A conclusão dos novos silos representa um marco importante na expansão da infraestrutura 
              do Grupo Cangaia. Com aumento de 50% na capacidade de armazenagem, fortalecemos nossa 
              posição estratégica na cadeia do agronegócio.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os novos silos graneleiros foram projetados com tecnologia de ponta para garantir 
              a máxima qualidade na conservação dos grãos. Sistema de aeração controlada, 
              monitoramento de temperatura e umidade são alguns dos diferenciais da nossa nova estrutura.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Tecnologia Avançada</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Cada silo é equipado com sensores que monitoram continuamente as condições de 
              armazenamento. O controle automatizado garante que os grãos sejam mantidos nas 
              condições ideais, preservando qualidade e valor comercial por períodos prolongados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              A infraestrutura inclui também sistemas de movimentação automatizados, que aceleram 
              os processos de carga e descarga, reduzindo custos operacionais e aumentando a 
              eficiência logística.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Vantagem Competitiva</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Com maior capacidade de armazenagem, podemos aguardar os melhores momentos do mercado 
              para comercializar nossa produção. Esta flexibilidade comercial se traduz em melhores 
              preços e maior rentabilidade para o negócio.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Além da produção própria, os novos silos nos permitem prestar serviços de armazenagem 
              para produtores da região, gerando uma nova fonte de receita e fortalecendo nossa 
              presença no mercado local.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Sustentabilidade</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              O projeto dos novos silos priorizou critérios de sustentabilidade ambiental. 
              Sistemas de captação de água da chuva, painéis solares para geração de energia 
              e tratamento adequado de resíduos fazem parte da nossa infraestrutura.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Esta expansão consolida o Grupo Cangaia como referência em infraestrutura agrícola 
              moderna e sustentável, preparando-nos para os desafios futuros do agronegócio brasileiro.
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

export default ExpansaoArmazenagem;