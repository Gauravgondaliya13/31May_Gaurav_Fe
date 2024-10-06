import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import {Container,Row} from 'react-bootstrap'
import Header from './Header'
import Nav from './Navbar'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'


export default function Contact() {
//destructuring of data    //
const[data,setData]=useState([]);
// send email stored all informations in var
const serviceId="service_3n2653n";
const templateId="template_8ndisdu";
const publicKeyId="pTcb6q47xuRiZaSQm";
const name=useRef("");
const email=useRef("");
const subject=useRef("");
const phone=useRef("");
const message=useRef("");
const Navigate=useNavigate();

// create a form Handeler 
const addFormData=(e)=>{
    e.preventDefault();
    var insert={
        name:name.current.value,  
        email:email.current.value,
        subject:subject.current.value,
        phone:phone.current.value,
        message:message.current.value
    }
    // create an account and stored users
    // send all details of contact us in email
    emailjs.sendForm(serviceId,templateId,e.target,publicKeyId);
    axios.post(`http://localhost:8000/contact-us`,insert).then(()=>{
        Swal.fire({
            title: "Thanks!",
            text: "Thanks for contact with us we will contact with you soon!",
            icon: "success"
          });

          Navigate('/contact-us');
    });

    e.target.reset();
   

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
<div className='col-md-8'><h2>Contact  Form</h2>
<form onSubmit={addFormData}>
<div className='form-group mt-3'>
<input type='text' placeholder='Name' ref={name} name='name' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='text' placeholder='email' ref={email} name='email' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='text' placeholder='phone' ref={phone} name='phone' className='form-control' />
</div>


<div className='form-group mt-3'>
<input type='text' placeholder='subject' ref={subject} name='subject' className='form-control' />
</div>


<div className='form-group mt-3'>
<textarea placeholder='address' ref={message} name='message' className='form-control'></textarea>
</div>


<div className='form-group mt-3'>
<input type='submit'  value="Send" className='btn btn-sm btn-dark text-white' />

</div>

</form>

</div>

</Row>


</Container>
</div>
</div>
)
}
