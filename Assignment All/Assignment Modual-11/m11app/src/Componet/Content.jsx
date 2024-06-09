import React from "react";
import { Container , Button} from "react-bootstrap";
import { Carousel } from "react-bootstrap";
function Content() {
  return (
    <>
      <Container fluid className="">
        {/* Slider */}
        <div className="slide">
          <Carousel>
            <Carousel.Item className="Item-1">
              <h1 className="text-white">STYLISH WATCHES</h1>
              <p  className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus <br />
                quidem maiores perspiciatis, illo maxime voluptatem a itaque
                suscipit. <br /> <br />
                <Button className="bg-success border-0 p-3">Contact us</Button>
                &nbsp;  &nbsp;
                <Button className="p-3">About Us</Button>
              </p>
            </Carousel.Item>


            <Carousel.Item className="Item-1">
              <h1 className="text-white">STYLISH WATCHES</h1>
              <p  className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus <br />
                quidem maiores perspiciatis, illo maxime voluptatem a itaque
                suscipit. <br />
                <br />
                <Button className="bg-success border-0 p-3 ">Contact us</Button>
                &nbsp;  &nbsp;
                <Button className="p-3">About Us</Button>
              </p>
            </Carousel.Item>

            <Carousel.Item className="Item-1">
              <h1 className="text-white">STYLISH WATCHES</h1>
              <p  className="text-white">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus <br />
                quidem maiores perspiciatis, illo maxime voluptatem a itaque
                suscipit. <br /> <br />
                <Button className="bg-success border-0 p-3">Contact us</Button >
                &nbsp; &nbsp;
                <Button className="p-3">About Us</Button>
              </p>
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}
export default Content;
