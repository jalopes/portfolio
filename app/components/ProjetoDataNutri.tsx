// app/components/ProjetoDataNutri.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DiagonalDivider from './DiagonalDivider'; // Certifique-se de ter este componente

interface Transform {
  rotateX?: number; // Rotação em graus no eixo X
  rotateY?: number; // Rotação em graus no eixo Y
  rotateZ?: number; // Rotação em graus no eixo Z
}

interface Offset {
  x: number; // Deslocamento horizontal em pixels
  y: number; // Deslocamento vertical em pixels
}

interface ProjetoDataNutriProps {
  offsets?: {
    image1: Offset;
    image2: Offset;
    image3: Offset;
  };
  transforms?: {
    image1: Transform;
    image2: Transform;
    image3: Transform;
  };
}

const ProjetoDataNutri: React.FC<ProjetoDataNutriProps> = ({
  offsets = {
    image1: { x: 0, y: 0 },
    image2: { x: 100, y: 300 },
    image3: { x: -200, y: 400 },
  },
  transforms = {
    image1: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    image2: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    image3: { rotateX: 40, rotateY: 0, rotateZ: 0 },
  },
}) => {
  /**
   * Função para gerar o estilo de transformação para cada imagem.
   * @param offset Deslocamento em x e y.
   * @param transform Rotação em x, y e z.
   * @param translateZ Deslocamento no eixo z para gerenciar a profundidade.
   * @returns String com as transformações CSS aplicadas.
   */
  const getTransformStyle = (
    offset: Offset,
    transform: Transform,
    translateZ: number
  ) => {
    const { x, y } = offset;
    const { rotateX = 0, rotateY = 0, rotateZ = 0 } = transform;

    return `translate3d(${x}px, ${y}px, ${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
  };

  return (
    <section className="bg-gray-600">
      <div className="md:container mx-auto p-6 md:p-10">

        <h1 className="md:pl-20 text-4xl md:text-5xl font-bold text-white mb-6 text-center uppercase tracking-wider">
          DataNutri
        </h1>

        {/* Container Flex para Imagem e Descrição */}
        <div className="flex flex-col md:flex-row">
          {/* Imagem */}

          <div className="md:w-3/5 mx-auto p-6 flex justify-center items-start lg:flex">
            <div
              className="relative aspect-video"
              style={{
                perspective: '1000px', // Define a perspectiva para as transformações 3D, se necessário
              }}
            >
              <Image
                src="/dataNutri/cover_nutri.png"
                alt="Cover Hotel Chilli"
                layout="responsive"
                width={16}
                height={9}
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Descrição do Projeto */}
          <div className="w-full md:w-3/5 flex flex-col justify-center mt-8 md:mt-0 md:ml-10 md:pt-10">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              O <span className="text-[#4996b5] font-semibold">DataNutri</span> é uma plataforma interativa projetada para oferecer uma experiência completa na análise e visualização de informações nutricionais. Nosso objetivo é capacitar usuários com dados detalhados para escolhas alimentares mais saudáveis.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              A plataforma conta com ferramentas como tabelas dinâmicas, gráficos interativos e heatmaps que facilitam a exploração de dados nutricionais. Além disso, integra funcionalidades avançadas de pesquisa e filtros para personalizar a experiência do usuário.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              Desenvolvido com{' '}
              <span className="font-medium text-[#4996b5]">Next.js, TypeScript, Tailwind CSS e Python</span>
              , o DataNutri prioriza alto desempenho, acessibilidade e design responsivo, garantindo uma navegação intuitiva em qualquer dispositivo.
            </p>

            <div className="flex justify-center items-center mx-auto">
              <Link
                href="/dataNutri"
                className="inline-block px-6 py-3 bg-[#4996b5] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#3884a5] transition-all uppercase tracking-wide"
              >
                Ver Mais
              </Link>
            </div>
          </div>
        </div>
      </div>

      <DiagonalDivider invert />
    </section>
  );
};

export default ProjetoDataNutri;
