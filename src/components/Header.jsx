import { useRef } from "react";
import Logo from "../assets/images/logo.svg";
import "../assets/styles/header.css";

const Header = () => {
  const navMobile = useRef("");
  const navToggle = useRef("");

  const toggleMenu = () => {
    [...navMobile.current.classList].includes("nav-mobile")
      ? navMobile.current.classList.remove("nav-mobile")
      : navMobile.current.classList.add("nav-mobile");

    [...navToggle.current.classList].includes("menu-toggle-cross")
      ? navToggle.current.classList.remove("menu-toggle-cross")
      : navToggle.current.classList.add("menu-toggle-cross");

    // bgChange
    const bgCheck = [...document.getElementsByTagName("body")][0].classList.contains("bg-dark");
    bgCheck
      ? [...document.getElementsByTagName("body")][0].classList.remove("bg-dark")
      : [...document.getElementsByTagName("body")][0].classList.add("bg-dark");
  };

  const mobileExpand = (e) => {
    const targetElement = [...e.target.nextSibling.classList];
    const visiblityCheck = targetElement.includes("mobile-visiblity");
    const targetParent = e.target.parentElement;

    visiblityCheck
      ? e.target.nextSibling.classList.remove("mobile-visiblity")
      : e.target.nextSibling.classList.add("mobile-visiblity");

    visiblityCheck ? targetParent.classList.add("mobile-tap") : targetParent.classList.remove("mobile-tap");
  };

  const toggleMenuforOverlay = (e) => {
    const bgCheck = [...document.getElementsByTagName("body")][0].classList.contains("bg-dark");
    bgCheck && e.target.classList.contains("overlay") ? toggleMenu() : null;
  };

  return (
    <>
      <div className="layout">
        <div className="header">
          <div className="logo">
            <a href="/" aria-label="snap logo">
              <img src={Logo} alt="" />
            </a>
          </div>

          <div ref={navToggle} onClick={toggleMenu} className="menu-toggle"></div>

          <div onClick={toggleMenuforOverlay} className="overlay">
            <nav ref={navMobile} className="nav-desktop">
              <ul>
                <div className="drop-down">
                  <ul className="features">
                    <p onClick={mobileExpand}>Features</p>
                    <div className="sm sm-1 visiblity mobile-visiblity">
                      <div></div>
                      <ul className="bg">
                        <li>
                          <a className="icon todo" href="#">
                            Todo List
                          </a>
                        </li>
                        <li>
                          <a className="icon cal" href="#">
                            Calendar
                          </a>
                        </li>
                        <li>
                          <a className="icon reminder" href="#">
                            Reminders
                          </a>
                        </li>
                        <li>
                          <a className="icon plan" href="#">
                            Planning
                          </a>
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="drop-down">
                  <ul className="company">
                    <p onClick={mobileExpand}>Company</p>
                    <div className="sm sm-2 visiblity mobile-visiblity">
                      <div></div>
                      <ul className="bg bg-company">
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
                    </div>
                  </ul>
                </div>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
              </ul>
              <ul className="userAction">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a className="reg" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
