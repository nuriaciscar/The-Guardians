import actionTypes from "../actions/actionTypes";

const newsReducer = (news, action) => {
  let newNews;

  switch (action.type) {
    case actionTypes.loadNewsArticle:
      console.log(action.article.response);
      //newNews = [...action]; //??
      break;
    case actionTypes.loadNewsList:
      newNews = [...action]; //??
      break;

    default:
    // default: throw error o que envie el estado tal cual
  }

  return newNews;
};

export default newsReducer;
