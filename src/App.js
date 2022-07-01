import React, { Component } from "react";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
        <About />
        <Contacts />
      </div>
    );
  }
}

export default App;
