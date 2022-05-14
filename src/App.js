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
    this.state = {movies: [], movieDetails: movieDetails, movieInfoPage: false}
  }
  
  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((data) => data.json())
    .then((response) => {
      this.setState({movies: response.movies, movieDetails: '', movieInfoPage: false})
    })
  }

  displayMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then((data) => data.json())
    .then((response) => {
      const movieDetail = response.movie
      this.setState(prevState => ({movies: prevState.movies, movieDetails: movieDetail, movieInfoPage: true}))
    })
  }

  displayHome = () => {
    this.setState(prevState => ({movies: prevState.movies, movieDetails: prevState.movieDetails, movieInfoPage: false}))
  }

  render () {
    return (
      <main className="App">
        {/* navbar render */}
        {
          this.state.movieInfoPage &&  
          <Navbar backButton={true} displayHome={this.displayHome}/> 
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
