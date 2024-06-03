import React, { useContext,useMemo,useState } from 'react'
import { authContext } from '../context/authentication'
// import { BsPersonCircle } from 'react-icons/bs';
// import { PiSubtitlesThin } from "react-icons/pi";
// import { GrArticle } from "react-icons/gr";
// import { CgMoreO } from "react-icons/cg";
import { MdContentPasteSearch } from "react-icons/md";
import axios from 'axios';
import PostsShow from './postsShow';
import Paginate from './Paginate';
import ShowSearch from './ShowSearch';
import toast from 'react-hot-toast';




export default function Post() 
{
  const {theme}= useContext(authContext)
  

  //==============
  
  
  
  const[inputSearch,setInputSearch]=useState('')
  const[filterdSearch,setFilterdSearch]=useState([])
   //==============
  const[posts , setPosts]=useState([]);
  const[loading , setloading]=useState(false)
  const[currentPage , setCurrentPage]=useState(1)
  const[postPerPage ]=useState(10)
  useMemo(function () 
  {
    try {
      const fetchPost = async()=>
    {
      setloading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setloading(false)
    }
    fetchPost()
    } catch (error) {
      console.log(error)
      toast('Maybe There Is Error Happen',
      {
        icon: '✖',
        style: {
          borderRadius: '6px',
          background: 'white',
          color: 'black',
          border: '1px solid black',
          fontFamily:'monospace'
        },
      }
    );
    }
  },[])
  //----------handle search
  
  // const inputRef = useRef()
  // useEffect(function () 
  // {
  //   console.log(inputRef.current.value);
  // },[inputRef])
  const handlechange =(value)=>
  {
    setInputSearch(value)
    const befilterd = [...posts]
    const serch = befilterd.filter((filter)=>
    {
      return filter.title.toLowerCase().includes(value.toLowerCase());
    })
    setFilterdSearch(serch)
    console.log(filterdSearch);
  }
  
  //----------------------------------
  //Get Current Posts
  const indexOfLastPost = currentPage*postPerPage
  const indexOfFristPage = indexOfLastPost-postPerPage
  const currentPosts = posts.slice(indexOfFristPage,indexOfLastPost)
  // console.log(currentPosts);
  //paginate
  const paginate = (pageNumber)=> setCurrentPage(pageNumber)
  
 
//---------------------------------------
  return <>
      <main  className={`pb-10 min-h-screen ${theme ==='dark'?'bg-white text-black' : 'bg-gray-800 text-white'}`}>
        <div className='text-center font-mono'>
          <h1 className='font-bold pt-4 text-3xl'>All Posts In App </h1>

          <div className='search pt-4 relative'>
            <input
              // ref={inputRef}
              onChange={(e)=>handlechange(e.target.value)}
              value={inputSearch}
              className={`input border w-[50%] max-sm:w-[90%] border-black h-9 px-4 border-t-0 border-e-0
              hover:border-t-[1px] hover:border-e-[1px] hover:border-b-0 hover:border-s-0
              text-gray-600 font-mono font-semibold 
              shadow-inner`} placeholder='Search By Title' type="text" /> 
              <div className='absolute top-[43%] left-[72%] max-sm:left-[90%]'><MdContentPasteSearch className='text-xl text-black opacity-45'/></div>
          </div>

          <div className='container-post mt-4 w-[80%] max-sm:w-[100%] mx-auto min-h-[200px] rounded'>
            {
              inputSearch.length===0?
              <>
                <PostsShow currentPosts={currentPosts} loading={loading}/>
                <Paginate postsPerPage={postPerPage} totalposts={posts.length} paginate={paginate}/>
              </>
              :
              <>
                <ShowSearch filterdSearch={filterdSearch} loading={loading}/>
              </>
            }
            
            {/* {
              currentPosts.map((item ,idx)=>
              {
                return <div key={idx} className={`p-10 border border-x-0 border-b-0 ${theme==='dark'? `border-black`:`border-white`}`}>
                  <div className='person border flex justify-between'>
                    <h1 className=' ps-4 flex'><span className='pe-2'><BsPersonCircle className='pt-1 text-xl' /></span> UserName : {item.userId} </h1>
                    <div className='pt-1 me-3'><CgMoreO /></div>
                    </div>
                    <h2 className='font-semibold ps-4 pt-3 flex '><span className='pe-2'><PiSubtitlesThin className='text-xl '/></span> {item.title} </h2>
                  <div className='mt-3 border p-2'>
                  <h2 className='font-bold ps-4 flex justify-center'><span className='pe-2'><GrArticle className='text-lg '/></span>body</h2>
                  <p className='text-start'>{item.body}</p>
                  </div>
                  </div>
                  
              })
            } */}
         
            
          </div>
        </div>
      </main>
    
  </>
}
