import React, { useState } from 'react';
import { useRouter } from 'next/router'; 
import Head from 'next/head';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import Nav from '../components/Nav';
import styles from '../../styles/Home.module.scss';

export default function Home() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const router = useRouter(); 

  const handleCadastro = async (e) => {
    e.preventDefault();

    const novoUsuario = {
      nome,
      email,
      senha,
    };

    try {
      const response = await fetch('/api/cadastrarUsuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoUsuario),
      });

      if (response.ok) {
        alert('Usuário cadastrado com sucesso!')
        router.push('/perfil');
      } else {
        console.error('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  return (
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div>
        <h1 className='text-verde-vs400 p-4 text-center text-2xl uppercase'>Cadastro</h1>
        <div className={styles.container}>
          <div>
            <form onSubmit={handleCadastro}>
              <div className='mb-4'>
                <label className='text-verde-vs400'>Nome</label>
                <Input
                  placeholder='Digite seu nome...'
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='text-verde-vs400'>E-mail</label>
                <Input
                  placeholder='Digite seu email...'
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='mb-4'>
                <label className='text-verde-vs400'>Senha</label>
                <Input
                  placeholder='Digite sua senha...'
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>
              <Button type='submit' loading={false}>Cadastrar</Button>
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              <a href="./login" className="font-semibold leading-6 text-white hover:text-indigo-500">
                Já tenho cadastro
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
