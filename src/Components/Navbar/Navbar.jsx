import React, { Component } from 'react'
import Styles from './Navbar.module.css'
import { Link, NavLink } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
        <nav className={`${Styles.myNavbar} navbar navbar-expand-lg `}>
        <div className="container">
          <Link className={`${Styles.myBrand} nav-brand`} to='/'>START REACT</Link>
          <button className={`${Styles.myToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`${Styles.myTogglerIcon} navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} to="home">Home</NavLink>
              </li>
            <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} to="portfolio">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} to="about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} to="contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
