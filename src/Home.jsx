import React, { Component } from "react";

class Home extends Component {
  state = {
    userName: "route Academy",
  };

  render() {
    return (
      <div>
        <h2 className="text-center">Home Component</h2>
        <button className="btn btn-danger">
          <i className="fa-brands fa-facebook"></i>
          Click
        </button>
        <h3>{this.state.userName}</h3>
        
      </div>
    );
  }
}

export default Home;
