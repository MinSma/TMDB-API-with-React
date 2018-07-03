import React from "react";
import './styles.css';

export default class MoviesList extends React.Component {
    render(){
        return (
            <span className="moviePoster">
                <img width="240px" height="350px" src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + this.props.img} />
            </span>
        );
    }
}