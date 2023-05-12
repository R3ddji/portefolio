import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import navicon from "../img/iconnav.png";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const toggleNavSmallScreen = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 500) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);
  return (
    <div className="Navbar">
      <nav>
      {(toggleMenu || largeur > 500) && (
          <ul className="list">
            <Link to="/">
              <li className="items">Accueil</li>
            </Link>
            <Link to="realisation">
              <li className="items">Mes Réalisations</li>
            </Link>
            <Link to="contact">
              <li className="items">Contact</li>
            </Link>
          </ul>
      )}
      <img onClick={toggleNavSmallScreen} id="navicon" src={navicon} alt=""/>
      </nav>
      <div id="home"></div>
      <div id="home-mobile"></div>
    </div>
  );
}
