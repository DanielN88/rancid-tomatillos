import React from 'react';
import './FaqMovie.css';

const FaqMovie = (props) => {
    console.log(props)
    return (
        <div className='movie-faq'>
            <h2>Rating: {props.movie.average_rating}</h2>
            <h2>Genre: {props.movie.genres}</h2>
            <h2>Release Date: {props.movie.release_date}</h2>
            <h2>Runtime: {props.movie.runtime}</h2>
            <h2>Budget: {props.movie.budget}</h2>
            <h2>Revenue: {props.movie.revenue}</h2>
        </div>
    )
}

export default FaqMovie