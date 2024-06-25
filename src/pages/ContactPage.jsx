import React from 'react'
import Header from '../components/Header'
import phone from '../assets/Frame117.png'
import mess from '../assets/Frame119.png'
import loc from '../assets/Frame120.png'
import Footer from '../components/Footer'

const ContactPage = () => {
  return (
    <div>
        <Header />
        <div className="con-hero">
            <div className="con-text">
              <h1>Get In Touch With Us</h1>
              <p>We want to hear from you</p>
            </div>
            
        </div>
        <div className="con-form container">
            <form className='bg-info-subtle' >
                <div className="con-input">
                <input type="text" id='letme' placeholder='Name*' />
                <input type="email" id='letme' placeholder='Email*' />

                </div>

                <div className="con-input">
                <input type="tel" id='letme' placeholder='Phone number*' />
                <input type="text" id='letme' placeholder='Subject*' />

                </div>

                <div className="con-input">
                <textarea name="message" id='letme' placeholder='Message*' ></textarea>

                </div>

                <div className="con-btn">
                    <button className=' btn bg-info text-light'>Send Message</button>
                </div>


                

            </form>
        </div>

        <div className="boxs container">
            <div className="box">
                <img src={phone} alt="phone imgae" width={70} />
                <h3>Call Us</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='bb text-info'>+44567890239</p>
            </div>
            <div className="box">
                <img src={mess} alt="message image" width={70} />
                <h3>Email Us</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='bb text-info'>comando22@gmail.com</p>
            </div>
            <div className="box">
                <img src={loc} alt="location image" width={70} />
                <h3>Location</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className='bb text-info'>23 shinghai street Lagos, Nigeria</p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default ContactPage