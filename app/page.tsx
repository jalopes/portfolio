// app/page.tsx
import React from 'react';
import DiagonalDivider from './components/DiagonalDivider';
import ProjetoChilli from './components/ProjetoChilli';
import ProjetoDataNutri from './components/ProjetoDataNutri';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white tracking-wide">

      {/* Seção Inicial */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide">
            {/* <span className="text-green">{"<> "}</span> */}
            Olá, eu sou Jordan
            {/* <span className="text-green">{" </>"}</span> */}
          </h2>

          <p className="text-lg mb-6 mt-8">
            Desenvolvedor Full Stack e Cientista de Dados.
          </p>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wide">Sobre Mim</h2>
          <p className="text-lg leading-7">
            Sou um desenvolvedor apaixonado por tecnologia e inovação. 
            Esse espaço é destinado a mostrar alguns projetos que desenvolvi, a fim de demonstrar um pouco da minha experiência.
          </p>
        </div>
      </section>

      {/* Projeto Hotel Chilli */}
      <ProjetoChilli />

      {/* Projeto DataNutri */}
      <ProjetoDataNutri />

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 uppercase tracking-wider">Contato</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="nome" className="block mb-2">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                className="w-full px-4 py-2 bg-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Seu nome"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Seu email"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block mb-2">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={5}
                className="w-full px-4 py-2 border bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Sua mensagem"
                required
              ></textarea>
            </div>
            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-lg relative overflow-hidden">
              <span className="relative z-10">Enviar</span>
              <div className="absolute inset-0 bg-green-700 opacity-0 transition-opacity duration-300 hover:opacity-20"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 shadow">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
