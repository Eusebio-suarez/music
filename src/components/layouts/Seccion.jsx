import React from 'react'
import palmer from "../../assets/palmer.png"

export const Seccion = ({
  titulo = "MUSIC.",
  subTitulo = "FUN.",
  subTitulo2 = "ENTERTAINMENT.",
  direccion = "row",
  imgSrc = palmer
}) => {

    const directionClass = direccion === "row" 
    ? "min-[550px]:flex-row" 
    : "min-[550px]:flex-row-reverse";
  return (
    <div className={`w-full h-full p-6 justify-center flex items-center gap-4 flex-col-reverse shadow-xl hover:scale-103 transition duration-500 ${directionClass}`}>

      <div className='flex gap-1 flex-col lg:items-center max-w-xl'>
        <div className='flex flex-col gap-2 justify-center'>
          <div>
            <p className='text-[16px] min-[570px]:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#fd4b57] to-[#76204f] via-purple-500'>{titulo}</p>
            <p className='text-[16px] min-[570px]:text-2xl font-semibold'>{subTitulo2}</p>
            <p className='text-[16px] min-[570px]:text-2xl font-semibold'>{subTitulo}</p>
          </div>
          <div>
            <p className='text-[11px] min-[570px]:text-[13px] font-semibold min-[700px]:text-[15px] min-[800px]:text-[16px] min-[900px]:text-[18px]'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quos officia eius in nam rem mollitia earum eligendi molestias quas, voluptas excepturi aliquid delectus dolore saepe ratione sunt ipsam non?
            </p>
          </div>
        </div>
        <button className='bg-[#f94e60] hover:bg-[#e61837] hover:scale-[103%] transition duration-300 rounded-2xl mt-1 w-[80px] min-[600px]:w-[100px] min-[700px]:w-[110px]  min-[700px]:py-2.5 min-[570px]:mt-2.5 py-1.5 text-[8px] min-[600px]:text-[9px] min-[700px]:text-[10px] text-white'>
          GO THESE
        </button>
      </div>
      <div className='w-full flex justify-center'>
        <img
          className='w-[80%] max-w-[220px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] object-cover rounded-xl'
          src={imgSrc}
          alt="imagen"
        />
      </div>
    </div>
  );
}
