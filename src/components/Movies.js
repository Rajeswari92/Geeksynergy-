// src/components/Movies.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .post("https://hoblist.com/api/movieList", {
        category: "movies",
        language: "kannada",
        genre: "all",
        sort: "voting",
      })
      .then((response) => {
        setMovies(response.data.result);
      })
      .catch((error) => {
        console.error("There was an error fetching the movies!", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Movies</h2>
      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie._id} className="movie">
            <img src={movie.poster} alt={movie.title} />
            <div className="details">
              <h3>{movie.title}</h3>
              <p>Genre: {movie.genre}</p>
              <p>Director: {movie.director}</p>
              <p>Starring: {movie.stars}</p>
              <p>
                {movie.duration} mins | {movie.language} |{" "}
                {new Date(movie.releasedDate).toLocaleDateString()}
              </p>
              <p>
                {movie.pageViews} views | voted by {movie.voting} people
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
