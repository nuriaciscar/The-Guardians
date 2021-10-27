import actionTypes from "../actions/actionTypes";

const newsReducer = (news, action) => {
  let newNews;

  switch (action.type) {
    case actionTypes.loadNewsArticle:
      newNews = action.article.response;
      //console.log(newNews);
      break;
    case actionTypes.loadNewsList:
      newNews = action.newsList;
      break;

    default:
      newNews = news;
    // default: throw error o que envie el estado tal cual
  }

  return newNews;
};

export default newsReducer;
