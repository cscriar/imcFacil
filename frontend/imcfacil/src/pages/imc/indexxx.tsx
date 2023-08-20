import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import Nav from '../../components/Nav'

export default function Home() {
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
                <label className='text-verde-vs400'>Peso</label>
              </div>
              <Input placeholder='Digite seu peso...' type="number" />
            </div>
            <div className='mb-4'>
              <div className="mb-1">
                <label className='text-verde-vs400'>Altura</label>
              </div>
              <Input placeholder='Digite sua altura...' type="number" />
            </div>
            <Button type='submit' loading={false}> Calcular </Button>
            <div>
              <p> Seu IMC é: <span>{sobrepeso}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}