import './App.css';
import React, { Component} from "react"

// --------------------- data --------------------- //

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
    this.state = {}
  }
  
  render () {
    return (
      <main className="App">
        <Navbar />
        {/* <AllMovies />
        <MovieInfo />
        <AboutMovie />
        <FaqMovie /> */}
        <MovieCard />
      </main>
    );
  }
}

export default App;
