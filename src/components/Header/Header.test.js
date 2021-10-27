import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a Header component,", () => {
  describe("It recives nothing, so...", () => {
    test("Then it renders a header", () => {
      render(
        <Router>
          <Header />
        </Router>
      );
    });
  });
});
