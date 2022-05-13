import React from 'react';
import './AllMovies.css';
import MovieCard from './MovieCard'

const AllMovies = (props) => {
    const allMovieCards = props.movies.map(movie => {
        return (
            <MovieCard
            title={movie.title}
            imgUrl={movie.poster_path}
            rating={movie.rating}
            releaseDate={movie.release_date}
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