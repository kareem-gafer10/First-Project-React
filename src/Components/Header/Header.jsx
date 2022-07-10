import React, { Component } from 'react';
import Styles from './Header.module.css'
import imgHeader from '../../img/avataaars.svg'
class Header extends Component {
  render() {
    return (
      <>
         <header className={`${Styles.myHeader}`} id="home">
                <div className="d-flex justify-content-center align-items-center flex-column w-100 h-100">
                    <div className={`${Styles.img}`}>
                        <img className="img-fluid" src={imgHeader} alt="header"/>
                    </div>
                    <h1>Start React</h1>
                    <div className={`${Styles.star}`}>
                    <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="mb-5">Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </header>
      </>
    );
  }
}

export default Header;
