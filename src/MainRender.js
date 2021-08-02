import React, { useState, useEffect } from "react";
import SearchBar from "./Componentes/BarraBusqueda";
import SearchResult from "./Componentes/ResultadoBusqueda";
import Loading from "./Pages/Loading";
import ErrorPage from "./Pages/ErrorPage";

const nasaApi = "https://api.nasa.gov/planetary/apod";
const nasaKey = "?api_key=Zxyg2mojmh8nUrjnsZ84dnI2DUUPv6lo45md3IRp";

function MainRender() {
  // variables de estado
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorLoading, setErrorLoading] = useState(false);
  const [filterSearch, setFilterSearch] = useState(false);
  const [search, setSearch] = useState(""); // determina el QUERY de busqueda
  const [query, setQuery] = useState("title"); // este es acorde a lo que la propiedad del OBJECT posea

  // fechas (A MEJORAR)

  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1;
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();

  const [dateStart, setDateStart] = useState(`${year}-${month}-${day}`);
  const [dateEnd, setDateEnd] = useState(`${year}-${month}-${day}`);
  const start_date = `&start_date=${dateStart}`;
  const end_date = `&end_date=${dateEnd}`;

  let nasaURL = nasaApi + nasaKey + start_date + end_date;

  // fetching de informacion
  useEffect(() => {
    async function fetchData(url) {
      const getData = await fetch(url);
      if (getData.ok && getData.status >= 200 && getData.status <= 299) {
        const parseData = await getData.json();
        setData(parseData);
        setLoading(false);
      } else {
        console.log(`Error ${getData.status}: ${getData.statusText}`);
        setLoading(false);
        setErrorLoading(true);
      }
    }
    fetchData(nasaURL);
  }, [filterSearch]);

  // filtrando la busqueda
  let count1 = 1; // creando ID unico por busqueda
  const busqueda = data
    .filter((info) => {
      const { explanation, title, copyright: author } = info;
      const text = search.split(" ").join("|");
      const regex1 = new RegExp(text, "gi");
      return (
        regex1.test(explanation) || regex1.test(title) || regex1.test(author)
      );
    })
    .map((obj) => {
      return { ...obj, id: count1++ };
    });

  switch (query) {
    case "date":
      busqueda.sort((a, b) => {
        const date1 = new Date(a.date);
        const date2 = new Date(b.date);
        return date2 - date1;
      });
      break;
    case "author":
      busqueda.sort((a, b) => {
        const word1 = a.copyright;
        const word2 = b.copyright;
        return word1 > word2 ? 1 : -1;
      });
      break;
    case "title":
      busqueda.sort((a, b) => {
        const title1 = a.title[0];
        const title2 = b.title[0];
        return title1 > title2 ? 1 : -1;
      });
      break;
  }

  // JSX final
  if (loading) return <Loading />;
  if (errorLoading) {
    document.title = "error...";
    return <ErrorPage />;
  }
  return (
    <div className="page">
      <h1>Buscador de APOD (Astronomy Picture of the Day)</h1>
      <div className="page-result">
        {/* <BarraBusqueda /> */}
        <SearchBar
          search={search}
          setSearch={setSearch}
          setFilterSearch={setFilterSearch}
          dateStart={dateStart}
          dateEnd={dateEnd}
          setDateStart={setDateStart}
          setDateEnd={setDateEnd}
          setQuery={setQuery}
        />
        {/*Resultado de busqueda*/}
        <SearchResult busqueda={busqueda} filterSearch={filterSearch} />
      </div>
    </div>
  );
}

export default MainRender;
