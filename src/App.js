import './App.css';
import React, { Component} from "react"

// --------------------- data --------------------- //
import {movies, movieDetails, movieData} from './data'

// --------------------- components --------------------- //
import Navbar from "./components/Navbar"
import AllMovies from "./components/AllMovies"
import MovieInfo from './components/MovieInfo';
import AboutMovie from "./components/AboutMovie"
import FaqMovie from './components/FaqMovie';
import MovieCard from './components/MovieCard';

// --------------------- App --------------------- //
class App extends Component {
  constructor () {
    super()
    this.state = {movies: movieData, movieInfoPage: false}
  }
  
  displayMovieInfo = () => {
    this.setState({movies: movieData, movieInfoPage: true})
  }

  render () {
    return (
      <main className="App">
        <Navbar />
        {
          this.state.movieInfoPage &&  
          <MovieInfo />
        }
        {
          !this.state.movieInfoPage &&
          <AllMovies 
          movies={this.state.movies.movies} 
          displayMovieInfo={this.displayMovieInfo}
          />
        }
      </main>
    );
  }
}

export default App;
