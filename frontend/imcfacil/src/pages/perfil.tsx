
import React, { useEffect, useState } from 'react';
import Head from 'next/head'
import Nav from '../components/Nav';
import { useUser } from '../contexts/UserContext';

export default function Perfil() {
  const { userEmail } = useUser(); // Use o contexto para pegar o email do usuário logado
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
      <div className='container w-4/5 md:mx-auto p-5'>
        <div className="p-5">
          <h1 className="text-2xl font-semibold text-gray-300">Perfil do Usuário</h1>
          {userEmail ? (
            <div className='text-gray-200'>
              <p>Nome: {nome || 'Carregando...'}</p>
              <p>Email: {userEmail}</p>

              <div className=''>
                <div className="mt-4">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-lg">
                    Calcule o seu indice de massa corporal
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-300">
                    Insira seu peso e altura para saber como anda a sua saúde corporal
                  </p>
                  <div className="mt-10 flex gap-x-6">
                    <div className="p-5">
                      <h1 className="text-2xl font-semibold">Perfil do Usuário</h1>
                      {/* <CalculadoraIMC userEmail="usuario1@example.com" updateIMC={updateIMC} /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <p>Você não está logado.</p>
              <p>Para acessar seu perfil clique em 
                <a href='/' className='text-verde-vs400'>Entrar</a> ou 
                <a href='/cadastro' className='text-verde-vs400'> Cadastrar</a>
              </p>
            </>
          )}
        </div>

      </div>
    </div>
  )
}
