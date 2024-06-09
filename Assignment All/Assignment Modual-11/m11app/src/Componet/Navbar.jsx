import React from "react";
import { Nav,NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
function Navbar(){
return(
    <>
       <Nav className="nav navbar navbar-expand-md bg-white shadow">
        <NavbarBrand className="ms-5 text-dark fs-1"><b>HANDTIME</b></NavbarBrand>
        <ul className="navbar-link">
            <li><Link to ="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Product">Products</Link></li>
            <li><Link to="/Test">Testimonal</Link></li>
            <li><Link to="/Cont">Contect Us</Link></li>
        </ul>
       </Nav>
       </>
)
}
export default Navbar