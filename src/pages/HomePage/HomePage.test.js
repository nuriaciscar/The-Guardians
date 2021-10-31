import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import NewsContextProvider from "../../store/contexts/NewsContextProvider";
import HomePage from "./HomePage";

describe("Given a HomePage component,", () => {
  describe("When is invoked", () => {
    test("Then it renders a HomePage", () => {
      render(
        <NewsContextProvider>
          <Router>
            <HomePage />
          </Router>
        </NewsContextProvider>
      );
    });
  });
});
