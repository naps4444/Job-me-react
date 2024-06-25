import React from 'react'
import hr from '../assets/hr4.png'
import cr1 from '../assets/cr1.png'
import cr2 from '../assets/cr2.png'
import cr3 from '../assets/cr3.png'
import cr4 from '../assets/cr4.png'


const Hr = () => {
  return (
    <div className='container'>
        <div className="hr-head-text">
            <h1>How It Works?</h1>
        </div>
        <div className='hr-main'>
            <img src={hr} alt="hr" />
        </div>
        <div className='hr-text'>
            <div className="sub-hr-text">
            <h4>Create an account/Log In</h4>

            <div className="sub-img">
            <img src={cr1} alt="" />
            </div>

            </div>

            <div className="sub-hr-text">
            <h4>Complete your profile</h4>

            <div className="sub-img">
            <img src={cr2} alt="" />
            </div>

            </div>

            <div className="sub-hr-text">
            <h4>Find best Jobs </h4>

            <div className="sub-img">
            <img src={cr3} alt="" />
            </div>

            </div>

            <div className="sub-hr-text mmm">
            <h4>Apply for Jobs</h4>

            <div className="sub-img">
            <img src={cr4} alt="" />
            </div>

            </div>
            
            
            
            

        </div>
        
    </div>
  )
}

export default Hr