import React from 'react'
import { Img } from '../ui/Img'
import { Entretenimiento } from '../layouts/Entretenimiento'

export const Inicio = () => {
  return (
    <div className='flex flex-col items-center'>
        <Img/>
        <Entretenimiento/>
    </div>
  )
}
