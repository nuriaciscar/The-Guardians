import { useEffect } from "react";
import Card from "../../components/Card/Card";
import useLocalApi from "../../hooks/useLocalApi";
import "./MyNewsPage.scss";
import { NavLink } from "react-router-dom";

const MyNewsPage = () => {
  const { getLocalApi, localApi } = useLocalApi();
  useEffect(() => {
    getLocalApi();
  }, [getLocalApi]);
  if (localApi.length !== 0) {
    //console.log(localApi);
  }
  return (
    <>
      {localApi.length !== 0 && (
        <main className="main-title__mynews">
          <aside className="main-title__aside-left__mynews">
            <div className="main-title__aside-name__mynews">
              <h2 className="main-title__aside-title__mynews">MY NEWS</h2>
            </div>
          </aside>

          <section className="section-title__mynews">
            {localApi.map((newNewLocal) => (
              <Card
                className="card__mynews"
                card={{
                  text: newNewLocal.articleTitle,
                  image: newNewLocal.imageSource,
                  date: newNewLocal.articleDate,
                  sectionName: newNewLocal.sectionName,
                  articleSubtitle: newNewLocal.articleSubtitle,
                  body: newNewLocal.bodyText,
                  placeHolder: "mynews",
                  id: newNewLocal.id,
                }}
                key={newNewLocal.id}
              />
            ))}
            <NavLink to="/detailEditPost" exact>
              <div className="createNew">
                <button className="createNew__button">+</button>
              </div>
            </NavLink>
          </section>
        </main>
      )}
    </>
  );
};
export default MyNewsPage;
