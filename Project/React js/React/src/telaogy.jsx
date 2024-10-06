import React from "react";
import { MDBContainer  } from "mdb-react-ui-kit";
import { Swiper, SwiperSlide } from 'swiper/react';
import Burger from './assets/Image/Burger.jpg'
import Chhach from './assets/Image/Chhach.jpg'

function Tealogy(){
    return(
        <>

       <MDBContainer className="">
        {/* <MDBCarousel showIndicators showControls fade   >
            <MDBCarouselItem itemId={1}>
            <img src={Burger} alt="" className="w-25"/>
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
            <img src={Chhach} alt="" className="w-25"/>
            </MDBCarouselItem>
        </MDBCarousel> */}


<Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src={Burger} alt="" width="70%" className="align-content-center"/>
      </SwiperSlide>
      <SwiperSlide>

        <img src={Chhach} alt="" width="70%"/>
      </SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
       </MDBContainer>
        </>
    )
}

export default Tealogy