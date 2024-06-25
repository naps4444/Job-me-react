import React from 'react'
import heroImg from '../assets/HeroSection.png'
import { Link } from 'react-router-dom';
import SelectBar from './SelectBar';


const Hero = () => {
  function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
  }
  
  return (
    <div className='d-flex flex-column hero-bg'>
        <div className="hero-text mx-auto text-center">
            <h1>FIND JOBS AND HIRE AMAZING TALENTS!</h1>
        </div>

        
        
        <div className="karries mx-auto">
          <div className='btn-select'>
          <ButtonLink to="/joblisting">
            <button >Find More Jobs</button>
            </ButtonLink>
          </div>
          <div className='moss'>
            <SelectBar/>
          </div>
        
        </div>
        
    </div>
  )
}

export default Hero