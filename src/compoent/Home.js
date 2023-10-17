import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import banner from "../img/arrozconcamarones2.jpg";
import Chef from "../img/Chef.jpg";
import fondo from "../img/fondoR.png";
import fondob from "../img/fondob.png";
import DesktopCarousel from './DesktopCarousel';
import MobileCarousel from './MobileCarousel';

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
          <h2>Ven y vive</h2>
          <h2>la gran experiencia</h2>
          <h1>Tian cheng</h1>
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
            Nació en China Taishan. Miembro de una familia numerosa, cuatro
            hermanas y dos hermanos. A los 8 años de edad empezó 
            sus estudios y a los 12 años empezó a trabajar en un
            criadero de vacas, pertenecía a una familia campesina
            dedicada a la agricultura. A la edad de 15 años debía
            alternar su estudio con el trabajo, en el cual le 
            correspondía rajar leña y venderla, una labor bastante
            dura para su corta edad, a la que además asumió una
            gran responsabilidad económica porque aparte de 
            costearse sus estudios debía aportar parte de su 
            salario para gastos de su familia. Como estudiante 
            fue excelente, tanto que fue elegido entre los cuatro 
            mejores estudiantes de su institución. A los 22 años
            finalizó sus estudios y se dedicó a la docencia, 
            laborando en una institución llamada (学校和) La Salud
            y la Escuela; sin embargo, más tarde, por dificultades
            económicas, optó por renunciar a su empleo de educador.
            Fue entonces cuando decidió viajar y probar suerte
            en otros países, radicándose en Colombia porque 
            allí vivía su hermana, quien trabajaba desde algún 
            tiempo en ese país. En busca de emprendimiento obtuvo 
            empleo en uno de los restaurantes chinos más 
            reconocidos de la ciudad como "El Gran Tian Cheng"
            en el que adquirió toda la experiencia necesaria para
            ser reconocido hoy en día como uno de los mejores chefs de 
            la cocina china en Medellín.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
