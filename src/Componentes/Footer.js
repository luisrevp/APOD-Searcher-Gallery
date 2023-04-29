import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrap">
        <h1>
          Site created by Luis Revilla
          <br />
          <br />this is a project made in React.JS
        </h1>
        <div className="proyectos">
          <h1>Other projects:</h1>
          <a href="https://luisrevp.github.io/Personal-webpage/">
            Personal Webpage
          </a>
          <a href="https://luisrevp.github.io/Sushi-restaurant/">
            Sushi restaurant
          </a>
          <a href="https://luisrevp.github.io/Chrome-clock-extension/reloj.html">
            Chrome extension
          </a>
        </div>
        <div className="redes-sociales">
          <h1>My social networks</h1>
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
