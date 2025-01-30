"use client";

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaDatabase, FaNodeJs, FaPython, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPandas } from 'react-icons/si';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

interface CustomSlide {
  src: string;
  alt: string;
  description: string;
}

const ProjetoChilli: React.FC = () => {
  const imagens: CustomSlide[] = [
    {
      src: "/chilli/cover.png",
      alt: "Mockup Hotel Chilli",
      description: "Imagem principal do Hotel Chilli exibindo a interface de reserva.",
    },
    {
      src: "/chilli/5-reserva-detalhe.png",
      alt: "Detalhe de Reserva",
      description: "Tela detalhada mostrando as opções de acomodação e disponibilidade.",
    },
    {
      src: "/chilli/8-pagamento.png",
      alt: "Processo de Pagamento",
      description: "Interface de pagamento seguro para concluir reservas online.",
    },
    // Adicione mais imagens conforme necessário
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
  };

  const showNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagens.length);
  };

  return (
    <div className="bg-black text-white tracking-wide mt-16">
      {/* Cabeçalho */}
      {/* <header className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">
            Projeto Chilli
          </h1>
          <p className="mt-2 text-lg">
            Um projeto temático focado em experiências únicas para um público masculino.
          </p>
        </div>
      </header> */}

<section>
        <div className="container mx-auto p-4">
          <div className="px-6 py-4 text-center bg-gray-500 rounded-lg text-white">
            <p className="text-sm">
              Este site pode conter conteúdo sensual e sensível para algumas pessoas. 
              {/* Visite o site:{' '} */}
              {/* <a
                href="https://hotelchilli.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                hotelchilli.com.br
              </a> */}
              {/* . */}
            </p>
          </div>
        </div>
      </section>

      <header className="bg-black to-[#4e4376] py-20 pb-0">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold uppercase tracking-wider mb-4 animate-fade-in-down">
                      Chilli
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 font-light max-w-2xl mx-auto">
                      Plataforma de reservas de hospedagem para o público masculino
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a
                            href="https://hotelchilli.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 hover:bg-white/20 px-8 py-3 rounded-full transition-all duration-300 flex items-center"
                        >
                            🌐 Visite o Site
                        </a>
                    </div>

                </div>
            </header>

      {/* Aviso sobre Conteúdo Sensível */}


      {/* Seção de Apresentação */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center text-xl">
            {/* Imagem do projeto com Modal */}
            <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
              <div className="relative">
                <Image
                  src="/chilli/cover.png"
                  alt="Mockup Hotel Chilli"
                  width={800}
                  height={533}
                  className="cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
                  onClick={() => openModal(0)}
                  loading="lazy"
                  priority={false}
                />
              </div>
            </div>

            <div className="w-full lg:w-2/5 flex flex-col justify-center">
              <p className="text-gray-300 mb-4">
                O <span className="text-red-500 font-semibold">Hotel Chilli</span> é uma solução para reservas de hospedagem que combina simplicidade e eficiência. Com um sistema intuitivo, permite aos usuários verificar disponibilidade, realizar reservas e efetuar pagamentos online com segurança.
              </p>
              <p className="text-gray-300 mb-4">
                Além disso, conta com uma área administrativa completa que facilita o gerenciamento de reservas, acesso a relatórios detalhados e acompanhamento em tempo real das operações.
              </p>
              <p className="text-gray-300">
                Este projeto foi desenvolvido utilizando <span className="font-medium text-red-500">Next.js, TypeScript e Tailwind CSS</span>, assegurando uma experiência responsiva, performática e otimizada para dispositivos de todos os tamanhos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal personalizado */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
          onClick={closeModal} // Fecha ao clicar fora do modal
        >
          <div
            className="relative p-4 rounded-lg max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()} // Impede fechamento ao clicar dentro do modal
          >
            {/* Botão Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-3xl focus:outline-none"
              aria-label="Fechar Modal"
            >
              <IoMdClose />
            </button>

            {/* Imagem Atual */}
            <Image
              src={imagens[currentImageIndex].src}
              alt={`${imagens[currentImageIndex].alt} - Ampliada`}
              width={1200}
              height={800}
              className="rounded-lg object-contain"
              loading="eager"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-2xl font-semibold">{imagens[currentImageIndex].alt}</h3>
              <p className="mt-2">{imagens[currentImageIndex].description}</p>
            </div>

            {/* Botões de navegação */}
            {imagens.length > 1 && (
              <div className="absolute inset-0 flex justify-between items-center px-6">
                {/* Botão Anterior */}
                <button
                  onClick={showPrevious}
                  className="text-white bg-[#4996b5] p-4 rounded-full shadow-lg hover:bg-[#357a94] transition-colors focus:outline-none flex items-center justify-center"
                  aria-label="Imagem anterior"
                >
                  <FaChevronLeft size={32} />
                </button>
                {/* Botão Próximo */}
                <button
                  onClick={showNext}
                  className="text-white bg-[#4996b5] p-4 rounded-full shadow-lg hover:bg-[#357a94] transition-colors focus:outline-none flex items-center justify-center"
                  aria-label="Próxima imagem"
                >
                  <FaChevronRight size={32} />
                </button>
              </div>
            )}
          </div>
        </div>
      )}


      {/* <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase tracking-wider text-center">
            Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              "Sistema de reservas completo, permitindo a escolha da acomodação e pagamento online de forma prática.",
              "Envio automático de um código de reserva e um e-mail de confirmação ao finalizar o pedido.",
              "Acesso fácil às informações da reserva a qualquer momento, utilizando o código gerado.",
              "Loja integrada ao Mercado Livre, permitindo a visualização dos produtos com links diretos para suas respectivas páginas no Mercado Livre.",
              "Layout responsivo e otimizado para diferentes dispositivos e tamanhos de tela.",
              "Área de administração protegida, garantindo segurança no gerenciamento de dados sensíveis."
            ].map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-300">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
    <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4996b5] to-[#4e4376] bg-clip-text text-transparent">
            Funcionalidades Adicionais
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
                {
                    title: 'Sistema de Reservas Completo',
                    icon: '📅',
                    content: 'Permite a escolha da acomodação e pagamento online de forma prática.'
                },
                {
                    title: 'Confirmação Automática',
                    icon: '✉️',
                    content: 'Envio automático de um código de reserva e um e-mail de confirmação ao finalizar o pedido.'
                },
                {
                    title: 'Acesso Fácil às Reservas',
                    icon: '🔑',
                    content: 'Acesse facilmente as informações da reserva a qualquer momento, utilizando o código gerado.'
                },
                {
                    title: 'Integração com Mercado Livre',
                    icon: '🛒',
                    content: 'Loja integrada permitindo a visualização dos produtos com links diretos para suas respectivas páginas no Mercado Livre.'
                },
                {
                    title: 'Layout Responsivo',
                    icon: '📱',
                    content: 'Layout responsivo e otimizado para diferentes dispositivos e tamanhos de tela.'
                },
                {
                    title: 'Administração Segura',
                    icon: '🔒',
                    content: 'Área de administração protegida, garantindo segurança no gerenciamento de dados sensíveis.'
                }
            ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="opacity-80 leading-relaxed">{feature.content}</p>
                </div>
            ))}
        </div>
    </div>
</section>



      {/* <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider text-center">
            Arquitetura e Tecnologias
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Arquitetura <strong>serverless</strong> desenvolvida com <strong>Next.js</strong> e <strong>TypeScript</strong>.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Integração com <strong>Mercado Pago</strong> como gateway de pagamentos.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Integração com <strong>Mercado Livre</strong> para exibição da vitrine de produtos da loja, facilitando a visualização e compra pelos clientes.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Sistema de <strong>webhooks</strong> para notificações em tempo real, garantindo sincronização e atualizações automáticas entre os sistemas.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Conexão com o sistema de reservas interno da empresa, permitindo:
                </p>
                <ul className="list-disc list-inside ml-6 space-y-4 text-gray-300">
                  <li>Contagem de hóspedes em tempo real.</li>
                  <li>Verificação de acomodações disponíveis.</li>
                  <li>Realização de pré-reservas e reservas de forma automatizada.</li>
                </ul>
              </div>
            </div>


            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Sistema de envio de e-mails para notificar os usuários sobre o status de suas reservas, incluindo confirmações e atualizações importantes.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Banco de dados <strong>PostgreSQL</strong> gerenciado com <strong>Prisma</strong>.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Interface construída com <strong>TailwindCSS</strong>, permitindo uma personalização eficiente e um design responsivo adequado para diferentes dispositivos.
                </p>
              </div>
              <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                <p className="text-lg text-gray-300">
                  Sistema de permissões implementado para garantir segurança no acesso aos dados e controle das operações realizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-600">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <SiNextdotjs className="text-6xl text-white" />
              <p className="mt-2 text-lg font-semibold">Next.js</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <SiTypescript className="text-6xl text-[#3178C6]" />
              <p className="mt-2 text-lg font-semibold">TypeScript</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <SiTailwindcss className="text-6xl text-[#38B2AC]" />
              <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <FaDatabase className="text-6xl text-[#336791]" />
              <p className="mt-2 text-lg font-semibold">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <FaNodeJs className="text-6xl text-[#68A063]" />
              <p className="mt-2 text-lg font-semibold">Node.js</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <FaReact className="text-6xl text-[#61DBFB]" />
              <p className="mt-2 text-lg font-semibold">React</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <p className="mt-2 text-lg font-semibold">Webhooks</p>
            </div>
          </div>
        </div>
      </section> */}


      <section className="py-16 bg-gray-600">
    <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-white uppercase tracking-wider text-center">
            Arquitetura e Tecnologias
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Coluna da esquerda */}
            <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Arquitetura <strong>serverless</strong> desenvolvida com <strong>Next.js</strong> e <strong>TypeScript</strong>.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Integração com <strong>Mercado Pago</strong> como gateway de pagamentos.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Integração com <strong>Mercado Livre</strong> para exibição da vitrine de produtos da loja, facilitando a visualização e compra pelos clientes.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Sistema de <strong>webhooks</strong> para notificações em tempo real, garantindo sincronização e atualizações automáticas entre os sistemas.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Conexão com o sistema de reservas interno da empresa, permitindo:
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-2 text-gray-300">
                        <li>Contagem de hóspedes em tempo real.</li>
                        <li>Verificação de acomodações disponíveis.</li>
                        <li>Realização de pré-reservas e reservas de forma automatizada.</li>
                    </ul>
                </div>
            </div>

            {/* Coluna da direita */}
            <div className="space-y-6">
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Sistema de envio de e-mails para notificar os usuários sobre o status de suas reservas, incluindo confirmações e atualizações importantes.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Banco de dados <strong>PostgreSQL</strong> gerenciado com <strong>Prisma</strong>, oferecendo consultas eficientes e manutenção simplificada.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Interface construída com <strong>Tailwind CSS</strong> para um design responsivo.
                    </p>
                </div>
                <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-300">
                        Sistema de permissões implementado para garantir segurança no acesso aos dados e controle das operações realizadas.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>

