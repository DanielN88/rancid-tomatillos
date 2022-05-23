import React, { Component } from "react";

class AboutMovie extends Component {
  constructor() {
    super();
    this.state = {
      favoriteMovies: [],
      isFavorite: false,
      isError: false,
      errorMessage: "",
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3001/api/v1/user/favorites")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({
            favoriteMovies: [],
            isFavorite: false,
            isError: true,
            errorMessage: response.statusText,
          });
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        this.setState({
          favoriteMovies: response.favorites,
          isFavorite: false,
          isError: false,
          errorMessage: "",
        });
      })
      .then(() => {
        let favMovie = this.state.favoriteMovies.find((movie) => {
          return movie.id === parseInt(this.props.movieId);
        });
        if (favMovie) {
          this.setState((prevState) => {
            return {
              ...prevState,
              isFavorite: true,
            };
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  changeState = () => {
    this.setState((prevState) => {
      return { ...prevState, isFavorite: true };
    });
  };

  render() {
    return (
      <div className="about-movie">
        <div className="title-favorite">
          <h2>{this.props.movie.title}</h2>
          {this.state.isFavorite && (
            <button className="favorite-button" disabled>
              In Your Favorites!
            </button>
          )}
          {!this.state.isFavorite && (
            <button
              className="favorite-button"
              onClick={() => {
                this.props.addToFavorites(this.props.movieId);
                this.changeState();
              }}
            >
              Add to Favorites
            </button>
          )}
        </div>
        <h4>{this.props.movie.tagline}</h4>
        <h2>Overview</h2>
        <p>{this.props.movie.overview}</p>
      </div>
    );
  }
}

export default AboutMovie;
