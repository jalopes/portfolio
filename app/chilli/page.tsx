"use client";

import React, { useState } from 'react';
import { FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import Image from 'next/image';
import { IoMdClose } from 'react-icons/io';

const ProjetoChilli: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="bg-black text-white tracking-wide mt-16">
      {/* Cabeçalho */}
      <header className="bg-[var(--primary-color)] text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold uppercase tracking-wider">
            Projeto Chilli
          </h1>
          <p className="mt-2 text-lg">
            Um projeto temático focado em experiências únicas para um público
            masculino.
          </p>
        </div>
      </header>

      {/* Aviso sobre Conteúdo Sensível */}
      <section>
        <div className="container mx-auto p-4">
          <div className="px-6 py-4 text-center bg-gray-500 rounded-lg text-white">
            <p className="text-sm">
              Este site pode conter conteúdo sensual e sensível para algumas
              pessoas. Visite o oficial:{' '}
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
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center text-xl">
            {/* Imagem do projeto com Modal */}
            <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
              <div className="relative">
                <Image
                  src="/chilli/cover.png"
                  alt="Mockup Hotel Chilli"
                  width={800} // Aumentado de 600 para 800
                  height={533} // Mantive a proporção (600x400 -> 800x533)
                  className="cursor-pointer rounded-lg hover:opacity-80 transition-opacity"
                  onClick={openModal}
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl focus:outline-none"
              aria-label="Fechar Modal"
            >
              <IoMdClose />
            </button>
            <Image
              src="/chilli/cover.png"
              alt="Mockup Hotel Chilli - Ampliada"
              width={1200} // Tamanho maior para o modal
              height={800}
              className="rounded-lg"
              loading="eager"
            />
          </div>
        </div>
      )}

      {/* Restante do seu componente permanece igual */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-white uppercase tracking-wider text-center">
            Funcionalidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Cada funcionalidade */}
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
      </section>

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
                <ul className="list-disc list-inside ml-6 space-y-4 text-gray-300">
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

      {/* Seção de Tecnologias Utilizadas */}
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
      </section>
    </div>
  );
};

export default ProjetoChilli;
