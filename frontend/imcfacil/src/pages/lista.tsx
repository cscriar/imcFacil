import Head from "next/head";
import Nav from "../components/Nav";
import { Button } from "../components/Button";

// Importe o JSON de usuários
import usersData from "../../src/usuarios.json";

export default function Login() {

  return (
    <div className="">
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div className="bg-verde-vs600 p-5">
        <h1 className="text-gray-300">Alunos Cadastrados</h1>
        <div className="text-gray-300">
          <ul role="list" className="divide-y divide-gray-100">
            {usersData.map((user, index) => (
              <li className="flex justify-between gap-x-6 py-5" key={index}>
                <div className="flex min-w-0 gap-x-4">
                  <div className="min-w-0 flex-auto">
                    <p className="text-sm font-semibold leading-6 text-white">Nome: {user.nome}</p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                      Email: {user.email}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                      Imc: {user.imc}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                  <Button type="submit" loading={false}>
                    Detalhe
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
