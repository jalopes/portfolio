"use client";

import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaDatabase, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiPandas } from "react-icons/si";
import Image from "next/image";
import { IoMdClose } from "react-icons/io";

interface CustomSlide {
    src: string;
    alt: string;
    description: string;
}

const DataNutri: React.FC = () => {
    const imagens: CustomSlide[] = [
        {
            src: "/dataNutri/table.png",
            alt: "Tabela Nutricional",
            description:
                "Tabela principal com dados nutricionais detalhados de diversos alimentos.",
        },
        {
            src: "/dataNutri/detail.png",
            alt: "Detalhe Nutricional",
            description:
                "Visão detalhada das informações nutricionais do alimento selecionado.",
        },
        {
            src: "/dataNutri/score.png",
            alt: "Pontuação Nutricional",
            description:
                "Pontuação nutricional para auxiliar na escolha de alimentos saudáveis.",
        },
        {
            src: "/dataNutri/similar.png",
            alt: "Alimentos Similares",
            description: "Lista de alimentos nutricionalmente semelhantes.",
        },
        {
            src: "/dataNutri/table-heatmap.png",
            alt: "Tabela com Heatmap",
            description:
                "Tabela interativa com heatmap nutricional destacando nutrientes.",
        },
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

    return (
        <div className="bg-black text-white tracking-wide mt-16">

            {/* <header className="bg-[var(--primary-color)] text-white py-6">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl font-bold uppercase tracking-wider">DataNutri</h1>
                    <p className="mt-2 text-lg">
                        Plataforma de análise e visualização de informações nutricionais.
                    </p>
                </div>
            </header> */}

            <header className="bg-black to-[#4e4376] py-20 pb-0">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-5xl font-bold uppercase tracking-wider mb-4 animate-fade-in-down">
                        DataNutri
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 font-light max-w-2xl mx-auto">
                        Plataforma avançada de análise nutricional com visualização de dados interativa
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <a
                            href="https://datanutri.com"
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
            {/* <section>
                <div className="container mx-auto p-4">
                    <div className="mt-8 p-6 bg-white bg-opacity-10 border border-[#4996b5] rounded-lg shadow-lg">
                        <p className="text-md md:text-lg text-gray-200">
                            Visite o site: <a href="https://datanutri.com" className="text-[#4996b5] underline">datanutri.com</a>.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Seção de Apresentação */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center text-xl">
                        {/* Imagem do projeto com Modal */}
                        <div className="w-full lg:w-3/5 mb-8 lg:mb-0">
                            <div className="relative">
                                <Image
                                    src="/dataNutri/cover_nutri.png"
                                    alt="Mockup DataNutri"
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
                                O <span className="text-[#4996b5] font-semibold">DataNutri</span> é uma plataforma interativa projetada para oferecer uma experiência completa na análise e visualização de informações nutricionais. Nosso objetivo é capacitar usuários com dados detalhados para escolhas alimentares mais saudáveis.
                            </p>
                            <p className="text-gray-300 mb-4">
                                A plataforma conta com ferramentas como tabelas dinâmicas, gráficos interativos e heatmaps que facilitam a exploração de dados nutricionais. Além disso, integra funcionalidades avançadas de pesquisa e filtros para personalizar a experiência do usuário.
                            </p>
                            <p className="text-gray-300">
                                Desenvolvido com <span className="font-medium text-[#4996b5]">Next.js, TypeScript, Tailwind CSS e Python</span>, o DataNutri prioriza alto desempenho, acessibilidade e design responsivo, garantindo uma navegação intuitiva em qualquer dispositivo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {isOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={closeModal} // Fecha ao clicar fora do modal
                >
                    <div
                        className="relative p-4 rounded-lg"
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
                            className="rounded-lg"
                            loading="eager"
                        />
                        <div className="mt-4 text-center text-white">
                            <h3 className="text-2xl font-semibold">{imagens[currentImageIndex].alt}</h3>
                            <p className="mt-2">{imagens[currentImageIndex].description}</p>
                        </div>

                        {/* Botões de navegação */}
                        <div className="absolute inset-0 flex justify-between items-center px-6">
                            {/* Botão Anterior */}
                            <button
                                onClick={() =>
                                    setCurrentImageIndex(
                                        (currentImageIndex - 1 + imagens.length) % imagens.length
                                    )
                                }
                                className="text-white bg-[#4996b5] p-4 rounded-full shadow-lg hover:bg-[#357a94] transition-colors focus:outline-none flex items-center justify-center"
                                aria-label="Imagem anterior"
                            >
                                <FaChevronLeft size={32} />
                            </button>
                            {/* Botão Próximo */}
                            <button
                                onClick={() =>
                                    setCurrentImageIndex((currentImageIndex + 1) % imagens.length)
                                }
                                className="text-white bg-[#4996b5] p-4 rounded-full shadow-lg hover:bg-[#357a94] transition-colors focus:outline-none flex items-center justify-center"
                                aria-label="Próxima imagem"
                            >
                                <FaChevronRight size={32} />
                            </button>
                        </div>
                    </div>
                </div>
            )}


            <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d]">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4996b5] to-[#4e4376] bg-clip-text text-transparent">
                        Funcionalidades Principais
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Análise Detalhada',
                                icon: '🔍',
                                content: 'Explore detalhes nutricionais com nossa interface intuitiva'
                            },
                            {
                                title: 'Comparação Inteligente',
                                icon: '⚖️',
                                content: 'Compare alimentos e descubra alternativas mais saudáveis'
                            },
                            {
                                title: 'Visualizações Interativas',
                                icon: '📊',
                                content: 'Gráficos dinâmicos e heatmaps para melhor compreensão'
                            },
                            {
                                title: 'Histórico Nutricional',
                                icon: '📅',
                                content: 'Acompanhe seu consumo diário e evolua seus hábitos'
                            },
                            {
                                title: 'Exportação de Dados',
                                icon: '💾',
                                content: 'Exporte relatórios em CSV para análise externa'
                            },
                            {
                                title: 'Sistema de Notificações',
                                icon: '🔔',
                                content: 'Alertas personalizados para suas metas nutricionais'
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

            {/* Seção de Arquitetura e Tecnologias */}
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
                                    Integração com <strong>APIs de dados nutricionais</strong> para obtenção de informações atualizadas.
                                </p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300">
                                    Banco de dados <strong>PostgreSQL</strong> gerenciado com <strong>Prisma</strong>, oferecendo consultas eficientes e manutenção simplificada.
                                </p>
                            </div>
                        </div>

                        {/* Coluna da direita */}
                        <div className="space-y-6">
                            <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300">
                                    Sistema de envio de e-mails para notificações e atualizações aos usuários.
                                </p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300">
                                    Interface construída com <strong>Tailwind CSS</strong> para um design responsivo.
                                </p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300">
                                    Utilização de <strong>Python</strong> e <strong>Pandas</strong> para processamento e geração de tabelas nutricionais.
                                </p>
                            </div>
                            <div className="bg-gray-700 p-6 rounded-2xl shadow-lg">
                                <p className="text-lg text-gray-300">
                                    Emprego de bibliotecas de <strong>Machine Learning</strong> para análise e interpretação dos dados nutricionais.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-600">
                <div className="container mx-auto px-6">
                    {/* <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-[#4996b5] to-[#4e4376] bg-clip-text text-transparent">
                        Tecnologias Utilizadas
                    </h2> */}
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                        {[
                            { icon: <SiNextdotjs className="w-full h-full" />, name: 'Next.js', color: 'text-white' },
                            { icon: <SiTypescript className="w-full h-full" />, name: 'TypeScript', color: 'text-[#3178C6]' },
                            { icon: <SiTailwindcss className="w-full h-full" />, name: 'Tailwind', color: 'text-[#38B2AC]' },
                            { icon: <FaDatabase className="w-full h-full" />, name: 'PostgreSQL', color: 'text-[#336791]' },
                            { icon: <FaPython className="w-full h-full" />, name: 'Python', color: 'text-[#3776AB]' },
                            { icon: <SiPandas className="w-full h-full" />, name: 'Pandas', color: 'text-[#150458]' },
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


            {/* <section className="py-16 bg-gray-600">
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
                            <FaPython className="text-6xl text-[#3776AB]" />
                            <p className="mt-2 text-lg font-semibold">Python</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
                            <SiPandas className="text-6xl text-[#150458]" />
                            <p className="mt-2 text-lg font-semibold">Pandas</p>
                        </div>
                        <div className="flex flex-col items-center text-center space-y-2 hover:scale-105 transition-transform">
                            <FaReact className="text-6xl text-[#61DBFB]" />
                            <p className="mt-2 text-lg font-semibold">React</p>
                        </div>
                    </div>
                </div>
            </section> */}

        </div>
    );
};

export default DataNutri;



