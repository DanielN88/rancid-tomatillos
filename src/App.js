import "./App.css";
import React, { Component } from "react";
import { Route } from "react-router-dom";

// --------------------- components --------------------- //
import Navbar from "./components/Navbar";
import ViewAllMovies from "./components/ViewAllMovies";
import ViewMovieInfo from "./components/ViewMovieInfo";
import ViewAllFavorites from "./components/ViewAllFavorites";
import ErrorHandling from "./components/ErrorHandling";

// --------------------- App --------------------- //
class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isError: false,
      errorMessage: "",
      favError: false,
    };
  }

  componentDidMount = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          this.setState({
            movies: response.movies,
            isError: true,
            errorMessage: response.statusText,
            favError: false,
          });
          throw Error(response.statusText);
        }
      })
      .then((response) => {
        this.setState({
          movies: response.movies,
          isError: false,
          errorMessage: "",
          favError: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  addToFavorites = (movieId) => {
    let idData = this.state.movies.find((movie) => {
      return movie.id === parseInt(movieId);
    });
    fetch("http://localhost:3001/api/v1/user/favorites", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(idData),
    })
      .then((response) => {
        if (!response.ok) {
          this.setState((prevState) => {
            return {
              movies: prevState.movies,
              isError: prevState.isError,
              errorMessage: prevState.errorMessage,
              favError: true,
            };
          });
          throw Error(response.statusText);
        } else {
          return response.json;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    if (this.state.isError) {
      return (
        this.state.isError && (
          <ErrorHandling errorText={this.state.errorMessage} />
        )
      );
    } else {
      return (
        <main className="app">
          <Navbar backButton={true} displayHome={this.displayHome} />
          <Route
            exact
            path="/"
            render={() => {
              return (
                <ViewAllMovies
                  movies={this.state.movies}
                  displayMovieInfo={this.displayMovieInfoRender}
                />
              );
            }}
          />
          <Route
            exact
            path="/favorites"
            render={() => {
              return <ViewAllFavorites />;
            }}
          />
          <Route
            exact
            path="/movie-:id"
            render={({ match }) => {
              return (
                <ViewMovieInfo
                  id={match.params.id}
                  addToFavorites={this.addToFavorites}
                />
              );
            }}
          />
        </main>
      );
    }
  }
}

export default App;
