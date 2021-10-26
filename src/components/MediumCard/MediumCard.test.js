import MediumCard from "./MediumCard";
const { render, screen } = require("@testing-library/react");

describe("Given a component MainCard", () => {
  describe("When it receives a card", () => {
    test("Then it should render its image, text, Read More and an icon", () => {
      let mediumCard = {
        image: "hola.png",
        text: "Hola",
        info: "Read More",
        icon: "a",
      };

      render(
        <MediumCard
          image={mediumCard.image}
          text={mediumCard.text}
          info={mediumCard.info}
          icon={mediumCard.icon}
        />
      );

      const card = screen.getByTestId("mediumcard");

      expect(card).toHaveTextContent(mediumCard.info);
    });
  });
});
