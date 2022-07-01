import React, { Component } from "react";

export default class Home extends Component {
  state = {
    name: "kareem",
    age: 24,
    location: "Mansoura",
    url: "https://www.google.com/",
  };

  handleClick(){
    alert("hello");
  }

  render() {
    return (
      <>
        <h2>
          Hello {this.state.name} my age is {this.state.age} and my location is{" "}
          {this.state.location}
        </h2>
        <input type="text" name={this.state.name} />
        <a href={this.state.url}>Google</a>
        <button onClick={()=>this.handleClick()} className="btn btn-danger mx-3">
          click here
        </button>
      </>
    );
  }
}
