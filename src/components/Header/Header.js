import { NavLink } from "react-router-dom";
import "./Header.scss";
// import { HashLink, NavHashLink } from "react-router-hash-link";

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
            height="80"
            width="200"
          />
        </NavLink>
        <div className="header-actions">
          <div className="header-user-area">
            <NavLink to="/mynews" className="header-user-area__my-news" exact>
              MY NEWS
            </NavLink>

            <NavLink to="/detail" exact>
              <button className="header-user-area__button header-user-area__button--sign-up">
                Sign up
              </button>
            </NavLink>
            <NavLink to="/detailEditPost" exact>
              <button className="header-user-area__button header-user-area__button--login">
                Login
              </button>
            </NavLink>

            <NavLink to="/detailEditPut/:SECTION/:" exact>
              <button className="header-user-area__button header-user-area__button--login">
                Login
              </button>
            </NavLink>
          </div>
          <div className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__list-element">
                {/* <NavHashLink to="/mynews" activeClassName="selected">
                  NEWS
                </NavHashLink> */}
              </li>
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
