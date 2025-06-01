import React from 'react'
import guitarImg from "../../assets/raptis.png"

export const Guitar = () => {
  return (
    <div
      className='w-full flex relative justify-end items-center gap-10 text-white bg-cover bg-center min-h-[230px] min-[600px]:h-[300px] lg:h-[450px]'
      style={{ backgroundImage: `url(${guitarImg})` }}
    >
      <div className='flex gap-1.5 flex-col absolute w-[200px] min-[570px]:w-[300px] min-[700px]:w-[350px] min-[900px]:w-[400px]  right-4'>
        <div className='flex flex-col gap-2'>
          <div>
            <p className='text-[19px] font-semibold'>SONDS VIBES WITH COLORS</p>
          </div>
          <div>
            <p className='text-[11px] min-[570px]:text-[14px] min-[700px]:text-[15px] min-[800px]:text-[16px] min-[900px]:text-[16.5px] font-semibold'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quos officia eius in nam rem mollitia earum eligendi molestias quas, voluptas excepturi aliquid delectus dolore saepe ratione sunt ipsam non?
            </p>
          </div>
        </div>
        <button className='bg-[#f94e60] hover:bg-[#e61837] hover:scale-[103%] transition duration-300 rounded-2xl mt-1 w-[80px] min-[600px]:w-[100px] min-[700px]:w-[110px]  min-[700px]:py-2.5 min-[570px]:mt-2.5 py-1.5 text-[8px] min-[600px]:text-[9px] min-[700px]:text-[10px] text-white'>
          GO THESE
        </button>
      </div>
    </div>
  )
}
