import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import droneImage from "@/assets/news-drone.jpg";

const TecnologiaDrones = () => {
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
              10 de julho de 2025
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Tecnologia com Drones na Agricultura
            </h1>
            
            <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium inline-block mb-6">
              Tecnologia
            </div>
          </header>

          <div className="mb-8">
            <img 
              src={droneImage} 
              alt="Drone monitorando plantação"
              className="w-full h-96 object-cover rounded-2xl shadow-card"
            />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              A agricultura de precisão deu um salto qualitativo no Grupo Cangaia com a implementação 
              de drones de última geração para monitoramento das culturas. Esta tecnologia revoluciona 
              nosso manejo agrícola, proporcionando dados precisos em tempo real.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Os drones equipados com câmeras multiespectrais e sensores avançados nos permitem 
              identificar problemas nas culturas antes mesmo que sejam visíveis ao olho humano. 
              Esta capacidade de detecção precoce é fundamental para o sucesso de nossas safras.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Monitoramento Inteligente</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Através do monitoramento aéreo, conseguimos mapear com precisão as necessidades 
              específicas de cada área da fazenda. Os drones identificam variações na saúde das 
              plantas, presença de pragas, deficiências nutricionais e problemas de irrigação.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Esta tecnologia nos permite aplicar defensivos e fertilizantes de forma direcionada, 
              reduzindo custos e minimizando impactos ambientais. A agricultura se torna mais 
              eficiente e sustentável com cada voo de monitoramento.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Resultados Práticos</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Desde a implementação dos drones, observamos uma redução de 25% no uso de defensivos 
              agrícolas e 20% na aplicação de fertilizantes, mantendo ou até melhorando a produtividade. 
              O retorno sobre o investimento em tecnologia tem sido excepcional.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Além dos benefícios econômicos e ambientais, os drones proporcionam agilidade nas 
              tomadas de decisão. O que antes levava dias para ser identificado e solucionado, 
              agora pode ser detectado e tratado em questão de horas.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Futuro da Agricultura</h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              O sucesso com drones é apenas o começo de nossa jornada na agricultura 4.0. 
              Estamos investindo em inteligência artificial e machine learning para processar 
              os dados coletados e criar modelos preditivos cada vez mais precisos para nossas culturas.
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

export default TecnologiaDrones;