import React, { useContext } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { CgMoreO } from 'react-icons/cg'
import { GrArticle } from 'react-icons/gr'
import { PiSubtitlesThin } from 'react-icons/pi'
import { authContext } from '../context/authentication'
import { useNavigate } from 'react-router-dom'

const PostsShow = ({currentPosts,loading}) => 
{
  const{theme} = useContext(authContext)
  const navigate =  useNavigate()

  if (loading) 
  {
    return <div className='loading-screen'>Loading...</div>
  }
  return <>
              {
                currentPosts.map((post)=>
                {
                  return<div key={post.id} className={`p-10 border border-x-0 border-b-0 ${theme==='dark'? `border-black`:`border-white`}`}>
                           <div className='person border flex justify-between'>
                              <h1 className=' ps-4 flex'><span className='pe-2'><BsPersonCircle className='pt-1 text-xl' /></span> UserName : {post.userId} </h1>
                              <div onClick={()=>navigate(`/postDetails/${post.id}`)} className='pt-1 me-3 cursor-pointer'><CgMoreO /></div>
                            </div>
                            <h2 onClick={()=>navigate(`/postDetails/${post.id}`)} className='cursor-pointer font-semibold ps-4 pt-3 flex '>
                              <span className='pe-2'><PiSubtitlesThin className='text-xl '/></span>
                              Title : {post.title} </h2>
                            <div className='mt-3 border p-2'>
                              <h2 className='font-bold ps-4 flex justify-center py-3'><span className='pe-2'><GrArticle className='text-lg '/></span>Post Content</h2>
                              <p className='text-start'>{post.body}</p>
                            </div>
                        </div>
                })
              }
                 
            </>
}
export default PostsShow

