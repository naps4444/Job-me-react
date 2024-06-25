import React from 'react'
import LoggedLayout from '../components/LoggedLayout'
import gmaillogo from '../assets/gmaillogo.png'
import empline from '../assets/clarity_employee-line.png'
import { BsCurrencyDollar } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { TbBriefcase2 } from "react-icons/tb";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoMdTime } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import googleimg from '../assets/gmaillogo.png';

const SingleJob = () => {
    


  return (
    <div>
        <LoggedLayout>
            <div className="singlejobpage container">


                <div className="digital-m mt-5">
                    <div className='dm-text-con bg-info-subtle py-1'>

                        <div className="dim">
                        <div className="digit-img">
                            <img src={gmaillogo} width={43} alt="" />
                        </div>
                        </div>
                        

                        <div className="dm-text">
                            <h3>Digital Marketer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.</p>
                        </div>

                        <div className='dm-text-jobinfo'>
                            <h5>Job Information:</h5>
                            <div className="dm-job">

                                <div className="job-property">
                                    <img src={empline} alt=""  width={20} height={20}/>
                                    <h5>Employment Type: <span className='text-info'> Full Time</span></h5>

                                </div>

                                <div className="job-property">
                                <IoLocationOutline size={20}/>
                                    <h5>Location: <span className='text-info'>  United Kingdom</span></h5>

                                </div>

                                <div className="job-property">
                                <FaRegClock size={17}/>
                                    <h5>Date Posted: <span className='text-info'>   13th April, 2024.</span></h5>

                                </div>


                                <div className="job-property">
                                <TbBriefcase2 size={20}/>
                                    <h5>Experience: <span className='text-info'>   3+ Years</span></h5>

                                </div>

                                <div className="job-property">
                                    <BsCurrencyDollar size={20}/>
                                    <h5>Salary: <span className='text-info'> 30k - 35k per annum</span></h5>

                                </div>

                                

                            </div>

                        </div>
                    </div>
                    <div className='map'>


                        
                    </div>
                </div>



                <div className="Job-des">
                    <div className="jd mt-2">
                    <h3>Job Description:</h3>

                    <p>Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac elementum vel. Viverra pellentesque risus tristique mauris metus. Imperdiet purus nulla mi consequat nulla.</p>

                    <p>Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac elementum vel. Viverra pellentesque risus tristique mauris metus. Imperdiet purus nulla mi consequat nulla.</p>

                    </div>

                    <div className="dr mt-5">
                        <h3>Duties & Responsibilities:</h3>
                        <div className="dri mt-3">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>


                    </div>

                    <div className="dr mt-5">
                        <h3>Skills & Qualifications:</h3>
                        <div className="dri mt-3">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="dri">
                            <FaCheckCircle className='text-info'/>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>


                    </div>

                    <Link to="/jobapply" className='text-decoration-none' >
                    <div className="sj-btn mt-4">
                    <button className='btn bg-info text-white mx-auto'>Apply Now</button>
                    </div>
                    </Link>
                    
                
                    
                </div>

                



            </div>

            <div className="sj-foot container">
                <div className="sj-f1">
                    <h3>Related Jobs</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Risus tempus eget egestas dolor ut. At interdum amet id duis pulvinar quis massa elit. Amet quam commodo est pulvinar vitae.</p>
                </div>
                <div className="sj-f2">
                    <div className="sj-con-flex">


                        <div className="cp con-latest">
              <div className="cpr con-plate">
                <div className="one1">
                <h3>Digital Marketer</h3>
                <div className='second-com'>
                <IoMdTime color='rgba(84,180,211)'  size={25} />
                <p>Posted 24 hours ago</p>
                </div>

                <div className='third-com'>
                <div className="ful">
                   <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                </div>

                <div className="pz fsz">
                 <p> $ 38k - 40k</p>
                </div>
                </div>



                
                
              </div>

                <div className="hr mb-2"></div>

              
                <div className="two2">
                  <div className='d-flex'>
                  <div className=' twoimg'>
                  <img src={googleimg} width={45} alt="google logo" className='p-2' />
                  </div>
                  <div className='tex'>
                    <h4>Google</h4>
                    <div className="loc joc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                  </div>

                  </div>
                <div className="apy-btn btnlock mt-3">
                    <button className='btn bg-info text-center text-white'>Apply Now</button>
                </div>

                  
                </div>
                </div>

                
            </div>

            
            <div className="cp con-latest">
              <div className="cpr con-plate">
                <div className="one1">
                <h3>Digital Marketer</h3>
                <div className='second-com'>
                <IoMdTime color='rgba(84,180,211)'  size={25} />
                <p>Posted 24 hours ago</p>
                </div>

                <div className='third-com'>
                <div className="ful">
                   <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                </div>

                <div className="pz fsz">
                 <p> $ 38k - 40k</p>
                </div>
                </div>



                
                
              </div>

                <div className="hr mb-2"></div>

              
                <div className="two2">
                  <div className='d-flex'>
                  <div className=' twoimg'>
                  <img src={googleimg} width={45} alt="google logo" className='p-2' />
                  </div>
                  <div className='tex'>
                    <h4>Google</h4>
                    <div className="loc joc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                  </div>

                  </div>
                <div className="apy-btn btnlock mt-3">
                    <button className='btn bg-info text-center text-white'>Apply Now</button>
                </div>

                  
                </div>
                </div>

                
            </div>



            <div className="cp con-latest">
              <div className="cpr con-plate">
                <div className="one1">
                <h3>Digital Marketer</h3>
                <div className='second-com'>
                <IoMdTime color='rgba(84,180,211)'  size={25} />
                <p>Posted 24 hours ago</p>
                </div>

                <div className='third-com'>
                <div className="ful">
                   <small className='bg-info-subtle text-info p-1 rounded'>Full Time</small>
                </div>

                <div className="pz fsz">
                 <p> $ 38k - 40k</p>
                </div>
                </div>



                
                
              </div>

                <div className="hr mb-2"></div>

              
                <div className="two2">
                  <div className='d-flex'>
                  <div className=' twoimg'>
                  <img src={googleimg} width={45} alt="google logo" className='p-2' />
                  </div>
                  <div className='tex'>
                    <h4>Google</h4>
                    <div className="loc joc">
                    <GrLocation />
                    <p>United Kingdom</p>
                    </div>
                  </div>

                  </div>
                <div className="apy-btn btnlock mt-3">
                    <button className='btn bg-info text-center text-white'>Apply Now</button>
                </div>

                  
                </div>
                </div>

                
            </div>


            

                    </div>
                </div>
            </div>
        </LoggedLayout>
        

    </div>
  )
}

export default SingleJob