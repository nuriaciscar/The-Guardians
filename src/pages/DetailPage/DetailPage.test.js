import { render, screen, waitFor } from "@testing-library/react";
import DetailPage from "./DetailPage";
import NewsContextProvider from "../../store/contexts/NewsContextProvider";
import { MemoryRouter } from "react-router-dom";
import { serverArticleApiGuardian } from "../../mocks/servers";

describe("Given a DetailPage component,", () => {
  beforeAll(() => {
    serverArticleApiGuardian.listen();
  });

  afterAll(() => {
    serverArticleApiGuardian.close();
  });

  describe("When it's rendered", () => {
    test("Then it renders the DetailPage", () => {
      render(
        <NewsContextProvider>
          <MemoryRouter
            initialEntries={[
              "/details/?id=football/live/2021/oct/23/crystal-palace-v-newcastle-leeds-v-wolves-and-more-football-clockwatch-live",
            ]}
          >
            <DetailPage />
          </MemoryRouter>
        </NewsContextProvider>
      );
    });

    test("Then it renders the detail page with the content it has received", async () => {
      render(
        <NewsContextProvider>
          <MemoryRouter
            initialEntries={[
              "/details/?id=football/live/2021/oct/23/crystal-palace-v-newcastle-leeds-v-wolves-and-more-football-clockwatch-live",
            ]}
          >
            <DetailPage />
          </MemoryRouter>
        </NewsContextProvider>
      );

      const sectionRendered = await screen.findByRole("heading", {
        name: "football",
      });
      const dateRendered = await screen.findByText("2021-10-23");

      const titleRendered = await screen.findByText(
        "Everton 2-5 Watford, Crystal Palace 1-1 Newcastle and more: football clockwatch – as it happened"
      );
      const subtitleRendered = await screen.findByText(
        "Watford secured a huge win at Everton, mainly thanks to a Josh King hat-trick"
      );
      const textRendered = await screen.findByText(
        "King becoming a goalscorer once more is great news for the squad as you need plenty of goals to stay up. Maxwel Cornet is good. The late Rodrigo penalty ensures the points are shared. All square at Selhurst Park after Benteke’s second was ruled out."
      );

      const imageRendered = await screen.findByAltText(
        "thumbnail of the article. Api not descriptive enough, sorry"
      );

      await waitFor(() => {
        expect(sectionRendered).toBeInTheDocument();
        expect(dateRendered).toBeInTheDocument();
        expect(imageRendered.src).toBe(
          "https://media.guim.co.uk/abed4aada136d1ec38ce0e2b109c77683153d6b6/0_119_2583_1551/500.jpg"
        );
        expect(titleRendered).toBeInTheDocument();
        expect(subtitleRendered).toBeInTheDocument();
        expect(textRendered).toBeInTheDocument();
      });
    });

    test("Then it calls the Api one time", async () => {
      render(
        <NewsContextProvider>
          <MemoryRouter
            initialEntries={[
              "/details/?id=football/live/2021/oct/23/crystal-palace-v-newcastle-leeds-v-wolves-and-more-football-clockwatch-live",
            ]}
          >
            <DetailPage />
          </MemoryRouter>
        </NewsContextProvider>
      );

      await waitFor(() =>
        expect(serverArticleApiGuardian).toHaveBeenCalledTimes(1)
      );
    });
  });
});
