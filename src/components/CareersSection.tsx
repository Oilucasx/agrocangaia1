import { Upload, Send, User, Mail, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import teamImage from "@/assets/team-office.jpg";

const CareersSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Candidatura enviada!",
      description: "Recebemos seu interesse. Nossa equipe entrará em contato em breve.",
    });
    setFormData({ name: "", email: "", position: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="trabalhe-conosco" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trabalhe <span className="text-primary">Conosco</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Faça parte de uma empresa que valoriza pessoas, inovação e crescimento sustentável. 
            Junte-se ao Grupo Cangaia e construa o futuro conosco.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem e texto motivacional */}
          <div>
            <img 
              src={teamImage} 
              alt="Equipe Grupo Cangaia"
              className="w-full h-96 object-cover rounded-2xl shadow-card mb-8"
            />
            
            <Card className="border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Por que escolher o <span className="text-primary">Grupo Cangaia?</span>
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Ambiente de trabalho colaborativo e inovador</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Oportunidades de crescimento profissional</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Projetos desafiadores e com impacto social</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Benefícios competitivos e valorização do colaborador</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Formulário */}
          <div>
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Candidate-se agora</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 font-medium">Nome completo</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-700 font-medium">E-mail</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="position" className="text-gray-700 font-medium">Cargo de interesse</Label>
                    <div className="relative mt-2">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="position"
                        name="position"
                        type="text"
                        value={formData.position}
                        onChange={handleChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Ex: Analista Agrícola, Engenheiro Civil..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem (opcional)</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="Fale um pouco sobre sua experiência e motivação..."
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label className="text-gray-700 font-medium">Currículo (PDF)</Label>
                    <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <span className="text-gray-600">Clique para fazer upload ou arraste seu currículo aqui</span>
                      <span className="text-sm text-gray-500 block mt-1">PDF até 5MB</span>
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Enviar candidatura
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;