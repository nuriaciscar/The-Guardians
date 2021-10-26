import Card from "../../components/Card/Card";
import MainCard from "../../components/MainCard/MainCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import CardText from "../../components/CardText/CardText";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <section className="main__news">
          <div className="main__big">
            <p>15.12.2021</p>
            <img
              src="./pexels-kaique-rocha-1812602.jpg"
              alt=""
              className="main__big-image"
              width="300"
              height="300"
            />
            <h3 className="main__title">TITLE OF THE MAIN NEW</h3>
            <div className="main__more">
              <a href="h">READ MORE</a>
              <div className="main__read-later">
                <i></i>
                <p>Add to Read Letter</p>
              </div>
            </div>
          </div>
        </section>
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
      </main>
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
