import React, { Component } from "react";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <div className="text-center mt-3">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.increment()} className="btn btn-primary">
          Increment
        </button>
      </div>
    );
  }
}
