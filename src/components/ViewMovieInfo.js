import React, { Component} from 'react';

import FaqMovie from './FaqMovie'
import AboutMovie from './AboutMovie'

class ViewMovieInfo extends Component {
    constructor () {
        super()
        this.state = {movieData: {}, error: ""}
    }
    
    componentDidMount = () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then((data) => data.json())
        .then((response) => {
          this.setState({ movieData: response.movie, error: "" })
        }).catch((err) => console.log(err))
    }
    
    render(){

        return (
            <div className='view-movie-info' 
            style={{ 
            backgroundImage:`url(${this.state.movieData.backdrop_path}` 
            }} >
                <img className="poster" src={this.state.movieData.poster_path}/>
                <div className='movie-info-container'>
                    <FaqMovie movie={this.state.movieData}/>
                    <AboutMovie movie={this.state.movieData}/>
                </div>
            </div>
        )
    }
}

export default ViewMovieInfo