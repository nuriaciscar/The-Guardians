import { useState, useEffect } from "react";
import "./DetailEditPage.scss";
import useLocalApi from "../../hooks/useLocalApi";
import { useLocation } from "react-router";

const DetailEditPage = ({ detailType }) => {
  const { postLocalApi, putLocalApi, apiArticle, getLocalApiArticle } =
    useLocalApi();

  let query = useLocation().search;
  let id;

  if (query) {
    query = query
      .slice(1, query.length)
      .split("&")
      .map((param) => param.split("="));
    id = query.filter((array) => array[0] === "id")[0][1];
  } else {
    id = null;
  }

  useEffect(() => {
    if (id !== null) getLocalApiArticle(id);
  }, [getLocalApiArticle, id]);

  const [isFormShown, setIsFormShown] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isArticleRendered, setIsArticleRendered] = useState(
    detailType === "createNews" ? false : true
  );

  let initialArticleData = {
    sectionName: "SECTION",
    imageSource: "",
    articleDate: "",
    articleTitle: "",
    articleSubtitle: "",
    bodyText: "",
    id: "", /////////////////////////////posar al submit
  };

  const [articleData, setArticleData] = useState(initialArticleData);

  const waitInitialData = async (detailType) => {
    initialArticleData = await (detailType === "myListNews"
      ? apiArticle
      : initialArticleData);
    setArticleData(initialArticleData);
    return initialArticleData;
  };

  waitInitialData(detailType);

  function changeArticleData(event) {
    setArticleData({
      ...articleData,
      [event.target.id]: event.target.value,
    });

    if (
      articleData.imageSource !== "" &&
      articleData.articleDate !== "" &&
      articleData.articleTitle !== "" &&
      articleData.articleTitle !== "" &&
      articleData.articleSubitle !== ""
    )
      setIsSubmitDisabled(false);
    else setIsSubmitDisabled(true);
  }

  const onPostSubmitForm = (event) => {
    event.preventDefault();
    setIsFormShown(false);
    setIsArticleRendered(true);
    postLocalApi(articleData);
  };

  const onPutSubmitForm = (event) => {
    event.preventDefault();
    setIsFormShown(false);
    putLocalApi(articleData);
  };

  function renderEditButton() {
    return (
      <button
        type="button"
        className="button button--edit"
        onClick={() => setIsFormShown(true)}
      >
        Edit
      </button>
    );
  }

  function renderArticle() {
    return (
      <article className="article">
        <div className="article__content">
          <div className="article__top-image">
            <p>{articleData.articleDate}</p>
            <i></i>
            <p>Add to Read Letter</p>
          </div>

          <img
            src={articleData.imageSource}
            alt="thumbnail of the article. Api not descriptive enough, sorry"
            className="main__big-image"
          />
          <h3 className="main__title">{articleData.articleTitle}</h3>
          <p className="main__subtitle">{articleData.articleSubtitle}</p>
          {articleData.bodyText}
        </div>
      </article>
    );
  }

  function renderForm() {
    return (
      <form
        className="detail-page-form"
        autoComplete="off"
        onSubmit={isArticleRendered ? onPutSubmitForm : onPostSubmitForm}
      >
        <div className="detail-page-form__container">
          <label htmlFor="sectionName">Section Name</label>
          <input
            id="sectionName"
            type="text"
            value={articleData.sectionName}
            onChange={changeArticleData}
            required
          />
          <label htmlFor="imageSource">Image Source</label>
          <input
            id="imageSource"
            type="text"
            placeholder="url"
            value={articleData.imageSource}
            onChange={changeArticleData}
            required
          />
          <label htmlFor="articleDate">Date</label>
          <input
            id="articleDate"
            type="text"
            placeholder="posar format"
            value={articleData.articleDate}
            onChange={changeArticleData}
            required
          />
          <label htmlFor="articleTitle">Title</label>
          <input
            id="articleTitle"
            type="text"
            value={articleData.articleTitle}
            onChange={changeArticleData}
            required
          />
          <label htmlFor="articleSubtitle">Subtitle</label>
          <input
            id="articleSubtitle"
            type="text"
            value={articleData.articleSubtitle}
            onChange={changeArticleData}
            required
          />
          <label htmlFor="bodyText">Text of the article</label>
          <textarea
            id="bodyText"
            value={articleData.bodyText}
            onChange={changeArticleData}
            required
          ></textarea>
          <button
            type="submit"
            className="button button--submit"
            disabled={isSubmitDisabled}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }

  function renderMyListNews() {
    return (
      <>
        <main className="main-article">
          <aside className="main-article__aside-left">
            <div className="main-article__aside-name">
              <h2 className="aside__title">{articleData.sectionName}</h2>
            </div>
            {isFormShown ? renderForm() : renderEditButton()}
          </aside>
          {renderArticle()}
        </main>
      </>
    );
  }

  function renderCreateNews() {
    return (
      <>
        <main className="main-article">
          <aside className="main-article__aside-left">
            <div className="main-article__aside-name">
              <h2 className="aside__title">{articleData.sectionName}</h2>
            </div>
            {isFormShown ? renderForm() : renderEditButton()}
          </aside>
          {isArticleRendered ? renderArticle() : ""}
        </main>
      </>
    );
  }

  return (
    <>
      {detailType === "myListNews" && renderMyListNews()}
      {detailType === "createNews" && renderCreateNews()}
    </>
  );
};

export default DetailEditPage;
