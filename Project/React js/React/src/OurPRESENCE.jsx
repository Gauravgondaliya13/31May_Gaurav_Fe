import React from "react";
import { MDBContainer,MDBBtn } from "mdb-react-ui-kit";
import Map from './assets/Image/outlet-map-tealogy.webp'


function Our(){
    return(
        <>
        <MDBContainer>
            <div className="d-flex flex-row">
                <div className="w-50 mt-5 p-5">
                    <h1>OUR PRESENCE</h1>
                    <p>We have 320+ outlets all over India and more than 15+ outlets only at Indore. We offer franchise opportunities all over India. If you are passionate about business or want to be an entrepreneur! fill the below mention franchise details form and complete the first step towards your dream business. This is not only the café franchise but also a platform to connect passionate Entrepreneurs like you. </p>

                        <MDBBtn className="rounded-3 bg-warning text-black">Apply Now</MDBBtn>
                    
                    
                    </div>
                
                <div className="w-50 mt-3" >
                    
                        <img src={Map} alt="Map" className="w-75"/>
                  



                    </div>



            </div>
        </MDBContainer>
        </>
    )
}
export default Our