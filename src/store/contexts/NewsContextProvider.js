import NewsContext from "./NewsContext";
import { useReducer } from "react";

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
