import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";

const CardText = ({ cardText: { date, image, text, sectionName, articleSubtitle, body, id, placeHolder } }) => {
  const [iconState, setIconState] = useState(false);
  const { postLocalApi } = useLocalApi();
  const { getLocalApi, localApi } = useLocalApi();
  useEffect(() => {
    getLocalApi();
  }, [getLocalApi]);

  const initialArticleData = {
    sectionName: sectionName,
    imageSource: image,
    articleDate: date,
    articleTitle: text,
    articleSubtitle: articleSubtitle,
    bodyText: body,
    id: id
  };

  const postNewOnClick = () => {
    setIconState(!iconState);
    const repeatedNew = localApi.some((element) => element.articleTitle === initialArticleData.articleTitle);

    if (placeHolder === "homepage" && !repeatedNew) {
      postLocalApi(initialArticleData);
    }
  }

  return (
    <div className="main__aside-top">
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <NavLink to="/details/asdf" className="main__more__read">
          Read More
        </NavLink>
        <div className="main__read-later">
          <img src="/images/bookmark_false.png" alt="icono false" className={iconState ? "notShow" : "show"} width="17" height="17" onClick={postNewOnClick} />
          <img src="/images/bookmark_true.png" alt="icono false" className={iconState ? "show" : "notShow"} width="17" height="17" onClick={postNewOnClick} />

        </div>
      </div>
    </div>
  );
};

export default CardText;
