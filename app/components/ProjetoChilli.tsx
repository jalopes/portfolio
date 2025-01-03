// components/ProjetoChilli.tsx
import React from 'react';
import Link from 'next/link';

const ProjetoChilli: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white shadow-lg rounded-lg overflow-hidden">
      {/* Imagem de destaque */}
      <img
        src="/chilli/logo.png" // Atualize para a URL correta da imagem
        alt="Hotel Chilli"
        className="w-48 h-48 object-contain mx-auto mt-4" // Ajuste as classes aqui
      />

      {/* Conteúdo do projeto */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">Hotel Chilli</h3>
        <p className="text-gray-300 mb-6">
          Um projeto exclusivo e temático para um público-alvo masculino, focado
          em oferecer uma experiência única. O site combina sensualidade e
          sofisticação, apresentando acomodações de luxo e serviços personalizados.
        </p>

        {/* Lista de recursos ou tecnologias */}
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Design temático e responsivo</li>
          <li>Reserva online com interface intuitiva</li>
          <li>Foco em SEO para alcance do público-alvo</li>
          <li>Integração com plataformas de pagamento</li>
        </ul>

        {/* Link para mais informações */}
        <Link
          href="/chilli"
          className="block bg-red-600 hover:bg-red-700 text-white text-center py-3 rounded-md transition duration-200"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjetoChilli;
