import React, { useContext } from 'react'
import {authContext} from '../context/authentication'
export default function Forgetpass() 
{
  const {theme} = useContext(authContext)

  return (
    <div className={`border w-[80%] mx-auto max-sm:w-[90%] h-[45vh] mt-10`}>
      <div className={`p-12`}>
        <h2 className='text-center font-mono'>Enter E-Mail TO Help Us TO Mange Your Problem</h2>
        <div className='w-full flex justify-center pt-10'>
          <input className={` border w-[60%] max-sm:w-[80%] h-7 ps-3 rounded ${theme==='dark'?``:`border-black`}`} type="text" placeholder='Enter Your E-Mail'/>
        </div>
          <div className='flex justify-center'>
          <button className={`px-5 rounded-full h-9 pt-1 mt-10 flex justify-center
           border ${theme==='dark'?`border-black hover:bg-zinc-900 hover:text-white`:` border-black bg-black text-white hover:bg-white hover:text-zinc-950`}`}>
            Confirm
          </button>
          </div>
    </div>
    </div>
  )
}
