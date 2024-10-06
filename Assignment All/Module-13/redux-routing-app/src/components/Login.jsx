import React from 'react'
import { Link } from 'react-router-dom'
import {Container,Row} from 'react-bootstrap'
import Header from './Header'
import Nav from './Navbar'
export default function Login() {
return (
<div>
<div>
<Header />
<Nav />
<Container className='p-5 mt-5 shadow w-100 mx-auto'>
<Row>
<div className='col-md-4'>
<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbV6N8JDxfOKuoh3eWCmyaR32hKnldSBN7tQ&s' alt='login' className='img-fluid' />
</div>
<div className='col-md-8'><h2>Login Here</h2>
<form>
<div className='form-group mt-3'>
<input type='text' placeholder='email' className='form-control' />
</div>

<div className='form-group mt-3'>
<input type='password' placeholder='password' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='submit' placeholder='register' value="Login" className='btn btn-sm btn-dark text-white' />
</div>
<div className='form-group mt-3'>
Don't have an account ? <Link to="/create-account">Create your account here</Link>
</div>
</form>
</div>
</Row>
</Container>
</div>
</div>
)
}
