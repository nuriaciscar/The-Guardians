import actionTypes from "./actionTypes";

export const loadNewsArticleAction = (article) => ({
  type: actionTypes.loadNewsArticle,
  article,
});

export const loadNewsListAction = (newsList) => ({
  type: actionTypes.loadNewsList,
  newsList,
});
