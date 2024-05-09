import React, { Component } from "react";
import Man from "./Man";

// class component
class Person extends Component {
    // constructor(props){}

    render(){
        return(
            <div>
                <h3>Name: Harry</h3>
                <h3>Age: 30 years</h3>
                <Man />
            </div>
        )
    }
}

export default Person;