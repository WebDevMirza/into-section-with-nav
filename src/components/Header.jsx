import { useState } from "react";
import Logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";

const Header = () => {
  const [visiblity, setVisiblity] = useState("");

  const menuVisible = (e) => {
    e.target.nextSibling.classList.add("visiblity");
  };

  const menuHidden = (e) => {
    e.target.classList.remove("visiblity");
  };

  return (
    <>
      <div className="layout">
        <div className="header">
          <div className="logo">
            <a href="#" aria-label="snap logo">
              <img src={Logo} alt="" />
            </a>
          </div>

          <nav className="nav-desktop">
            <ul>
              <ul className="features">
                <p
                  onMouseEnter={(e) => {
                    menuVisible(e);
                  }}
                >
                  Features
                </p>
                <ul
                  className="sm sm-1"
                  onMouseLeave={(e) => {
                    menuHidden(e);
                  }}
                >
                  <li>
                    <a href="#">Todo List</a>
                  </li>
                  <li>
                    <a href="#">Calendar</a>
                  </li>
                  <li>
                    <a href="#">Reminders</a>
                  </li>
                  <li>
                    <a href="#">Planning</a>
                  </li>
                </ul>
              </ul>

              <ul className="company">
                <p
                  onMouseEnter={(e) => {
                    menuVisible(e);
                  }}
                >
                  Company
                </p>
                <ul
                  className="sm sm-2"
                  onMouseLeave={(e) => {
                    menuHidden(e);
                  }}
                >
                  <li>
                    <a href="#">History</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </ul>

              <li>
                <a href="#">Careers</a>
              </li>

              <li>
                <a href="#">About</a>
              </li>
            </ul>

            <ul>
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
