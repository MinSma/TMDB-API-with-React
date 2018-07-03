import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import './styles.css';

export default class MainPageHeader extends React.Component {
    render(){
        return <div>
                    <AppBar position="static">
                        <Toolbar>
                            <a href="/">Home</a>
                            <a className="navRightLinks" href="https://bitbucket.org/minsma/">Made By M.S.</a>
                            <a href="https://www.themoviedb.org/">API: The Movie Database</a>
                        </Toolbar>
                    </AppBar>
                </div>
    }
}