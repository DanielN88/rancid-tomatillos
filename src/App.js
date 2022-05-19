import './App.css';
import React, { Component} from "react"
import { Route } from 'react-router-dom'


// --------------------- components --------------------- //
import Navbar from "./components/Navbar"
import ViewAllMovies from "./components/ViewAllMovies"
import ViewMovieInfo from './components/ViewMovieInfo';
import ErrorHandling from './components/ErrorHandling'

// --------------------- App --------------------- //
class App extends Component {
  constructor () {
    super()
    this.state = {movies: [], isError: false, errorMessage: ''}

  }
  
  componentDidMount = () => {
    fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
    .then((response) => {
      if(response.ok) {
        return response.json()
      } else {
        this.setState({movies: response.movies, isError: true, errorMessage: response.statusText})
        throw Error(response.statusText)
      }
      
    })
    .then((response) => {
      this.setState({movies: response.movies, isError: false, errorMessage: ""})
    })
    .catch((err) => {
      console.log(err)
      })

      
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
          {/* {this.state.isError &&
          <ErrorHandling errorText={this.state.errorMessage}/>} */}
          <Route exact path="/" render={() => {
            return <ViewAllMovies movies={this.state.movies}  displayMovieInfo={this.displayMovieInfoRender}/>} 
          }/>
          <Route exact path="/movie-:id" 
          render={({ match }) => {
            return <ViewMovieInfo  id={match.params.id}  />
          }}
          />
         
        </main>
    );
  }
  }
}

export default App;