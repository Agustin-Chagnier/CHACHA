import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import "./calecita.css";


function Calecita() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <div className="menu__pages">
          <div className="menu__pages--box">
          <h2>SARASA 1</h2>
          <h3></h3>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="menu__pages">
          <div className="menu__pages--box">
          <h2>SARASA 4</h2>
          <h2>SARASA 5</h2>
          <h2>SARASA 6</h2>
          </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="menu__pages">
          <div className="menu__pages--box">
          <h2>SARASA 7</h2>
          <h2>SARASA 8</h2>
          <h2>SARASA 9</h2>
          </div>
      </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Calecita;
