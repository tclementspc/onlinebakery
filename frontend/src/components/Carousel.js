import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { images } from "../Helpers/CarouselData";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mt-3">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h4 className="rollName">Original Cinnamon Roll</h4>
          <p className="cost">$30 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h4 className="rollName">Cookies n Cream Roll</h4>
          <p className="cost">$33 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h4 className="rollName">Red Velvet Cinnamon Roll</h4>
          <p className="cost">$32 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h4 className="rollName">Cookie Monster Roll</h4>
          <p className="cost">$33 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h4 className="rollName">Birthday Cake Roll</h4>
          <p className="cost">$32 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h4 className="rollName">Outrageous Fudge Roll</h4>
          <p className="cost">$32 per dozen</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default ControlledCarousel;
