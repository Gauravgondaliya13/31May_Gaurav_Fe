import React from "react";
import Navbar from "./Navbar";
import { Container , Row , Card , Button} from "react-bootstrap";
import Gaurav from "../assets/images/w1.png"
import Gaurav1 from "../assets/images/w2.png"
import Gaurav2 from "../assets/images/w3.png"
import Gaurav3 from "../assets/images/w4.png"
import Gaurav4 from "../assets/images/w5.png"
import Gaurav5 from "../assets/images/w6.png"
function Product(){
return(
<>
<Navbar />
<Container className="">
            <h2 className="bg-success text-white  w-25 p-3"><b>Top Sale Watches</b> </h2>
    <Row className="ms-5 mt-5">
        <div className="col-md-3">
            <Card>
                <img src={Gaurav} alt="" className="p-4 align-center" width="75%" />
                    <p className="">
                    Men's Watch <br />
                    $ 300 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>
            <div className="col-md-3">
            <Card>
                <img src={Gaurav1} alt="" className="p-4 ms-5"  width="55%" />
                    <p className="">
                    Men's Watch <br />
                    $ 400 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>

            <div className="col-md-3">
            <Card>
                <img src={Gaurav2} alt="" className="p-4 ms-5" width="63%" />
                    <p className="">
                    Men's Watch <br />
                    $ 600 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>
    </Row>
         <Row className="mt-5">
            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>

            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>

            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>
        </Row>
</Container>

<hr className="" />



<Container className="">
            <h2 className="bg-success text-white  w-25 p-3"><b>Feature Watches</b> </h2>
    <Row className="ms-5 mt-5">
        <div className="col-md-3" >
            <Card>
                <img src={Gaurav3} alt="" className="p-4 ms-5 align-center" width="58%" />
                    <p className="">
                    Men's Watch <br />
                    $ 300 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>
            <div className="col-md-3">
            <Card>
                <img src={Gaurav4} alt="" className="p-4 ms-5"  width="55%" />
                    <p className="">
                    Men's Watch <br />
                    $ 400 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>

            <div className="col-md-3">
            <Card>
                <img src={Gaurav5} alt="" className="p-4 ms-5" width="63%" />
                    <p className="">
                    Men's Watch <br />
                    $ 600 <span className="float-end">Like</span>
                    </p>
            </Card>
            </div>
    </Row>
         <Row className="mt-5">
            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>

            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>

            <div className="col-md-3" align="center">
            <Button>Add to Cart</Button>
            </div>
        </Row>
</Container>


</>
)

}
export default Product