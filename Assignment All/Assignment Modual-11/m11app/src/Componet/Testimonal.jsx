import React from "react";
import Navbar from './Navbar'
import Cus from "../assets/images/client.jpg"
import { Container , Card ,Carousel} from "react-bootstrap";

function Testimonal(){
    return(
        <>
        <Navbar />
       
        <h1 align="center" className="mt-5">Testimonial </h1>
        <Container className="" align="center">
            <Card className="test w-75 p-3 ">
                 <img src={Cus} alt="Client" className="img-fluid rounded-circle "/>
                <h3 className="mor">Morojink </h3>
                <p className="per">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <br />labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laborisbr
                 <br />nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in <br />voluptate velit esse cillum dolore eu fugia
                </p>
            </Card>
        </Container>
        </>
    )
}
export default Testimonal