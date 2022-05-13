import React from 'react';
import './ViewAllMovies.css';
import MovieCard from './MovieCard'

const ViewAllMovies = (props) => {
    const allMovieCards = props.movies.map(movie => {
        return (
            <MovieCard
            id={movie.id}
            title={movie.title}
            imgUrl={movie.poster_path}
            rating={movie.average_rating.toFixed(2)}
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

export default ViewAllMovies