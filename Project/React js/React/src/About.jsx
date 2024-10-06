import React from "react";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
function About() {
    return (
        <>
            <MDBContainer>
                <div className="d-flex flex-row w-100">
                    <div className="justify-content-between  w-50 mt-5">
                        <h1>TEALOGY</h1>
                        <p>
                            Tealogy is an Indian cafe chain that focuses on tea-based beverages. Tealogy was founded
                            in 2018 in Indore, India. Now we have 320+ tea cafe outlets across India. We offer a
                            variety of tea and beverages with some snacks as well. We provide the best taste of the kulhad tea & coffee at pocket prices. We always try to provide the best experience and complete satisfaction to our customers through our services with our variety of foods, beverages


                            <br /><br />
                            We provide the best place for sitting in our cafe where you can enjoy yourself with your family and friends and can make some unforgettable memories with them. At Tealogy, we are not only serving food and beverages. But we also try to make our customers happy by serving tastes that rejuvenate the mood.
                        </p>

                        <h1 className="">140+  &nbsp;&nbsp;&nbsp; 320+ &nbsp;&nbsp;&nbsp; 2B+</h1>
                        <h5>Cities &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Outlets &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; Kulhad Served</h5>

                    </div>
                    {/* Form */}
                        <div className=" bg-warning w-50 border-0 rounded-5 mt-5 ms-5" >
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
            </MDBContainer>

        </>
    )
}
export default About