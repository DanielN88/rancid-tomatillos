import React from 'react';
import MovieCard from './MovieCard'
import { NavLink } from 'react-router-dom'


const ViewAllMovies = (props) => {
    const allMovieCards = props.movies.map(movie => {
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
            {allMovieCards}
        </div>
    )
}

export default ViewAllMovies