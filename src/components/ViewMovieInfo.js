import React from 'react';

import FaqMovie from './FaqMovie'
import AboutMovie from './AboutMovie'

const ViewMovieInfo = (props) => {
    return (
        <div className='view-movie-info' 
        style={{ 
        backgroundImage:`url(${props.movieDetails.backdrop_path}` 
        }} >
            <img className="poster" src={props.movieDetails.poster_path}/>
            <div className='movie-info-container'>
                <FaqMovie movie={props.movieDetails}/>
                <AboutMovie movie={props.movieDetails}/>
            </div>
        </div>
    )
}

export default ViewMovieInfo