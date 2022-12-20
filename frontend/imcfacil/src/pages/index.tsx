import Head from 'next/head'
import styles from '../../styles/Home.module.scss'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import Nav from '../components/Nav'


export default function Home() {
  return (
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div>
        <h1 className='text-verde-vs400 p-4 text-center text-2xl uppercase'>Login</h1>
        <div className={styles.container}>
          <div>
            <form>
              <div className='mb-4'>
                <div className='mb-4'>
                  <label className='text-verde-vs400'>E-mail</label>
                </div>
                <Input placeholder='Digite seu email...' type="text" />
              </div>
              <div className='mb-4'>
                <div className='mb-4'>
                  <label className='text-verde-vs400'>Senha</label>
                </div>
                <Input placeholder='Digite sua senha...' type="password" />
              </div>
                <Button type='submit' loading={false}> Entrar </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
