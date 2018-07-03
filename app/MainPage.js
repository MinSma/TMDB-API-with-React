import React from "react";
import { AppBar, Input } from "@material-ui/core";
import MainPageHeader from "./MainPageHeader";

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import MoviesList from "./MoviesList";

class MainPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: ""
        };

        this.timeout = null;

        this.handleText = this.handleText.bind(this);
        this.handleMoviesFetch = this.handleMoviesFetch.bind(this);
    }

    handleText(e) {
        e.preventDefault();

        this.setState({
            searchText: e.target.value
        });
    }

    handleMoviesFetch(e){
        e.preventDefault();

        clearTimeout(this.timeout);

        let text = this.state.searchText;
        let func = this.props.fetchMoviesByTitle;

        this.timeout = setTimeout(function () {
        func(text)            
        }.bind(this), 1000);
    }
    
    render () {
        return (
            <div>
                <MainPageHeader />
                
                <hr />

                <AppBar position="static"
                    label="Search for a movie"
                    component={this.renderSearchBox}
                    handleInput={this.handleText}
                    style={this.inputStyles()}
                    fetch={this.handleMoviesFetch}
                />

                <hr />

                <MoviesList movies={this.props.movies} />
            </div>
        );
    }

    renderSearchBox(props) {
        return ( 
            <Input
                style={props.style}
                className={props.className}
                {...props.input}
                placeholder={props.label}
                onChange={e => props.handleInput(e)}
                onKeyUp={e => props.fetch(e)}
            />
        );
    }

    inputStyles() {
        return {
            border: "1px solid #DADFE1",
            borderRadius: "5px",
            height: "60px",
            width: "100%",
            paddingLeft: "10px",
            backgroundColor: "white",
            fontSize: "120%"
        };
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

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)