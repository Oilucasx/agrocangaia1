import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Careers from "./pages/Careers";
import TrabalheConosco from "./pages/TrabalheConosco";
import Fazenda from "./pages/services/Fazenda";
import Construcao from "./pages/services/Construcao";
import Porto from "./pages/services/Porto";
import NovaSafraILP from "./pages/news/NovaSafraILP";
import TecnologiaDrones from "./pages/news/TecnologiaDrones";
import ExpansaoArmazenagem from "./pages/news/ExpansaoArmazenagem";
import AutorizacaoPorto from "./pages/news/AutorizacaoPorto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/noticias" element={<News />} />
          <Route path="/trabalhe-conosco" element={<Careers />} />
          <Route path="/trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="/atuacao/fazenda" element={<Fazenda />} />
          <Route path="/atuacao/construcao" element={<Construcao />} />
          <Route path="/atuacao/porto" element={<Porto />} />
          <Route path="/noticias/nova-safra-ilp" element={<NovaSafraILP />} />
          <Route path="/noticias/tecnologia-drones" element={<TecnologiaDrones />} />
          <Route path="/noticias/expansao-armazenagem" element={<ExpansaoArmazenagem />} />
          <Route path="/noticias/autorizacao-porto" element={<AutorizacaoPorto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
