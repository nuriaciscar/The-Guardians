import { useState } from "react";
import "./DetailEditPage.scss";

/* 
recibe una variable detailType:

- myListNews (modificables)
- createNews (modificable y vacía)
 */
const DetailEditPage = () => {
  const detailTypes = ["myListNews", "createNews"];
  const detailType = detailTypes[1];

  const [isFormShown, setIsFormShown] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isArticleRendered, setIsArticleRendered] = useState(
    detailType === "createNews" ? false : true
  );
  const initialArticleData = {
    sectionName: "SECTION",
    imageSource: "",
    articleDate: "",
    articleTitle: "",
    articleSubtitle: "",
    bodyText: "",
  };

  const [articleData, setArticleData] = useState(initialArticleData);
  if (detailType === "myListNews") {
    setArticleData(5);
    // llenar con el get a API local
  }

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
  const onSubmitForm = (event) => {
    event.preventDefault();
    setIsFormShown(false);
    setIsArticleRendered(true);
    //changeArticleData(ArticleData); ////// Aixo va al Post o Edit
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
          <p>{articleData.bodyText}</p>
        </div>
      </article>
    );
  }

  function renderForm() {
    return (
      <form
        className="detail-page-form"
        autoComplete="off"
        onSubmit={onSubmitForm}
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

  function renderMyListNews() {}

  function renderCreateNews() {
    return (
      <main className="main-article">
        <pre>{JSON.stringify(articleData, null, 2)}</pre>
        <aside className="main-article__aside-left">
          <div className="main-article__aside-name">
            <h2 className="aside__title">{articleData.sectionName}</h2>
          </div>
          {isFormShown ? renderForm() : renderEditButton()}
        </aside>
        {isArticleRendered ? renderArticle() : ""}
      </main>
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
