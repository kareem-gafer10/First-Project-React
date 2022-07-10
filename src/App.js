import React, { Component } from "react";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import MainFooter from "./Components/MainFooter/MainFooter";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="home" element={<Header />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MainFooter />
        <Footer />
      </>
    );
  }
}

export default App;
