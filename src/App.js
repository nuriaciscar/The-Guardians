import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MyNewsPage from "./pages/MyNewsPage/MyNewsPage";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import DetailPage from "./pages/DetailPage/DetailPage";
import DetailEditPage from "./pages/DetailEditPage/DetailEditPage";

function App() {
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
            <Route path="/detail" exact>
              <DetailPage />
            </Route>
            <Route path="/detailEditPost" exact>
              <DetailEditPage detailType={"createNews"} />
            </Route>
            <Route path="/detailEditPut" exact>
              <DetailEditPage detailType={"myListNews"} />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
            {/* <Route path="*" exact>
              <Redirect to="/NotFoundPage" />
            </Route> */}
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
