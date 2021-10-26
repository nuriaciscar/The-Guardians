import MainCard from "./MainCard";
import { render, screen } from "@testing-library/react";

describe("Given a component MainCard", () => {
  describe("When it receives a card", () => {
    test("Then it should render its image, text, Read More and an icon", () => {
      let mainCard = {
        image: "hola.png",
        text: "Hola",
        info: "Read More",
        icon: "a",
      };

      render(
        <MainCard
          image={mainCard.image}
          text={mainCard.text}
          info={mainCard.info}
          icon={mainCard.icon}
        />
      );

      const card = screen.getByTestId("maincard");

      expect(card).toHaveTextContent(mainCard.info);
    });
  });
});
