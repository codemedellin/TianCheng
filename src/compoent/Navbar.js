import React, { useState } from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../img/Tian.png";

const Navbar = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <>
      <nav className="navbar">
        <NavLink exact to="/" activeClassName="active">
          <img src={logo} alt="Logo" className="logo" />
        </NavLink>
        <ul className={mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
          <li>
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" className="nav-link" activeClassName="active">
              Menú
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contacto" className="nav-link" activeClassName="active">
              Contacto
            </NavLink>
          </li>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
