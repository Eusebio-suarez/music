import React from 'react'
import palmer from "../../assets/palmer.png"
export const Seccion = ({titulo="MUSIC." ,subTitulo="FUN.",subTitulo2="ENTERTAINMENT.",direccion="row",imgSrc=palmer}) => {
  return (
    <div className='w-full flex p-6 justify-center gap-10' style={{flexDirection:direccion}}>
        <div className='flex gap-1.5 flex-col'>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-[19px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#fd4b57] to[#76204f] via-purple-500'>{titulo}</p>
                <p className='text-[19PX] font-semibold'>{subTitulo}</p>
                <p className='text-[19px] font-semibold'>{subTitulo2}</p>
              </div>
              <div>
                <p className='text-[7px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quos officia eius in nam rem mollitia earum eligendi molestias quas, voluptas excepturi aliquid delectus dolore saepe ratione sunt ipsam non?</p>
              </div>
            </div>
            <button className='bg-[#f94e60] hover:bg-[#e61837] hover:scale-[103%] transition duration-300 rounded-2xl mt-2 w-[80px] py-1.5 text-[7px] text-white'>GO THESE</button>
        </div>
        <div className=''>
          <img className='h-full' src={imgSrc} alt="" />
        </div>
    </div>
  )
}