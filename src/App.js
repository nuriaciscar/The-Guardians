import { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MyNewsPage from "./pages/MyNewsPage/MyNewsPage";
import useNews from "./hooks/useNews";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import DetailEditPage from "./pages/DetailEditPage/DetailEditPage";

function App() {
  const { news, loadNewsArticle } = useNews();
  useEffect(() => {
    loadNewsArticle();
  }, [loadNewsArticle]);

  return (
    <>
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/home" exact>
              <HomePage />
            </Route>
            <Route path="/mynews" exact>
              <MyNewsPage />
            </Route>
            <Route path="/details" exact>
              <DetailPage />
            </Route>
            <Route path="/detailsmodify" exact>
              <DetailEditPage />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
          </Switch>
          <Footer />
        </Router>
        <pre>{JSON.stringify(news, null, 2)}</pre>
      </div>
    </>
  );
}

export default App;
