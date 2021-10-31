import NewsContext from "../store/contexts/NewsContext";
import { useContext, useCallback } from "react";
import {
  loadNewsListAction,
  loadNewsListScienceAction,
  loadNewsListSportAction,
  loadNewsListLifeStyleAction,
} from "../store/actions/actionCreator";

const useNews = () => {
  let {
    news,
    dispatch,
    newsSport,
    dispatchSport,
    newsScience,
    dispatchScience,
    newsLifeStyle,
    dispatchLifeStyle,
  } = useContext(NewsContext);

  const loadNewsList = useCallback(
    async (section, pageNum) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${section}${process.env.REACT_APP_API_DATE}${pageNum}${process.env.REACT_APP_API_KEY}`
      );

      /* "http://content.guardianapis.com/search?section=culture&from-date=2015-03-06&to-date=2021-03-06&order-by=relevance&show-fields=all&page-size=10&page=6&api-key=54d47472-427a-49dc-b6af-d65d241bc415")*/
      let news = await response.json();
      dispatch(loadNewsListAction(news));
    },
    [dispatch]
  );

  const loadNewsListSport = useCallback(
    async (section, pageNum) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${section}${process.env.REACT_APP_API_DATE}${pageNum}${process.env.REACT_APP_API_KEY}`
      );

      let newsSports = await response.json();
      dispatchSport(loadNewsListSportAction(newsSports));
    },
    [dispatchSport]
  );

  const loadNewsListScience = useCallback(
    async (section, pageNum) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${section}${process.env.REACT_APP_API_DATE}${pageNum}${process.env.REACT_APP_API_KEY}`
      );

      let newsScience = await response.json();
      dispatchScience(loadNewsListScienceAction(newsScience));
    },
    [dispatchScience]
  );

  const loadNewsListLifeStyle = useCallback(
    async (section, pageNum) => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}${section}${process.env.REACT_APP_API_DATE}${pageNum}${process.env.REACT_APP_API_KEY}`
      );

      let newsLifeStyle = await response.json();
      dispatchLifeStyle(loadNewsListLifeStyleAction(newsLifeStyle));
    },
    [dispatchLifeStyle]
  );

  return {
    news,
    newsSport,
    newsScience,
    newsLifeStyle,
    loadNewsListSport,
    loadNewsListScience,
    loadNewsListLifeStyle,
    loadNewsList,
  };
};

export default useNews;
