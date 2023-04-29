import React, { useState, useEffect } from "react";

const SearchBar = ({
  search,
  setSearch,
  setFilterSearch,
  dateStart,
  setDateStart,
  dateEnd,
  setDateEnd,
  setQuery,
}) => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
    };
  });

  const d = new Date();
  const year = d.getFullYear();
  const month = d.getMonth() < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  const today = `${year}-${month}-${day}`;

  return (
    <div className="page-result">
      <div className="search">
        <div className="bar">
          <input
            type="text"
            placeholder="What do you want to look for?"
            value={search}
            onKeyDown={(e) => {if(e.key=="Enter") setFilterSearch(e)}}
            onChange={(e) => {
              setSearch(e.target.value);
              setFilterSearch(false);
            }}
          />
          {size > 460 && (
            <button type="submit" id="search-btn" 
              onClick={(e) => setFilterSearch(true)}>
              Search
            </button>
          )}
        </div>
        {size <= 460 && (
          <div id="search-btn-container">
            <button id="search-btn" onClick={(e) => setFilterSearch(true)}>
              Search
            </button>
          </div>
        )}
        <select
          name="select"
          label="Filtrar por:"
          onChange={(e) => setQuery(e.target.value)}
        >
          <option value="title">Order by: Title</option>
          <option value="author">Order by: Author</option>
          <option value="date">Order by: Date</option>
        </select>
      </div>

      <div className="dates">
        <div className="date1">
          <label htmlFor="desde">From:</label>
          <input
            type="date"
            id="desde"
            value={dateStart}
            max={today}
            onChange={(e) => {
              setDateStart(e.target.value);
            }}
          />
        </div>
        <div className="date2">
          <label htmlFor="hasta">To:</label>
          <input
            type="date"
            id="hasta"
            value={dateEnd}
            max={today}
            onChange={(e) => {
              setDateEnd(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
