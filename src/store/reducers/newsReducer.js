import actionTypes from "../actions/actionTypes";

const newsReducer = (news, action) => {
  let newNews;

  switch (action.type) {
    case actionTypes.loadNewsArticle:
      newNews = action.article.response;
      break;
    case actionTypes.loadNewsList:
      newNews = action.newsList;
      break;

    default:
      newNews = news;
  }

  return newNews;
};

export default newsReducer;
