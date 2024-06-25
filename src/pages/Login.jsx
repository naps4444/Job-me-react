import { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import React from 'react';
import { FaEye } from "react-icons/fa";
import logo from '../assets/JOBME.png'
import { Link } from 'react-router-dom';
import fblogo from '../assets/fblogo.png'
import gmaillogo from '../assets/gmaillogo.png'
import linklogo from '../assets/linklogo.png'

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting },
 } = useForm();
  
  const onSubmit = async (data) => {
    try {
      await new promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      
    } catch (error) {
      
    }
 };





  return (
    <div className='login'>

      <form  className='mx-auto bg-white' onSubmit={handleSubmit(onSubmit)}>


        <Link to="/">
        <div className="logo p-2 ms-5 mt-4">
          <img src={logo} alt="" width={80} />
        </div>
        </Link>
        
        <div className="form-text">
          <h2>Welcome back!</h2>
          <p>Log In to hit your dream job!</p>
        </div>
        <div className="inputs">

        <div>

        

          <div className="emaild">
          <input {...register("email", {
            required: "Email is required",
            validate: (value) => {
              if (!value.includes("@")) {
                return " Email must include @ ";
              }
              return true;
            },

          })} type="email" className='form-control' placeholder='Email Address' />

          
         


          </div>

          <div className='ms-5 text-danger ps-4'>

          {errors.email && <div className="text-danger">{errors.email.message}</div>}

          </div>

          </div>



          <div>

          <div className="passd">
          <input {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters",
            },
            
          })}  type="password" className='form-control' placeholder='Password' />
          <FaEye />


          </div>

          <div className='ms-5 text-danger ps-4'>
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
          </div>
          

          </div>
  


        

      
        </div>
        <div className="forgone mt-3">
          <div className="ree">
          <input type="checkbox" />
          <label htmlFor="checkbox" className='ps-1'>Remember me</label>
          </div>
          
          <a href="#" className='text-info'>Forgot Password?</a>
        </div>
        {/* <Link to='/jobapply' className='text-decoration-none'> */}
        <div className="bt mx-auto mt-3">
         <button disabled={isSubmitting} className='mx-auto bg-info text-light'>{ isSubmitting ? "Loading..." : "Log In" }</button>
        </div>
        {/* </Link> */}

        <div className="bum-foot">
          <div className='bum-p'>
          <p>Or continue with</p>
          </div>

          <div className='img-logo'>

            <a href="#"><img src={fblogo} alt="facebook" width={31} /></a>
            <a href="#"><img src={gmaillogo} alt="google" width={31} /></a>
            <a href="#"><img src={linklogo} alt="linkdin" width={31} /></a>
                        
          </div>

          <div className="d-flex p-foot">
            <p>Don’t have an account?</p>
            <Link to='/sign'>
            <a href="#" className='text-info'>Sign Up</a>
            </Link>
            
          </div>
         

        </div>
        

      </form>

     
    </div>
  )
}

export default Login