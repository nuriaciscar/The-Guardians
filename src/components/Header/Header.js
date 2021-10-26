function Header() {
  const sourceLogo = "";
  return (
    <header className="header">
      <div className="headertop-container">
        <div className="headerlogo">
          <img src={sourceLogo} alt="logo of the guardian" />
        </div>
        <div className="headernav">
          <div className="headernav--user">
            <a href="hfjf" className="headernav-link">
              MY NEWS
            </a>
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
