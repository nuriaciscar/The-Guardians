import { act } from "react-dom/test-utils";
import actionTypes from "./actionTypes";

export const loadNewsArticleAction = (article) => ({
  type: actionTypes.loadNewsArticle,
  article,
});

export const loadNewsListAction = (newsList) => ({
  type: actionTypes.loadNewsList,
  newsList,
});

export const loadNewsListSportAction = (newsListSport) => ({
  type: actionTypes.loadNewsListSport,
  newsListSport,
});

export const loadNewsListScienceAction = (newsListScience) => ({
  type: actionTypes.loadNewsListScience,
  newsListScience,
});

export const loadNewsListLifeStyleAction = (newsListLifeStyle) => ({
  type: actionTypes.loadNewsListLifeStyle,
  newsListLifeStyle,
});

export const getLocalApiAction = (getData) => ({
  type: actionTypes.getLocalApi,
  getData,
});

export const postLocalApiAction = (postData) => ({
  type: actionTypes.postLocalApi,
  postData,
});

export const deleteLocalApiAction = (id) => ({
  type: actionTypes.deleteLocalApi,
  id,
});

export const putLocalApiAction = (putData) => ({
  type: actionTypes.putLocalApi,
  putData,
});
