import actionTypes from "../actions/actionTypes";

const newsReducerSport = (newsSport, action) => {
  let newNewsSport;

  switch (action.type) {
    case actionTypes.loadNewsListSport:
      newNewsSport = action.newsListSport.response.results;
      break;
    default:
      newNewsSport = newsSport;
  }

  return newNewsSport;
};

export default newsReducerSport;