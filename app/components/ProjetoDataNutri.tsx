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
      <div className="container mx-auto p-6 md:p-20 flex flex-col md:flex-row" style={{ minHeight: '1200px' }}>
        {/* Imagens do Projeto com Contêiner de Perspectiva */}
        <div
          className="w-full md:w-2/5 relative aspect-video mt-48"
          style={{
            perspective: '1000px', // Define a perspectiva para as transformações 3D
          }}
        >
          {/* Imagem 3 */}

          {/* Imagem 2 */}
          <div
            className="absolute top-4 left-6"
            style={{
              transform: getTransformStyle(offsets.image2, transforms.image2, 50),
              zIndex: 20, // Z-Index médio
              backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/dataNutri/table.png" // Atualize o caminho da imagem conforme necessário
              alt="Table DataNutri"
              layout="responsive"
              width={16}
              height={9}
              className="object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-gray-800"
            />
          </div>

          {/* Imagem 1 */}
          <div
            className="absolute top-0 left-0"
            style={{
              transform: getTransformStyle(offsets.image1, transforms.image1, 100),
              zIndex: 9999, // Z-Index muito alto para garantir que esteja na frente
              backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/dataNutri/detail.png" // Atualize o caminho da imagem conforme necessário
              alt="DataNutri Home"
              layout="responsive"
              width={16}
              height={9}
              className="object-cover shadow-[0_15px_50px_rgba(0,0,0,0.7)] "
              style={{ maxHeight: '500px', maxWidth: '400px' }}
            />
          </div>
        </div>

        {/* Spacer para layout - escondido em telas pequenas */}
        <div className="hidden md:block md:w-1/5"></div>

        {/* Descrição do Projeto */}
        <div className="w-full md:w-2/5 flex flex-col justify-center mt-8 md:mt-0 md:ml-10">
          <h1 className="text-4xl font-bold text-white mb-6">DataNutri</h1>
          <p className="text-lg text-gray-300 mb-4">
            O <span className="text-green-500 font-semibold">DataNutri</span> é uma plataforma interativa projetada para oferecer uma experiência completa na análise e visualização de informações nutricionais. Nosso objetivo é capacitar usuários com dados detalhados para escolhas alimentares mais saudáveis.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            A plataforma conta com ferramentas como tabelas dinâmicas, gráficos interativos e heatmaps que facilitam a exploração de dados nutricionais. Além disso, integra funcionalidades avançadas de pesquisa e filtros para personalizar a experiência do usuário.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Desenvolvido com{' '}
            <span className="font-medium text-green-500">
              Next.js, TypeScript e Tailwind CSS
            </span>
            , o DataNutri prioriza alto desempenho, acessibilidade e design responsivo, garantindo uma navegação intuitiva em qualquer dispositivo.
          </p>



          <div className="flex justify-center items-center mx-auto">
            <Link
              href="/dataNutri"
              className="inline-block px-6 py-3 bg-[#4996b5] text-white font-medium text-lg rounded-lg shadow-md hover:bg-[#3884a5] transition-all uppercase tracking-wide mt-8"
            >
              Ver Mais
            </Link>
          </div>


        </div>
      </div>
      <DiagonalDivider invert />
    </section>
  );
};

export default ProjetoDataNutri;
