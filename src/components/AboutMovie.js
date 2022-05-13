import React from 'react';
import './AboutMovie.css'; 

const AboutMovie = (props) => {
    return (
        <div className='about-movie'>
            <h2>{props.movie.title}</h2>
            <h2>{props.movie.tagline}</h2>
            <h2>Overview</h2>
            <h2>{props.movie.overview}</h2>
        </div>
    )
}

export default AboutMovie