import './App.css';
import React, { Component} from "react"

// --------------------- data --------------------- //
import {movies, movieDetails, movieData} from './data'

// --------------------- components --------------------- //
import Navbar from "./components/Navbar"
import ViewAllMovies from "./components/ViewAllMovies"
import ViewMovieInfo from './components/ViewMovieInfo';
import AboutMovie from "./components/AboutMovie"
import FaqMovie from './components/FaqMovie';
import MovieCard from './components/MovieCard';

// --------------------- App --------------------- //
class App extends Component {
  constructor () {
    super()
    this.state = {movies: movies, movieDetails: movieDetails, movieInfoPage: false}
  }
  
  displayMovieInfo = (id) => {
    const filteredMovies = this.state.movieDetails.filter(movie => movie.id === id)
    this.setState({movies: movieData, movieDetails: filteredMovies[0], movieInfoPage: true})
  }

  render () {
    return (
      <main className="App">
        {/* navbar render */}
        {
          this.state.movieInfoPage &&  
          <Navbar backButton={true}/> 
        }
        {
          !this.state.movieInfoPage &&
          <Navbar />
        }
        {/* main page render */}
        {
          this.state.movieInfoPage &&  
          <ViewMovieInfo movieDetails={this.state.movieDetails}/>
        }
        {
          !this.state.movieInfoPage &&
          <ViewAllMovies
          movies={this.state.movies} 
          displayMovieInfo={this.displayMovieInfo}
          />
        }
      </main>
    );
  }
}

export default App;
