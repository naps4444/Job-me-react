import React from 'react'
import popdp from '../assets/popdp.png'
import { HiOutlineUser } from "react-icons/hi2";
import { MdOutlineSettings } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";


const UserProfileMenu = () => {
  return (
    
    <div className='upm'>
      <div className="pop-head">
      <h3>Account Information</h3>
      </div>
        
      <div className="pop-list mt-4">
        <div className="pop-li">
          <HiOutlineUser size={25}/>
          <a href="">My profile</a>
        </div>

        <div className="pop-li mt-2">
          <MdOutlineSettings size={25}/>
          <a href="">Settings</a>
          
        </div>

        <div className="pop-li mt-2">
          <BsQuestionCircle size={25}/>
          <a href="">help Centre</a>
        </div>
      </div>

      <div className="pop-foot mt-2">
        <div className="pop-img">
          <img src={popdp} alt="display picture" />
        </div>
 
        <div className="pop-texts p-2 mt-3">
          <h5>Alicia Kayla</h5>
          <p className='mt-2'>aliciakayla5@gmail.com</p>
        </div>
      </div>

    </div>
    
  )
}

export default UserProfileMenu