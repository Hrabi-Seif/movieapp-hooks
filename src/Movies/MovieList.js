import React from "react";
import MovieCard from "../MovieCard/MovieCard";

const title = {
  textAlign: "center",
  color: "white",
  padding: "20px",
  marginBottom: "2px",
  fontSize: "40px",
  transform: "translateX(-2px)",
};

const MovieList = ({ searchMovie, movies, searchRating }) => {
  const handleMovie = (name) => {
    alert("this movie has a name", name);
  };
  return (
    <div>
      <h1 style={title}> This is a list of Movies</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        className="listing"
      >
        {movies
          .filter(
            (el) =>
              el.name.toLowerCase().includes(searchMovie.toLowerCase()) &&
              el.rating >= searchRating
          )
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} handleMovie={handleMovie} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
