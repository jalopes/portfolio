// app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // Importando o componente Navbar

// Configuração da fonte Plus Jakarta Sans
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Metadata do projeto
export const metadata: Metadata = {
  title: "Meu Portfólio",
  description: "Portfólio profissional desenvolvido com Next.js",
};

// Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className="antialiased">
        {/* Incluindo a Navbar */}
        <Navbar />

        {/* Conteúdo Principal */}
        <div className="w-full mt-20">{children}</div>
      </body>
    </html>
  );
}
