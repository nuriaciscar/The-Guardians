import { useEffect } from "react";
import "./App.scss";
import useNews from "./hooks/useNews";
import HomePage from "./pages/HomePage/HomePage";
import MyNews from "./pages/MyNews/MyNews";

function App() {
  const { news, loadNewsArticle } = useNews();
  useEffect(() => {
    loadNewsArticle();
  }, [loadNewsArticle]);

  //return <pre>{JSON.stringify(news, null, 2)}</pre>;
  return (
    <HomePage />
  )
}

export default App;
