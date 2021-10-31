import { render } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import ReactTestRender from "react-test-renderer";

describe("Given a Header component,", () => {
  describe("When it's rendered", () => {
    test("Then it renders a header", () => {
      render(
        <Router>
          <Header />
        </Router>
      );
    });
  });
  test("Then it should render a header with a logo and his navigation", () => {
    const headerComponent = ReactTestRender.create(
      <Router>
        <Header />
      </Router>
    );
    expect(headerComponent.toJSON()).toMatchSnapshot();
  });
});
