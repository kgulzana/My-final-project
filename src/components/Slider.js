import React from "react";
import { Carousel, Container } from "react-bootstrap";
import images from "../images/book1.jpg";

export default function Slider() {
  return (
    <Container>
      <Carousel>
        <Carousel.Item className="slide-img">
          <img className="images" src={images} alt="first slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>Возможность</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide-img">
          <img className="images" src={images} alt="second slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>Возможность</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="slide-img">
          <img className="images" src={images} alt="third slide" />
          <Carousel.Caption>
            <h3>BookExchange.kg</h3>
            <p>Возможность</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
