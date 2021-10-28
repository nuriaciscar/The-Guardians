import NewsContext from "../store/contexts/NewsContext";
import { useContext, useCallback } from "react";
import { loadArticleByIdAction } from "../store/actions/actionCreator";

const useArticle = () => {
  let { article, dispatchArticle } = useContext(NewsContext);

  const loadArticleById = useCallback(
    async (id) => {
      const url = `${process.env.REACT_APP_API_ARTICLE_URL}${id}${process.env.REACT_APP_API_KEY_ARTICLE}`;
      const response = await fetch(url);
      let article = await response.json();
<<<<<<< HEAD
=======

>>>>>>> a47fb562eaa7450de59379e844133a56f30c5a1e
      dispatchArticle(loadArticleByIdAction(article));
    },
    [dispatchArticle]
  );

  return {
    article,
    loadArticleById,
  };
};

export default useArticle;
