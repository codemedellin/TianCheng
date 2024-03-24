import React from "react";
import WhatsAppIcon from "../img/whatsappG.png";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = "3116036222"; // Aquí colocas tu número de teléfono
    const message = "Hola, vengo del grantiancheng.com, quiero ordenar."; // Aquí colocas el mensaje predeterminado
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="whatsapp-button">
      <button className="whatsapp-button__button" aria-label="whatsapp" onClick={handleClick}>
        <img className="whatsapp-button__icon" src={WhatsAppIcon} alt="WhatsApp" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
