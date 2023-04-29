import React from "react";
import "../Estilos/About.css";

const Acerca = () => {
  document.title = "Acerca de la pág.";
  return (
    <>
      <div className="about-page">
        <div className="about-wrap">
          <div className="about-content">
            <h1>About this page</h1>
            <p>
              This is a simple project consisting of an APOD searcher (acronymn for 
              <br />
              "<span>Astronomy Picture of the Day</span>") from NASA, in which we can find
              <br />
              information about the pictures through a search bar, with
              <br />
              capabilities for sorting and assign a range of dates.
            </p>

            <p>
              You can explore the API from{" "}
              <a href="https://api.nasa.gov/" target="_blank">
                here
              </a>
              . In order to do so, you need to register
              <br />
              and generate an API key in which you'll have access to all the links.
              <br />
            </p>
            <p>
              All Querying instructions are available on their page. the request limit
              <br />per user are 1000 per hour.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Acerca;
