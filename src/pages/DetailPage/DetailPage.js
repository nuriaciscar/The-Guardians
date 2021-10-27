const DetailPage = ({
  sectionName,
  articleDate,
  imageSource,
  articleTitle,
  articleSubtitle,
  bodyText,
}) => {
  return (
    <main className="main-article">
      <aside className="main-article__aside-left">
        <div className="main-article__aside-name">
          <h2 className="aside__title">{sectionName.toUpperCase()}</h2>
        </div>
      </aside>
      <article className="article">
        <div className="article__content">
          <div className="article__top-image">
            <p>{articleDate}</p>
            <i></i>
            <p>Add to Read Letter</p>
          </div>

          <img
            src={imageSource}
            alt="thumbnail of the article. Api not descriptive enough, sorry"
            className="main__big-image"
          />
          <h3 className="main__title">{articleTitle}</h3>
          <p className="main__subtitle">{articleSubtitle}</p>
          <p>{bodyText}</p>
        </div>
      </article>
    </main>
  );
};

export default DetailPage;
