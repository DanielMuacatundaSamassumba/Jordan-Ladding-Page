import React from 'react'
import Header from './components/Header'
import Banner from './components/Banner/Banner'
import Card from './components/Card'
import ImageProduct from "./assets/air-jordan-1-mid-dutch-green-1-400.svg"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function App() {

  return (
    <div>
      <Header />
      <Banner />
      <div className='flex flex-col justify-center  items-center mt-14 '>
        <h1 className='font-semibold  text-[20px] font-Archivo xl:text-[32px]'>Os melhores em só lugar</h1>
        <p className='font-Archivo  text-center w-11/12 xl:w-1/3'>
          A marca Jordan na JordanShoes é a escolha certa para os
          amantes de sneakers que buscam estilo e conforto.
        </p>
      </div>
      <div className='container_card  group flex  justify-center flex-wrap md:flex md:flex-row '>

        <div className='w-[336px]   group-hover:border group-hover:rounded-sm group-hover:border-zinc-300'>
          <Card
            name='Tênis Air Jordan'
            model='Air Jordan 1 Mid Dutch Green'
            price='R$ 1.199,99'
            image={ImageProduct}
          />
        </div>
        <div className='w-[336px]'>
          <Card
            name='Tênis Air Jordan'
            model='Air Jordan 1 Mid Dutch Green'
            price='R$ 1.199,99'
            image={ImageProduct}
          />
        </div>
        <div className='w-[336px]'>
          <Card
            name='Tênis Air Jordan'
            model='Air Jordan 1 Mid Dutch Green'
            price='R$ 1.199,99'
            image={ImageProduct}
          />
        </div>
        <div className='w-[336px]'>
          <Card
            name='Tênis Air Jordan'
            model='Air Jordan 1 Mid Dutch Green'
            price='R$ 1.199,99'
            image={ImageProduct}
          />
        </div>
        <div className='w-[336px]'>
          <Card
            name='Tênis Air Jordan'
            model='Air Jordan 1 Mid Dutch Green'
            price='R$ 1.199,99'
            image={ImageProduct}
          />
        </div>

      </div>
    </div>
  )
}
