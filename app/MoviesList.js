import React from "react";
import Movie from './Movie';
import './styles.css';

export default class MoviesList extends React.Component {
    render() {
        let moviesData = this.props.movies ? this.props.movies : [];
        let movies = moviesData.map((movie, i) => {
            return  <div className="moviePosterBox" key={movie.id}>
                        <Movie
                            movieData={movie}
                        />
                    </div>
        });

        return  <div>
                    {movies}
                </div>;
    }
}