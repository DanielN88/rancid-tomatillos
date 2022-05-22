import React from 'react'
import MovieCard from './MovieCard'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'

class ViewAllFavorites extends Component {
  constructor () {
    super()
    this.state = {favoriteMovies: [], isError: false, errorMessage: ""}
  }

componentDidMount = () => {
  fetch('http://localhost:3001/api/v1/user/favorites')
  .then((response) => {
    if(response.ok) {
      return response.json()
    } else {
      this.setState({favoriteMovies: response.favorites, isError: true, errorMessage: response.statusText})
      console.log(this.state.favoriteMovies, 'inmount')
      throw Error(response.statusText)
    }
  })
  .then((response) => {
    this.setState({favoriteMovies: response.favorites, isError: false, errorMessage: "" })
  })
  .catch((err) => {
    console.log(err)
    })
}

// ViewAllFavorites = () => {
//   const allFavoriteCards = this.state.favoriteMovies.map(movie => {
//     return (
//       <NavLink to={`/movie-${movie.id}`} className="card-navs">
//         <MovieCard
//            id={movie.id}
//            title={movie.title}
//            imgUrl={movie.poster_path}
//            rating={movie.average_rating.toFixed(2)}
//            releaseDate={movie.release_date}
//            key={movie.id}
//         />
//       </NavLink>
//     )
//   })
// }

  render() {
    console.log(this.state.favoriteMovies, 'inrender')
    if (this.state.favoriteMovies.length === 0) {
      return (
      <div className='no-favs'>
        <p>Please add some favorite movies to see them here!</p>
      </div>
      )
    } else {
    const allFavoriteCards = this.state.favoriteMovies.map(movie => {
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
      )
    })

    return (
      <div className='all-movies'>
      {allFavoriteCards}
      </div>
    )
  }
 }
}



export default ViewAllFavorites