import React, { useContext } from 'react'
import desgin from './login.module.css'
import logo from '../image/1453176-200.png'
import { Link, useNavigate} from 'react-router-dom'
import { authContext } from '../context/authentication'
// import { InfinitySpin } from 'react-loader-spinner'
// import toast from 'react-hot-toast'
// import axios from 'axios'
// import { useFormik } from 'formik'
export default function Login() 
{
  const navigate = useNavigate()
//   const [isloading , setIsloading] = useState(false)
  const {
    // token ,
    // setToken ,
    theme } = useContext(authContext)
//   console.log(token);
//   let users = {
//     email:"",
//     password:"",
//  }
//  const loginUser = async(values) =>
//   {
//     try {
//       setIsloading(true)
//       const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values)
//       console.log(data);
//       if (data.message === 'success') 
//       {
//         setTimeout(   ()=>navigate('/product')      , 500  )
//         toast('Welcome '+ data.user.name,
//           {
//             icon: '✔️',
//             style: {
//               borderRadius: '6px',
//               background: 'white',
//               color: 'black',
//               border: '1px solid black',
//               fontFamily:'monospace'
//             },
//           }
//         );   
//         localStorage.setItem('tkn' , data.token) 
//         setToken(data.token) 
//       }
//       setIsloading(false)
//     } catch (error) {
//       console.log(error.response);
//       // toast.error(error.response.data.message);
//       toast('Please, Write E-Mail Or Password Correct',
//             {
//               icon: '✖',
//               style: {
//                 borderRadius: '6px',
//                 background: 'white',
//                 color: 'black',
//                 border: '1px solid black',
//                 fontFamily:'monospace'
//               },
//             }
//           );
//     }
//     }
//   const formikObj = useFormik({
//     initialValues: users,
//     onSubmit: loginUser,
//     validate: (values) => {

//       let errors = {};
//       // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//       // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

//       // if (!emailRegex.test(values.email)) {
//       //   errors.email = "Invalid email address";
//       // }
//       // if (!passwordRegex.test(values.password)) {
//       //   errors.password = "Invalid password";
//       // }
//       console.log(values);
//       return errors;
//     }
//   })
  

  return <>
  <div className={`h-screen ${theme==='dark'?'bg-white' : 'bg-black'}`}>
    <div className='flex justify-center'>
      
      <form 
        // onSubmit={formikObj.handleSubmit} 
        className={desgin.form_container}>
        <div onClick={()=>navigate('/posts')} className={desgin.logo_container + ' cursor-pointer'}>
          <img className={`border rounded-xl ${theme==='dark'?``:`border-black border-2`}`} src={logo} alt='logo' loading='lazy'/>
        </div>
        <div className={desgin.title_container}>
          <p className={desgin.title}>Sign In To Your Account</p>
        </div>


        <div className={desgin.input_container}>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
            <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
          </svg>
          <label className={desgin.input_label} htmlFor="email_field">Email</label>
        
          <input
          //  onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.email}
            required placeholder="name@mail.com" title="Inpit title" name="email" type="text" 
            // className={formikObj.errors.email && formikObj.touched.email? desgin.input_field1 : desgin.input_field} id="email_field"
            className={ desgin.input_field} id="email_field"
            />
        </div>


        <div className={desgin.input_container}>
          <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
            <path strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
            <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
            <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
          </svg>

          

          <label className={desgin.input_label} htmlFor="password_field">Password</label>
          <input
          //  onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.password} 
           required='Must Enter Password' placeholder="Password" title="Inpit title" name="password" type={'password'} className={desgin.input_field} id="password_field"/>
        
        </div>



          <Link to={'/forgetPass'}>
          <p className={desgin.page_link}>
            <span className={desgin.page_link_label}>Forgot Password?</span>
          </p>
          </Link>



        <button  type="submit" className={`border w-full rounded-full py-[7px] ${theme ==='dark'? `text-white bg-black`:` border-black`}` }>
        Log In
          {/* {
            isloading? <> 
              <div className={'flex justify-center pe-10'}>
                <InfinitySpin
                    visible={false}
                    width="90"
                    color="white"
                    ariaLabel="infinity-spin-loading"
                    
                    />
                  
              </div>
            </>:
            <span className={' fw-bold text-white'}>
              Log In
            </span>
          } */}
        </button>



        <p className={desgin.sign_up_label}>
        Don't have an account?
        <Link to="/register">
          <span className={desgin.sign_up_link}>Sign up</span>
        </Link>
      </p>
        <div className={desgin.separator + '  pe-10'}>
          <div className=''></div>
              <span className='text-sm'>Log In with</span>
        </div>
        
        <div className=' w-full'>
          <div className='flex justify-center'>
            <button type='button' title="Sign In" className={desgin.sign_in_ggl}>
            <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.3em"
            width="2em"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M3.064 7.51A9.996 9.996 0 0112 2c2.695 0 4.959.99 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123-.2.6-.314 1.24-.314 1.9 0 .66.114 1.3.314 1.9.786 2.364 2.99 4.123 5.595 4.123 1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 001.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045 0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 012 12c0-1.614.386-3.14 1.064-4.49z" />
          </svg>
        </button>
          </div>
      
        </div>
        <p className={desgin.note}>Terms of use & Conditions</p>
    </form>
  </div>

  </div>

  </>
}