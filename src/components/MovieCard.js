import React from 'react';
import './MovieCard.css';

const MovieCard = () => {
    return (
        <div className="card">
            <h2>Title</h2>
            <div className="image">
            <img src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" />
            </div>
        <h3>Rating: 5.1</h3>
        <h4>Release Date : 2020-09-04</h4>
        </div>
    )
}

export default MovieCard;