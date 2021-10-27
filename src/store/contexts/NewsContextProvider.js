import NewsContext from "./NewsContext";
import { useReducer } from "react";
import newsReducer from "../reducers/newsReducer";
import newsReducerSport from "../reducers/newsReducerSport";
import newsReducerScience from "../reducers/newsReducerScience";
import newsReducerLifeStyle from "../reducers/newsReducerLifeStyle";

// falta newsReducer

function NewsContextProvider({ children }) {
  const [news, dispatch] = useReducer(newsReducer, []);
  const [newsSport, dispatchSport] = useReducer(newsReducerSport, []);
  const [newsScience, dispatchScience] = useReducer(newsReducerScience, []);
  const [newsLifeStyle, dispatchLifeStyle] = useReducer(newsReducerLifeStyle, []);

  return (
    <NewsContext.Provider value={{ news, dispatch, newsSport, dispatchSport, newsScience, dispatchScience, newsLifeStyle, dispatchLifeStyle }}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
