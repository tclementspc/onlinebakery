import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { images } from "../Helpers/CarouselData";



const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
 
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-60"
          src={images[index].img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Original Cinnamon Roll</h3>
          <p>$30 per dozen/$15 half-dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Oreo Cinnamon Roll</h3>
          <p>$33 per dozen/$16 half-dozen</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Red Velvet Cinnamon Roll</h3>
          <p>
            $32 per dozen/$16 per half dozen.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Cookie Monster Roll</h3>
          <p>
            $33 per dozen/$16 per half dozen.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={images[index].img}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Birthday Cake Roll</h3>
          <p>
            $34 per dozen/$17 per half dozen.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>

  );
}

export default ControlledCarousel;














