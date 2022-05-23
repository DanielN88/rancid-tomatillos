import React from "react";

const FaqMovie = (props) => {
  return (
    <div className="movie-faq">
      <p>Rating: {props.movie.average_rating}</p>
      <p>Genre: {props.movie.genres}</p>
      <p>Release Date: {props.movie.release_date}</p>
      <p>Runtime: {props.movie.runtime}</p>
      <p>Budget: {props.movie.budget}</p>
      <p>Revenue: {props.movie.revenue}</p>
    </div>
  );
};

export default FaqMovie;
