// components/DiagonalDivider.tsx
import React from 'react';

interface DiagonalDividerProps {
  invert?: boolean; // Inverte a direção da divisória se true
  angle?: number;   // Ângulo em graus, padrão 10
}

const DiagonalDivider: React.FC<DiagonalDividerProps> = ({ invert = false, angle = 40 }) => {
  const width = 100; // Largura do viewBox em unidades SVG
  const height = Math.tan((angle * Math.PI) / 180) * width; // Calcula a altura com base no ângulo

  // Define os pontos do polígono com base na prop 'invert'
  const points = invert
    ? `0,${height.toFixed(2)} ${width},0 ${width},${height.toFixed(2)}`
    : `0,0 ${width},0 ${width},${height.toFixed(2)}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height.toFixed(2)}`} // Define a área de visualização do SVG
      preserveAspectRatio="none" // Mantém a proporção ao redimensionar
      className="w-full" // Largura completa do contêiner pai
      style={{ display: 'block', height: `${height}px` }} // Define a altura com base no cálculo
    >
      {/* Desenha o polígono com cor sólida gray-500 */}
      {/* <polygon points={points} fill="#6B7280" /> */}
      <polygon points={points} fill="#1F2937" /> 
    </svg>
  );
};

export default DiagonalDivider;
