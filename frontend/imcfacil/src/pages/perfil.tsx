
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Nav from '../components/Nav';
import Image from 'next/image'
import { useUser } from '../contexts/UserContext';

export default function Home() {
  const { userEmail } = useUser();
  const [nome, setNome] = useState(null);

  useEffect(() => {
    async function fetchUserData() {
      if (userEmail) {
        try {
          const response = await fetch(`/api/usuario?email=${userEmail}`);
          const data = await response.json();
          setNome(data.nome);
        } catch (error) {
          console.error('Erro ao buscar o nome do usuário:', error);
        }
      }
    }

    fetchUserData();
  }, [userEmail]);

  return (
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div>
        <div className="p-5">
          <h1 className="text-2xl font-semibold text-gray-300">Perfil do Usuário</h1>
          {userEmail ? (
            <div className='text-gray-200'>
              <p>Nome: {nome || 'Carregando...'}</p>
              <p>Email: {userEmail}</p>
            </div>
          ) : (
            <p>Você não está logado.</p>
          )}
        </div>
      </div>
    </div>
  )
}
