import { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import useNews from "./hooks/useNews";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  const { news, loadNewsArticle } = useNews();
  useEffect(() => {
    loadNewsArticle();
  }, [loadNewsArticle]);

  //return <pre>{JSON.stringify(news, null, 2)}</pre>;

  return (
    <>
      <Header />
      <HomePage />
    </>
  );
}

export default App;
