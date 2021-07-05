import React from "react";
import { Carousel, Container } from "react-bootstrap";
import image1 from "../images/slide7.jpg";
import image2 from "../images/slide8.jpg";
import image3 from "../images/slide5.jpg";
import image4 from "../images/slide1.jpg";

export default function Slider() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item className="big-slider">
          <img className="slide-img" src={image1} alt="first slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>I need your BOOK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="big-slider">
          <img className="slide-img" src={image2} alt="second slide" />

          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>I need your BOOK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="big-slider">
          <img className="slide-img" src={image3} alt="third slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>I need your BOOK</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="big-slider">
          <img className="slide-img" src={image4} alt="forth slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>I need your BOOK</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
