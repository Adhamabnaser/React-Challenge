import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { Alert } from '@mui/material'
import axios from 'axios'
import toast from 'react-hot-toast'
import desgin from '../login/login.module.css'
import { authContext } from '../context/authentication'

export default function Register() 
{
  const {theme}=useContext(authContext)
  const navigate = useNavigate()
  let users = {
     name:"",
     email:"",
     password:"",
     rePassword:"",
     phone:""
  }

  const registernewUser = async(values) =>
    {
      try {
        const {data} = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values)
        console.log(data);
        if (data.message === 'success') 
        {
          navigate('/login')
          toast.success("Registered Successfully");
        }
      } catch (error) {
        console.log(error.response.data.message);
        // toast.error(error.response.data.message);
        toast(error.response.data.message,
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
    }


  const formikObj =  useFormik({
    initialValues:users,
    onSubmit:registernewUser,
    validate: (values) => {

      let errors = {};
      if (!values.name ) {
          errors.name = "Name is required";
      } else if (values.name.length < 3) {
          errors.name = "Name must be 3 char";
      }
      
      if (!values.email) {
          errors.email = "Email is required";
      } else if (  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = "Invalid email address";
      }
      if (!values.password) {
          errors.password = "Password is required";
      } else if (values.password.length < 6) {
          errors.password = "Password must be 6 char";
      }
      if (values.rePassword !== values.password) {
          errors.rePassword = "Password doesn't match";
      }
      if (!values.phone) {
          errors.phone = "Phone is required";        
      }else if (!values.phone.match(/^01[0-2,5]{1}[0-9]{8}$/))
        {
          errors.phone = "Invalid phone number";
        }
      console.log(errors);
      // console.log(values);


      return errors;
    }
  })



  return <>
    <div className={`h-screen ${theme==='dark'?'bg-white' : 'bg-black'}`}>
        <div className='flex justify-center'>
        
        <form onSubmit={formikObj.handleSubmit} className={desgin.form_container + ' pb-1 mb-1'}>
          <div className={'flex pb-4' }>
            <p className={`text-3xl font-mono me-2 ${theme ==='dark'? `text-white border border-black rounded-tr-3xl rounded-bl-3xl px-3 py-1 bg-black`: `text-black border border-gray-700 rounded-tr-3xl rounded-bl-3xl px-3 py-1 bg-white`} `}>
              Sign Up,Now
            </p>
            <svg
                className='w-10 h-12 fill-white'
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
              >
                <path d="M13 5 A1 1 0 0 1 12 6 A1 1 0 0 1 11 5 A1 1 0 0 1 13 5 z" />
                <path d="M9 20l3-6 3 6M6 8l6 2 6-2M12 10v4" />
              </svg>
          </div>



          <div className={desgin.input_container}>
          <svg fill="none" viewBox="0 0 15 15" height="1.4em" width="1em" className={desgin.icon}>
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.5.875a3.625 3.625 0 00-1.006 7.109c-1.194.145-2.218.567-2.99 1.328-.982.967-1.479 2.408-1.479 4.288a.475.475 0 10.95 0c0-1.72.453-2.88 1.196-3.612.744-.733 1.856-1.113 3.329-1.113s2.585.38 3.33 1.113c.742.733 1.195 1.892 1.195 3.612a.475.475 0 10.95 0c0-1.88-.497-3.32-1.48-4.288-.77-.76-1.795-1.183-2.989-1.328A3.627 3.627 0 007.5.875zM4.825 4.5a2.675 2.675 0 115.35 0 2.675 2.675 0 01-5.35 0z"
            clipRule="evenodd"
          />
        </svg>
            <label className={desgin.input_label} htmlFor="name">Name</label>
            <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.name} required placeholder="Name" title="Inpit title" name="name" type="text" className={formikObj.errors.name && formikObj.touched.name ? desgin.input_field1 : desgin.input_field} id="name"/>
          </div>
            <div className={`w-full ${formikObj.errors.name && formikObj.touched.name ? 'block' : 'hidden'}`}>      <Alert severity="error">{formikObj.errors.name}</Alert>     </div> 
          {/* {formikObj.errors.name ?       <div className='w-full'>      <Alert severity="error">This is a error Alert.</Alert>     </div>  : ''    } */}

          <div className={desgin.input_container}>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
              <path strokeLinejoin="round" strokeWidth="1.5" stroke="#141B34" d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z"></path>
            </svg>
            <label className={desgin.input_label} htmlFor="email_field">Email</label>
          
            <input  onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.email} required placeholder="name@mail.com" title="Inpit title" name="email" type="text" className={formikObj.errors.email && formikObj.touched.email? desgin.input_field1 : desgin.input_field} id="email_field"/>
          </div>
          <div className={`w-full ${formikObj.errors.email && formikObj.touched.email ? 'block' : 'hidden'}`}>      <Alert severity="error">{formikObj.errors.email}</Alert>     </div> 



          <div className={desgin.input_container}>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
              <path strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
              <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
            </svg>
            <label className={desgin.input_label} htmlFor="password_field">Password</label>
            <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.password} required='Must Enter Password' placeholder="Password" title="Inpit title" name="password" type="password" className={formikObj.errors.password && formikObj.touched.password? desgin.input_field1 : desgin.input_field} id="password_field"/>
          
          </div>
          <div className={`w-full ${formikObj.errors.password && formikObj.touched.password ? 'block' : 'hidden'}`}>      <Alert severity="error">{formikObj.errors.password}</Alert>     </div> 



          <div className={desgin.input_container}>
            <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" className={desgin.icon}>
              <path strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22"></path>
              <path strokeLinejoin="round" strokeLinecap="round" strokeWidth="1.5" stroke="#141B34" d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
              <path fill="#141B34" d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z"></path>
            </svg>
            <label className={desgin.input_label} htmlFor="repassword">RePassword</label>
            <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.rePassword} required='Must Enter Same Password' placeholder="Re-Password" title="Inpit title" name="rePassword" type="password" className={formikObj.errors.rePassword && formikObj.touched.rePassword? desgin.input_field1 : desgin.input_field} id="repassword"/>
          
          </div>
          <div className={`w-full ${formikObj.errors.rePassword && formikObj.touched.rePassword ? 'block' : 'hidden'}`}>      <Alert severity="error">{formikObj.errors.rePassword}</Alert>     </div> 



          <div className={desgin.input_container}>
              <svg
              className={desgin.icon}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                >
                  <path d="M3.654 1.328a.678.678 0 00-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 004.168 6.608 17.569 17.569 0 006.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 00-.063-1.015l-2.307-1.794a.678.678 0 00-.58-.122l-2.19.547a1.745 1.745 0 01-1.657-.459L5.482 8.062a1.745 1.745 0 01-.46-1.657l.548-2.19a.678.678 0 00-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 012.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.189-.547a1.745 1.745 0 011.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-1 0V1.707l-4.146 4.147a.5.5 0 01-.708-.708L14.293 1H11.5a.5.5 0 01-.5-.5z" />
            </svg>
            <label className={desgin.input_label} htmlFor="phone">Phone</label>
            <input onChange={formikObj.handleChange} onBlur={formikObj.handleBlur} value={formikObj.values.phone} required='Must Enter Password' placeholder="Phone" title="Inpit title" name="phone" type="tel" className={formikObj.errors.phone&& formikObj.touched.phone? desgin.input_field1 : desgin.input_field} id="phone"/>
          
          </div>
          <div className={`w-full ${formikObj.errors.phone && formikObj.touched.phone ? 'block' : 'hidden'}`}>      <Alert severity="error">{formikObj.errors.phone}</Alert>     </div> 



          <div className='flex justify-start w-full ps-5'>
              <p className={desgin.sign_up_label}>
              have an account?
              <Link to="/login">
                <span className={desgin.sign_up_link +' ps-1' }>Sign In</span>
              </Link>
            </p>
          </div>

          

          
          
        <div className='flex justify-end w-full mb-5'> 
            <button disabled={ formikObj.isValid === false || formikObj.dirty === false} type='submit'
             className={`border ${theme==='dark'?`bg-white hover:bg-black text-black hover:text-white px-10 py-2 rounded-lg` 
             :` bg-black hover:bg-white text-slate-100 hover:text-black `} px-10 py-2 rounded-lg`}>Register</button>
        </div>

          
      </form>
        </div>
    </div>

  </>
}
