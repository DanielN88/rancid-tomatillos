import React from "react";
import MovieCard from "./MovieCard";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import error_message from "../assets/error_message.png";

class ViewAllFavorites extends Component {
  constructor() {
    super();
    this.state = { favoriteMovies: [], isError: false, errorMessage: "" };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/user/favorites")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({
            favoriteMovies: response.favorites,
            isError: true,
            errorMessage: response.statusText,
          });
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        this.setState({
          favoriteMovies: response.favorites,
          isError: false,
          errorMessage: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.favoriteMovies.length === 0) {
      return (
        <div className="no-favs">
          <p className='no-fav-text'>Please add some favorite movies to see them here!</p>
          <img className="error-handling-img" src={error_message} alt='A child with a camera for a head stands over two dead parents with movie reels for heads, intended to be a batman parody' />
        </div>
      );
    } else {
      const allFavoriteCards = this.state.favoriteMovies.map((movie) => {
        return (
          <NavLink to={`/movie-${movie.id}`} className="card-navs">
            <MovieCard
              id={movie.id}
              title={movie.title}
              imgUrl={movie.poster_path}
              rating={movie.average_rating.toFixed(2)}
              releaseDate={movie.release_date}
              key={movie.id}
            />
          </NavLink>
        );
      });

      return <div className="all-movies">{allFavoriteCards}</div>;
    }
  }
}

export default ViewAllFavorites;
