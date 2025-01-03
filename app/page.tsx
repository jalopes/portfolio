// app/page.tsx
import React from 'react';
import ProjetoChilli from './components/ProjetoChilli'; // Atualize o caminho conforme necessário
import ProjetoTodo from './components/ProjetoTodo';
import ProjetoFoodDataHub from './components/ProjetoFoodDataHub';

const Home: React.FC = () => {
  return (
    <div className="bg-white text-[var(--dark-text-color)]">
      {/* Hero Section */}
      <section className="bg-[var(--contrast-bg-color)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Olá, eu sou Jordan</h2>
          <p className="text-lg mb-6">Desenvolvedor Full Stack especializado em criar aplicações web modernas e responsivas.</p>
          <a href="#projetos" className="btn btn-highlight ripple-container">
            <span className="relative z-10">Veja meus projetos</span>
            <div className="ripple"></div>
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Sobre Mim</h2>
          <p className="text-lg leading-7">
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho experiência em várias linguagens e frameworks, incluindo React, Next.js, TypeScript e Tailwind CSS. Adoro resolver problemas complexos e criar soluções eficientes que atendam às necessidades dos usuários.
          </p>
        </div>
      </section>

      {/* Projetos */}
      <section id="projetos" className="bg-gray-200 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Meus Projetos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Componente do Projeto Chilli */}
            <ProjetoChilli />
            <ProjetoTodo />
            <ProjetoFoodDataHub />
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Contato</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-4">
              <label htmlFor="nome" className="block text-gray-700 mb-2">Nome</label>
              <input type="text" id="nome" name="nome" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="Seu nome" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="Seu email" required />
            </div>
            <div className="mb-4">
              <label htmlFor="mensagem" className="block text-gray-700 mb-2">Mensagem</label>
              <textarea id="mensagem" name="mensagem" rows={5} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]" placeholder="Sua mensagem" required></textarea>
            </div>
            <button type="submit" className="w-full btn btn-primary ripple-container">
              <span className="relative z-10">Enviar</span>
              <div className="ripple"></div>
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white shadow">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
