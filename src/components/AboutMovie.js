import React from 'react';


const AboutMovie = (props) => {
    return (
        <div className='about-movie'>
            <div className='title-favorite'>
            <h2>{props.movie.title}</h2>
            <button className='favorite-button' onClick={() => props.addToFavorites(props.movieId)}>Add to Favorites</button>
            </div>
            <h4>{props.movie.tagline}</h4>
            <h2>Overview</h2>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default AboutMovie