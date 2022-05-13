import React from 'react';
import './AllMovies.css';
import MovieCard from './MovieCard'

const AllMovies = (props) => {
    const allMovieCards = props.movies.map(movie => {
        return (
            <MovieCard
            id={movie.id}
            title={movie.title}
            imgUrl={movie.poster_path}
            rating={movie.rating}
            releaseDate={movie.release_date}
            key={movie.id}
            displayMovieInfo = {props.displayMovieInfo}
            />
        )
    })

    return (
        <div className='all-movies'>
            {allMovieCards}
        </div>
    )
}

export default AllMovies