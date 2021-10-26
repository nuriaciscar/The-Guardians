import NewsContext from "../store/contexts/NewsContext";
import { useContext, useCallback } from "react";
import {
  loadNewsArticleAction,
  loadNewsListAction,
} from "../store/actions/actionCreator";

const useNews = () => {
  let { news, dispatch } = useContext(NewsContext);

  const loadNewsArticle = useCallback(async () => {
    const response = await fetch(
      "https://content.guardianapis.com/football/live/2021/oct/23/crystal-palace-v-newcastle-leeds-v-wolves-and-more-football-clockwatch-live?api-key=54d47472-427a-49dc-b6af-d65d241bc415&show-fields=all"
    );
    news = await response.json();
    dispatch(loadNewsArticleAction(news));
  }, [dispatch]);

  const loadNewsList = useCallback(async () => {
    const response = await fetch(
      "http://content.guardianapis.com/search?section=culture&from-date=1990-03-24&to-date=2021-03-04&order-by=newest&show-fields=all&page-size=200&api-key=54d47472-427a-49dc-b6af-d65d241bc415&page=2&show-elements=all"
    );
    news = await response.json();
    dispatch(loadNewsListAction(news));
  }, [dispatch]);

  return {
    news,
    loadNewsArticle,
    loadNewsList,
  };
};

export default useNews;
