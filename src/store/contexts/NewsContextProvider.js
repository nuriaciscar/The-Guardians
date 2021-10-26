import NewsContext from "./NewsContext";
import { useReducer } from "react";
import newsReducer from "../reducers/newsReducer";

// falta newsReducer

function NewsContextProvider({ children }) {
  const [news, dispatch] = useReducer(newsReducer, []);

  return (
    <NewsContext.Provider value={{ news, dispatch }}>
      {children}
    </NewsContext.Provider>
  );
}

export default NewsContextProvider;
