import React from "react";
import Navbar from "./Navbar";
import Footer  from "./Footer";
import { Container ,Row , Button} from "react-bootstrap";

function Contect(){
    return(
        <>
            <Navbar />
            <Container>
                <Row className="p-5">
                    <div className="col-md-5">
                        <h1>Contact Us </h1>
                        
                        
                            <input type="text" placeholder="Your Name *"  className="shadow p-3 w-100 border-0" required/>
                            <br /><br />
                            <input type="phone" placeholder="Phone Number *"  className="shadow p-3 w-100 border-0" required/>
                            <br /><br />
                            <input type="email" placeholder="Email *"  className="shadow p-3 w-100 border-0" required/>
                            <br /><br />
                            <textarea name="Message" cols="53" rows="4" id="" placeholder="Message" className="resize-none"></textarea>
                           <br /><br />
                            <Button className="p-3 w-25">Send</Button>
                    </div>

                    <div className="col-md-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6799314943473!2d70.77238027498382!3d22.29011104326532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sTOPS%20Technologies!5e0!3m2!1sen!2sin!4v1717931243040!5m2!1sen!2sin" width="600" height="450" ></iframe>
                    </div>
                </Row>
            </Container>
                <Footer />
        </>
    )
}
export default Contect