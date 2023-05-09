import React from "react";
import { Carousel } from "react-responsive-carousel";
import { CarouselWrapper } from "./HomeCarousel.styles";

function HomeCarousel() {
  return (
    <CarouselWrapper data-testid = "ImageCarousel">
      <Carousel autoPlay={true} infiniteLoop={true} interval={2000}>
        <div>
          <img
            className="carousel-images"
            src={require("../../assets/Images/image5.jpg")}
          />
        </div>
        <div>
          <img
            className="carousel-images"
            src={require("../../assets/Images/image2.jpg")}
          />
        </div>
        <div>
          <img
            className="carousel-images"
            src={require("../../assets/Images/image3.jpg")}
          />
        </div>
        <div>
          <img
            className="carousel-images"
            src={require("../../assets/Images/image4.jpg")}
          />
        </div>
        <div>
          <img
            className="carousel-images"
            src={require("../../assets/Images/image6.jpg")}
          />
        </div>
      </Carousel>
    </CarouselWrapper>
  );
}

export default HomeCarousel;
