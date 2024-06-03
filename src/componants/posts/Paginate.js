import React, { useContext } from 'react'
import { authContext } from '../context/authentication'

const Paginate = ({postsPerPage , totalposts , paginate}) => 
{
    const {theme}=useContext(authContext)
 

    const PageNumber = []
    for(let i=1 ; i<=Math.ceil(totalposts/postsPerPage); i++)
    {
        PageNumber.push(i)
    }
  return <>
        <div className={`border border-t-0${theme==='dark'?`border-dark` : `border-white`}`}></div>
    <ul className='flex justify-center'>
        {
            PageNumber.map((number)=>
            {
                return <li key={number}className='page-item p-2 mt-4' >
                    <p onClick={()=>paginate(number)} className='page-link cursor-pointer'>
                        <span className={`px-1 rounded-full border ${theme==='dark'?`border-dark` : `border-white`} `}>{number}</span>
                    </p>
                </li>
            })
        }
    </ul>
  
  </>
}

export default Paginate
