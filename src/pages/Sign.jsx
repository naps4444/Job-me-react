import React from 'react'
import { FaEye } from "react-icons/fa";
import logo from '../assets/JOBME.png'
import { Link } from 'react-router-dom';
import fblogo from '../assets/fblogo.png'
import gmaillogo from '../assets/gmaillogo.png'
import linklogo from '../assets/linklogo.png'
import axios from 'axios';

const Sign = () => {


  return (
    <div>

    
    <div className='signup'>
        <form className='mx-auto bg-white'>
        <Link to="/">
        <div className="logo p-2 ms-5 mt-4">
          <img src={logo} alt="" width={80} />
        </div>
        </Link>
        
        <div className="form-text">
          <h2>Sign Up!</h2>
          <p>Register to hit your dream job!</p>
        </div>
        <div className="inputs">

          <div className="first-name emaild">
          <input type="text" name='firstName'  className='form-control' placeholder='First name' />
              
          </div>

          <div className="last-name emaild">
          <input type="text" name='lastName' className='form-control' placeholder='Last name' />
          </div>

          <div className="email-address emaild">
          <input type="email" name='email' className='form-control' placeholder='Email Address' />  
          </div>


          <div className="password passd">
          <input type="password" name='password' className='form-control' placeholder='Password' />
          <FaEye />
       
          </div>

          <div className="password-confirm passd">
          <input type="password" name='passwordConfirm' className='form-control' placeholder='Confrim password' />
          <FaEye />
          
          </div>
      
        </div>
        <div className="forgone mt-3">
          <div className="ree">
          <input type="checkbox" />
          <label htmlFor="checkbox" className='ps-1'>Remember me</label>
          </div>
          
          <a href="#" className='text-info'>Forgot Password?</a>
        </div>
        <div className="bt mx-auto mt-3">
         <button className='mx-auto bg-info text-light'>Sign Up</button>
        </div>

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
            <Link to='/login'>
            <a href="#" className='text-info'>Log In</a>
            </Link>
            
          </div>
         

        </div>
        

      </form>

    </div>
    </div>
  )
}

export default Sign