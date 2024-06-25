import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react'
import logo from '../assets/JOBME.png'
import profile from '../assets/profile.png'
import logout from '../assets/logout.png'
import UserProfileMenu from './UserProfileMenu'
import { BiShow } from 'react-icons/bi'


const LoggedHead = () => {
    const [ expanded, setExpanded ] = useState(false);
    const [show, setShow] = useState(false)
    const toggleShow = ()=>{
      setShow(!show)
    }
    const handleToggle = () => {
        setExpanded(!expanded);
    };
  return (
    <div className='position-sticky top-0 zz'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
             <Link to="/" className='text-decoration-none text-success fw-bold'>
                <img src={logo} alt="" />
             </Link> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle}>
            {expanded ? <TfiClose size={28} /> : <CiMenuBurger size={28}/>}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto gp">
            <Link to="/" className='text-decoration-none text-dark fs-5 nav-link' ><a href="/">Applied Jobs</a> </Link>
            <Link to="/" className='text-decoration-none text-dark fs-5 nav-link' ><a href="/job">Job listings</a></Link>
            <Link to="/contact" className='text-decoration-none text-dark fs-5 nav-link'><a href="/contact">Contact Us</a></Link>
            
          </Nav>

          <div className='lolo'>
          <Nav className="ms-auto loggedhead position-relative">
            <button onClick={toggleShow} className='logb text-decoration-none text-white fw-light nav-link' > 
            <img src={profile} alt="profile btn" />
            </button>
            {show && <div className='position-absolute' style={{right: '2px', top: '12px'}}>
              <UserProfileMenu />
              
            </div>}
            <p className='vr '>|</p>
            <Link to="/sign" className='signb text-decoration-none  fw-light nav-link' > 
            <i mg src={logout} alt="logout btn" />
            </Link>
          </Nav>
          </div>



          <div className="btndd">
          <Nav className="ms-auto btnhead">
            <Link to="/" className='logb redu text-decoration-none text-white fw-light nav-link' > 
            <button className=''>Dash Board</button>
            </Link>
            <Link to="/login" className='signb text-decoration-none  fw-light nav-link' > 
            <button>Log Out</button>
            </Link>
          </Nav>
          </div>


        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default LoggedHead