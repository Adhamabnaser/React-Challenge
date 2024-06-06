import React ,{ Fragment, useContext}  from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import style from './navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'
import { Link , useNavigate } from 'react-router-dom'
import { authContext } from '../context/authentication'
import { BsPostcard } from "react-icons/bs";
import { RiLogoutCircleRLine } from "react-icons/ri";









function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

 function Navbar() 
{


  const navigate = useNavigate()
  const {token , setToken} = useContext(authContext)
  const {theme , handleSwitchTheme} = useContext(authContext)
  

  function logOut() 
  {
    localStorage.removeItem('tkn') 
    setToken(null)
      navigate('/login')
  }


  return<>
  <Disclosure id='main' as="nav" className={`${theme ==='dark'? ` bg-black`:`bg-slate-100`}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                       
                        <BsPostcard onClick={()=>navigate('/posts')} className={`text-3xl cursor-pointer ${theme==='dark'?'text-white' : 'text-black'}`}/>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    
                    <Link className={`${theme==='dark'?'text-gray-300' : 'text-black font-semibold'}  hover:bg-gray-700 hover:text-white p-2 rounded-md px-3 py-2`} to='/posts'>Posts</Link>

                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                

                <label className={style.switch}>
                  <input onClick={()=> handleSwitchTheme()} type={`checkbox`}/>
                  <span className={style.slider}></span>
                </label>


                {/* Profile dropdown */}
                {token?
                <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <FontAwesomeIcon className=' text-3xl text-white' icon={faCircleUser} />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={'/profile'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                          <p
                            onClick={()=>{logOut();}}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </p>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                </>   :
                <>
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full text-sm focus:outline-none">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                     
                      <RiLogoutCircleRLine className={`text-4xl ${theme==='dark'?'text-white' : 'text-black'}`}/>
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to={'/login'}
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Log In
                          </Link>
                        )}
                      </Menu.Item>
                      
                      <Menu.Item>
                        {({ active }) => (
                         <Link
                         to={'/register'}
                         className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                       >
                         Register
                       </Link>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>

                </>  }
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 fixed bg-black w-full rounded-b-2xl opacity-85 z-[100]">
              
              
                    <Link className='block text-gray-300 hover:bg-gray-700 hover:text-white p-2 rounded-md px-3 py-2' to='/posts'>Posts</Link>
                 
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure> 
  
  
  
  
  </>
}
export default React.memo(Navbar)