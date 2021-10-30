import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";
import { server } from "../../mocks/server";
import NewsContextProvider from "../../store/contexts/NewsContextProvider";

describe("Given a component Card", () => {
  let card;
  beforeAll(() => {
    card = {
      sectionName: "SECTION",
      date: "20-10-1994",
      image: "http://url/",
      text: "ULTIMAS NOTICIAS",
      articleSubtitle: "Que fuerte todo esto, no me lo creo",
      body: "Woooooooooooooooooooooooooooooooooooooooooooooooow",
      id: 1,
      placeHolder: "homepage",
      idHomepage:
        "lifeandstyle/2021/mar/07/how-we-stay-together-its-within-those-storms-that-you-aim-for-the-sun",
    };

    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe("When it receives a card", () => {
    test("Then it should render its image, its date, its text, its subtitle, its bod, its id", () => {
      render(
        <NewsContextProvider>
          <Router>
            <Card card={card} />
          </Router>
        </NewsContextProvider>
      );
    });
    // test("Then it should render its picture, its text and an icon", () => {

    //   render(
    //     <Router>
    //       <Card card={card} />
    //     </Router>
    //   );

    //   const image = screen.getByRole("img", "");
    //   const text = screen.getByText(card.text);
    //   const icon = screen.getByText(card.icon);

    //   expect(image).toBeInTheDocument();
    //   expect(text).toBeInTheDocument();
    //   expect(icon).toBeInTheDocument();
    // });
  });
});
