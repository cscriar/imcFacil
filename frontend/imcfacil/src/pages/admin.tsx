// Página onde deseja exibir o componente de cálculo de IMC e a lista de IMC (por exemplo, perfil.tsx)

import React, { useState } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import IMCList from '../components/IMCList'; // Import o componente
import { usuarios } from './usuarios.json'; // Importe os dados dos usuários
import IMCCalculator from '../components/IMCCalculator'; // Import o componente

export default function Perfil() {
  const [usuariosState, setUsuariosState] = useState(usuarios);

  // Função para atualizar o IMC do usuário
  const updateIMC = (userEmail, newIMC) => {
    const updatedUsuarios = usuariosState.map((usuario) =>
      usuario.email === userEmail ? { ...usuario, imc: newIMC } : usuario
    );
    setUsuariosState(updatedUsuarios);
  };

  return (
    <div>
      <Nav />
      <Head>
        <title>Perfil do Usuário</title>
      </Head>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">Perfil do Usuário</h1>
        {/* Adicione o componente de cálculo de IMC */}
        <IMCCalculator userEmail="usuario1@example.com" updateIMC={updateIMC} />

        {/* Adicione o componente de listagem de IMC */}
        <IMCList usuarios={usuariosState} />
      </div>
    </div>
  );
}
