import React from 'react'
import axios from 'axios';
import { LiaCommentsSolid } from "react-icons/lia";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const CommentPost = () => 
{
    const{id:postID}=useParams()
     function getPostDetails() 
    {
      return axios.get(`https://jsonplaceholder.typicode.com/posts/${postID}/comments`)  
    }
    const {isLoading , data } =  useQuery('getPostDetail',getPostDetails,
    {
      cacheTime:3000,
      refetchInterval:10000
    })
    if(isLoading) return <div className='flex justify-center mt-6'>Loading...</div>

return <>
        <div>
            <div className='w-full border border-t-0 mt-9'></div>
            <h2 className='font-bold fonst-mono text-3xl pb-2 flex justify-center pt-5'>Comment <span className='pt-1 ps-2'><LiaCommentsSolid/></span></h2>
            {   
                data?.data?.length === 0 ? 
                <>
                    <div>
                        No Comments Added Yet In This Post
                    </div>
                </>
                :
                data?.data?.map((comment , index)=>
                {
                    return <div key={index} className='comment w-[80%] max-sm:w-[90%] mx-auto border border-b-0 border-x-0'>
                                <div className=' mt-3'>
                                    <h2 className='font-mono font-light flex ps-3'><span className='text-2xl pe-3'><CiMail /></span> {comment.email}</h2>
                                    <h4 className='font-mono font-light flex ps-3'><span className='text-2xl pe-3'><MdDriveFileRenameOutline /></span> {comment.name}</h4>
                                </div>
                                <div className='flex justify-center py-3'>
                                    <p>{comment.body}</p>
                                </div>
                         </div>
                })
            }
            
        </div>
  </>
}

export default CommentPost
