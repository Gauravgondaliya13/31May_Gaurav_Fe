import React from "react";
import { Container,Row } from "react-bootstrap";
function Footer()
{
    return(
        <>
        <Container fluid  className="p-5 bg-dark text-white">
         
            <Row>
                <div className="col-md-4">
                    <h3>HANDTIME</h3>
                </div>
                <div className="col-md-4">
                    <h3>Page Links</h3>
                     <ul className="footer-nav">
                        <li><a href="">Home</a></li>
                        <li><a href="">Our Gallery</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy & Policy</a></li>
                     </ul>
                </div>
                
                <div className="col-md-4">
                    <h3>Our office address</h3>
                    <p>150ft Ring Road Rajkot. <br />
                    Mo:998989898

                    </p>
                    
                </div>
                
            </Row>
        </Container>
        </>
    )
}
export default Footer