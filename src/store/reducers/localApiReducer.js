import actionTypes from "../actions/actionTypes";

const localApiReducer = (localNews, action) => {
  let newLocalNews;

  switch (action.type) {
    case actionTypes.getLocalApi:
      newLocalNews = action.article.response;
      break;

    case actionTypes.putLocalApi:
      newLocalNews = action.newsList;
      break;

    case actionTypes.deleteLocalApi:
      newLocalNews = action.newsList;
      break;

    case actionTypes.postLocalApi:
      newLocalNews = action.newsList;
      break;

    default:
      newLocalNews = localNews;
  }

  return newLocalNews;
};

export default localApiReducer;
