
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import MyNews from "./pages/MyNews/MyNews";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
              <MyNews />
            </Route>
            <Route path="/" exact>
              <Redirect to="/home" />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
