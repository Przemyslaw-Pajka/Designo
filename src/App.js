import logo from './logo.svg';
import './App.css';
 import './styles/sass/main.scss';
import React from 'react';

function App() {
//   const topHeaderNav = document.getElementById('top-header__nav');
// document.getElementById('hamburger').addEventListener("click",(e)=>{
//     const hamburger = e.target;
//     hamburger.classList.toggle("close")
//     topHeaderNav.classList.toggle("active")
// })
  return (
    <>
    <header className="top-header pm-aside">
    <nav className="top-header__nav" id="top-header__nav">
      <a className="nav__logo" href="#">
        <img src="images/shared/desktop/logo-dark.png" alt="DESIGNO"/>
      </a>
      <ul className="nav__menu" id="nav__menu">
        <li><a href="#">OUR COMPANY</a></li>
        <li><a href="#">LOCATIONS</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      <button className="hamburger" id="hamburger"></button>
    </nav>
  </header>
  <header className="main-header">
    <div className="main-header__text-box cta-text pm-aside">
      <h1>Award-winning custom designs and digital branding solutions</h1>
      <p>With over 10 years in the industry, we are experienced in creating fully responsive websites, app
        design,
        and engaging brand experiences. Find out more about our services.</p>
        <button className="main-header__button">LEARN MORE</button>
    </div>
  </header>
  <section className="design">
    <div className="design__wrapper pm-aside">
      <a className="design__box" href="#">
        <h2>WEB DESIGN</h2>
        <p>view projects <span className="right-arrow"></span></p>
      </a>
      <a className="design__box" href="#">
        <h2>APP DESIGN</h2>
        <p>view projects <span className="right-arrow"></span></p>
      </a>
      <a className="design__box" href="#">
        <h2>GRAPHIC DESIGN</h2>
        <p>view projects <span className="right-arrow"></span></p>
      </a>
    </div>
  </section>
  <section className="features">
    <div className="features__wrapper">
      <div className="features__item">
        <img className="features__item__img" src="images/home/illustration-passionate.svg" alt=""/>
        <div className="features__item__text">
          <h3>PASSIONATE</h3>
          <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.</p>
        </div>
      </div>
      <div className="features__item">
        <img className="features__item__img" src="images/home/illustration-resourceful.svg" alt=""/>
        <div className="features__item__text">
          <h3>PRESOURCEFUL</h3>
          <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.</p>
        </div>
      </div>
      <div className="features__item">
        <img className="features__item__img" src="images/home/illustration-friendly.svg" alt=""/>
        <div className="features__item__text">
          <h3>FRIENDLY</h3>
          <p>We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact-us">
    <div className="contact-us__wrapper">
      <div className="text-box">
        <h3>Let’s talk about your project</h3>
        <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
      </div>
      <button>GET IN TOUCH</button>
    </div>
  </section>
  </>
  );
}

export default App;
