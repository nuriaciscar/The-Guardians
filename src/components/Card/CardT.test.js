import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter as Router } from "react-router-dom";
import { server } from "../../mocks/server";
import NewsContextProvider from "../../store/contexts/NewsContextProvider";
import React from "react";
import ReactTestRender from "react-test-renderer";
import getCard from "../../factories/CardFactory";
import { NavLink } from "react-router-dom";

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

    // test("Then it should render a button with a ", () => {
    //   render(
    //     <NewsContextProvider>
    //       <Router>
    //         <Card card={card}>
    //           <NavLink to="homepage"></NavLink>
    //         </Card>
    //       </Router>
    //     </NewsContextProvider>
    //   );
    //   const navlink = screen.getAllByRole()
    //   expect(navlink).toBeInTheDocument();
    // });
    describe("When it receives an object", () => {
      test("Then it should render a card with his details inside", () => {
        const cardLittle = getCard();
        const cardComponent = ReactTestRender.create(
          <NewsContextProvider>
            <Router>
              <Card card={cardLittle} />
            </Router>
          </NewsContextProvider>
        );

        expect(cardComponent.toJSON()).toMatchSnapshot();
      });
    });
  });
});
