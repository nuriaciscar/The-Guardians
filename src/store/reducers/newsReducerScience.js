import actionTypes from "../actions/actionTypes";

const newsReducerScience = (newsScience, action) => {
  let newNewsScience;

  switch (action.type) {
    case actionTypes.loadNewsListScience:
      newNewsScience = action.newsListScience.response.results
      break;
    default:
      newNewsScience = newsScience;
  }

  return newNewsScience;
};

export default newsReducerScience;