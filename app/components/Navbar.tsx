// app/components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white uppercase tracking-wider font-bold">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">

        <Link href="/" className="text-2xl font-bold text-white">
          Meu Portfólio
        </Link>

        {/* Links de Navegação */}
        <ul className="flex space-x-6">
          <li>
            <Link href="/chilli" className="hover:text-[var(--highlight-color)] transition-colors duration-200">
              Chili
            </Link>
          </li>
          <li>
            <Link href="/dataNutri" className="hover:text-[var(--highlight-color)] transition-colors duration-200">
              DataNutri
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
