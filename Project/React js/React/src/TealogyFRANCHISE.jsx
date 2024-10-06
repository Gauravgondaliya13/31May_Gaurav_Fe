import React from "react";
import Fr1 from './assets/Image/image-1-29052401290056.jpeg'
import {MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from "mdb-react-ui-kit";

function Tef() {
    return (
        <>
        <MDBContainer>
            
            <h1 className="text-center mt-2 mb-4">TEALOGY FRANCHISE MODEL</h1>
            <div className="d-flex flex-row">
                <div className="d-flex text-center">
                <MDBCard className="">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={Fr1} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        <MDBCardTitle>
                        300+ SQFT.
                            </MDBCardTitle>
                            <MDBCardText>
                            Affordable cafe franchise opportunity perfectly balanced in size, designed for your success.
                            </MDBCardText>
                            <MDBBtn href='#'>Apply Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>


                <div className="d-flex text-center">
                    
                    <MDBCard className="">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={Fr1} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        <MDBCardTitle>
                        300+ SQFT.
                            </MDBCardTitle>
                            <MDBCardText>
                            Affordable cafe franchise opportunity perfectly balanced in size, designed for your success.
                            </MDBCardText>
                            <MDBBtn href='#'>Apply Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>


                <div className="d-flex text-center">
                    
                    <MDBCard className="">
                        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                            <MDBCardImage src={Fr1} fluid alt='...' />
                            <a>
                                <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                        <MDBCardTitle>
                        300+ SQFT.
                            </MDBCardTitle>
                            <MDBCardText>
                            Affordable cafe franchise opportunity perfectly balanced in size, designed for your success.
                            </MDBCardText>
                            <MDBBtn href='#'>Apply Now</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>

            </MDBContainer>
        </>
    )
}
export default Tef