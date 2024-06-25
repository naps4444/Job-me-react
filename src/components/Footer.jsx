import React from 'react'
import logo from '../assets/JOBME.png'
import linky from '../assets/linky.png'
import fiby from '../assets/fiby.png'
import instanta from '../assets/instanta.png'
import xster from '../assets/xster.png'

const Footer = () => {
  return (
    <div className='conn'>
        <div className="foot container">
            <div className='left'>
                <div className="logo-foot">
                    <img src={logo} alt="logo" />

                </div>
                <div className="socials-foot">
                    <p className='d-inline'>Find Us On:</p>
                    <a href="#"><img src={fiby} alt="facebook logo" /></a>
                    <a href="#"><img src={linky} alt="linkdin logo" /></a>
                    <a href="#"><img src={instanta} alt="instagram logo" /></a>
                    <a href="#"><img src={xster} alt="twitter logo" /></a>
                    
                    
                    
                    


                </div>
            </div>
            <div className='right'>
                <div className="links-foot">
                    <ul className='my-auto'>
                        <li><a href="/joblisting">Find Jobs</a></li>
                        <li><a href="/jobapply">Post a Job</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/login">Log In</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer