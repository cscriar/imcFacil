import React, { useState } from 'react';
import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import Nav from '../../components/Nav'

function IMCCalculator() {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  const [obesityLevel, setObesityLevel] = useState<string>('');

  const calculateIMC = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (!isNaN(parsedWeight) && !isNaN(parsedHeight) && parsedHeight > 0) {
      const imc = parsedWeight / (parsedHeight * parsedHeight);
      setResult(Number(imc.toFixed(2)));

      if (imc < 18.5) {
        setObesityLevel('Abaixo do peso');
      } else if (imc < 24.9) {
        setObesityLevel('Peso normal');
      } else if (imc < 29.9) {
        setObesityLevel('Sobrepeso');
      } else if (imc < 34.9) {
        setObesityLevel('Obesidade grau 1');
      } else if (imc < 39.9) {
        setObesityLevel('Obesidade grau 2');
      } else {
        setObesityLevel('Obesidade grau 3');
      }
    } else {
      setResult(null);
      setObesityLevel('');
    }
  };

  return (
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div>
        <h1 className='text-verde-vs400 p-4 text-center text-2xl uppercase'>calcular IMC</h1>
        <div className={styles.container}>
          <div>
            <div className='mb-4'>
              <div className="mb-1">
                <label>Peso (kg):</label>
                <Input type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
            </div>
            <div className='mb-4'>
              <div className="mb-1">
                <label>Altura (m):</label>
                <Input type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
            </div>
            <Button onClick={calculateIMC}>Calcular</Button>
            {result && <div>Seu IMC é: {result}</div>}
            {obesityLevel && <div>Grau de Obesidade: {obesityLevel}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default IMCCalculator;