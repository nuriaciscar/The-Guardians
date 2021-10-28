import { useEffect } from "react";
import Card from "../../components/Card/Card";
import useLocalApi from "../../hooks/useLocalApi";


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
      {localApi.length !== 0 &&
        <main className="main-title">
          <aside className="main-title__aside-left">
            <div className="main-title__aside-name">
              <h2 className="main-title__aside-title">MY NEWS</h2>
            </div>
          </aside>

          <section className="section-title">
            {localApi.map((newNewLocal) => (
              <Card
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
          </section>
        </main>}
    </>
  );
};
export default MyNewsPage;
