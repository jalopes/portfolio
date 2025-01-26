// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[var(--primary-color)] text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} DataNutri. Todos os direitos reservados.
        </p>
        <p className="mt-2">
          Contato:{" "}
          <a
            href="mailto:andradelopesjordan@gmail.com"
            className="underline font-semibold"
          >
            andradelopesjordan@gmail.com
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/jordan-andrade-lopez/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
