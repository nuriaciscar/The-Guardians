import { NavLink } from "react-router-dom";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";


function Header() {
  const sourceLogo = "./images/header-logo.svg";

  return (
    <header className="header" id="header">
      <div className="header__top-container">
        <NavLink to="/home" className="header-logo" exact>
          <img
            src={sourceLogo}
            className="header-logo__image"
            alt="logo of the guardian"
            height="100"
            width="290"
          />
        </NavLink>
        <div className="header-actions">
          <div className="header-user-area">
            <NavLink to="/mynews" className="header-user-area__my-news" exact>
              MY NEWS
            </NavLink>

            <LoginButton />

            <LogoutButton />

          </div>
          <div className="header-nav">
            <ul className="header-nav__list">
              <a href="/home#news" className="header-nav__list-element">
                NEWS
              </a>
              <a href="/home#sports" className="header-nav__list-element">
                SPORTS
              </a>
              <a href="/home#science" className="header-nav__list-element">
                SCIENCE
              </a>
              <a href="/home#lifestyle" className="header-nav__list-element">
                LIFESTYLE
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom-container">
        <div className="header-runner">
          <div className="header-runner__element">
            <p className="header-runner__element__text__color">Breaking News</p>
          </div>
          <div className="header-runner__element">
            <p className="header-runner__element__text">
              Mario is exploting his students
            </p>
          </div>
          <div className="header-runner__element">
            <p className="header-runner__element__text">...Again</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
