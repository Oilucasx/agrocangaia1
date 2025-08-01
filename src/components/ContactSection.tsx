import { MapPin, Mail, Phone, Send, User, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Recebemos sua mensagem. Nossa equipe entrará em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Endereço",
      info: "Tailândia - Pará, Brasil"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "E-mail",
      info: "contato@grupocangaia.com.br"
    },
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Telefone",
      info: "+55 (94) 99999-9999"
    }
  ];

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para conversar sobre oportunidades de negócio, parcerias e projetos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Informações de contato */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-elegant transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mapa */}
            <div className="mt-8">
              <Card className="border-0 shadow-card overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254889.5447644034!2d-48.526612!3d-2.755833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92c5c2c2c2c2c2c2%3A0x2c2c2c2c2c2c2c2c!2sTail%C3%A2ndia%20-%20PA!5e0!3m2!1spt!2sbr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização Grupo Cangaia"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>

          {/* Formulário de contato */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
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
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-gray-700 font-medium">Assunto</Label>
                    <div className="relative mt-2">
                      <MessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleChange}
                        className="pl-10 border-gray-300 focus:border-primary focus:ring-primary"
                        placeholder="Ex: Proposta comercial, parceria..."
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-2 border-gray-300 focus:border-primary focus:ring-primary"
                      placeholder="Descreva sua solicitação, proposta ou dúvida..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    <Send className="mr-2 w-5 h-5" />
                    Enviar mensagem
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

export default ContactSection;