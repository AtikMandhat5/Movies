import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "./context";

const Movies = () => {
  const { movie, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading..</div>
      </div>
    );
  }
  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {movie.map((mapMovie) => {
            const { imdbID, Title, Poster } = mapMovie;
            const movieTitle = Title.substring(0, 15);

            return (
              <NavLink to={`movies/${imdbID}`}>
                <div>
                  <h2>
                    {movieTitle.length >= 15 ? `${movieTitle}..` : movieTitle}
                  </h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Movies;
