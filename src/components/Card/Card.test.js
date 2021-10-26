import Card from "./Card";
const { render, screen } = require("@testing-library/react");

describe("Given a component Card", () => {
  describe("When it receives a card", () => {
    test("Then it should render its picture, a text, Read More and an icon", () => {
      let cardLittle = {
        image: "hola.png",
        text: "Hola",
        info: "Read More",
        icon: "a",
      };

      render(
        <Card
          image={cardLittle.image}
          text={cardLittle.text}
          info={cardLittle.info}
          icon={cardLittle.icon}
        />
      );

      const card = screen.getByTestId("square");

      expect(card).toHaveTextContent(cardLittle.text);
    });
  });
});
