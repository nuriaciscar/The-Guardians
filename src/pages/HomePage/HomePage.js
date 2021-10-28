import Card from "../../components/Card/Card";
import MediumCard from "../../components/MediumCard/MediumCard";
import CardText from "../../components/CardText/CardText";
import MainCard from "../../components/MainCard/MainCard";
import useNews from "../../hooks/useNews";
import { useEffect, useState } from "react";

const HomePage = () => {
  const {
    news,
    loadNewsList,
    newsSport,
    loadNewsListSport,
    newsScience,
    loadNewsListScience,
    newsLifeStyle,
    loadNewsListLifeStyle,
  } = useNews();
  const [numberSport, setNumberSport] = useState(1);
  const [numberScience, setNumberScience] = useState(1);
  const [numberLifeStyle, setNumberLifeStyle] = useState(1);
  useEffect(() => {
    loadNewsList("culture", 1);
    loadNewsListSport("sport", numberSport);
    loadNewsListScience("science", numberScience);
    loadNewsListLifeStyle("lifeandstyle", numberLifeStyle);
  }, [
    loadNewsList,
    loadNewsListSport,
    loadNewsListScience,
    loadNewsListLifeStyle,
    numberSport,
    numberScience,
    numberLifeStyle,
  ]);

  let date = "";
  let image = "";
  let id = "";
  let title = "";
  let sectionName = "";
  let articleSubtitle = "";
  let body = "";

  let titleCartText = "";
  let dateText = "";
  let imageText = "";
  let sectionNameText = "";
  let articleSubtitleText = "";
  let bodyText = "";
  let idText = "";

  let idMedium = "";
  let titleCartMedium = "";
  let imageCartMedium = "";
  let dateCartMedium = "";
  let sectionNameMedium = "";
  let articleSubtitleMedium = "";
  let bodyMedium = ""


  //new1?.fields
  const reloadSport = (event) => {
    if (event.target.outerText === "+") {
      setNumberSport(numberSport + 3);
    } else if (numberSport > 1) {
      setNumberSport(numberSport - 3);
    }
  };
  const reloadScience = (event) => {
    if (event.target.outerText === "+") {
      setNumberScience(numberScience + 3);
    } else if (numberScience > 1) {
      setNumberScience(numberScience - 3);
    }
  };
  const reloadLifeStyle = (event) => {
    if (event.target.outerText === "+") {
      setNumberLifeStyle(numberLifeStyle + 3);
    } else if (numberLifeStyle > 1) {
      setNumberLifeStyle(numberLifeStyle - 3);
    }
  };

  if (news.response !== undefined) {
    const newsList = news.response.results;
    const dateClean = newsList[0].webPublicationDate.split("T");
    const dateCleanText = newsList[1].webPublicationDate.split("T");
    const dateCleanMedium = newsList[2].webPublicationDate.split("T");
    date = dateClean[0];
    image = newsList[0].fields.thumbnail;
    title = newsList[0].webTitle;
    articleSubtitle = newsList[0].fields.trailText;
    sectionName = newsList[0].sectionName;
    body = newsList[0].fields.bodyText;
    id = newsList[0].id;

    titleCartText = newsList[1].webTitle;
    idText = newsList[1].id;
    dateText = dateCleanText[0];
    imageText = newsList[1].fields.thumbnail;
    sectionNameText = newsList[1].sectionName;
    articleSubtitleText = newsList[1].fields.trailText;
    bodyText = newsList[1].fields.bodyText;

    titleCartMedium = newsList[2].webTitle;
    imageCartMedium = newsList[2].fields.thumbnail;
    idMedium = newsList[2].id;
    dateCartMedium = dateCleanMedium[0];
    sectionNameMedium = newsList[2].sectionName;
    articleSubtitleMedium = newsList[2].fields.trailText;
    bodyMedium = newsList[2].fields.bodyText;
  }

  return (
    <>
      {newsSport.length !== 0 && news.response !== undefined && (
        <main className="main">

          <a className="goUp hide" href="#header" id="js-top">
            <img
              src="./images/up.png"
              alt="icon of an arrow"
              height="30"
              width="30"
            ></img>
          </a>

          <section className="main__content" id="news">
            <div className="main__news">
              <MainCard mainCard={{ date, image, title, sectionName, articleSubtitle, body, placeHolder: "homepage" }} key={id} />
            </div>
            <div className="main__aside">
              <CardText cardText={{
                date: dateText,
                image: imageText,
                text: titleCartText,
                sectionName: sectionNameText,
                articleSubtitle: articleSubtitleText,
                body: bodyText,
                placeHolder: "homepage"
              }} key={idText} />
              <MediumCard
                mediumCard={{
                  date: dateCartMedium,
                  image: imageCartMedium,
                  text: titleCartMedium,
                  sectionName: sectionNameMedium,
                  articleSubtitle: articleSubtitleMedium,
                  body: bodyMedium,
                  placeHolder: "homepage"
                }}
                key={idMedium}
              />
            </div>
          </section>
          <section className="section">
            <div className="section__container-title" id="sports">
              <h2 className="section__title">SPORTS</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadSport}>-</button>
              {newsSport.map((newCardSport) => (
                <Card
                  card={{
                    text: newCardSport.webTitle,
                    image: newCardSport.fields.thumbnail,
                    date: newCardSport.webPublicationDate.split("T")[0],
                    sectionName: newCardSport.sectionName,
                    articleSubtitle: newCardSport.fields.trailText,
                    body: newCardSport.fields.bodyText,
                    placeHolder: "homepage"
                  }}
                  key={newCardSport.id}
                />
              ))}
              <button onClick={reloadSport}>+</button>
            </div>
          </section>
          <section className="section">
            <div className="section__container-title" id="science">
              <h2 className="section__title">SCIENCE</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadScience}>-</button>
              {newsScience.map((newCardScience) => (
                <Card
                  card={{
                    text: newCardScience.webTitle,
                    image: newCardScience.fields.thumbnail,
                    date: newCardScience.webPublicationDate.split("T")[0],
                    sectionName: newCardScience.sectionName,
                    articleSubtitle: newCardScience.fields.trailText,
                    body: newCardScience.fields.bodyText,
                    placeHolder: "homepage",
                  }}
                  key={newCardScience.id}
                />
              ))}
              <button onClick={reloadScience}>+</button>
            </div>
          </section>
          <section className="section">
            <div className="section__container-title" id="lifestyle">
              <h2 className="section__title">LIFESTYLE</h2>
            </div>

            <div className="section__cards">
              <button onClick={reloadLifeStyle}>-</button>
              {newsLifeStyle.map((newCardLifeStyle, i) => (
                <Card
                  card={{
                    text: newCardLifeStyle.webTitle,
                    image: newCardLifeStyle.fields.thumbnail,
                    date: newCardLifeStyle.webPublicationDate.split("T")[0],
                    sectionName: newCardLifeStyle.sectionName,
                    articleSubtitle: newCardLifeStyle.fields.trailText,
                    body: newCardLifeStyle.fields.bodyText,
                    placeHolder: "homepage",
                  }}
                  key={newCardLifeStyle.id}
                />
              ))}
              <button onClick={reloadLifeStyle}>+</button>
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default HomePage;
