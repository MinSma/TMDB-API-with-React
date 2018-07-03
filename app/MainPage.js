import React from "react";
import { AppBar, Input } from "@material-ui/core";
import MainPageHeader from "./MainPageHeader";

export default class MainPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchText: ""
        };

        this.handleText = this.handleText.bind(this);
    }

    handleText(e) {
        e.preventDefault();
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