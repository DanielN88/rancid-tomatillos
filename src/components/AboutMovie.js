import React from 'react';


const AboutMovie = (props) => {
    return (
        <div className='about-movie'>
            <h2>{props.movie.title}</h2>
            <h4>{props.movie.tagline}</h4>
            <h2>Overview</h2>
            <p>{props.movie.overview}</p>
        </div>
    )
}

export default AboutMovie