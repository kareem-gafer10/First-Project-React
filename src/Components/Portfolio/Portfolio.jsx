import React, { Component } from "react";
import Styles from "./Portfolio.module.css";
import item1 from "./../../img/cabin.png";
import item2 from "./../../img/cake.png";
import item3 from "./../../img/circus.png";
import item4 from "./../../img/game.png";
import item5 from "./../../img/safe.png";
import item6 from "./../../img/submarine.png";

class Portfolio extends Component {
  render() {
    return (
      <div className={`${Styles.portfolio} text-center py-5`} id="portfolio">
        <div className="container">
          <h2>Portfolio</h2>
          <div className={`${Styles.star}`}>
            <i class="fa-solid fa-star"></i>
          </div>

          <div className="row my-4">
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item1} alt="iem1" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item2} alt="iem2" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item3} alt="iem3" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item4} alt="iem4" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item5} alt="iem5" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className={`${Styles.item}`}>
                <img className="img-fluid" src={item6} alt="iem6" />
                <div className={`${Styles.overlay}`}>+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
