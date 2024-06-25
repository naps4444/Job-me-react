import React from 'react'
import cv from '../assets/cv.png'
import testy1 from '../assets/testy1.png'
import testy2 from '../assets/testy2.png'
import testy3 from '../assets/testy3.png'
import { Link } from 'react-router-dom'

const CV = () => {
  function ButtonLink({ to, children }) {
    return <Link to={to}><button>{children}</button></Link>;
  }

  return (
    <div>
    <div className=' cv'>
        <div className="uploadcv container">
            <div className="cv-text">
                <h3>Get Jobs that match your Qualifications and Skill Set</h3>
                <p>Lorem ipsum dolor sit amet consectetur. Dolor euismod mattis nulla aliquam a. In ac in ornare donec consectetur. Nam semper gravida enim dolor velit aliquam ut ac. </p>
                <div className="bit-cv">
                <ButtonLink to='/jobapply'>
                <button className='btn text-white'>Upload Your CV</button>
                </ButtonLink>
                </div>
            </div>
            <div className="cv-img">
                <img src={cv} alt="cv" />
            </div>
        </div>
        </div>

        <div className="testy container">

<div className="testy-text">
  <h5 className='text-info'>Testimonials</h5>
  <h3>Feedbacks from clients</h3>
</div>

<div className="testy-boxs">
  <div className="t-box">
    <img src={testy1} alt="" width={50} />
    <p>“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”</p>
    <h3 className='text-info'>Alice Shata</h3>
    <p>South Africa</p>
  </div>
  <div className="t-box">
  <img src={testy2} alt="" width={50} />
    <p>“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”</p>
    <h3 className='text-info'>Blard james</h3>
    <p>United Kingdom</p>
  </div>
  <div className="t-box">
  <img src={testy3} alt="" width={50} />
    <p>“Lorem ipsum dolor sit amet consectetur. Etiam elit nisl aliquam tempor purus ac. Vestibulum eu euismod enim elit. Nunc phasellus aliquet eu gravida massa vel.”</p>
    <h3 className='text-info'>Jide Oba</h3>
    <p>Nigeria</p>
  </div>
</div>
</div>
    
</div>
  )
}

export default CV