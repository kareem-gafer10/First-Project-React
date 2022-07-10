import { Component } from "react";
import Styles from "./MainFooter.module.css";

class MainFooter extends Component {
  render() {
    return (
      <section className={`${Styles.mainFooter} text-center text-white `}>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className={`${Styles.item}`}>
                <h2>Location</h2>
                <p>2215 John Daniel Drive Clark, MO 65243</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${Styles.item}`}>
                <h2>Around the web</h2>
                <div className={`${Styles.iconContainer}`}>
                  <div className={`${Styles.myIcon} ml-0`}>
                    <i class="fa-brands fa-facebook"></i>
                  </div>
                  <div className={`${Styles.myIcon}`}>
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className={`${Styles.myIcon}`}>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                  <div className={`${Styles.myIcon}`}>
                    <i class="fa-brands fa-github"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className={`${Styles.item} mb-0`}>
                <h2>About Freelancer</h2>
                <p>
                  Freelance is a free to use, MIT licensed Bootstrap theme
                  created by .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default MainFooter;
