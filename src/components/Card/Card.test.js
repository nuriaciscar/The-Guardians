import Card from "./Card";
const { render, screen } = require("@testing-library/react");

describe("Given a component Card", () => {
  describe("When it receives a card", () => {
    test("Then it should render its picture, its text and an icon", () => {
      let cardLittle = {
        image: "hola.png",
        text: "Hola",
        icon: "a",
      };

      render(
        <Card
          image={cardLittle.image}
          text={cardLittle.text}
          icon={cardLittle.icon}
        />
      );

      const card = screen.getByTestId("square");

      expect(card).toBeInTheDocument();
    });
  });
});
