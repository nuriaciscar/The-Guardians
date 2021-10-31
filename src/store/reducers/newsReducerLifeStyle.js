import actionTypes from "../actions/actionTypes";

const newsReducerLifeStyle = (newsLifeStyle, action) => {
  let newNewsLifeStyle;

  switch (action.type) {
    case actionTypes.loadNewsListLifeStyle:
      newNewsLifeStyle = action.newsListLifeStyle.response.results;
      console.log(action.newsListLifeStyle);
      break;
    default:
      newNewsLifeStyle = newsLifeStyle;
  }

  return newNewsLifeStyle;
};

export default newsReducerLifeStyle;