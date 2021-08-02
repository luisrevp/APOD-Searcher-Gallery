import React, { useState, useEffect } from "react";

const SearchResult = (props) => {
  const { filterSearch, busqueda } = props;
  const [toggleDesc, setToggleDesc] = useState({});

  function descripcion(id) {
    return setToggleDesc({ ...toggleDesc, [id]: !toggleDesc[id] });
  }

  useEffect(() => {
    const toggleTitle = filterSearch
      ? `Búsqueda: ${busqueda.length} resultados`
      : "¡Bienvenidos!";
    return (document.title = toggleTitle);
    // return (document.title = `Búsqueda: ${busqueda.length} resultados`);
  }, [filterSearch, busqueda]);

  return (
    <div className="search-container">
      <h1>
        {busqueda.length > 0 &&
          filterSearch &&
          `Resultado de búsqueda: ${busqueda.length}`}
      </h1>
      {busqueda.length === 0 && filterSearch ? (
        <h3>No se ha encontrado nada...</h3>
      ) : (
        filterSearch &&
        busqueda.map((data) => {
          const { date, explanation, url, copyright: author, title, id } = data;
          return (
            <div key={id} className="nasa-wrap">
              <h1>{title}</h1>
              <div className="img-container">
                <img src={url} />
              </div>
              <h4>fecha: {date}</h4>
              <h3>Autor: {author || "Autor desconocido"}</h3>
              <p>
                {toggleDesc[id]
                  ? explanation
                  : explanation.substring(0, 120) + "..."}
              </p>
              <button onClick={() => descripcion(id)}>
                {toggleDesc[id] ? "Leer Menos" : "Leer Más"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchResult;
