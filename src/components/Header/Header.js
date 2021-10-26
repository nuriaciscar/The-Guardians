import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  const sourceLogo = "./images/header-logo.svg";

  return (
    <header className="header">
      <div className="header__top-container">
        <NavLink to="/home" className="header-logo" exact>
          <img
            src={sourceLogo}
            className="header-logo__image"
            alt="logo of the guardian"
          />
        </NavLink>
        <div className="header-actions">
          <div className="header-user-area">
            <NavLink to="/mynews" className="header-user-area__my-news" exact>
              MY NEWS
            </NavLink>
            <NavLink to="/details" exact>
              <button className="header-user-area__button header-user-area__button--sign-up">
                Sign up
              </button>
            </NavLink>
            <NavLink to="/detailsmodify" exact>
              <button className="header-user-area__button header-user-area__button--login">
                Login
              </button>
            </NavLink>
          </div>
          <div className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-element">NEWS</li>
              <li className="header-nav__list-element">SPORT</li>
              <li className="header-nav__list-element">LIFESTYLE</li>
              <li className="header-nav__list-element">CULTURE</li>
              <li className="header-nav__list-element">OPINION</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-bottom-container">
        <div className="header-runner">
          <div className="header-runner__element">
            <p>ALOHA</p>
          </div>
          <div className="header-runner__element">
            <p>ALOHA</p>
          </div>
          <div className="header-runner__element">
            <p>ALOHA</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

/* <header className="header">
                <div className="headertop-container">
                    <div className="headerlogo">
                        <img src="" alt="logo the guardian" />
                    </div>
                    <div className="headernav">
                        <div className="headernav--user">
                            <a href="#" className="headernav-link">MY NEWS</a>
                            <button className="headernav-sign">Sign up</button>
                            <button className="headernav-login">Login</button>
                        </div>
                        <div className="headernav--sections">
                            <ul className="headernav--list">
                                <li className="headernav--list-element">NEWS</li>
                                <li className="headernav--list-element">SPORT</li>
                                <li className="headernav--list-element">LIFESTYLE</li>
                                <li className="headernav--list-element">CULTURE</li>
                                <li className="headernav--list-element">OPINION</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="headerbottom-container">
                    <div className="headerrunner-list">
                        <div className="headerrunner-element">
                            <p>ALOHA</p>
                        </div>
                        <div className="headerrunner-element">
                            <p>ALOHA</p>
                        </div>
                        <div className="header__runner-element">
                            <p>ALOHA</p>
                        </div>
                    </div>
                </div>
            </header>
 */
