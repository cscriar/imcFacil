// IMCCalculator.js (ou IMCCalculator.tsx para TypeScript)

import React, { useState } from 'react';

const IMCCalculator = ({ userEmail, updateIMC }) => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [imc, setIMC] = useState(null);
  const [weightCategory, setWeightCategory] = useState('');

  const calculateIMC = () => {
    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height) / 100; // Convert height to meters

    if (!isNaN(numericWeight) && !isNaN(numericHeight) && numericHeight > 0) {
      const calculatedIMC = numericWeight / (numericHeight * numericHeight);
      setIMC(calculatedIMC.toFixed(2));

      let category = '';
      if (calculatedIMC < 18.5) {
        category = 'Abaixo do Peso';
      } else if (calculatedIMC >= 18.5 && calculatedIMC < 24.9) {
        category = 'Peso Normal';
      } else if (calculatedIMC >= 25 && calculatedIMC < 29.9) {
        category = 'Sobrepeso';
      } else {
        category = 'Obesidade';
      }

      setWeightCategory(category);

      // Atualize o valor do IMC no perfil do usuário
      updateIMC(userEmail, calculatedIMC);
    } else {
      setIMC(null);
      setWeightCategory('');
    }
  };

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <label>Peso (kg):</label>
      <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      <label>Altura (cm):</label>
      <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      <button onClick={calculateIMC}>Calcular</button>
      {imc !== null && (
        <div>
          <p>Seu IMC é: {imc}</p>
          <p>Categoria de Peso: {weightCategory}</p>
        </div>
      )}
    </div>
  );
};

export default IMCCalculator;
