import React from "react";
import { AppBar, Input } from "@material-ui/core";
import './styles.css';
import MainPageHeader from "./MainPageHeader";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';

class MainPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: ""
        };

        this.handleText = this.handleText.bind(this);
    }

    handleText(e) {
        e.preventDefault();

        if(e.target.value.length > 5){
            this.props.fetchLatestMovies(e.target.value);
        }
    }
    
    render () {
        return (
            <div>
                <MainPageHeader />
                
                <hr />

                <AppBar position="static"
                    label="Search for a movie"
                    component={this.renderSearchBox}
                    input={this.state.searchText}
                    handleInput={this.handleText}
                    style={this.inputStyles()}
                />
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