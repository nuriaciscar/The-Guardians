import CardText from "./CardText";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a component CardText", () => {
  describe("When it receives a cardText", () => {
    test("Then it should render its text and an icon", () => {
      let cardText = {
        text: "Hola",
        icon: "a",
      };

      render(
        <Router>
          <CardText cardText={cardText} />
        </Router>
      );

      const text = screen.getByText(cardText.text);
      const icon = screen.getByText(cardText.icon);

      expect(text).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });
});
