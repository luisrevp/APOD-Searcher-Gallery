import React, { useState, useEffect } from "react";

const SearchResult = (props) => {
  const { filterSearch, busqueda } = props;
  const [toggleDesc, setToggleDesc] = useState({});

  function descripcion(id) {
    return setToggleDesc({ ...toggleDesc, [id]: !toggleDesc[id] });
  }

  useEffect(() => {
    const toggleTitle = filterSearch
      ? `Search: ${busqueda.length} results`
      : "APOD Searcher";
    return (document.title = toggleTitle);
  }, [filterSearch, busqueda]);

  return (
    <div className="search-container">
      <h1>
        {busqueda.length > 0 &&
          filterSearch &&
          `Search result: ${busqueda.length}`}
      </h1>
      {busqueda.length === 0 && filterSearch ? (
        <h3>There are no results...</h3>
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
              <h4>Date: {date}</h4>
              <h3>Author: {author || "Unknown"}</h3>
              <p>
                {toggleDesc[id]
                  ? explanation
                  : explanation.substring(0, 120) + "..."}
              </p>
              <button onClick={() => descripcion(id)}>
                {toggleDesc[id] ? "Read less" : "Read more"}
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SearchResult;
