import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row } from 'react-bootstrap'
export default function Header() {
  return (
    <div>
      <Container className='p-5'>
       <Row>
        <div className='col-md-3'>Call Us :(+91)9998003879</div>
        <div className='col-md-6'>
            <input type='text' placeholder='search all items here..' className='form-control' />
        </div>
        <div className='col-md-2 ms-5'>
            
            <Link to="/create-account"><button className='btn btn-sm btn-dark text-white'>Create Account</button></Link>
        </div>

       </Row>  
      </Container>
    </div>
  )
}
