import React from "react";
import "../Estilos/About.css";

const Acerca = () => {
  document.title = "Acerca de la pág.";
  return (
    <>
      <div className="about-page">
        <div className="about-wrap">
          <div className="about-content">
            <h1>Acerca de esta página</h1>
            <p>
              Este es un simple proyecto que consiste de un buscador APOD
              <br />
              (acrónimo para <span>Astronomy Picture of the Day</span>)
              disponible de la NASA,
              <br />
              en la cual permite navegar a estas fotografias
              <br /> a través de un sistema de búsqueda con filtros
              incorporados.
            </p>

            <p>
              La API la puedes tomar desde{" "}
              <a href="https://api.nasa.gov/" target="_blank">
                acá
              </a>
              . Para ello, deberás registrarte
              <br />
              y crear una API key con la cual podrás tener acceso a los enlaces.
              <br />
            </p>
            <p>
              Los instructivos de Queries o consultas están disponibles en la
              página. El límite de
              <br /> peticiones por usuario son de 1000 por hora.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acerca;
