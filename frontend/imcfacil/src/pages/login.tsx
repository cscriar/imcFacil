import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Nav from '../components/Nav';
import { Button } from '../components/Button';
import { useUser } from '../contexts/UserContext';


export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null); // Estado para armazenar mensagem de erro
  const router = useRouter(); // Instancie o useRouter

  const { setUserEmail } = useUser();

  const handleLogin = async (event) => {
    event.preventDefault();

    const credenciais = {
      email,
      senha,
    };

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credenciais),
      });

      if (response.ok) {
        console.log('Login bem-sucedido!');
        // Redirecionar para a página de perfil
        setUserEmail(email); // Defina o email do usuário
        router.push('/perfil'); // Substitua '/perfil' pela rota da página de perfil
      } else {
        console.error('Credenciais inválidas.');
        setErro('Credenciais inválidas.'); // Defina a mensagem de erro
      }
    } catch (error) {
      console.error('Erro:', error);
      setErro('Erro ao fazer login.'); // Defina a mensagem de erro
    }
  };

  return (
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div className="bg-verde-vs600 p-5">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-300">
              Login
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-300">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-300">
                    Senha
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <Button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-verde-vs400 px-3 py-1.5 text-sm font-semibold leading-6 text-verde-vs600 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Entrar
                </Button>
              </div>
            </form>
            {/* Mostrar mensagem de erro, se houver */}
            {erro && <p className="mt-2 text-center text-red-500">{erro}</p>}
            <p className="mt-10 text-center text-sm text-gray-500">
              <a href="./cadastro" className="font-semibold leading-6 text-white hover:text-indigo-500">
                Ainda não tem cadastro?
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
