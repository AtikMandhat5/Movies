import React from "react";
import { useGlobalContext } from "./context";
const Search = () => {
  const { query, setQuery, isError } = useGlobalContext();
  return (
    <>
      <section className="search-section">
        <form action="" onClick={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Searching Name"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg} </p>
        </div>
      </section>
    </>
  );
};
export default Search;
