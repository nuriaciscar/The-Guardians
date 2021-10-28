import actionTypes from "../actions/actionTypes";

const localArticleReducer = (article, action) => {
  let newArticle;

  switch (action.type) {
    case actionTypes.getApiArticleById:
      const articleData = action.id[0];
      const bodyText = articleData.bodyText
        .split(".")
        .reduce((stringSoFar, stringToPutInPlace, index) => {
          let string = stringSoFar + stringToPutInPlace + ".";
          if (index % 5 === 4) string += "&&&";
          return string;
        }, "")
        .split("&&&")
        .map((paragraph) => <p>{paragraph}</p>);

      newArticle = {
        sectionName: articleData.sectionName,
        imageSource: articleData.imageSource,
        articleDate: articleData.articleDate,
        articleTitle: articleData.articleTitle,
        articleSubtitle: articleData.articleSubtitle,
        bodyText: bodyText,
        id: articleData.id,
      };

      break;

    default:
      newArticle = article;
  }

  return newArticle;
};

export default localArticleReducer;
