import './App.css';
import React, { Component} from "react"
import { Route, NavLink, Switch } from 'react-router-dom'

// --------------------- data --------------------- //
import {movies, movieDetails, movieData} from './data'

// --------------------- components --------------------- //
import Navbar from "./components/Navbar"
import ViewAllMovies from "./components/ViewAllMovies"
import ViewMovieInfo from './components/ViewMovieInfo';
import AboutMovie from "./components/AboutMovie"
import FaqMovie from './components/FaqMovie';
import MovieCard from './components/MovieCard';
import ErrorHandling from './components/ErrorHandling'

// --------------------- App --------------------- //
class App extends Component {
  constructor () {
    super()
    this.state = {movies: [], movieDetails: movieDetails, movieInfoPage: false, isError: false, errorMessage: ''}
  }
  
  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies').then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        this.setState({movies: response.movies, movieDetails: '', movieInfoPage: false, isError: true, errorMessage: response.statusText})
        throw Error(response.statusText)
      }
    })
    // .then((data) => data.json())
    .then((response) => {
      this.setState({movies: response.movies, movieDetails: '', movieInfoPage: false})
    })
    .catch((err) => {
      console.log(err)
      })
  }

  displayMovieInfo = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`).then((data) => data.json())
    .then((response) => {
      const movieDetail = response.movie
      this.setState(prevState => ({movies: prevState.movies, movieDetails: movieDetail, movieInfoPage: true}))
    }).catch((err) => console.log(err))
  }

  displayHome = () => {
    this.setState(prevState => ({movies: prevState.movies, movieDetails: prevState.movieDetails, movieInfoPage: false}))
  }

  render () {
    if (this.state.isError) {
      return (
        this.state.isError &&
        <ErrorHandling errorText={this.state.errorMessage}/>
      )} else {
    return (
        <main className="app">
          
          <Navbar backButton={true} displayHome={this.displayHome}/>
         
          <Route exact path="/" render={({history}) => {
            console.log(history)
            return <ViewAllMovies movies={this.state.movies} displayMovieInfo={this.displayMovieInfo}/>} 
          }/>
          <Route path="/movie-:id" 
          render={({ match }) => {
            this.displayMovieInfo(parseInt(match.params.id))
            return <ViewMovieInfo movieDetails={this.state.movieDetails}/>
          }}
          />
         
        </main>

    );
  }
  }
}

export default App;


{/* <main className="App">
navbar render
{
  this.state.movieInfoPage &&  
  <Navbar backButton={true} displayHome={this.displayHome}/> 
}
{
  !this.state.movieInfoPage &&
  <Navbar />
}
main page render
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
</main> */}