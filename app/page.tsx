// app/page.tsx
import React from 'react';
import ProjetoChilli from './components/ProjetoChilli';
import ProjetoDataNutri from './components/ProjetoDataNutri';

const Home: React.FC = () => {
  return (
    <div className="bg-black text-white tracking-wide">
      {/* Seção Inicial */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4 uppercase tracking-wide">
            Olá, eu sou Jordan
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

      {/* GitHub */}
      <section id="github" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-wide">GitHub</h2>
          <a
            href="https://github.com/jandrade-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 underline text-lg"
          >
            https://github.com/jandrade-dev
          </a>
        </div>
      </section>

      {/* Aviso de construção */}
      <section id="em-construcao" className="py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm italic">
            Portfólio e GitHub estão em construção.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
