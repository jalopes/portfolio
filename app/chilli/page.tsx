"use client";

// app/chilli/page.tsx
import React, { useState } from 'react';
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Lightbox, { SlideImage } from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Image from 'next/image';

// Definição do tipo personalizado
interface CustomSlide extends SlideImage {
  title: string;
  description: string;
}

const ProjetoChilli: React.FC = () => {
  const imagens = [
    {
      src: '/chilli/1-home.png',
      alt: 'Home',
      description: 'Visão geral da página inicial.'
    },
    {
      src: '/chilli/3-loja.png',
      alt: 'Loja',
      description: 'Seção da loja onde os produtos exclusivos são exibidos. Integração com Mercado Livre que busca automaticamente os produtos da loja no Mercado Livre.'
    },
    {
      src: '/chilli/5-reserva-detalhe.png',
      alt: 'Acomodações',
      description: 'Seção detalhando as acomodações disponíveis, com informações sobre vagas, comodidades e características específicas de cada opção.'
    },
    {
      src: '/chilli/6-acomodacao.png',
      alt: 'Acomodações',
      description: 'Seção onde ocorre a seleção da acomodação durante o processo de reserva, com filtros personalizados para facilitar a escolha.'
    },
    {
      src: '/chilli/10-email-reserva.png',
      alt: 'Email Reserva',
      description: 'Confirmação de reserva enviada ao usuário com todos os detalhes.'
    },
    {
      src: '/chilli/11-booking-summary.png',
      alt: 'Resumo da Reserva',
      description: 'Resumo completo da reserva exibido ao usuário depois da confirmação final.'
    },
    {
      src: '/chilli/11-admin.jpg',
      alt: 'Página de Administração',
      description: 'Página de administração que exibe informações sobre acomodações e vagas disponíveis, as últimas reservas realizadas pelo site e as últimas transações processadas pelo Mercado Pago.'
    },
  ];

  // Estado para controlar o lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Função para abrir o lightbox
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-black text-white tracking-wide mt-16">

      {/* Cabeçalho */}
      <header className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">Projeto Chilli</h1>
          <p className="mt-2 text-lg">
            Um projeto temático focado em experiências únicas para um público masculino.
          </p>
        </div>
      </header>

      {/* Aviso sobre Conteúdo Sensível */}
      <section>
        <div className="container mx-auto p-4">
          <div className="px-6 py-4 text-center bg-gray-500 rounded-lg text-white">
            <p className="text-sm">
              Este site pode conter conteúdo sensual e sensível para algumas pessoas. Visite o oficial:{" "}
              <a
                href="https://hotelchilli.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                hotelchilli.com.br
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Seção de Apresentação */}
      <section className="py-16 bg-black">
        <div className="container mx-auto p-20 flex">
          <div className="flex w-full h-full">
            {/* Mockup ou imagem do projeto */}
            <div className="w-1/2">
              <div className="relative">
                <Image
                  src="/chilli/cover.png" // Substitua pelo caminho correto da imagem de mockup
                  alt="Mockup Hotel Chilli"
                  width={600}
                  height={400}
                  className="cursor-pointer"
                  onClick={() => openLightbox(0)} // Abre o lightbox na primeira imagem
                />
              </div>
            </div>

            {/* Descrição do projeto */}
            <div className="w-1/2 flex flex-col justify-center">
              <h1 className="text-4xl font-bold text-white mb-6">Hotel Chilli</h1>
              <p className="text-lg text-gray-300 mb-4">
                O <span className="text-red-500 font-semibold">Hotel Chilli</span> é um projeto temático desenvolvido para oferecer uma experiência completa de hospedagem online. O site inclui uma área dedicada para reservas, com integração direta a plataformas de pagamento seguras e um sistema de gerenciamento eficiente.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                O projeto também conta com uma página exclusiva para administradores, onde é possível gerenciar reservas, verificar disponibilidade e acessar relatórios detalhados. Essa funcionalidade proporciona maior controle e agilidade na administração do hotel.
              </p>
              <p className="text-lg text-gray-300">
                O site foi desenvolvido utilizando tecnologias modernas como <span className="font-medium text-red-500">Next.js, TypeScript e Tailwind CSS</span>, priorizando segurança, desempenho e usabilidade. O layout responsivo garante uma navegação eficiente em diversos dispositivos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Funcionalidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Para Usuários Finais</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Integração com <strong>Mercado Pago</strong>.</li>
                <li>Consulta de produtos via <strong>Mercado Livre</strong>.</li>
                <li>Envio de e-mails automatizados.</li>
                <li><strong>Webhooks</strong> para atualização de pagamentos.</li>
                <li>Layout responsivo e otimizado.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Para Administradores</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Gerenciamento de reservas.</li>
                <li>Disponibilidade em tempo real.</li>
                <li>Relatórios detalhados.</li>
                <li>Integração com sistemas internos.</li>
                <li>Sistema de permissões.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Arquitetura e Tecnologias */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Arquitetura e Tecnologias</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Backend</h3>
              <p className="text-lg text-gray-300">
                Arquitetura <strong>serverless</strong> com <strong>Next.js API Routes</strong>, integrando <strong>Mercado Pago</strong> e <strong>Mercado Livre</strong>. Uso de <strong>webhooks</strong> para notificações em tempo real e sistema de permissões para segurança.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Banco de Dados</h3>
              <p className="text-lg text-gray-300">
                <strong>PostgreSQL</strong> gerenciado com <strong>Prisma</strong>, garantindo eficiência, consultas rápidas e segurança.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Diferenciais</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-300">
            <li><strong>Layout Responsivo</strong>: Design moderno e adaptável para dispositivos móveis e desktops, garantindo uma experiência de usuário consistente em todas as plataformas.</li>
            <li><strong>Integrações Robustes</strong>: Conexão eficiente com serviços externos como Mercado Pago e Mercado Livre, proporcionando funcionalidades avançadas e seguras.</li>
            <li><strong>Infraestrutura Moderna e Escalável</strong>: Utilização de tecnologias serverless e bancos de dados gerenciados, assegurando que o sistema possa escalar conforme a demanda cresce.</li>
            <li><strong>Webhooks para Pagamentos</strong>: Implementação de webhooks para receber atualizações em tempo real sobre o status das transações, garantindo sincronização automática e confiável das informações de pagamento.</li> {/* Adicionado */}
            <li><strong>Segurança</strong>: Implementação de sistemas de permissões e práticas de segurança avançadas para proteger dados sensíveis e garantir transações seguras.</li>
            <li><strong>Desempenho Otimizado</strong>: Foco em otimizações de performance para garantir tempos de carregamento rápidos e uma experiência de usuário fluida.</li>
          </ul>
        </div>
      </section>

      {/* Seção de Tecnologias Utilizadas */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Next.js */}
            <div className="flex flex-col items-center text-center">
              <SiNextdotjs className="text-6xl text-white" />
              <p className="mt-2 text-lg font-semibold">Next.js</p>
            </div>
            {/* TypeScript */}
            <div className="flex flex-col items-center text-center">
              <SiTypescript className="text-6xl text-[#3178C6]" />
              <p className="mt-2 text-lg font-semibold">TypeScript</p>
            </div>
            {/* Tailwind CSS */}
            <div className="flex flex-col items-center text-center">
              <SiTailwindcss className="text-6xl text-[#38B2AC]" />
              <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
            </div>
            {/* PostgreSQL */}
            <div className="flex flex-col items-center text-center">
              <FaDatabase className="text-6xl text-[#336791]" />
              <p className="mt-2 text-lg font-semibold">PostgreSQL</p>
            </div>
            {/* Node.js */}
            <div className="flex flex-col items-center text-center">
              <FaNodeJs className="text-6xl text-[#68A063]" />
              <p className="mt-2 text-lg font-semibold">Node.js</p>
            </div>
            {/* React */}
            <div className="flex flex-col items-center text-center">
              <FaReact className="text-6xl text-[#61DBFB]" />
              <p className="mt-2 text-lg font-semibold">React</p>
            </div>
            {/* Webhooks */}
            <div className="flex flex-col items-center text-center">
              {/* Utilizando um ícone representativo, por exemplo, um ícone de rede ou notificações */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="mt-2 text-lg font-semibold">Webhooks</p>
            </div>
          </div>
        </div>
      </section>


      {/* Lightbox para Imagens */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={currentImageIndex}
          slides={imagens.map((img): CustomSlide => ({
            src: img.src,
            title: img.alt,
            description: img.description,
          }))}
          carousel={{ finite: false }}
          render={{
            slide: ({ slide }) => (
              <div className="flex flex-col items-center">
                <img src={slide.src} alt={slide.title} className="max-w-full max-h-screen" />
                <h3 className="mt-4 text-2xl font-bold text-white">{slide.title}</h3>
                <p className="mt-2 text-lg text-white">{slide.description}</p>
              </div>
            ),
          }}
        />
      )}

      {/* Rodapé */}
      <footer className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Hotel Chilli. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjetoChilli;
