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
    // image1: { rotateX: 0, rotateY: 0, rotateZ: 0 },
    // image2: { rotateX: 40, rotateY: 0, rotateZ: 0 },
    // image3: { rotateX: 40, rotateY: 0, rotateZ: 0 },

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
      <div className="container mx-auto p-6 md:p-20 flex flex-col md:flex-row" style={{ minHeight: '1200px' }}>



        {/*         
        <div
          className="w-full md:w-2/5 relative aspect-video mt-48"
          style={{
            perspective: '1000px', // Define a perspectiva para as transformações 3D
          }}
        >
          <div
            className="absolute top-8 left-12"
            style={{
              transform: getTransformStyle(offsets.image3, transforms.image3, 0),
              zIndex: 10, // Z-Index baixo
              backfaceVisibility: 'hidden', // Oculta a face traseira
              transformOrigin: 'center center', // Define o ponto de origem da transformação
            }}
          >
            <Image
              src="/chilli/admin.jpg"
              alt="Admin Hotel Chilli"
              layout="responsive"
              width={16}
              height={9}
              className="object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-gray-800"
            />
          </div>


          <div
            className="absolute top-4 left-6"
            style={{
              transform: getTransformStyle(offsets.image2, transforms.image2, 50),
              zIndex: 0, // Z-Index médio
              backfaceVisibility: 'hidden',
              transformOrigin: 'center center',
            }}
          >
            <Image
              src="/chilli/reservas.png"
              alt="Reservas Hotel Chilli"
              layout="responsive"
              width={16}
              height={9}
              className="object-cover shadow-[0_10px_30px_rgba(0,0,0,0.5)] border-gray-800"
            />
          </div>


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
              src="/chilli/home.png"
              alt="Hotel Chilli"
              layout="responsive"
              width={16}
              height={9}
              className="object-cover shadow-[0_15px_50px_rgba(0,0,0,0.7)] border border-gray-800"
            />
          </div>
        </div>
 */}




        <div
          className="container mx-auto p-6 md:p-20 flex justify-center items-center"
          style={{ minHeight: '1200px' }}
        >
          {/* Imagem única */}
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



        {/* Spacer para layout - escondido em telas pequenas */}
        {/* <div className="hidden md:block md:w-1/5"></div> */}

        {/* Descrição do Projeto */}
        <div className="w-full md:w-3/5 flex flex-col justify-center mt-8 md:mt-0 md:ml-10">
          <h1 className="text-4xl font-bold text-white mb-6">Hotel Chilli</h1>
          <p className="text-lg text-gray-300 mb-4">
            O <span className="text-red-500 font-semibold">Hotel Chilli</span> é um projeto temático desenvolvido para oferecer uma experiência completa de hospedagem online. O site inclui uma área dedicada para reservas, com integração direta a plataformas de pagamento seguras e um sistema de gerenciamento eficiente.
          </p>
          <p className="text-lg text-gray-300 mb-4">
            O projeto também conta com uma página exclusiva para administradores, onde é possível gerenciar reservas, verificar disponibilidade e acessar relatórios detalhados.
          </p>
          <p className="text-lg text-gray-300 mb-6">
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
      <DiagonalDivider invert />
    </section>
  );
};

export default ProjetoChilli;
