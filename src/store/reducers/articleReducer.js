import actionTypes from "../actions/actionTypes";

const articleReducer = (article, action) => {
  let newArticle;

  switch (action.type) {
    case actionTypes.loadArticleById:
      const articleData = action.id.response.content;
      const date = articleData.fields.firstPublicationDate;
      newArticle = {
        sectionName: articleData.sectionId,
        imageSource: articleData.fields.thumbnail,
        articleDate: date.slice(0, 10),
        articleTitle: articleData.webTitle,
        articleSubtitle: articleData.fields.trailText,
        bodyText: articleData.fields.bodyText,
        id: articleData.id,
      };
      break;

    default:
      newArticle = article;
  }

  return newArticle;
};

export default articleReducer;
