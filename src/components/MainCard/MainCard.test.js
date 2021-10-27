import MainCard from "./MainCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a component MainCard", () => {
  describe("When it receives a card", () => {
    test("Then it should render its image, text and an icon", () => {
      let mainCard = {
        date: "today",
        image: "hola.png",
        text: "Hey",
        icon: "a",
      };
      render(
        <Router>
          <MainCard mainCard={mainCard} />
        </Router>
      );

      const date = screen.getByText(mainCard.date);
      const image = screen.getByRole("img", "");
      const text = screen.getByText(mainCard.text);
      const icon = screen.getByText(mainCard.icon);

      expect(date).toBeInTheDocument();
      expect(image).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });
});
