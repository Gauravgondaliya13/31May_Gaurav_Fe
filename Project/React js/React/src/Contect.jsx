import React from "react";
import { MDBFooter , MDBBtn, MDBContainer} from "mdb-react-ui-kit";
// import { MDBContainer } from "mdb-react-ui-kit";
import Logo from './assets/Image/tealogy-logo.webp'
function Contect(){
    return(
        <>
        <MDBFooter className="bg-success">
            <MDBContainer>
                <div className="d-flex flex-row">
                    <div className="mt-5">
                        <img src={Logo} alt=""/>
                        <p className="mt-2">Contact us today to learn more about franchise opportunities and start your journey <br />
                            towards a rewarding tea business! </p>
                            <h4>+91 9824235753</h4>

                            <p>
                            Head Office - 503-A/B, 5th Floor Princess Business Sky Park Block no. 23,24 SCH <br />
                            No.54, PU-3 Commercial, Opp C21, AB Rd, Indore, Madhya Pradesh 452001
                            </p>
                            <p>
                            Company Outlet - UG - 7, PL-14, Airen Heights PU-3, Sch. No 54, Vijay Nagar, <br />
                            Indore 
                            </p>
                    </div>



                    {/* form */}
                    <div className="flex ">
                        hi


                        <div className=" bg-warning w-100 border-0 rounded-5 mt-5 ms-5" >
                        <div className="ms-5">
                            <h3 className="text-dark ms-3 mt-3 mb-3">Ready to brew up <br />success with TEALOGY?</h3>
                            <input type="text" placeholder="Name* " required className=" rounded-3 p-2  ms-2 h-75 border-0 bg-link-secondary opacity-3" />
                            <input type="text" placeholder="Last Name * " required className=" rounded-3 p-2   ms-3 h-75 border-0 " />
                            <br /><br />
                            <input type="tel" placeholder="Contect Number *" required className="w-75  p-2 rounded-3  ms-2 border-0" />
                            <br /><br />
                            <input type="text" placeholder="City *" required className="rounded-3 p-2  ms-2 h-75 border-0 bg-link-secondary opacity-3" />
                            <input type="text" placeholder="Zip/Postal Code *" className="rounded-3 p-2  ms-3 h-75 border-0 bg-link-secondary opacity-3" />
                            <br /><br />
                            <select name="" id="" className="w-75 rounded-3 p-2  ms-2 h-75 border-0 bg-link-secondary ">
                                <option value="" className="w-100">Your Bugaget</option>
                                <option value="">Pocet Cafe 6-10 Lacks*</option>
                                <option value="">Medium Cafe 15-17 Lacks*</option>
                                <option value="">Premimum Cafe 20-25 Lacks*</option>
                            </select>
                            <br /><br />

                            <input type="text" placeholder="Your Message" className="w-75 rounded-3 p-2  ms-2 h-75 border-0 bg-link-secondary opacity-3" />
                            <br /><br />
                            <MDBBtn className="ms-3 mb-3">Request A Call Back!</MDBBtn>

                        </div>

                    </div>
                    </div>
                </div>

                </MDBContainer>
        </MDBFooter>
        
        </>
    )
}
export default Contect