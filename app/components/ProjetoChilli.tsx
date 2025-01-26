import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import DiagonalDivider from './DiagonalDivider';

interface Transform {
  rotateX?: number; // Rotação em graus no eixo X
  rotateY?: number; // Rotação em graus no eixo Y
  rotateZ?: number; // Rotação em graus no eixo Z
}

interface Offset {
  x: number; // Deslocamento horizontal em pixels
  y: number; // Deslocamento vertical em pixels
}

interface ProjetoChilliProps {
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

const ProjetoChilli: React.FC<ProjetoChilliProps> = ({
  offsets = {
    image1: { x: 0, y: 0 },
    image2: { x: 50, y: 450 },
    image3: { x: -400, y: 100 },
  },
  transforms = {
    image1: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    image2: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    image3: { rotateX: 0, rotateY: 0, rotateZ: 0 },
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
    <section className="bg-gray-800">
      <div className="md:container mx-auto p-6 md:p-10">

        <h1 className="md:pl-20 text-4xl md:text-5xl font-bold text-white mb-6 text-center uppercase tracking-wider">
          Hotel Chilli
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
                src="/chilli/cover.png"
                alt="Cover Hotel Chilli"
                layout="responsive"
                width={16}
                height={9}
                className="object-cover"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 flex flex-col justify-center mt-8 md:mt-0 md:ml-10 md:pt-10">
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              O <span className="text-red-500 font-semibold">Hotel Chilli</span> é um projeto temático desenvolvido para oferecer uma experiência completa de hospedagem online. O site inclui uma área dedicada para reservas, com integração direta a plataformas de pagamento seguras e um sistema de gerenciamento eficiente.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-4">
              O projeto também conta com uma página exclusiva para administradores, onde é possível gerenciar reservas, verificar disponibilidade e acessar relatórios detalhados.
            </p>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              O site foi desenvolvido utilizando tecnologias modernas como{' '}
              <span className="font-medium text-red-500">
                Next.js, TypeScript e Tailwind CSS
              </span>
              , priorizando segurança, desempenho e usabilidade. O layout responsivo garante uma navegação eficiente em diversos dispositivos.
            </p>

            <div className="flex justify-center items-center mx-auto">
              <Link
                href="/chilli"
                className="inline-block px-6 py-3 bg-red-500 text-white font-medium text-lg rounded-lg shadow-md hover:bg-red-600 transition-all uppercase tracking-wide"
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

export default ProjetoChilli;
