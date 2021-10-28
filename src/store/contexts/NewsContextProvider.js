import NewsContext from "./NewsContext";
import { useReducer } from "react";
import newsReducer from "../reducers/newsReducer";
import newsReducerSport from "../reducers/newsReducerSport";
import newsReducerScience from "../reducers/newsReducerScience";
import newsReducerLifeStyle from "../reducers/newsReducerLifeStyle";
import localApiReducer from "../reducers/localApiReducer";
import articleReducer from "../reducers/articleReducer";
import localArticleReducer from "../reducers/localArticleReducer";

function NewsContextProvider({ children }) {
  const [news, dispatch] = useReducer(newsReducer, []);
  const [newsSport, dispatchSport] = useReducer(newsReducerSport, []);
  const [newsScience, dispatchScience] = useReducer(newsReducerScience, []);
  const [newsLifeStyle, dispatchLifeStyle] = useReducer(
    newsReducerLifeStyle,
    []
  );
  const [localApi, dispatchLocalApi] = useReducer(localApiReducer, []);
  const [article, dispatchArticle] = useReducer(articleReducer, []);
  const [apiArticle, dispatchApiArticle] = useReducer(localArticleReducer, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        dispatch,
        newsSport,
        dispatchSport,
        newsScience,
        dispatchScience,
        newsLifeStyle,
        dispatchLifeStyle,
        localApi,
        dispatchLocalApi,
        article,
        dispatchArticle,
        apiArticle,
        dispatchApiArticle,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
