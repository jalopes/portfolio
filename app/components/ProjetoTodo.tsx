import React from 'react';
import Link from 'next/link';

const ProjetoToDo: React.FC = () => {
  return (
    <div className="bg-gray-100 text-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-300 flex flex-col">
      {/* Título do projeto */}
      <div className="p-6 bg-blue-500 text-white text-center">
        <h3 className="text-2xl font-bold">Gerenciador de Tarefas</h3>
      </div>

      {/* Conteúdo do projeto */}
      <div className="p-6 flex-1">
        <p className="text-gray-700 mb-6">
          Um aplicativo para organização de tarefas, permitindo categorização, 
          acompanhamento de recorrências e separação entre pendentes e concluídas. 
          Foco em uma experiência minimalista e prática para usuários multitarefa.
        </p>

        {/* Lista de recursos ou tecnologias */}
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>Filtros para tarefas recorrentes e não recorrentes</li>
          <li>Marcar tarefas como concluídas</li>
          <li>Interface responsiva e intuitiva</li>
          <li>Suporte para anotações em cada tarefa</li>
        </ul>
      </div>

      {/* Link para mais informações */}
      <div className="p-6 bg-gray-100">
        <Link
          href="/todo"
          className="block bg-blue-500 hover:bg-blue-600 text-white text-center py-3 rounded-md transition duration-200"
        >
          Ver mais
        </Link>
      </div>
    </div>
  );
};

export default ProjetoToDo;
