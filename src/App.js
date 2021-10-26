import { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MyNews from "./pages/MyNews/MyNews";
import useNews from "./hooks/useNews";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

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
              <MyNews />
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
  )



}

export default App;
