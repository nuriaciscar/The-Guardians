import actionTypes from "../actions/actionTypes";

const articleReducer = (article, action) => {
  let newArticle;

  switch (action.type) {
    case actionTypes.loadArticleById:
      const articleData = action.id.response.content;
      const date = articleData.fields.firstPublicationDate;
      const bodyText = articleData.fields.bodyText
        .split(".")
        .reduce((stringSoFar, stringToPutInPlace, index) => {
          let string = stringSoFar + stringToPutInPlace + ".";
          if (index % 4 === 3) string += "&&&";
          return string;
        }, "")
        .split("&&&")
        .map((paragraph) => (
          <p key={paragraph.slice(0, 20)} className="bodyText">
            {paragraph}
          </p>
        ));

      newArticle = {
        sectionName: articleData.sectionId,
        imageSource: articleData.fields.thumbnail,
        articleDate: date.slice(0, 10),
        articleTitle: articleData.webTitle,
        articleSubtitle: articleData.fields.trailText,
        bodyText: bodyText,
        id: articleData.id,
      };
      break;

    default:
      newArticle = article;
  }

  return newArticle;
};

export default articleReducer;
