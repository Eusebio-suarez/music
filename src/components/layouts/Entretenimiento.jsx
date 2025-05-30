import React from 'react'
import palmer from "../../assets/palmer.png"
export const Entretenimiento = () => {
  return (
    <div className='w-full shadow-xl flex p-6 justify-center gap-10 '>
        <div className='flex gap-1.5 flex-col'>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='text-[19px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#fd4b57] to[#76204f] via-purple-500'>MUSIC.</p>
                <p className='text-[19PX] font-semibold'>FUN.</p>
                <p className='text-[19px] font-semibold'>ENTERTAINMENT.</p>
              </div>
              <div>
                <p className='text-[7px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quos officia eius in nam rem mollitia earum eligendi molestias quas, voluptas excepturi aliquid delectus dolore saepe ratione sunt ipsam non?</p>
              </div>
            </div>
            <button className='bg-[#f94e60] rounded-2xl mt-2 w-[80px] py-1.5 text-[7px] text-white'>GO THESE</button>
        </div>
        <div className=''>
          <img className='h-full' src={palmer} alt="" />
        </div>
    </div>
  )
}
