import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a component Card", () => {
  describe("When it receives a card", () => {
    test("Then it should render its picture, its text and an icon", () => {
      let card = {
        image: "hola.png",
        text: "Hola",
        icon: "a",
      };

      render(
        <Router>
          <Card card={card} />
        </Router>
      );

      const image = screen.getByRole("img", "");
      const text = screen.getByText(card.text);
      const icon = screen.getByText(card.icon);

      expect(image).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });
});
