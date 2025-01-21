"use client";

import React, { useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import { FaDatabase, FaNodeJs, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";

interface CustomSlide extends SlideImage {
  title: string;
  description: string;
}

const DataNutri: React.FC = () => {
  const imagens = [
    {
      src: "/dataNutri/table.png",
      alt: "Tabela Nutricional",
      description: "Tabela principal com dados nutricionais detalhados de diversos alimentos.",
    },
    {
      src: "/dataNutri/detail.png",
      alt: "Detalhe Nutricional",
      description: "Visão detalhada das informações nutricionais do alimento selecionado.",
    },
    {
      src: "/dataNutri/score.png",
      alt: "Pontuação Nutricional",
      description: "Pontuação nutricional para auxiliar na escolha de alimentos saudáveis.",
    },
    {
      src: "/dataNutri/similar.png",
      alt: "Alimentos Similares",
      description: "Lista de alimentos nutricionalmente semelhantes.",
    },
    {
      src: "/dataNutri/table-heatmap.png",
      alt: "Tabela com Heatmap",
      description: "Tabela interativa com heatmap nutricional destacando nutrientes.",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <header className="bg-[#4996B6] text-white py-6">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">DataNutri</h1>
          <p className="mt-2 text-lg">
            Plataforma de análise e visualização de informações nutricionais.
          </p>
        </div>
      </header>

      {/* Sobre o Projeto */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Sobre o Projeto</h2>
          <p className="text-lg leading-7">
            O DataNutri é uma plataforma interativa para explorar dados nutricionais de diversos alimentos. Oferecemos tabelas interativas, heatmaps e análises detalhadas para ajudar a fazer escolhas alimentares mais saudáveis.
          </p>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Galeria de Imagens</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imagens.map((imagem, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="w-full h-[600px] flex items-center justify-center bg-white">
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    width={420}
                    height={420}
                    objectFit="contain"
                    className="max-w-full max-h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{imagem.alt}</h3>
                  <p className="text-gray-600 text-sm">{imagem.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
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
              </div>
            ),
          }}
        />
      )}

      {/* Tecnologias Utilizadas */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">Tecnologias Utilizadas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <SiNextdotjs className="text-6xl text-black" />
              <p className="mt-2 text-lg font-semibold">Next.js</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SiTypescript className="text-6xl text-blue-500" />
              <p className="mt-2 text-lg font-semibold">TypeScript</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SiTailwindcss className="text-6xl text-teal-500" />
              <p className="mt-2 text-lg font-semibold">Tailwind CSS</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaDatabase className="text-6xl text-blue-800" />
              <p className="mt-2 text-lg font-semibold">PostgreSQL</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaNodeJs className="text-6xl text-green-600" />
              <p className="mt-2 text-lg font-semibold">Node.js</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaReact className="text-6xl text-blue-400" />
              <p className="mt-2 text-lg font-semibold">React</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4996B6] text-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} DataNutri. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default DataNutri;
