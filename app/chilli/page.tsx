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
    // {
    //   src: '/chilli/2-home.png',
    //   alt: 'Home Alternativa',
    //   description: 'Versão alternativa da página inicial com foco em layout responsivo.'
    // },
    {
      src: '/chilli/3-loja.png',
      alt: 'Loja',
      description: 'Seção da loja onde os produtos exclusivos são exibidos. Integração com Mercado Livre que busca automaticamente os produtos da loja no Mercado Livre.'
    },
    // {
    //   src: '/chilli/4-reserva.png',
    //   alt: 'Reserva',
    //   description: 'Interface de reserva online com calendário interativo.'
    // },
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
    // {
    //   src: '/chilli/7-cadastro.png',
    //   alt: 'Cadastro',
    //   description: 'Formulário de cadastro simplificado para novos usuários.'
    // },
    // {
    //   src: '/chilli/8-pagamento.png',
    //   alt: 'Pagamento',
    //   description: 'Processo de pagamento seguro integrado com múltiplas opções.'
    // },
    // {
    //   src: '/chilli/9-email-pre-reserva.png',
    //   alt: 'Email Pré-Reserva',
    //   description: 'Modelo de email enviado após a pré-reserva ser efetuada.'
    // },
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
    <div className="bg-white text-[var(--dark-text-color)]">
      {/* Header */}
      <header className="bg-[var(--primary-color)] text-[var(--text-color)] py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">Projeto Chilli</h1>
          <p className="mt-2 text-lg">
            Um projeto temático focado em experiências únicas para um público masculino.
          </p>
        </div>
      </header>

      {/* Aviso sobre Conteúdo Sensível */}
      <section className="bg-yellow-100 text-yellow-800 py-4">
        <div className="container mx-auto px-6 text-center">
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
      </section>

      {/* Sobre o Projeto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <p className="text-lg leading-7 text-[var(--dark-text-color)]">
            O Chilli é um hotel temático exclusivo para homens. O site reflete a identidade visual única do local e oferece um sistema completo de reservas para hospedagem. Utilizamos o gateway de pagamentos do Mercado Pago e há uma integração com o serviço de hotéis que o estabelecimento utiliza.
          </p>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-[var(--contrast-bg-color)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[var(--dark-text-color)]">Galeria de Imagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagens.map((imagem, index) => (
              <div
                key={index}
                className="bg-[var(--background-color)] shadow rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                {/* Contêiner com proporção quadrada */}
                <div className="w-full aspect-square relative">
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[var(--text-color)] mb-2">{imagem.alt}</h3>
                  <p className="text-[var(--tertiary-color)] text-sm">{imagem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox para visualização de imagens */}
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
                <img src={slide.src} className="max-w-full max-h-screen" />
                {/* <h3 className="mt-4 text-2xl font-bold">{slide.title}</h3>
                <p className="mt-2 text-lg">{slide.description}</p> */}
              </div>
            ),
          }}
        />
      )}

      {/* Informações Adicionais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[var(--dark-text-color)]">Destaques</h2>
          <ul className="list-disc list-inside text-[var(--dark-text-color)] text-lg space-y-2">
            <li>Design moderno e temático</li>
            <li>Funcionalidades de reserva online</li>
            <li>Integração com sistemas de pagamento</li>
            <li>Foco em SEO e acessibilidade</li>
            <li>Totalmente responsivo</li> {/* Adicionado */}
          </ul>
        </div>
      </section>

      {/* Seção de Tecnologias */}
      <section className="py-16 bg-[var(--contrast-bg-color)]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-[var(--dark-text-color)]">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Next.js */}
            <div className="flex flex-col items-center text-center">
              <SiNextdotjs className="text-6xl text-[#000000]" />
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
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--primary-color)] text-[var(--text-color)] py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Projeto Chilli. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjetoChilli;
