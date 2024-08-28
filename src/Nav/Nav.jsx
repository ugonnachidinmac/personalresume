import React from "react";
import logo from "../assets/logo.png";
import handBurger from "../assets/handBurger.png";

import "../Nav/Nav.scss";
// import logo from '../assets/separatorBlack.png';

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <ul className="navUl">
          <li>
            <img className="logo" src={logo} alt="Logo image" />
          </li>
          <li className="navItems">
            <a href="">Home</a>
            <a href="">Contributors</a>
            <a href="">About me</a>
            <a href="">Services</a>
            <a href="">Portfolio</a>
            <a href="">Contact</a>
          </li>
          <li>
          <div className="portfolio">
              <a href="#">Portfolio Here</a>
              </div>
          </li>
          <li className="menu dropdown">
              <img className="dropbtn" src={handBurger} alt="menu" />
              <div className="dropdown-content">
                <a href="#about">Home</a>
                <a href="#about">Contributors</a>
                <a href="#about">About me</a>
                <a href="#skills">Services</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
                <div className="portfolio1">
                <a href="#">Portfolio Here</a>
              </div>
              </div>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
