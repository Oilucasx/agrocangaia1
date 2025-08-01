import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const submenuRef = useRef(null);
  const location = useLocation();
  const submenuTimeout = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  {
    name: "Atuação",
    href: "/atuacao",
    submenu: [
      { name: "Fazenda", href: "/atuacao/fazenda" },
      { name: "Construção Civil", href: "/atuacao/construcao" },
      { name: "Porto", href: "/atuacao/porto" },
    ],
  },
  { name: "Notícias", href: "/noticias" },
  { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
  { name: "Contato", href: "/contato" },
];


  const scrollToContact = () => {
    const contactSection = document.getElementById("contato");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    return () => {
      if (submenuTimeout.current) {
        clearTimeout(submenuTimeout.current);
      }
    };
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <img
                src="/imagens/logo-azul.png"
                alt="Logo Cangaia"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-extrabold tracking-tight text-[#003087]">Cangaia</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.submenu ? (
                  <div
                    className="relative group"
                    onMouseEnter={() => {
                      if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
                      setShowSubmenu(true);
                    }}
                    onMouseLeave={() => {
                      submenuTimeout.current = setTimeout(() => setShowSubmenu(false), 5000);
                    }}
                  >
                    <button className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors font-medium">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div
                      ref={submenuRef}
                      className={`absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 transition-opacity duration-200 ${showSubmenu ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                      onMouseEnter={() => {
                        if (submenuTimeout.current) clearTimeout(submenuTimeout.current);
                        setShowSubmenu(true);
                      }}
                      onMouseLeave={() => {
                        submenuTimeout.current = setTimeout(() => setShowSubmenu(false), 5000);
                      }}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          onClick={() => setShowSubmenu(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-primary transition-colors font-medium ${
                      location.pathname === item.href ? "text-primary" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button and Instagram */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-white px-6 py-2"
            >
              Entrar em Contato
            </Button>
            <a
              href="https://instagram.com/agrocangaia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <div>
                      <button
                        onClick={() => setShowSubmenu(!showSubmenu)}
                        className="flex items-center justify-between w-full px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                      >
                        <span>{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            showSubmenu ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {showSubmenu && (
                        <div className="ml-4 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-primary transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                setShowSubmenu(false);
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Button
                  onClick={() => {
                    scrollToContact();
                    setIsOpen(false);
                  }}
                  className="w-full bg-primary hover:bg-primary/90 text-white mb-2"
                >
                  Entrar em Contato
                </Button>
                <a
                  href="https://instagram.com/agrocangaia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-gray-600 hover:text-primary transition-colors py-2"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Siga no Instagram</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