{/* Seção de Tecnologias Utilizadas */}
<section className="py-20 bg-gray-600">
    <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
            {[
                { icon: <SiNextdotjs className="w-full h-full" />, name: 'Next.js', color: 'text-white' },
                { icon: <SiTypescript className="w-full h-full" />, name: 'TypeScript', color: 'text-[#3178C6]' },
                { icon: <SiTailwindcss className="w-full h-full" />, name: 'Tailwind CSS', color: 'text-[#38B2AC]' },
                { icon: <FaDatabase className="w-full h-full" />, name: 'PostgreSQL', color: 'text-[#336791]' },
                { icon: <FaPython className="w-full h-full" />, name: 'Python', color: 'text-[#3776AB]' },
                { icon: <SiPandas className="w-full h-full" />, name: 'Pandas', color: 'text-[#150458]' },
                // { icon: <FaNodeJs className="w-full h-full" />, name: 'Node.js', color: 'text-[#68A063]' },
                // { icon: <FaReact className="w-full h-full" />, name: 'React', color: 'text-[#61DBFB]' },
                { icon: (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                ), name: 'Webhooks', color: 'text-white' },
            ].map((tech, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                    <div className={`w-24 h-24 mb-4 ${tech.color} transition-transform duration-300 hover:scale-110`}>
                        {tech.icon}
                    </div>
                    <span className="text-lg opacity-90 group-hover:text-[#4996b5] transition-colors">
                        {tech.name}
                    </span>
                </div>
            ))}
        </div>
    </div>
</section>
    </div>
  );
};

export default ProjetoChilli;
