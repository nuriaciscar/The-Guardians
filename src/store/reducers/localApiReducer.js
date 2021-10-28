import actionTypes from "../actions/actionTypes";

const localApiReducer = (localNews, action) => {
  let newLocalNews;

  switch (action.type) {
    case actionTypes.getLocalApi:
      newLocalNews = action.getData;
      break;

    case actionTypes.putLocalApi:
      newLocalNews = action.newsList;
      break;

    case actionTypes.deleteLocalApi:
      newLocalNews = localNews.filter((news) => news.id !== action.id);

      break;

    case actionTypes.postLocalApi:
      newLocalNews = [action.postData];
      break;

    default:
      newLocalNews = localNews;
  }
  //console.log(newLocalNews)

  return newLocalNews;
};

export default localApiReducer;
