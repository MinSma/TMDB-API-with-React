import React from "react";
import Movie from './Movie';

export default class MoviesList extends React.Component {
    render() {
        let moviesData = this.props.movies ? this.props.movies : [];
        let movies = moviesData.map((movie, i) => {
            return <Movie key={movie.id}
                          title={movie.title}
                          img={movie.poster_path} 
                    />
        });

        return  <div>
                    {movies}
                </div>;
    }
}