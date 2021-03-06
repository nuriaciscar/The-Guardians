import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useLocalApi from "../../hooks/useLocalApi";

const Card = ({
  card: {
    date,
    image,
    text,
    sectionName,
    articleSubtitle,
    body,
    id,
    placeHolder,
    idHomepage,
  },
}) => {
  const [iconState, setIconState] = useState(false);
  const { postLocalApi } = useLocalApi();
  const { getLocalApi, localApi, deleteLocalApi } = useLocalApi();
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
    id: id,
  };


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

  const deleteOnClick = () => {
    deleteLocalApi(initialArticleData.id);
  };

  useEffect(() => {
    if (placeHolder === "mynews") {
      setIconState(true);
    }
  }, [placeHolder]);

  return (
    <div className="section__card">
      <NavLink
        to={
          placeHolder === "homepage"
            ? `/detail/?id=${idHomepage}`
            : `detailEditPut/?id=${initialArticleData.id}`
        }
        className="main__more__read"
      >
        <img
          src={image}
          alt=""
          className={"card__image"}
          width="200"
          height="100"
        />
      </NavLink>
      <p className="section__text">{text} </p>
      <div className="main__more__card">
        <NavLink
          to={
            placeHolder === "homepage"
              ? `/detail/?id=${idHomepage}`
              : `detailEditPut/?id=${initialArticleData.id}`
          }
          className="main__more__read"
        >
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
            alt="icono true"
            className={iconState ? "show" : "notShow"}
            width="17"
            height="17"
            onClick={deleteOnClick}
          />
        </div>
      </div>
    </div>
  );
};
export default Card;
