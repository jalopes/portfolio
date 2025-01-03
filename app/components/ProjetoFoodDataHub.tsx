
import React from 'react';
import Link from 'next/link';

const ProjetoFoodDataHub: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 flex flex-col">
      {/* Header com o título e logo */}
      <div className="p-6 bg-purple-500 text-white flex items-center justify-center">
        <div className="flex items-center">
          <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
            <span className="text-purple-500 font-bold text-xl">F</span>
          </div>
          <h3 className="text-2xl font-bold">FoodDataHub</h3>
        </div>
      </div>

      {/* Conteúdo do projeto */}
      <div className="p-6 flex-1">
        <p className="text-gray-700 mb-6">
          Uma plataforma centralizada para gerenciar dados e informações relacionados a alimentos. 
          Ideal para profissionais da área de nutrição e consumidores que buscam informações detalhadas e confiáveis.
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
          href="/fooddatahub"
          className="block bg-purple-500 hover:bg-purple-600 text-white text-center py-3 rounded-md transition duration-200"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjetoFoodDataHub;