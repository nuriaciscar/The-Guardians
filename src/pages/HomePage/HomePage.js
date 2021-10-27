import Card from "../../components/Card/Card";
import MainCard from "../../components/MainCard/MainCard";
import MediumCard from "../../components/MediumCard/MediumCard";
import CardText from "../../components/CardText/CardText";
import useNews from "../../hooks/useNews";
import { useEffect, useState } from "react";

const HomePage = () => {
  const { news, loadNewsList, newsSport, loadNewsListSport, newsScience, loadNewsListScience, newsLifeStyle, loadNewsListLifeStyle } = useNews();
  const [numberSport, setNumberSport] = useState(1);
  const [numberScience, setNumberScience] = useState(1);
  const [numberLifeStyle, setNumberLifeStyle] = useState(1);
  useEffect(() => {
    loadNewsList("culture", 1);
    loadNewsListSport("sport", numberSport);
    loadNewsListScience("science", numberScience);
    loadNewsListLifeStyle("lifeandstyle", numberLifeStyle);
  }, [loadNewsList, loadNewsListSport, loadNewsListScience, loadNewsListLifeStyle, numberSport, numberScience, numberLifeStyle]);

  let date = "";
  let image = "";
  let id = "";

  let title = "";
  let titleCartText = "";
  let idText = "";
  let idMedium = "";
  let titleCartMedium = "";
  let imageCartMedium = "";

  //new1?.fields
  const reloadSport = (event) => {
    if (event.target.outerText === "+") {
      setNumberSport(numberSport + 3);
    }
    else if (numberSport > 1) {
      setNumberSport(numberSport - 3);
    }
  }
  const reloadScience = (event) => {
    if (event.target.outerText === "+") {
      setNumberScience(numberScience + 3);
    }
    else if (numberScience > 1) {
      setNumberScience(numberScience - 3);
    }
  }
  const reloadLifeStyle = (event) => {
    if (event.target.outerText === "+") {
      setNumberLifeStyle(numberLifeStyle + 3);
    }
    else if (numberLifeStyle > 1) {
      setNumberLifeStyle(numberLifeStyle - 3);
    }
  }

  if (news.response !== undefined) {
    const newsList = news.response.results;
    const dateClean = newsList[0].webPublicationDate.split("T");
    date = dateClean[0];
    image = newsList[0].fields.thumbnail;
    title = newsList[0].webTitle;
    id = dateClean[0].id;
    titleCartText = newsList[1].webTitle;
    idText = newsList[1].id;
    titleCartMedium = newsList[2].webTitle
    imageCartMedium = newsList[2].fields.thumbnail;
    idMedium = newsList[2].id;

  }
  return (
    <>
      {newsSport.length !== 0 && news.response !== undefined &&
        <main className="main">
          <section className="main__news">
            <MainCard date={date} image={image} title={title} key={id} />
            <div className="main__aside">
              <CardText text={titleCartText} key={idText} />
              <MediumCard image={imageCartMedium} text={titleCartMedium} key={idMedium} />
            </div>
          </section>
          <section className="section">
            <div className="section__container-title">
              <h2 className="section__title">SPORT</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadSport}>-</button>
              {newsSport.map((newCardSport) => (
                <Card text={newCardSport.webTitle} image={newCardSport.fields.thumbnail} key={newCardSport.id} />))}
              <button onClick={reloadSport}>+</button>
            </div>
          </section>
          <section className="section">
            <div className="section__container-title">
              <h2 className="section__title">SCIENCE</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadScience}>-</button>
              {newsScience.map((newCardScience) => (
                <Card text={newCardScience.webTitle} image={newCardScience.fields.thumbnail} key={newCardScience.id} />))}
              <button onClick={reloadScience}>+</button>
            </div>
          </section>
          <section className="section">
            <div className="section__container-title">
              <h2 className="section__title">LIFESTYLE</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadLifeStyle}>-</button>
              {newsLifeStyle.map((newCardLifeStyle, i) => (
                <Card text={newCardLifeStyle.webTitle} image={newCardLifeStyle.fields.thumbnail} key={newCardLifeStyle.id} />))}
              <button onClick={reloadLifeStyle}>+</button>
            </div>
          </section>
        </main>}
    </>
  );
};

export default HomePage;
