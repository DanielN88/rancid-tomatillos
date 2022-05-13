import React from 'react';
import './MovieCard.css';

const MovieCard = (props) => {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="image">
            <img src={props.imgUrl} />
            </div>
        <h3>Rating: {props.rating}</h3>
        <h4>Release Date: {props.releaseDate}</h4>
        </div>
    )
}

export default MovieCard;