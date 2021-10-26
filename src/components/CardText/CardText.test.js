import CardText from "./CardText";
const { render, screen } = require("@testing-library/react");

describe("Given a component CardText", () => {
  describe("When it receives a cardText", () => {
    test("Then it should render its text, Read More and an icon", () => {
      let cardText = {
        text: "Hola",
        info: "Read More",
        icon: "a",
      };

      render(
        <CardText
          text={cardText.text}
          info={cardText.info}
          icon={cardText.icon}
        />
      );

      const card = screen.getByTestId("cardtext");

      expect(card).toHaveTextContent(cardText.text);
    });
  });
});
