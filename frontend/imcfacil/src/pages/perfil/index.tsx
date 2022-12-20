import React from 'react';
import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'
import Image from 'next/image'
import fotoPerfil from "../../../public/perfil.png"
import dynamic from 'next/dynamic';
import ApexCharts from 'apexcharts'
import Nav from '../../components/Nav';

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

const OptionsChartLine = {
  colors: ['#01372F'],
  tooltip: {
    enabled: true,
  },
  chart: {
    foreColor: '#01372F',
  }, grid: {
    borderColor: '#01372F'
  }
}

const SeriesChartLine = [{
  name: 'Net Profit',
  data: [44, 55, 57, 32, 61, 58, 65, 60, 66]
}]

export default function Home() {
  return (
    
    <div>
      <Nav />
      <Head>
        <title>Imc Fácil</title>
      </Head>
      <div>
        <div className='flex mt-4 ml-5'>
          <div className=''>
            <Image className='bg-verde-vs400 w-16 rounded-full' src={fotoPerfil} />
          </div>
          <div className='ml-4'>
            <h1 className='text-verde-vs400 text-2xl'>Fulano de Tals</h1>
            <p className='text-verde-vs400 text-2xl'>Status</p>
          </div>
        </div>
        <div className={styles.container}>
          <div className="text-orange-600 bg-verde-vs400 rounded-md p-4">
            <Chart options={OptionsChartLine} series={SeriesChartLine} />
          </div>

          <div className='mt-5'>
            <div className='flex items-center p-2'>
              <Image className='w-8 bg-white rounded-full' src={fotoPerfil} />
              <h1 className='ml-3 text-verde-vs400 font-semibold'>Nome do Professor</h1>
            </div>
            <p className='text-white ml-11'>Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis!Paisi</p>
          </div>
        </div>
      </div>
    </div>
  )
}
