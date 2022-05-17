import React from 'react';
import MovieCard from './MovieCard'
import { NavLink } from 'react-router-dom'


const ViewAllMovies = (props) => {
    const allMovieCards = props.movies.map(movie => {
        return (
            <NavLink to={`/movie-${movie.id}`}>
                <MovieCard
                    id={movie.id}
                    title={movie.title}
                    imgUrl={movie.poster_path}
                    rating={movie.average_rating.toFixed(2)}
                    releaseDate={movie.release_date}
                    key={movie.id}
                    displayMovieInfo = {props.displayMovieInfo}
                />
            </NavLink>
        )
    })

    return (
        <div className='all-movies'>
            {allMovieCards}
        </div>
    )
}

export default ViewAllMovies