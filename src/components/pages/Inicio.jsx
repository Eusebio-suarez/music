import React from 'react'
import { Img } from '../ui/Img'
import singer from "../../assets/wesley.png"
import { Seccion } from '../layouts/Seccion'
import { Guitar } from '../layouts/Guitar'
import { Footer } from '../layouts/Footer'

export const Inicio = () => {
  return (
    <div className='flex flex-col justify-center items-center relative'>
        <Img/>
        <div className='flex flex-col justify-center items-center gap-4 m-8'>
          <Seccion/>
          <Seccion direccion='row-reverse' titulo='ROUDER.' subTitulo='LIKE IT WAS NEVER BEEN BETTER.' subTitulo2={null} imgSrc={singer}/>
        </div>
        <Guitar/>
        <Footer/>
    </div>
  )
}
