import { useEffect } from "react";
import "./App.scss";
import useNews from "./hooks/useNews";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const { news, loadNewsArticle } = useNews();
  useEffect(() => {
    loadNewsArticle();
  }, [loadNewsArticle]);

  return (
    <>
      <HomePage />
      <pre>{JSON.stringify(news, null, 2)}</pre>;
    </>
  )



}

export default App;
