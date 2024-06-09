import React from "react";
import Navbar from "./Navbar";
import Gaurav1 from '../assets/images/a-1.jpg'
import Gaurav2 from '../assets/images/a-2.jpg'
import { Container , Row , Button} from "react-bootstrap";
function About(){
return(
    <>
    <Navbar />  

   <Container  className=" mt-5 " >
    <Row>
        <div className="col-md-4   ">
    <img src={Gaurav1} alt="Watch" title="Most Popular" width="100%" className="mt-5"/>
    </div>
    <div className="col-md-4 Watch2 ">
    <img src={Gaurav2} alt="Watch" width="100%" />
    </div>
    <div className="col-md-3 Our">
        <h3>About Our Shop</h3>
        <p>There are many variations of passages of Lorem Ipsum There are many variations of passages of Lorem Ipsum</p>
        <br />
        <Button className="p-2 bg-success border-0 w-50">Read More</Button>
    </div>
    </Row>
   </Container>

    </>
)
}
export default About