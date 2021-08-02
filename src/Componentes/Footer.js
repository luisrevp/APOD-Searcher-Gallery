import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <h1>
          Sitio creado por Luis Revilla
          <br />
          <br /> Tecnología utilizada: React
        </h1>
        <div className="proyectos">
          <h1>Otros proyectos:</h1>
          <a href="https://luisrevp.github.io/Personal-webpage/">
            Página personal
          </a>
          <a href="https://luisrevp.github.io/Sushi-restaurant/">
            Restaurante de Sushi
          </a>
          <a href="https://luisrevp.github.io/Chrome-clock-extension/reloj.html">
            Extensión de Chrome
          </a>
        </div>
        <div className="redes-sociales">
          <h1>¡Visita mis redes!</h1>
          <div className="red linkedin">
            <h2>LinkedIn</h2>
            <a href="https://www.linkedin.com/in/luis-revilla/" target="_blank">
              <FaLinkedin />
            </a>
          </div>
          <div className="red github">
            <h2>GitHub</h2>
            <a href="https://github.com/luisrevp" target="_blank">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
