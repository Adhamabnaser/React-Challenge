import React, { useContext } from 'react'
import { TbFaceIdError } from "react-icons/tb";
import { authContext } from '../context/authentication';


export default function NotFound()
{
  const{theme} = useContext(authContext)
  return (
    <div className={`min-h-screen ${theme==='dark'?'bg-white' : 'bg-gray-600 text-white'} w-full flex justify-center`}>
      <div className='flex-col'>
        <div className={`${theme==='dark'?'border-black' : 'border-white'} w-[400px] h-[400px] max-sm:w-[300px] max-sm:h-[300px] max-sm:mx-auto  border rounded-full flex justify-center mt-10 relative`}>
          <p className='h-full font-extrabold absolute top-[40%] text-8xl max-sm:text-6xl'>404</p>
        </div>
        <h2 className='text-center pt-4 font-extrabold text-4xl flex'>Page Route Not Found <span className='pt-1 ps-1'><TbFaceIdError/></span></h2>
      </div>
    </div>
  )
}
