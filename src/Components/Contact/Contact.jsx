import React, { Component } from "react";
import Styles from "./Contact.module.css";
export default class Contact extends Component {
  render() {
    return (
      <section className={`${Styles.contact} py-5 text-center`} id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className={`${Styles.star}`}>
            <i class="fa-solid fa-star"></i>
          </div>
          <div className={`${Styles.contactForm}`}>
            <div className={`${Styles.myInput}`}>
              <input type="text" placeholder="Name" />
            </div>
            <div className={`${Styles.myInput}`}>
              <input type="email" placeholder="Email Address" />
            </div>
            <div className={`${Styles.myInput}`}>
              <input type="tel" placeholder="Phone Number" />
            </div>
            <div className={`${Styles.myInput}`}>
              <textarea placeholder="Message"></textarea>
            </div>
            <div className={`${Styles.myInput} text-left`}>
              <button>Send</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
