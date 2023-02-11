import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./calecita.css";


function Calecita() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="menu__pages">
          <img id="menu__img" src="/assets/pastas.png" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="menu__pages">
          <img id="menu__img" src="/assets/empanadas.png" />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="menu__pages">
          <img id="menu__img" src="/assets/otros.png" />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Calecita;
