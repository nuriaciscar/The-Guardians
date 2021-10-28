import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";

const MediumCard = ({ mediumCard: { date, image, text, sectionName, articleSubtitle, body, placeHolder, id } }) => {
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
    const repeatedNew = localApi.some((element) => element.id === initialArticleData.id);
    if (placeHolder === "homepage" && !repeatedNew) {
      postLocalApi(initialArticleData);
    }
  }

  return (
    <div className="main__aside-bottom">
      <img
        src={image}
        alt=""
        className="main__big-image"
        width="100"
        height="100"
      />
      <h3 className="main__title">{text}</h3>
      <div className="main__more">
        <NavLink to="/details" className="main__more__read">
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

export default MediumCard;
