import { render, screen } from "@testing-library/react";
import DetailPage from "./DetailPage";
import getNewsDetails from "../../factories/detailFactory";
import NewsContextProvider from "../../store/contexts/NewsContextProvider";
import { BrowserRouter as Router } from "react-router-dom";

describe("Given a DetailPage component,", () => {
  describe("When is invoked", () => {
    test("Then it renders the DetailPage", () => {
      render(
        <NewsContextProvider>
          <Router>
            <DetailPage />
          </Router>
        </NewsContextProvider>
      );
    });

    // test("Then it renders the detail page with the content it has received", () => {
    //   render(
    //     <DetailPage
    //       sectionName={details.sectionName}
    //       articleDate={details.articleDate}
    //       imageSource={details.imageSource}
    //       articleTitle={details.articleTitle}
    //       articleSubtitle={details.articleSubtitle}
    //       bodyText={details.bodyText}
    //     />
    //   );

    //   const sectionRendered = screen.getByText(details.sectionName);
    //   const dateRendered = screen.getByText(details.articleDate);

    //   const titleRendered = screen.getByText(details.articleTitle);
    //   const subtitleRendered = screen.getByText(details.articleSubtitle);
    //   const textRendered = screen.getByText(details.bodyText);

    //   const imageRendered = screen.getByAltText(
    //     "thumbnail of the article. Api not descriptive enough, sorry"
    //   );

    //   expect(sectionRendered).toBeInTheDocument();
    //   expect(dateRendered).toBeInTheDocument();
    //   expect(imageRendered.src).toBe(details.imageSource);
    //   expect(titleRendered).toBeInTheDocument();
    //   expect(subtitleRendered).toBeInTheDocument();
    //   expect(textRendered).toBeInTheDocument();
    // });
  });
});
