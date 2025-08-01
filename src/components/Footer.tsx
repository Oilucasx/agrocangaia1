import { Instagram, Facebook, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Atuação", href: "/atuacao" },
    { name: "Notícias", href: "/noticias" },
    { name: "Contato", href: "/contato" },
  ];

  const services = [
    { name: "Fazenda", href: "/atuacao/fazenda" },
    { name: "Construção Civil", href: "/atuacao/construcao" },
    { name: "Porto", href: "/atuacao/porto" },
  ];

  const socialLinks = [
    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/agrocangaia", label: "Instagram" },
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
  ];

  const contactInfo = [
    { icon: <MapPin className="w-4 h-4" />, text: "Tailândia - Pará, Brasil" },
    { icon: <Mail className="w-4 h-4" />, text: "contato@grupocangaia.com.br" },
    { icon: <Phone className="w-4 h-4" />, text: "+55 (94) 99999-9999" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-primary text-white p-2 rounded-lg">
                <div className="w-8 h-8 flex items-center justify-center font-bold text-lg">
                  GC
                </div>
              </div>
              <span className="text-xl font-bold">Grupo Cangaia</span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              Mais de 20 anos de excelência no agronegócio paraense, 
              unindo tradição familiar, tecnologia avançada e sustentabilidade.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 rounded-lg hover:bg-primary transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Áreas de Atuação</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    to={service.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-primary mt-0.5">
                    {contact.icon}
                  </div>
                  <span className="text-gray-300 text-sm">{contact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Grupo Cangaia - Todos os direitos reservados
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </Link>
              <Link to="#" className="text-gray-400 hover:text-primary text-sm transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;