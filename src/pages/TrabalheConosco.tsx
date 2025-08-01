import { useState } from "react";
import { Button } from "@/components/ui/button";

const TrabalheConosco = () => {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    mensagem: "",
    curriculo: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Currículo enviado com sucesso! Em breve entraremos em contato.");
    setForm({ nome: "", email: "", mensagem: "", curriculo: "" });
  };

  return (
    <section className="max-w-3xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold text-primary mb-6">Trabalhe Conosco</h1>
      <p className="mb-8 text-gray-700">
        Faça parte do Grupo Cangaia! Estamos sempre em busca de pessoas talentosas, engajadas e que
        compartilham nosso compromisso com inovação, qualidade e tradição.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            name="nome"
            value={form.nome}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Link do Currículo (Google Drive, PDF, etc.)</label>
          <input
            type="url"
            name="curriculo"
            value={form.curriculo}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Mensagem</label>
          <textarea
            name="mensagem"
            rows={4}
            value={form.mensagem}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          />
        </div>

        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white px-6 py-2">
          Enviar Currículo
        </Button>
      </form>

      <p className="text-sm text-gray-500 mt-6">
        Ou envie diretamente para:{" "}
        <a href="mailto:contato@agrocangaia.com" className="text-primary underline">
          contato@agrocangaia.com
        </a>
      </p>
    </section>
  );
};

export default TrabalheConosco;
