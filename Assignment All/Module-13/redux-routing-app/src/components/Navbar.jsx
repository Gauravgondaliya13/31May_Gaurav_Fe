import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'
export default function Nav() {
  return (
    <div>
      <Navbar className='bg-dark text-white navbar-expand-md navbar'>
       <Link to="" className='navbar-brand ms-4'>React-redux-routing App</Link>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About</Link></li>
            <li><Link to="/our-services">Our services</Link></li>
            <li><Link to="/create-account">Create Account</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
       
        </ul>
      </Navbar>
    </div>
  )
}
