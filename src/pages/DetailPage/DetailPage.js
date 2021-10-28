import { useLocation } from "react-router";
import useArticle from "../../hooks/useArticle";
import { useEffect } from "react";

const DetailPage = () => {
  const { article, loadArticleById } = useArticle();
  let query = useLocation().search;

  query = query
    .slice(1, query.length)
    .split("&")
    .map((param) => param.split("="));
  const id = query.filter((array) => array[0] === "id")[0][1];

  useEffect(() => {
    loadArticleById(id);
  }, [loadArticleById, id]);

  return (
    <>
      <main className="main-article">
        <aside className="main-article__aside-left">
          <div className="main-article__aside-name">
            <h2 className="aside__title">{article.sectionName}</h2>
          </div>
        </aside>
        <article className="article">
          <div className="article__content">
            <div className="article__top-image">
              <p>{article.articleDate}</p>
              <i></i>
              <p>Add to Read Letter</p>
            </div>
            <img
              src={article.imageSource}
              alt="thumbnail of the article. Api not descriptive enough, sorry"
              className="main__big-image"
            />
            <h3 className="main__title">{article.articleTitle}</h3>
            <p className="main__subtitle">{article.articleSubtitle}</p>
            {article.bodyText}
          </div>
        </article>
      </main>
    </>
  );
};

export default DetailPage;
