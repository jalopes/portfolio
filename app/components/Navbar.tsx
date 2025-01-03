// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-[var(--primary-color)] text-[var(--text-color)]">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo ou Título */}
        <Link href="/" className="text-2xl font-bold">
          Meu Portfólio
        </Link>

        {/* Links de Navegação */}
        <ul className="flex space-x-6">
          <li>
            <Link href="#sobre" className="hover:text-[var(--highlight-color)] transition-colors duration-200">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="#projetos" className="hover:text-[var(--highlight-color)] transition-colors duration-200">
              Projetos
            </Link>
          </li>
          <li>
            <Link href="#contato" className="hover:text-[var(--highlight-color)] transition-colors duration-200">
              Contato
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
