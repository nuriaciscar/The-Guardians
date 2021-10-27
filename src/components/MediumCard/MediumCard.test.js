import MediumCard from "./MediumCard";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a component MainCard", () => {
  describe("When it receives a card", () => {
    test("Then it should render its image, text and an icon", () => {
      let mediumCard = {
        image: "hola.png",
        text: "Hola",
        icon: "a",
      };
      render(
        <Router>
          <MediumCard mediumCard={mediumCard} />
        </Router>
      );

      const image = screen.getByRole("img", "");
      const text = screen.getByText(mediumCard.text);
      const icon = screen.getByText(mediumCard.icon);

      expect(image).toBeInTheDocument();
      expect(text).toBeInTheDocument();
      expect(icon).toBeInTheDocument();
    });
  });
});
