import React from 'react'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { TfiClose } from "react-icons/tfi";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from 'react'
import logo from '../assets/JOBME.png'

const Header = () => {
    const [ expanded, setExpanded ] = useState(false);
    const handleToggle = () => {
        setExpanded(!expanded);
    };
  return (
    <div className='position-sticky top-0'>
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
            <Link to="/" className='text-decoration-none text-dark fs-5 nav-link' ><a href="/">Home</a> </Link>
            <Link to="/joblisting" className='text-decoration-none text-dark fs-5 nav-link' ><a href="#">Job listings</a></Link>
            <Link to="/contact" className='text-decoration-none text-dark fs-5 nav-link'><a href="/contact">Contact Us</a></Link>
            
          </Nav>

          <Nav className="ms-auto btnhead">
            <Link to="/login" className='logb text-decoration-none text-white fw-light nav-link' > 
            <button>Log in</button>
            </Link>
            <Link to="/sign" className='signb text-decoration-none  fw-light nav-link' > 
            <button>Sign up</button>
            </Link>
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header