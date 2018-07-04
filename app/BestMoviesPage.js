import React from "react";
import { AppBar, Input } from "@material-ui/core";
import MainPageHeader from "./MainPageHeader";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import MoviesList from "./MoviesList";

class BestMoviesPage extends React.Component {
    componentDidMount(){
        this.props.getTopRatedMovies();
    }
    
    render () {
        return (
            <div>
                <MainPageHeader />
                
                <hr />

                <MoviesList movies={this.props.movies} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};

const mapStateToProps = (store) => {
    return {
      movies: store.movies
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BestMoviesPage)