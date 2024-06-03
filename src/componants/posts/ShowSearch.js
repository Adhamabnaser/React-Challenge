import React, { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { CgMoreO } from 'react-icons/cg';
import { GrArticle } from 'react-icons/gr';
import { PiSubtitlesThin } from 'react-icons/pi';
import { authContext } from '../context/authentication';
import { useNavigate } from 'react-router-dom';
import noPost from '../image/nopost.webp'

const ShowSearch = ({filterdSearch , loading }) => 
{
    const{theme} = useContext(authContext)
    const navigate = useNavigate()
    
    if (loading) return <div className='loading-screen'>Loading...</div>

  return <>
      <div>
        <h1>Total Results Of Search Is  {filterdSearch.length} Post.</h1>
      </div>
{
    filterdSearch.length ===0 ? 
                <><div className='flex flex-col'>
                    {/* <h2 className='font-mono font-bold text-3xl pt-10'>No Post Has This Charachter</h2> */}
                    <div className='flex justify-center'>
                        <img className='w-[30%] h-[30%] pt-10' src={noPost} alt='No Posts Found' loading='lazy'/>
                    </div>
                </div></> 
                :
                filterdSearch.map((post)=>
                {
                  return<div key={post.id} className={`p-10 border border-x-0 border-b-0 ${theme==='dark'? `border-black`:`border-white`}`}>
                           <div className='person border flex justify-between'>
                              <h1 className=' ps-4 flex'><span className='pe-2'><BsPersonCircle className='pt-1 text-xl' /></span> UserName : {post.userId} </h1>
                              <div  onClick={()=>navigate(`/postDetails/${post.id}`)} className='pt-1 me-3 cursor-pointer '><CgMoreO /></div>
                            </div>
                            <h2  onClick={()=>navigate(`/postDetails/${post.id}`)} className='font-semibold ps-4 pt-3 flex cursor-pointer'>
                                <span className='pe-2'>
                                  <PiSubtitlesThin className='text-xl '/>
                                </span> 
                                {post.title} 
                              </h2>
                            <div className='mt-3 border p-2'>
                              <h2 className='font-bold ps-4 flex justify-center'><span className='pe-2'><GrArticle className='text-lg '/></span>body</h2>
                              <p className='text-start'>{post.body}</p>
                            </div>
                        </div>
                })
              }  </>
}

export default ShowSearch
