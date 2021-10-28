import actionTypes from "../actions/actionTypes";

const localArticleReducer = (article, action) => {
  let newArticle;

  switch (action.type) {
    case actionTypes.getApiArticleById:
      const articleData = action.id[0];

      newArticle = {
        sectionName: articleData.sectionName,
        imageSource: articleData.imageSource,
        articleDate: articleData.articleDate,
        articleTitle: articleData.articleTitle,
        articleSubtitle: articleData.articleSubtitle,
        bodyText: articleData.bodyText,
        id: articleData.id,
      };

      break;

    default:
      newArticle = article;
  }

  return newArticle;
};

export default localArticleReducer;
