import React from 'react';
import './Footer.css';
import logo from '../img/footer.png';
import WhatsAppIcon from '../img/whatsapp.png';
import PhoneIcon from '../img/phone.png';
import InstagramIcon from '../img/Instagram.png';
import FacebookIcon from '../img/Facebook.png';
import Kung from '../img/Kung.png';
import MiniFooter from './MiniFooter';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left-section">
          <div className="location">
            <h3>Ubicación</h3>
            <p>Cra. 52 # 42 - 30</p>
            <p>La Alpujarra</p>
            <p>Medellín - Colombia</p>
          </div>
          <div className="kung-fu-flavor">
          <img src={Kung} alt="kung-fu-flavor" />
          </div>
        </div>
        <div className="center-section">
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo1" />
          </div>
          <div className="center-text">
            <h2>EL GRAN</h2>
            <h2>TIAN CHENG</h2>
          </div>
          <div className="center-text">
            <p>Síguenos en redes</p>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/elgrantiancheng_/" target="_blank" rel="noopener noreferrer">
              <img src={InstagramIcon} alt="Instagram" className="icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100063980622809" target="_blank" rel="noopener noreferrer">
              <img src={FacebookIcon} alt="Facebook" className="icon" />
            </a>
          </div>
        </div>
        <div className="right-section">
          <div className="phones">
        
<div className='texw'>
<h3>Domicilios</h3>
             <img src={PhoneIcon} alt="Phone" className="icon" />

</div>



            <ul>
              <li>2321888</li>
              <li>2322116</li>
              <li>2321798</li>
            </ul>
          </div>
          <div className="whatsapp">
<div className='texw'>
<h3>WhatsApp</h3>
    <img src={WhatsAppIcon} alt="WhatsApp" className="icon" />
</div>
            <p>3116036222</p>
          </div>
        </div>
      </div>
    
     
    </div>
  );
}

export default Footer;

