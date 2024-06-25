import React, { useState } from 'react'
import LoggedLayout from '../components/LoggedLayout'
import SuccessModal from '../components/SuccessModal'

const JobApply = () => {
  
  const [showModal, setShowModal] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
    if (!name && !email) {
        console.log("Please fill all fields");
    } else {
        console.log("Welcome User");
    }
    setName("");
    setEmail("");
    setPhone("");
    setText("");
};
  return (
    <div>
        <LoggedLayout>
          <SuccessModal centered showModal= {showModal} setShowModal= {setShowModal} />
            <div className='container apply-job'>
            <form onSubmit={handleSubmit} className='bg-info-subtle fr' >
              
                
                <div className="all">

                <div className='as'>
                  <div className='bs'>
                  <label className=''>First name*</label>
                  <input type="text" className='form-control'  value={name} />
                  </div>

                  <div className='bs'>
                  <label className=''>Last name*</label>
                  <input type="text" className='form-control' value={name} />
                  </div>
                </div>
                  
                


                <div className='as twoas'>
                  <div className='bs'>
                  <label className=''>Email address*</label>
                  <input type="text" className='form-control' value={email} />
                  </div>

                  <div className='bs'>
                  <label className=''>Phone number*</label>
                  <input type="tel" className='form-control' value={phone} />
                  </div>
                </div>
                
                <div className="bst">
                <label >Cover letter*</label>
                <textarea name="message" rows={4} className='form-control' id='taa' value={text} ></textarea>

                </div>

                <div className="cvu">
                  <label>Upload CV/Resume*</label>
                  <div className='filer '>
                  <input className='bg-white' type="file" />
                  </div>
                  
                  <p>File type should not be larger than 12MB. Supported file types: doc. docx. pdf. </p>
                  <div className="clk">
                    <input type="checkbox" className='bg-white' />
                    <p>I agree to the <span className='text-info'>Terms & Conditions</span></p>
                  </div>
                </div>




                <div className="con-btn2">
                    <button onClick={()=> setShowModal(true)} className=' btn bg-info text-light'>Apply Now</button>
                </div>


                </div>
                


                

            </form>
            </div>



        </LoggedLayout>
    </div>
  )
}

export default JobApply