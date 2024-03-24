import React from 'react';
import './Contacto.css';
import fondob from "../img/fondob.png";
import cheng from "../img/Tian.png";
import fondo from "../img/fondoR.png";

const Contacto = () => {





const handleClick = () => {
    const phoneNumber = "3116036222"; // Aquí colocas tu número de teléfono
    const message = "Hola, vengo del grantiancheng.com, quiero ordenar."; // Aquí colocas el mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };








  return (
    <div>
      <section className="banner1" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="banner1-content">
          <h2 className="contacto-heading">Contacto</h2>
          <h1 className="banner1-title">Bienvenido a nuestro restaurante</h1>
          <p className="banner1-text">Disfruta de nuestras deliciosas opciones de comida</p>
        </div>
      </section>





<section className="con" style={{ backgroundImage: `url(${fondob})` }} >

<div className="contacto-address">
     <h3>Dirección:</h3>
     <p>Carrera 52 43 30</p>
     <p>Medellín, Colombia</p>
</div>


<div className="contact">
              <img src={cheng} alt="Imagen de contacto" />
            </div>


</section>



      <section className="contacto-section" style={{ backgroundImage: `url(${fondo})` }}>
        <div className="contacto-container">
        
          <div className="contacto-info">
            <div className="contacto-map">
              <iframe
                title="Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1402.2466620949301!2d-75.57240431652892!3d6.243700640090274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428537d55b729%3A0x92c42e818c7cd400!2sRestaurante%20El%20Gran%20Tian%20Cheng!5e0!3m2!1ses!2sco!4v1686803389900!5m2!1ses!2sco"
                width={600}
                height={450}
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="action-section" style={{ backgroundImage: `url(${fondob})` }}>
        <div className="action-container">
          <h2 className="action-heading">Haz tu pedido</h2>
          <p className="action-text">Realiza una reserva en mesa o solicita servicio a domicilio</p>
          <div className="action-buttons">
            <button className="action-button" aria-label="whatsapp"  onClick={handleClick}>Reservar mesa</button>

            <button className="action-button" aria-label="whatsapp"  onClick={handleClick}>Pedido a domicilio</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
