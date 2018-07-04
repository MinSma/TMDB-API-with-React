import React from "react";
import MainPageHeader from "./MainPageHeader";
import { Redirect } from 'react-router-dom';
import './styles.css';

export default class AboutMoviePage extends React.Component {
    render () {
        let movie = this.props.location.movie;
        return (
            <div>
                {movie === undefined ? 
                    <Redirect to="/" /> : 
                    <div>
                        <MainPageHeader />

                        <hr />
                        
                        <div className="movieInfo">
                            <img width="240px" height="350px" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.poster_path} />
                            
                            <h2>{movie.title}</h2>
                            <p><b>Release date: </b> {movie.release_date}</p>
                            <p><b>Rating: </b> {movie.vote_average}</p>
                            <p><b>Votes count: </b> {movie.vote_count}</p>
                            <p>{movie.overview}</p>
                        </div>
                    </div>
                }
            </div>
        );
    }

    
}