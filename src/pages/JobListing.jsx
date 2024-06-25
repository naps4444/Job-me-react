import React from 'react'
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import googleimg from '../assets/gmaillogo.png'
import fbimg from '../assets/fiby.png'
import linky from '../assets/linky.png'
import LoggedLayout from '../components/LoggedLayout';
import SelectBar from '../components/SelectBar';
import { Link } from 'react-router-dom';

const JobListing = () => {
  return (
    
    <div>
        
        <LoggedLayout>

            <div className="all-bgsb">

            
            <div className="bgsb">
            <SelectBar/>
            </div>
            </div>
        

        <div className="container">
        
            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35} alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)'  size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={fbimg} width={35}  alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Web Developer</h4>
                        <p>Facebook</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)' size={30} />
                    <p>Posted 2 days ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>38k - 40k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={linky} width={35} alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>UI/UX Designer</h4>
                        <p>Linkedln</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)'  size={30} />
                    <p>Posted 3 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>26k - 34k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35}  alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)' size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35} alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)'  size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35}  alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)' size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35} alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)'  size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35}  alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)' size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35} alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)'  size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>


            <div className="each">
                <div className="logo-name">
                    <div className="logo-img">
                        <img src={googleimg} width={35}  alt="google logo" />
                    </div>
                    <div className="name">
                        <h4>Digital Marketer</h4>
                        <p>Google</p>
                    </div>
                </div>
                <div className="postd">
                    <div className="ful">
                        <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                    </div>
                    <div className="icon-p">
                    <IoMdTime color='rgba(84,180,211)' size={30} />
                    <p>Posted 24 hours ago</p>
                    </div>
                </div>
                <div className="loc-pz">
                    <div className="loc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                    
                    <div className="pz">
                        $ <p>30k - 35k</p>
                    </div>
                
                </div>
                <div className="apy-btn">
                    <button className='btn bg-info text-center text-white'> <Link to='/singlejob' className='apb' >Apply Now</Link></button>
                </div>
            </div>

            </div>
            
        
        </LoggedLayout>

        </div>
    
  )
}

export default JobListing