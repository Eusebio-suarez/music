import React from 'react'
import guitarImg from "../../assets/raptis.png"

export const Guitar = () => {
  return (
    <div
      className='w-full flex relative justify-end items-center gap-10 text-white bg-cover bg-center min-h-[190px]'
      style={{ backgroundImage: `url(${guitarImg})` }}
    >
      <div className='flex gap-1.5 flex-col absolute w-[150px] right-4'>
        <div className='flex flex-col gap-2'>
          <div>
            <p className='text-[19px] font-semibold'>SONDS VIBES WITH COLORS</p>
          </div>
          <div>
            <p className='text-[8px] font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quos officia eius in nam rem mollitia earum eligendi molestias quas, voluptas excepturi aliquid delectus dolore saepe ratione sunt ipsam non?
            </p>
          </div>
        </div>
        <button className='bg-[#f94e60] hover:bg-[#e61837] hover:scale-[103%] transition duration-300 rounded-2xl mt-1 w-[80px] py-1.5 text-[8px] text-white'>
          GO THESE
        </button>
      </div>
    </div>
  )
}
