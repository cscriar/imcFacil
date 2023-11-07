import React, { useState } from 'react';
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import Head from 'next/head'
import Nav from '../../components/Nav'
import styles from '../../../styles/Home.module.scss'

export default function IMCCalculator() {
    const [peso, setPeso] = useState<string>('');
    const [altura, setAltura] = useState<string>('');
    const [result, setResult] = useState<number | null>(null);
    const [obesityLevel, setObesityLevel] = useState<string>('');
    
    function getObesityLevel(imc) {
      if (imc < 18.5) {
        return 'Abaixo do peso';
      } else if (imc < 24.9) {
        return 'Peso normal';
      } else if (imc < 29.9) {
        return 'Sobrepeso';
      } else if (imc < 34.9) {
        return 'Obesidade grau 1';
      } else if (imc < 39.9) {
        return 'Obesidade grau 2';
      } else {
        return 'Obesidade grau 3';
      }
    }
    
    const calculateIMC = () => {
      const heightWithDot = altura.replace(',', '.');
      const parsedPeso = parseFloat(peso);
      const parsedAltura = parseFloat(heightWithDot);
  
      if (!isNaN(parsedPeso) && !isNaN(parsedAltura) && parsedAltura > 0) {
        const imc = parsedPeso / (parsedAltura * parsedAltura);
        setResult(Number(imc.toFixed(2)));
        setObesityLevel(getObesityLevel(imc)); 

        const imcData = {
        
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
            <form>
              <div className='mb-4'>
                <div className="mb-1">
                  <label className='pb-5 text-2xl text-verde-vs400'>Peso (kg)</label>
                  <Input type="text" value={peso} onChange={(e) => setPeso(e.target.value)} />
                </div>
              </div>
              <div className='mb-4'>
                <div className="mb-1">
                  <label className='pb-5 text-2xl text-verde-vs400'>Altura (m)</label>
                  <Input type="text" value={altura} onChange={(e) => setAltura(e.target.value)} />
                </div>
              </div>
              <Button onClick={calculateIMC}>Calcular</Button>
              <div className='p-2 text-verde-vs400'> 
                <div> <span className='text-verde-vs400'>Seu IMC é:</span> <span className='text-yellow-50'>{result}</span></div>
                <div><span className='text-verde-vs400'>Grau de Obesidade: </span><span className='text-yellow-50'>{obesityLevel}</span> </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}