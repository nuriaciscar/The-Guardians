import { NavLink } from "react-router-dom";

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
            height="80"
            width="200"
          />
        </NavLink>
        <div className="header-actions">
          <div className="header-user-area">
            <NavLink to="/mynews" className="header-user-area__my-news" exact>
              MY NEWS
            </NavLink>

            <button className="header-user-area__button header-user-area__button--sign-up">
              Sign up
            </button>

            <button className="header-user-area__button header-user-area__button--login">
              Login
            </button>

            <button className="header-user-area__button header-user-area__button--login">
              Login
            </button>
          </div>
          <div className="header-nav">
            <ul className="header-nav__list">
              <a href="#news" className="header-nav__list-element">
                NEWS
              </a>
              <a href="#sports" className="header-nav__list-element">
                SPORTS
              </a>
              <a href="#science" className="header-nav__list-element">
                SCIENCE
              </a>
              <a href="#lifestyle" className="header-nav__list-element">
                LIFESTYLE
              </a>

              {/* <li className="header-nav__list-element">SPORT</li>
              <li className="header-nav__list-element">LIFESTYLE</li>
              <li className="header-nav__list-element">CULTURE</li>
              <li className="header-nav__list-element">OPINION</li> */}
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
