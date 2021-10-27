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