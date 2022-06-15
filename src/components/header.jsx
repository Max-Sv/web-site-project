import "../styles/header.scss";
import { Link } from "react-router-dom";
import React from "react";
import { Logo } from "../common/logo";
import { Footer } from "./footer";

const theme = {
  whiteColor: "#FFFFFF",
  darkColor: "#141414",
  mainWhiteColor: "--main-white-color",
  mainDarkColor: "--main-black-color",
};

export const Header = () => {
  const [isDark, setDark] = React.useState(false);
  const [buttonTitle, setButtonTitle] = React.useState("White side");
  const [isMobileMenuOpened, setMobileMenuOpened] = React.useState(false);
  const mobileMenu = React.useRef(null);
  const [themeDashboard, setThemeDashboard] = React.useState({ state: true, color: "white" });

  // const whiteVersion = document.querySelector(".entry__white");
  // const darkVersion = document.querySelector(".entry__dark");
  // const entryWrapper = document.querySelector(".entry__wrapper");

  /* whiteVersion.addEventListener('click', () => {
    entryWrapper.style.setProperty('height', '0px');
    entryWrapper.style.setProperty('visibility', 'none');
    entryWrapper.style.setProperty('opacity', '0');
    entryWrapper.remove();
});
darkVersion.addEventListener('click', () => {
    entryWrapper.style.setProperty('height', '0px');
    entryWrapper.style.setProperty('visibility', 'none');
    entryWrapper.style.setProperty('opacity', '0');
    entryWrapper.remove();
});
*/

  React.useEffect(() => {
    setButtonTitle(isDark ? "White side" : "Dark side");
    document.documentElement.style.setProperty(theme.mainWhiteColor, isDark ? theme.darkColor : theme.whiteColor);
    document.documentElement.style.setProperty(theme.mainDarkColor, isDark ? theme.whiteColor : theme.darkColor);
  }, [isDark]);

  React.useEffect(() => {
    if (isMobileMenuOpened) {
      document.body.classList.add("no-scroll");
      mobileMenu.current.classList.remove("closed");
    } else {
      document.body.classList.remove("no-scroll");
      mobileMenu.current.classList.add("closed");
    }
  }, [isMobileMenuOpened]);

  React.useEffect(() => {
    if (themeDashboard.color === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
    // document.body.classList.remove("no-scroll");
  }, [themeDashboard]);

  return (
    <>
      {themeDashboard.state ? (
        <div className="theme">
          <div className="white side" onClick={() => setThemeDashboard({ state: false, color: "white" })}>
            <div className="arrow">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 12L9 21L11.115 23.115L18 16.245L24.885 23.115L27 21L18 12Z" fill="black" />
              </svg>
            </div>
          </div>
          <div className="theme-logo">
            <Logo />
          </div>
          <div className="dark side" onClick={() => setThemeDashboard({ state: false, color: "dark" })}>
            <div className="arrow">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 24L27 15L24.885 12.885L18 19.755L11.115 12.885L9 15L18 24Z" fill="white" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      <div className="header__wrapper">
        <div className="header-menu__wrapper">
          <Link to="/" className="header-menu__link selected">
            Home
          </Link>
          <Link to="/artworks" className="header-menu__link">
            Artworks
          </Link>
          <Link to="/biography" className="header-menu__link">
            Biography
          </Link>
          <Link to="/exhibitions" className="header-menu__link">
            Exhibitions
          </Link>
          <p onClick={() => setDark(!isDark)} className="header-menu__link change-side-button">
            {buttonTitle}
          </p>
        </div>

        <div className="header-menu__open-button" onClick={() => setMobileMenuOpened(!isMobileMenuOpened)}></div>

        <div className="header-menu__wrapper-mobile closed" ref={mobileMenu}>
          <div className="header-menu__close-button-wrapper">
            <div className="header-menu__close-button" onClick={() => setMobileMenuOpened(!isMobileMenuOpened)}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="#141414"
                />
              </svg>
            </div>
          </div>
          <Link className="header-menu__link selected" to="/">
            Home
          </Link>
          <Link className="header-menu__link" to="/">
            Artworks
          </Link>
          <Link className="header-menu__link" to="/">
            Biography
          </Link>
          <Link className="header-menu__link" to="/">
            Exhibitions
          </Link>
          <p className="header-menu__link change-side-button" onClick={() => setDark(!isDark)}>
            {buttonTitle}
          </p>
        </div>

        <div className="side-buttons__wrapper">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="../assets/facebook_white.svg" alt="" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="../assets/instagram_white.svg" alt="" />
          </a>
          <a href="#" className="header-menu__link">
            RUS
          </a>
        </div>
      </div>
      <Footer isDark={isDark} />
    </>
  );
};
