import React from 'react';
import fondob from "../img/fondob.webp";

const ChineseRestaurantSection = () => {
  return (
    <section className="chinese-restaurant-section" style={sectionStyle}>
      <div className="section-content">
        <h1 style={headingStyle}>
          Descubre los Deliciosos Sabores de la Cocina China en Tu Hogar
        </h1>
        <p style={paragraphStyle}>
          Sumérgete en una experiencia culinaria única con nuestro restaurante chino a domicilio. Explora nuestra amplia variedad de platillos auténticos, desde clásicos como arroz chino y lumpia, hasta deliciosos chopsuey y otras especialidades de comida asiática.
        </p>
        <p style={paragraphStyle}>
          Nuestro menú está cuidadosamente preparado con ingredientes frescos para capturar los auténticos sabores de la cocina china. ¿Antojo de arroz chino a domicilio? ¿ O Prefieres disfrutar de nuestra experiencia culinaria en nuestro salón? ¡Tenemos opciones para todos los gustos!
        </p>
        <p style={paragraphStyle}>
          Disfruta de la hospitalidad china en la comodidad de tu hogar. Ofrecemos servicio de comida china a domicilio cerca de ti, con entregas rápidas y confiables. ¿Buscas un restaurante chino cerca de tu ubicación? ¡Haz tu pedido ahora y experimenta la auténtica comida china en tu puerta!
        </p>
      </div>
    </section>
  );
};

// Estilos
const sectionStyle = {
  backgroundImage: `url(${fondob})`, // Se corrigió aquí
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '50px',
  color: '#333',
};

const headingStyle = {
  fontSize: '2em',
  fontWeight: 'bold',
  margin: '0',
  marginBottom: '20px',
  color: '#ff6600',
};

const paragraphStyle = {
  fontSize: '1.2em',
  marginBottom: '15px',
};

export default ChineseRestaurantSection;
