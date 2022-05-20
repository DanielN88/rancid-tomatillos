import React, { Component} from 'react';

import FaqMovie from './FaqMovie'
import AboutMovie from './AboutMovie'
import ErrorHandling from './ErrorHandling'

class ViewMovieInfo extends Component {
    constructor () {
        super()
        this.state = {movieData: {}, error: "", isError: false, errorMessage: ""}
    }
    
    componentDidMount = () => {
        fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${this.props.id}`)
        .then((response) => {
            if(response.ok) {
                return response.json()
            } else {
                this.setState({movieData: response.movie, error: "", isError: true, errorMessage: response.statusText})
                throw Error(response.statusText)
            }
        })
          .then((response) => {this.setState({ movieData: response.movie, error: "", isError: false, errorMessage: "" })
        }).catch((err) => console.log(err))
    }
    
    render(){
        if (this.state.isError) {
            return (
                this.state.isError && 
                <ErrorHandling errorText={this.state.errorMessage}/>
            )} else {
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
    }


export default ViewMovieInfo