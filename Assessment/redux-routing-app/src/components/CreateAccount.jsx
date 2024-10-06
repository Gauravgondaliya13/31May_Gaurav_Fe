import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import {Container,Row} from 'react-bootstrap'
import Header from './Header'
import Nav from './Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function CreateAccount() {
//destructuring of data    //
const[data,setData]=useState([]);
const email=useRef("");
const password=useRef("");
const username=useRef("");
const phone=useRef("");
const address=useRef("");
const Navigate=useNavigate();

// create a form Handeler 
const addFormData=(e)=>{
    e.preventDefault();
    var insert={
        email:email.current.value,
        password:password.current.value,
        username:username.current.value,
        phone:phone.current.value,
        address:address.current.value
    }
    // create an account and stored users
    axios.post(`http://localhost:8000/users-auth`,insert).then(()=>{
        Swal.fire({
            title: "Thanks!",
            text: "Your account created successfully!",
            icon: "success"
          });
    });
    Navigate('/login');

}
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
<div className='col-md-8'><h2>Create Account here</h2>
<form onSubmit={addFormData}>
<div className='form-group mt-3'>
<input type='text' placeholder='email' ref={email} className='form-control' />
</div>

<div className='form-group mt-3'>
<input type='password' placeholder='password' ref={password} className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='text' placeholder='username' ref={username} className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='text' placeholder='phone' ref={phone} className='form-control' />
</div>


<div className='form-group mt-3'>
<textarea placeholder='address' ref={address} className='form-control'></textarea>
</div>


<div className='form-group mt-3'>
<input type='submit' placeholder='register' value="register" className='btn btn-sm btn-dark text-white' />
<Link to="" className='ms-3'>Forget Password</Link>
</div>

<div className='form-group mt-3'>
Already have an account ? <Link to="/login">Login here</Link>
</div>
</form>

</div>

</Row>


</Container>
</div>
</div>
)
}
