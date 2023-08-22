import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const BackgroundCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
    >
      <div>
        <img src="./images/bg-vine.jpg" alt="Slide 1" />
      </div>
      <div>
        <img src="./images/bg-vine2.jpg" alt="Slide 2" />
      </div>
    </Carousel>
  );
};

export default BackgroundCarousel;
