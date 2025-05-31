import React from 'react'
import { Img } from '../ui/Img'
import singer from "../../assets/wesley.png"
import { Seccion } from '../layouts/Seccion'
import { Guitar } from '../layouts/Guitar'

export const Inicio = () => {
  return (
    <div className='flex flex-col justify-center items-center pb-60'>
        <Img/>
        <Seccion/>
        <Seccion direccion='row-reverse' titulo='ROUDER.' subTitulo='LIKE IT WAS NEVER BEEN BETTER.' subTitulo2={null} imgSrc={singer}/>
        <Guitar/>
    </div>
  )
}
