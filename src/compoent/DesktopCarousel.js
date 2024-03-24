import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import arroz1 from "../img/arroz1.webp";
import arroz2 from "../img/arroz2.webp";
import arroz3 from "../img/arroz3.webp";
import arroz4 from "../img/arroz4.webp";
import arroz5 from "../img/arroz5.webp";

const DesktopCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={2400}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      centerMode
      centerSlidePercentage={33.33}
    >
      {/* Agrega tus diapositivas para el carrusel de escritorio */}
      <div className="carousel-item">
        <img src={arroz1} alt="Plato 1" />
        <h4>Arroz con Camarones</h4>
      </div>
      <div className="carousel-item">
        <img src={arroz2} alt="Plato 2" />
        <h4>Arroz y Agridulce</h4>
      </div>
      <div className="carousel-item">
        <img src={arroz3} alt="Plato 3" />
        <h4>Arroz y ChopSuey</h4>
      </div>
      <div className="carousel-item">
        <img src={arroz4} alt="Plato 4" />
        <h4>Arroz y Pasta</h4>
      </div>
      <div className="carousel-item">
        <img src={arroz5} alt="Plato 5" />
        <h4>Arroz, Pollo y Camarones</h4>
      </div>
    </Carousel>
  );
};

export default DesktopCarousel;
