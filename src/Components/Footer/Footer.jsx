import React, { Component } from "react";
import Styles from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <footer className={`${Styles.footer} text-center py-4`}>
        <div className="container">
          <p className="m-0">Copyright © Your Website 2022</p>
        </div>
      </footer>
    );
  }
}
