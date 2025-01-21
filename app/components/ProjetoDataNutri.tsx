// components/ProjetoDataNutri.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ProjetoDataNutri: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 rounded-lg overflow-hidden border border-gray-300 flex flex-col">
      {/* Header com o título e logo */}
      <div
        className="p-6 text-white flex items-center justify-center"
        style={{ backgroundColor: '#4996B6' }}
      >
        <div className="flex items-center">
          {/* Logo sem fundo arredondado */}
          <Image src="/dataNutri/logo.svg" alt="DataNutri Logo" width={48} height={48} className="mr-4" />
          <h3 className="text-2xl font-bold">DataNutri</h3>
        </div>
      </div>

      {/* Conteúdo do projeto */}
      <div className="p-6 flex-1">
        <p className="text-gray-700 mb-6">
          Uma plataforma centralizada para gerenciar dados e informações relacionados a alimentos.
          Ideal para profissionais da área de nutrição e consumidores que buscam informações detalhadas e
          confiáveis.
        </p>

        {/* Lista de recursos ou tecnologias */}
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Catálogo detalhado de alimentos</li>
          <li>Análise nutricional personalizada</li>
          <li>Integração com aplicativos de saúde</li>
          <li>Interface moderna e responsiva</li>
        </ul>
      </div>

      {/* Link para mais informações */}
      <div className="p-6 bg-gray-100">
        <Link
          href="/dataNutri" // Atualize a rota conforme necessário
          className="block text-white text-center py-3 rounded-md transition duration-200 hover:bg-[#006C81]"
          style={{ backgroundColor: '#4996B6' }}
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjetoDataNutri;
