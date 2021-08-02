import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Estilos/NavBar.css";

/*Barra de navegación*/
const BarraNav = () => {
  const [background, setBackground] = useState(false);
  const [size, setSize] = useState(window.innerWidth);

  function checkSize() {
    return setSize(window.innerWidth);
  }
  function changeBackgroundBar() {
    return window.scrollY >= 80 ? setBackground(true) : setBackground(false);
  }

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    window.addEventListener("scroll", changeBackgroundBar);
    return () => {
      window.removeEventListener("resize", checkSize);
      window.removeEventListener("scroll", changeBackgroundBar);
    };
  }, []);

  return (
    <nav
      className={background ? "navBar backgroundOn" : "navBar backgroundOff"}
    >
      <Link to="/buscador-apod" id="logo">
        NASA Searcher
      </Link>
      <UlContainer background={background} size={size} />
    </nav>
  );
};

/*Mostrar/Ocultar enlaces*/
const UlContainer = ({ background, size }) => {
  const [toggleNav, setToggleNav] = useState(false);
  const inputRef = useRef();

  function hideNavBar(e) {
    if (e.target !== e.currentTarget) return;
    else return setToggleNav(!toggleNav);
  }

  function toggleBurger() {
    let targetUl;
    if (!toggleNav) setToggleNav(true);
    if (toggleNav) {
      targetUl = document.querySelector(`.ul-container-responsive`);
      targetUl.className = `cerrar`;
      setTimeout(() => {
        setToggleNav(false);
      }, 300);
    }
  }

  const burgerButton = (
    <GiHamburgerMenu
      onClick={() => toggleBurger()}
      className="burger-button"
      style={{
        color: background ? "black" : "white",
        alignSelf: "flex-end",
        display: toggleNav && "block",
      }}
    />
  );

  const Links = (
    <div
      className="ul-wrap"
      style={{
        background: size >= 900 && "none",
        height: toggleNav && size < 900 && "100vh",
      }}
      onClick={(e) => hideNavBar(e)}
    >
      <ul
        className={size < 900 ? `ul-container-responsive` : "ul-container"}
        ref={inputRef}
      >
        {size < 900 && toggleNav && <li id="resp-button">{burgerButton}</li>}
        <li className="links" onClick={() => setToggleNav(!toggleNav)}>
          <Link
            to="/buscador-apod"
            style={{ color: background ? "#000" : "#fff" }}
          >
            Buscador
          </Link>
        </li>
        <li className="links" onClick={() => setToggleNav(!toggleNav)}>
          <Link to="/acerca" style={{ color: background ? "#000" : "#fff" }}>
            Acerca de pagina
          </Link>
        </li>
        <li className="links" onClick={() => setToggleNav(!toggleNav)}>
          <a href="https://luisrevp.github.io/Personal-webpage/">
            Página Personal
          </a>
        </li>
      </ul>
    </div>
  );

  if (size >= 900 && toggleNav) setToggleNav(false);

  return (
    <div className="link-wrap">
      {size < 900 && !toggleNav ? burgerButton : ""}
      {(size >= 900 || toggleNav) && Links}
    </div>
  );
};

export default BarraNav;
