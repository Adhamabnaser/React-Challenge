import { Suspense, lazy } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import { Offline } from 'react-detect-offline';
import { AuthProvider } from './componants/context/authentication';
import './App.css';


const Layouts = lazy(()=>import ('./componants/layout/Layouts'))
const Post = lazy(()=>import ( './componants/posts/Post'))
const Login = lazy(()=>import ('./componants/login/Login'))
const Register = lazy(()=>import ('./componants/register/Register'))
const NotFound = lazy(()=>import ('./componants/notfound/NotFound'))
const Profile = lazy(()=>import ('./componants/profile/Profile'))
const Forgetpass = lazy(()=>import ('./componants/forgetpass/Forgetpass'))
const PostDetails = lazy(()=>import ('./componants/postDetails/PostDetails'))


function App() 
{
  let QueruClient = new QueryClient () ;

  const appRouter = createBrowserRouter([
    {    
      path: '/' , element : <AuthProvider><Layouts/></AuthProvider> ,
      children : [
        {
          path:'/',element : <Post/>
        }, 
        {
          path:'/posts',element : <Post/>
        },
        {
          path:'/postDetails/:id',element : <PostDetails/>
        },
        {
          path : '/login' , element : <Login/>
        }, 
        {
          path : '/register' , element : <Register/>
        },
        {
          path : '/forgetpass' , element : <Forgetpass/>
        },
        {
          path : '/profile' , element : <Profile/>
        },
        {
          path : '*' , element : <NotFound/>
        }
      ]
    }   
  
  ])


  return <>
    <Suspense fallback={<div></div>}>

      <QueryClientProvider client={QueruClient}>
          <RouterProvider router={appRouter}/>
          <Toaster/>
      </QueryClientProvider>

    </Suspense>
  <Offline>
          <div className='fixed bottom-0 start-0 bg-slate-700 text-white p-3 rounded-3'>
            <h2>You Are Offline, Please Check Your Internet Connection...</h2>
          </div>
  </Offline>
  </>
  
}

export default App;
