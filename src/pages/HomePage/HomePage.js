import Card from "../../components/Card/Card";
import MediumCard from "../../components/MediumCard/MediumCard";
import CardText from "../../components/CardText/CardText";
import MainCard from "../../components/MainCard/MainCard";

const HomePage = () => {
  return (
    <>
      <main className="main">
        <section className="main__news">
          <MainCard />
          <div className="main__aside">
            <CardText />
            <MediumCard />
          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div className="section__cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div className="section__cards">
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <section className="section">
          <div className="section__container-title">
            <h2 className="section__title">SPORT</h2>
          </div>

          <div className="section__cards">
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
