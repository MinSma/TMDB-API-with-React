import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import './styles.css';
import { Link } from 'react-router-dom';

export default class MainPageHeader extends React.Component {
    render(){
        return <div>
                    <AppBar position="static">
                        <Toolbar>
                            <Link to="/">Home</Link>
                            <Link className="bestRatedLink" to="bestMovies">Best Rated TOP 20</Link>
                            <a className="navRightLinks" href="https://bitbucket.org/minsma/">Made By M.S.</a>
                            <a href="https://www.themoviedb.org/">API: The Movie Database</a>
                        </Toolbar>
                    </AppBar>
                </div>
    }
}