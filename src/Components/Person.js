import React, { Component } from "react";
// import Man from "./Man";

// class based component
class Person extends Component {
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name: "Kashmir",
            age: 22,
        }
    }

    nameChangeHandler(){
        // alert();
        console.log(this.state);
        this.setState({name: "Kanyakumari", age: 40,}, ()=> {
            console.log(this.state);
        })
    }

    render(){
        console.log(this.props);
        return(
            <div>
                {/* <h1>Dear {this.props.name}, {this.props.age} welcome</h1> */}
                <h1>Dear {this.state.name}, {this.state.age} years welcome</h1>
                <button onClick={() => this.nameChangeHandler()}>Click Me</button>
                {/* <Man /> */}
            </div>
        )
    }
}

export default Person;