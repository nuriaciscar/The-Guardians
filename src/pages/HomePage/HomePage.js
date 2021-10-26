
import Card from "../../components/Card/Card";
import CardText from "../../components/CardText/CardText";
import MainCard from "../../components/MainCard/MainCard";
import MediumCard from "../../components/MediumCard/MediumCard";

const HomePage = () => {
  return (
    <div class="container">
      <header class="header">
        <div class="header__top-container">
          <div class="header__logo">
            <img src="" alt="logo the guardian" />
          </div>
          <div class="header__nav">
            <div class="header__nav--user">
              <a href="h" class="header__nav-link">
                MY NEWS
              </a>
              <button class="header__nav-sign">Sign up</button>
              <button class="header__nav-login">Login</button>
            </div>
            <div class="header__nav--sections">
              <ul class="header__nav--list">
                <li class="header__nav--list-element">NEWS</li>
                <li class="header__nav--list-element">SPORT</li>
                <li class="header__nav--list-element">LIFESTYLE</li>
                <li class="header__nav--list-element">CULTURE</li>
                <li class="header__nav--list-element">OPINION</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header__bottom-container">
          <div class="header__runner-list">
            <div class="header__runner-element">
              <p>ALOHA</p>
            </div>
            <div class="header__runner-element">
              <p>ALOHA</p>
            </div>
            <div class="header__runner-element">
              <p>ALOHA</p>
            </div>
          </div>
        </div>
      </header>
      <main class="main">
        <section class="main__news">
          <MainCard />
          <div class="main__aside">
            <CardText />
            <MediumCard />


          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div class="section__cards">
            <Card />
            <Card />
            <Card />

          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div class="section__cards">
            <Card />
            <Card />
            <Card />

          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div class="section__cards">
            <Card />
            <Card />
            <Card />

          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
