import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import banner from "../img/arrozconcamarones2.webp";
import Chef from "../img/Chef.webp";
import fondo from "../img/fondoR.webp";
import fondob from "../img/fondob.webp";
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';
import ChineseRestaurantSection from "./ChineseRestaurantSection"
const Home = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 520);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 520);
    };

    window.addEventListener('resize', handleResize);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      {/* Sección del banner */}
      <section className="banner" style={{ backgroundImage: `url(${fondob})` }}>
        <div className="banner-text">
          <h3>Ven y vive</h3>
          <h3>la gran experiencia</h3>
          <h2>Tian cheng</h2>
          <button>
            <Link to="/menu" className="nuestro">Nuestro Menú</Link>
          </button>
        </div>
        <div className="banner-image">
          <img src={banner} alt="Imagen del banner" />
        </div>
      </section>

      {/* Carrusel de los mejores platos */}
      <section className="top5" style={{ backgroundImage: `url(${fondo})` }}>
        <h2>Top 5</h2>
        {isDesktop ? <DesktopCarousel /> : <MobileCarousel />}
      </section>
      {/* Carrusel de los mejores platos */}

      <section className="boton">
        <button>
          <Link to="/menu" className="nuestro">Nuestro Menú</Link>
        </button>
      </section>

      {/* Sección "Quiénes somos" */}
      <section className="about-us">
        <h2>Acerca de nosotros</h2>
      </section>

       <section className="about-us" style={{ backgroundImage: `url(${fondob})` }}>
      <div className="about-us-image">
        <img src={Chef} alt="Chef" />
      </div>
      <div className="about-us-text">
        <p>
          Nació en China, en Taishan, siendo miembro de una familia numerosa con cuatro
          hermanas y dos hermanos. Inició sus estudios a los 8 años y a los 12 comenzó a trabajar
          en un criadero de vacas, perteneciente a una familia campesina dedicada a la agricultura.
        </p>

        <p>
          A los 15 años, tuvo que alternar sus estudios con el trabajo, que incluía rajar leña
          y venderla, una tarea dura para su corta edad. Además, asumió una gran responsabilidad
          económica, ya que aparte de costear sus estudios, debía aportar parte de su salario
          para los gastos familiares. Destacó como estudiante, siendo elegido entre los cuatro
          mejores de su institución.
        </p>

        <p>
          A los 22 años, finalizó sus estudios y se dedicó a la docencia en la institución llamada
          <strong> 学校和 La Salud y la Escuela</strong>. Sin embargo, por dificultades económicas,
          optó por renunciar a su empleo como educador más tarde.
        </p>

        <p>
          Fue entonces cuando decidió viajar y probar suerte en otros países, radicándose en Colombia
          debido a la presencia de su hermana, quien trabajaba en ese país desde algún tiempo.
        </p>

        <p>
          En busca de emprendimiento, obtuvo empleo en uno de los restaurantes chinos más reconocidos
          de la ciudad, conocido como <strong>"El Gran Tian Cheng"</strong>. Adquirió toda la
          experiencia necesaria para ser reconocido hoy en día como uno de los mejores chefs de
          la cocina china en Medellín.
        </p>
      </div>
    </section>

<ChineseRestaurantSection/>

    </div>
  );
}







export default Home;
