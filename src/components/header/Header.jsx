import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Med 5
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__list item">
              <a href="#home" className="nav__link active-link">
                <i class="uil uil-estate nav__icon"></i>
                Home
              </a>
            </li>
            <li className="nav__list item">
              <a href="#about" className="nav__link">
                <i class="uil uil-user nav__icon"></i>
                About
              </a>
            </li>
            <li className="nav__list item">
              <a href="#skills" className="nav__link">
                <i class="uil uil-file-alt nav__icon"></i>
                Skills
              </a>
            </li>
            <li className="nav__list item">
              <a href="#portfolio" className="nav__link">
                <i class="uil uil-scenery nav__icon"></i>
                Portfolio
              </a>
            </li>
            <li className="nav__list item">
              <a href="#contact" className="nav__link">
                <i class="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            <li className="nav__list item">
              <a href="#contact" className="nav__link">
                <i class="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div
          className="nav__toggle"
          onClick={() => {
            showMenu(!Toggle);
          }}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
