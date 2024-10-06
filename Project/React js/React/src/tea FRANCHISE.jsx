import React from "react";
import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Menu from './assets/Image/tealogy-menu-150x150.webp'
import Logo from './assets/Image/tealogy-logo-1.png'
import Brand from './assets/Image/tealogy-brand-150x150.webp'
import Proven  from './assets/Image/tealogy-business-model-150x150.webp'
import Roi  from './assets/Image/tealogy-roi-150x150.png'
import tea  from './assets/Image/tealogy-tea-150x150.png'
import train  from './assets/Image/tealogy-training-150x150.webp'
function Fren() {
    return (
        <>
            <MDBContainer>
                <MDBRow className="mt-5">
                    <div className="col-md-4">

                        <div className="bg-light  text-end">
                            <h4 className="align-end">
                            <img src={Menu} alt=""  width={60} height={60} /> 
                                Scrumptious Menu with Pocket-Friendly                              </h4>
                                <div>
                                

                                </div>
                        </div>

                        <div className="bg-light text-end mt-5">
                            <h4>
                                <img src={tea} alt=""  width={60}/>
                                We offer Hygienic & Standard Tasty Food 
                                </h4>
                        </div>
                        <div className="bg-light text-end mt-5">
                            <h4>
                                <img src={train} alt=""  width={60}/>
                                We provide Training to Staff members
                                </h4>
                        </div>

                    </div>
                    <div className="col-md-3 ms-5">
                            <img src={Logo} alt="" height={400} />


                    </div>
                    <div className="col-md-4 p-5">
                        <div className="">
                            <h4>
                            <img src={Brand} alt="" width={60} />
                            &nbsp; Well- Known Brand
                            </h4>
                        </div>

                        <div className="mt-5">
                            <h4>
                            <img src={Proven} alt=""  width={60}/>
                           &nbsp; Proven Business Model 
                            </h4>
                        </div>

                        <div className="mt-5">
                            <h4>
                            <img src={Roi} alt=""  width={60}/>
                           &nbsp; Proven Business Model 
                            </h4>
                        </div>


                    </div>

                </MDBRow>
            </MDBContainer>

        </>
    )
}
export default Fren 