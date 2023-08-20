import Head from "next/head";
import Nav from "../components/Nav";
import { Button } from "../components/Button";


export default function Login() {
  return (
    <div className="">
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div className="bg-verde-vs600 p-5 ">
        <h1 className='text-gray-300'>Alunos Cadastrado</h1>
        <div className="text-gray-300">
          <ul role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-white">Francisca Santos</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-300">fran@mail.com</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <Button type='submit' loading={false}>Detalhe</Button>
              </div>
            </li>
            <li className="flex justify-between gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-white">Francisca Santos</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-300">fran@mail.com</p>
                </div>
              </div>
              <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
                <Button type='submit' loading={false}>Detalhe</Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}