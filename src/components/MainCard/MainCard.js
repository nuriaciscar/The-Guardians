import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";

const MainCard = ({
  mainCard: {
    date,
    image,
    title,
    sectionName,
    articleSubtitle,
    body,
    placeHolder,
    id,
  },
}) => {
  const [iconState, setIconState] = useState(false);
  const initialArticleData = {
    sectionName: sectionName,
    imageSource: image,
    articleDate: date,
    articleTitle: title,
    articleSubtitle: articleSubtitle,
    bodyText: body,
  };
  const { postLocalApi } = useLocalApi();

  const { getLocalApi, localApi } = useLocalApi();
  useEffect(() => {
    getLocalApi();
  }, [getLocalApi]);

  const postNewOnClick = () => {
    if (placeHolder === "homepage" && !iconState) {
      setIconState(!iconState);
    }

    const repeatedNew = localApi.some(
      (element) => element.articleTitle === initialArticleData.articleTitle
    );
    if (placeHolder === "homepage" && !repeatedNew) {
      postLocalApi(initialArticleData);
    }
  };
  return (
    <div className="main__big">
      <p>{date}</p>
      <NavLink to={`/detail/?id=${id}`}>
        <img
          src={image}
          alt=""
          className="main__big-image"
          width="500"
          height="500"
        />
      </NavLink>
      <h3 className="main__title">{title}</h3>
      <div className="main__more">
        <NavLink to={`/detail/?id=${id}`} className="main__more__read">
          READ MORE
        </NavLink>
        <div className="main__read-later">

          <img
            src="/images/bookmark_false.png"
            alt="icono false"
            className={iconState ? "notShow" : "show"}
            width="17"
            height="17"
            onClick={postNewOnClick}
          />
          <img
            src="/images/bookmark_true.png"
            alt="icono false"
            className={iconState ? "show" : "notShow"}
            width="17"
            height="17"
          />
          <p>Add to Read Later</p>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
