import React from "react";
import './styles.css';
import { Link } from 'react-router-dom';


export default class Movie extends React.Component {
    render(){
        return (
                <Link className="moviePoster" to={
                    { 
                        pathname: "/movie/",
                        movie: this.props.movieData
                    }
                }>
                        <img width="240px" height="350px" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + this.props.movieData.poster_path} />
                </Link>
        );
    }
}