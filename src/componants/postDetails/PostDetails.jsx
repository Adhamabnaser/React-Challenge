import React, { useContext} from 'react'
import { BsPersonCircle } from 'react-icons/bs';
import { GrArticle } from 'react-icons/gr';
import { PiSubtitlesThin } from 'react-icons/pi';
import { useParams } from 'react-router-dom';
import { authContext } from '../context/authentication';
import { BsFilePost } from "react-icons/bs";
import axios from 'axios';
import CommentPost from './CommentPost';
import { useQuery } from 'react-query';



export default function PostDetails() 
{
    const {id : postID} = useParams()
    const{theme} = useContext(authContext)
    

    function fetchOnePost() 
    {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}`)  
    }
    const {isLoading , data : Onepost } =  useQuery('Onepost',fetchOnePost)
   
    if (isLoading) return <div className='w-full pt-[100px] flex justify-center'><h2>Loading...</h2></div>
    
  return <>
       <div className={`min-h-screen ${theme==='dark'? `bg-white`:`bg-gray-800 text-white`}`}>
       <div className={` pt-12 w-[80%] max-sm:w-[w-100] mx-auto `}>
                <h2 className='font-extrabold font-mono text-3xl pb-2 flex justify-center'>Post <span className='pt-1 ps-1'><BsFilePost/></span></h2>

            <div className={` p-10 border border-x-0  ${theme==='dark'? `border-black`:`border-white`}`}>
                <div className='person border '>
                    <h1 className=' ps-4 flex'><span className='pe-2'><BsPersonCircle className='pt-1 text-xl' /></span> UserName : {Onepost?.data?.userId} </h1>
                </div>
                <h2  className='font-semibold ps-4 pt-3 flex'><span className='pt-[1.5px] pe-2'><PiSubtitlesThin className=' text-xl '/></span> {Onepost?.data?.title}</h2>
                <div className='mt-4 border p-2'>
                    <h2 className='font-bold py-3 ps-4 flex justify-center'><span className='pe-2'><GrArticle className='text-lg '/></span>body</h2>
                    <span className='text-start'>{Onepost?.data?.body}</span>
                </div>
           
            </div>
       
        </div>
        <div><CommentPost/></div>
       </div>

  </>
}
