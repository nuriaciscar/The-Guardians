import { useEffect } from "react";
import "./App.scss";
import useNews from "./hooks/useNews";

function App() {
  const { news, loadNewsArticle } = useNews();
  useEffect(() => {
    loadNewsArticle();
  }, [loadNewsArticle]);

  return <pre>{JSON.stringify(news, null, 2)}</pre>;
}

export default App;
