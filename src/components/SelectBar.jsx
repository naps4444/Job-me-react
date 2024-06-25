import React from 'react'
import { Link } from 'react-router-dom';

const SelectBar = () => {
    function ButtonLink({ to, children }) {
        return <Link to={to}><button>{children}</button></Link>;
      }


  return (
    
        <div className=" sec">


<div className="hr-select">
    <div className="select">
        <select>
            <option value="">Select Job Type</option>
        </select>
    </div>

    <div className="select">
        <select>
            <option value="">Select Industry</option>
        </select>
    </div>

    <div className="select">
        <select>
            <option value="">Select Mode of Work</option>
        </select>
    </div>

    <div className="select">
        <select>
            <option value="">Select Location</option>
        </select>
    </div>

    <div className="game">
        <ButtonLink to='/joblisting'>
        <button className='btn bg-info text-white mx-auto'>Find Jobs</button>
        </ButtonLink>
        
    </div>
</div>


    </div>
  )
}

export default SelectBar