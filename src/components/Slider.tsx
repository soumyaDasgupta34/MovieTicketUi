import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image1 from "../images/slider1.avif";
import Image2 from "../images/slider2.avif";
import Image3 from "../images/slider3.avif";
import Image4 from "../images/slider4.avif";

const Slider = () => {
  return (
    <Carousel>
      <div>
        <img src={Image1} />
      </div>
      <div>
        <img src={Image2} />
      </div>
      <div>
        <img src={Image3} />
      </div>
      <div>
        <img src={Image4} />
      </div>
    </Carousel>
  );
};

export default Slider;
