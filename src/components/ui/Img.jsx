import React from 'react'
import img from "../../assets/angel.jpg"
export const Img = () => {
  return (
    <div className='relative flex justify-center items-center'>
        <img src={img} alt="" />
        <p className='absolute text-white text-5xl'>Music</p>
    </div>
  ) 
}
